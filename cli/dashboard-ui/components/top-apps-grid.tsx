import React, { useEffect, useState, useRef, useCallback } from "react";

/* ------------------------------------------------------------------ */
/*  Types & Constants                                                  */
/* ------------------------------------------------------------------ */

/** Shape returned by the Apple RSS Top Charts feed */
interface RSSApp {
  id: string;
  name: string;
  artistName: string;
  artworkUrl100: string;
  url: string;
}

/** Shape returned by the iTunes Search API */
interface iTunesApp {
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl512?: string;
  artworkUrl100?: string;
  averageUserRating?: number;
  trackViewUrl?: string;
}

/** Unified shape used for rendering */
interface GridApp {
  id: string;
  name: string;
  developer: string;
  iconUrl: string;
  rating?: number;
  url?: string;
}

const COUNTRIES = [
  { code: "US", name: "United States" },
  { code: "GB", name: "United Kingdom" },
  { code: "IN", name: "India" },
  { code: "CA", name: "Canada" },
  { code: "AU", name: "Australia" },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

/** Normalise an RSS result into our unified GridApp shape */
function rssToGridApp(app: RSSApp): GridApp {
  return {
    id: app.id,
    name: app.name,
    developer: app.artistName,
    iconUrl: app.artworkUrl100,
    url: app.url,
  };
}

/** Normalise an iTunes Search result into our unified GridApp shape */
function itunesSearchToGridApp(app: iTunesApp): GridApp {
  return {
    id: String(app.trackId),
    name: app.trackName,
    developer: app.artistName,
    iconUrl: app.artworkUrl512 || app.artworkUrl100 || "",
    rating: app.averageUserRating,
    url: app.trackViewUrl,
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function TopAppsGrid() {
  const [apps, setApps] = useState<GridApp[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState("US");

  // Ref to track the latest search so we can discard stale responses
  const latestRequestRef = useRef(0);
  // Ref for the debounce timer
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ---------- fetch default top free apps (RSS feed) ---------- */
  const fetchTopApps = useCallback(async (currentCountry: string) => {
    const requestId = ++latestRequestRef.current;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/top-apps-rss?country=${currentCountry}`);
      if (!response.ok) throw new Error("Failed to fetch top apps");
      const json = await response.json();
      if (requestId !== latestRequestRef.current) return; // stale
      if (json.success && json.data?.feed?.results) {
        setApps(json.data.feed.results.map(rssToGridApp));
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err: any) {
      if (requestId === latestRequestRef.current) {
        setError(err.message || "An error occurred");
      }
    } finally {
      if (requestId === latestRequestRef.current) setLoading(false);
    }
  }, []);

  /* ---------- fetch iTunes search results ---------- */
  const fetchSearch = useCallback(async (term: string, currentCountry: string) => {
    const requestId = ++latestRequestRef.current;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `/api/top-apps-search?term=${encodeURIComponent(term)}&country=${currentCountry}`
      );
      if (!response.ok) throw new Error("Search failed");
      const json = await response.json();
      if (requestId !== latestRequestRef.current) return; // stale
      if (json.success && json.data?.results) {
        setApps(json.data.results.map(itunesSearchToGridApp));
      } else {
        throw new Error("Invalid search response");
      }
    } catch (err: any) {
      if (requestId === latestRequestRef.current) {
        setError(err.message || "Search error");
      }
    } finally {
      if (requestId === latestRequestRef.current) setLoading(false);
    }
  }, []);

  /* ---------- debounced search & initial load ---------- */
  useEffect(() => {
    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);

    const trimmed = searchTerm.trim();
    if (trimmed.length === 0) {
      // Empty search → back to top charts
      fetchTopApps(country);
      return;
    }
    if (trimmed.length < 2) return; // Don't search for single character

    debounceTimerRef.current = setTimeout(() => {
      fetchSearch(trimmed, country);
    }, 500); // 500ms debounce

    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, [searchTerm, country, fetchTopApps, fetchSearch]);

  const selectedCountryName = COUNTRIES.find((c) => c.code === country)?.name || country;

  /* ---------- render ---------- */
  return (
    <div className="top-apps-page">
      {/* Controls Container (Search + Dropdown) */}
      <div className="top-apps-controls">
        <div className="top-apps-search-bar">
          <svg
            className="top-apps-search-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="top-apps-search-input"
            type="text"
            className="top-apps-search-input"
            placeholder="Search apps… e.g. pdf, fitness, weather"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoComplete="off"
            spellCheck={false}
          />
          {searchTerm && (
            <button
              type="button"
              className="top-apps-search-clear"
              aria-label="Clear search"
              onClick={() => setSearchTerm("")}
            >
              ×
            </button>
          )}
        </div>
        
        <select 
          className="top-apps-country-select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          aria-label="Select country"
        >
          {COUNTRIES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Heading */}
      <h2 className="top-apps-heading">
        {searchTerm.trim()
          ? `Results for "${searchTerm.trim()}" in ${selectedCountryName}`
          : `Top Free Apps — ${selectedCountryName}`}
      </h2>

      {/* Grid container with vertical scroll */}
      <div className="top-apps-grid-container">
        {loading ? (
          <div className="top-apps-loading">
            <span className="top-apps-spinner" />
            Loading apps…
          </div>
        ) : error ? (
          <div className="top-apps-error">Error: {error}</div>
        ) : apps.length === 0 ? (
          <div className="top-apps-empty">No apps found.</div>
        ) : (
          <div className="top-apps-grid">
            {apps.map((app) => (
              <a key={app.id} className="top-apps-card" href={app.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <img
                  src={app.iconUrl}
                  alt={app.name}
                  className="top-apps-card-icon"
                  loading="lazy"
                />
                <div className="top-apps-card-name" title={app.name}>
                  {app.name}
                </div>
                <div className="top-apps-card-developer" title={app.developer}>
                  {app.developer}
                </div>
                {app.rating != null && (
                  <div className="top-apps-card-rating">
                    ★ {app.rating.toFixed(1)}
                  </div>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
