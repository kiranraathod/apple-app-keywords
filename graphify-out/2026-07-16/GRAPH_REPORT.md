# Graph Report - .  (2026-07-14)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 1620 nodes · 3742 edges · 103 communities (67 shown, 36 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 50 edges (avg confidence: 0.67)
- Token cost: 4,321 input · 1,161 output

## Graph Freshness
- Built from commit: `00dd8722`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Dashboard Auth State
- Apple HTTP Client
- Startup Refresh Manager
- App Handlers
- CLI Node Version Guard
- App Action Menu
- Bugsnag Classifier
- App Helpers
- ASO Enrichment Service
- Apple Auth Service
- App Keywords DB
- ASO Auth Engine
- Apple HTTP Trace
- NPM Scripts
- Site Config & Assets
- ASO Keywords DB
- ASO App Doc Service
- App Store Details
- Auth Flow Error Handling
- Dialog Components
- Keyword Cache Service
- Core Dependencies
- TypeScript Compiler Options
- Keyword Handlers & Filters
- Error Handling Helpers
- Version Check Service
- Dashboard Filters & Sort
- Keyword Position History
- Bugsnag Dashboard Config
- Strict TS Compiler Options
- Instrumentation & Package Info
- Bugsnag Shared Config
- Evaluate Keywords Tool
- Package Scripts & Deps
- Keyword Write Repository
- CLI Execution
- Dashboard Settings Config
- ASO Difficulty Calculator
- Refresh Utils & Handlers
- Apple Auth Error Handling
- Bugsnag Metadata & Reporter
- ASO CLI Commands
- ASO Apps DB
- Cookie Store Service
- ASO Environment Config
- Bugsnag Export Script
- Difficulty Lab Script
- PostHog Usage Tracking
- ASO Auth Service Core
- ESBuild Config
- Prettier Config
- Render App Icon Script
- Upload Sourcemaps Script
- Enrichment Service Tests
- Bugsnag Dev Dependencies
- Noise Deduplication
- Package Keywords
- Generate MCP Content Script
- App Auth Tests
- Check Node Version Script
- Use Selection Hook
- Package Files
- Jest Config
- Astro TS Config
- Firebase Analytics
- Axios Mock Adapter
- Jest Environment JSDOM
- ASO Auth HTTP Client
- Concurrently Dependency
- ESBuild Dependency
- Jest Dependency
- Playwright Dependency
- Prettier Dependency
- React Dependency
- React DOM Dependency
- Testing Library Jest DOM
- Testing Library React
- TS Jest Dependency
- Better SQLite3 Types
- Inquirer Types
- Jest Types
- React Types
- React DOM Types
- Yargs Types
- TypeScript Dependency
- Vite Dependency
- Vite React Plugin
- YAML Dependency
- ASO App Icon Asset
- Keywords Icon Asset
- Keywords Readme Icon Asset
- ASO Sidebar Icon Asset
- ASO Dashboard Screenshot Asset
- Favicon Asset
- MCP Workflow Screenshot Asset
- DIFFICULTY_DETAIL_LIMIT

## God Nodes (most connected - your core abstractions)
1. `getDb()` - 44 edges
2. `createServerRequestHandler()` - 33 edges
3. `App()` - 32 edges
4. `scripts` - 32 edges
5. `enrichKeyword()` - 28 edges
6. `KeywordPipelineService` - 27 edges
7. `AsoAuthEngine` - 26 edges
8. `reportAppleContractChange()` - 25 edges
9. `reportBugsnagError()` - 23 edges
10. `normalizeKeyword()` - 22 edges

## Surprising Connections (you probably didn't know these)
- `runAsoCommand()` --indirect_call--> `command()`  [INFERRED]
  cli/mcp/execute-aso-cli.ts → cli/cli.test.ts
- `persistKeywordsToApp()` --calls--> `saveKeywordsToResearchApp()`  [EXTRACTED]
  cli/commands/aso.ts → cli/services/keywords/aso-research-keyword-service.ts
- `requestJson()` --calls--> `createServerRequestHandler()`  [EXTRACTED]
  cli/dashboard-server/server.keywords.test.ts → cli/dashboard-server/server.ts
- `logWithSpinnerPause()` --references--> `ora`  [EXTRACTED]
  cli/services/auth/aso-auth-service.ts → package.json
- `main()` --calls--> `toMachineReadableErrorMessage()`  [EXTRACTED]
  cli/cli.ts → cli/services/runtime/stdout-contract.ts

## Import Cycles
- None detected.

## Communities (103 total, 36 thin omitted)

### Community 0 - "Dashboard Auth State"
Cohesion: 0.05
Nodes (77): createDashboardAuthStateManager(), CreateDashboardAuthStateParams, DashboardAuthState, DashboardAuthStatus, nowIsoString(), readDashboardSettings(), getRequestBody(), parseJsonBody() (+69 more)

### Community 1 - "Apple HTTP Client"
Cohesion: 0.06
Nodes (65): isTransientStartupFailure(), asoAppleGet(), AsoAppleGetConfig, asoAppleHttpClient, generateRequestId(), sanitizeHeaders(), SENSITIVE_HEADER_KEYS, shouldRetry() (+57 more)

### Community 2 - "Startup Refresh Manager"
Cohesion: 0.06
Nodes (49): chunkItems(), createStartupRefreshManager(), errorToMessage(), initialCounters(), initialState(), isExhaustedBatchFailure(), KeywordRefreshItem, selectKeywordRefreshCandidates() (+41 more)

### Community 3 - "App Handlers"
Cohesion: 0.05
Nodes (55): createAppsHandlers(), CreateAppsHandlersDeps, DeleteAppRequest, ensureDefaultResearchAppExists(), ManualAppAddRequest, nextResearchAppId(), OwnedAppSnapshot, AppKind (+47 more)

### Community 4 - "CLI Node Version Guard"
Cohesion: 0.07
Nodes (38): stdoutKeywordsRun, requestJson(), assertSupportedNodeVersion(), isAtLeast(), MIN_NODE_VERSION, parseNodeVersion(), CliValidationError, emitStdoutRuntimeFailure() (+30 more)

### Community 5 - "App Action Menu"
Cohesion: 0.04
Nodes (38): AddedAppPayload, AddKeywordsRequestContext, APP_ACTION_MENU_SIZE, AppActionMenuState, AppDoc, AppItem, AppKind, DashboardSettings (+30 more)

### Community 6 - "Bugsnag Classifier"
Cohesion: 0.14
Nodes (41): APPLE_AUTH_USER_FAULT_REASONS, classifyKnownFlow(), classifyTelemetryError(), EXPECTED_DASHBOARD_FLOW_ERROR_CODES, getErrorCode(), getStatusCode(), getTelemetryHint(), isAppleAuthResponseErrorLike() (+33 more)

### Community 7 - "App Helpers"
Cohesion: 0.09
Nodes (38): App(), areKeywordListsEqual(), clampFloatingPosition(), formatKeywordDeleteLabel(), apiRequest(), apiWrite(), AppDoc, buildAppStoreUrl() (+30 more)

### Community 8 - "ASO Enrichment Service"
Cohesion: 0.09
Nodes (37): AmpSearchLockup, AmpSearchResponse, appCompetitiveScore(), backfillMissingTopDifficultyDocs(), clearIncompleteTopDocLookupCooldown(), detectBestKeywordMatchType(), detectIsBrandKeyword(), detectKeywordMatchType() (+29 more)

### Community 9 - "Apple Auth Service"
Cohesion: 0.10
Nodes (38): APPLE_INVALID_CREDENTIAL_CODES, APPLE_TWO_FACTOR_DELIVERY_FAILURE_CODES, AppleAuthChallengeResponse, AppleAuthErrorPayload, AppleAuthFailureReason, appleAuthHttpClient, AppleAuthRequestContext, AppleAuthSessionHeaders (+30 more)

### Community 10 - "App Keywords DB"
Cohesion: 0.14
Nodes (27): mockAsoConfig, AppKeywordRow, createAppKeyword(), createAppKeywords(), deleteAppKeywords(), deleteAppKeywordsByAppId(), getAppLastKeywordAddedAtMap(), getAssociationsForKeyword() (+19 more)

### Community 11 - "ASO Auth Engine"
Cohesion: 0.14
Nodes (11): AsoAuthEngine, buildAuthHashcash(), payloadAuthType(), payloadIncludesInvalidTrue(), quoteDesCookieValue(), responseHasItctxCookie(), sleep(), SUPPORTED_AUTH_TYPES (+3 more)

### Community 12 - "Apple HTTP Trace"
Cohesion: 0.11
Nodes (30): appleContractChangeLastSeenAt, AppleHttpTrace, AppleHttpTraceStoreEntry, AppleTraceProvider, attachAppleHttpTracing(), buildContractChangeSignature(), isNonSuccessTrace(), isSensitiveKey (+22 more)

### Community 13 - "NPM Scripts"
Cohesion: 0.06
Nodes (32): scripts, build, build:watch, check:node, ci, clean, dashboard:build, dashboard:watch (+24 more)

### Community 14 - "Site Config & Assets"
Cohesion: 0.09
Nodes (21): ../../../assets/app-icon/keywords-readme.png?url, ../../../cli/dashboard-ui/public/dashboard.jpg?url, ../../../cli/dashboard-ui/public/mcp.jpg?url, ../firebase-analytics, ../site-content, ../styles/site.css, repoRoot, resolveSiteUrl() (+13 more)

### Community 15 - "ASO Keywords DB"
Cohesion: 0.13
Nodes (19): getCompetitorAppDocs(), getExpiredKeywords(), getKeyword(), getKeywords(), KeywordRow, listKeywords(), TEST_DB_PATH, toStoredKeyword() (+11 more)

### Community 16 - "ASO App Doc Service"
Cohesion: 0.12
Nodes (24): APP_STORE_FRONT_ID_BY_COUNTRY, AppStoreProductLookupPayload, AppStoreProductVersionHistoryItem, fetchAppDocById(), fetchAppStoreLookupAppDocs(), fetchItunesLookupAppDocs(), getAsoAppDocs(), getStoreFrontHeader() (+16 more)

### Community 17 - "App Store Details"
Cohesion: 0.15
Nodes (22): fetchOwnedAppSnapshotsFromApi(), AppLocalizationNameSubtitle, cleanText(), fetchAppStoreAdditionalLocalizations(), fetchAppStoreLocalizedAppData(), LocalizedAppPageData, mapLocalizedData(), parseSerializedData() (+14 more)

### Community 18 - "Auth Flow Error Handling"
Cohesion: 0.11
Nodes (24): apiGet(), authFlowErrorMessage(), DEFAULT_ASO_COUNTRY, getDashboardApiErrorCode(), isAuthFlowErrorCode(), isPrimaryAppIdReconfigureErrorCode(), toActionableErrorMessage(), AppSearchDoc (+16 more)

### Community 19 - "Dialog Components"
Cohesion: 0.11
Nodes (20): AddAppDialog(), AddAppDialogProps, AsoPromptDialog(), AsoPromptDialogProps, defaultBusyLabel(), defaultSubmitLabel(), PromptAction, AuthDialogProps (+12 more)

### Community 20 - "Keyword Cache Service"
Cohesion: 0.18
Nodes (17): assertSupportedCountry(), normalizeCountry(), AppDocsRequestSchema, AsoDependencies, CacheLookupRequestSchema, enrichAsoKeywords(), EnrichRequestSchema, getAsoAppDocs() (+9 more)

### Community 21 - "Core Dependencies"
Cohesion: 0.08
Nodes (25): axios, axios-retry, better-sqlite3, @bugsnag/js, dotenv, inquirer, @modelcontextprotocol/sdk, dependencies (+17 more)

### Community 22 - "TypeScript Compiler Options"
Cohesion: 0.08
Nodes (24): cli/dashboard-ui/**/*, node_modules, compilerOptions, allowJs, allowSyntheticDefaultImports, baseUrl, emitDecoratorMetadata, esModuleInterop (+16 more)

### Community 23 - "Keyword Handlers & Filters"
Cohesion: 0.11
Nodes (16): AppAssociationRow, KeywordBrandFilter, KeywordFavoriteFilter, KeywordPagedQuery, KeywordPagedRow, KeywordPagedSummaryRow, KeywordSortDir, KeywordSortKey (+8 more)

### Community 24 - "Error Handling Helpers"
Cohesion: 0.19
Nodes (19): AsoAuthReauthRequiredError, ContextualError, ErrorResponse, extractClientErrorToSend(), extractCorrectedDateFromAppleDetail(), extractIncludedIndexFromApplePointer(), extractTerritoryCodeFromAppleDetail(), findErrorResponse() (+11 more)

### Community 25 - "Version Check Service"
Cohesion: 0.14
Nodes (18): boxifyMessage(), stripAnsiCodes(), CACHE_FILE, checkVersionUpdateAsync(), checkVersionUpdateSync(), displayUpdateMessage(), fetchLatestVersion(), isCacheValid() (+10 more)

### Community 26 - "Dashboard Filters & Sort"
Cohesion: 0.14
Nodes (20): getChange(), DASHBOARD_FILTER_BOUNDS, DASHBOARD_FILTER_DEFAULTS, DASHBOARD_FILTER_OPTIONS, DashboardBrandFilter, DashboardFavoriteFilter, DashboardFilterState, coerceIntegerInRange() (+12 more)

### Community 27 - "Keyword Position History"
Cohesion: 0.17
Nodes (14): AppKeywordPositionHistoryRow, insertAppKeywordPositionHistoryPoints(), listAppKeywordPositionHistory(), pruneAppKeywordPositionHistoryBefore(), TEST_DB_PATH, toStoredAppKeywordPositionHistoryPoint(), getMetadataValue(), MetadataRow (+6 more)

### Community 28 - "Bugsnag Dashboard Config"
Cohesion: 0.18
Nodes (17): applyNoiseEventMutation(), dedupeWindow, initializeDashboardBugsnag(), notifyDashboardError(), resetDashboardBugsnagDeduplicationForTests(), shouldDedupe(), root, DashboardRuntimeConfig (+9 more)

### Community 29 - "Strict TS Compiler Options"
Cohesion: 0.10
Nodes (20): compilerOptions, allowImportingTsExtensions, isolatedModules, jsx, lib, module, moduleResolution, noEmit (+12 more)

### Community 30 - "Instrumentation & Package Info"
Cohesion: 0.10
Nodes (18): bugsnagApiKey, posthogHost, bin, aso, aso-mcp, contributors, description, engines (+10 more)

### Community 31 - "Bugsnag Shared Config"
Cohesion: 0.15
Nodes (20): BugsnagConfigOptions, DEFAULT_BREADCRUMB_TYPES, DEFAULT_REDACTED_KEYS, firstNonEmpty(), INLINE_SECRET_PATTERNS, isSensitiveKey(), normalizeApiKey(), normalizeKey() (+12 more)

### Community 32 - "Evaluate Keywords Tool"
Cohesion: 0.17
Nodes (16): server, asBoolean(), asNumber(), AsoEvaluateKeywordsArgs, asoEvaluateKeywordsInputSchema, AsoToolKeywordItem, asString(), buildFailureResult() (+8 more)

### Community 33 - "Package Scripts & Deps"
Cohesion: 0.11
Nodes (18): astro, firebase, nodemon, dependencies, firebase, devDependencies, astro, nodemon (+10 more)

### Community 34 - "Keyword Write Repository"
Cohesion: 0.20
Nodes (11): roundNullableScore(), upsertKeywords(), KeywordWriteRepository, computeOrderExpiryIso(), computePopularityExpiryIso(), getAppTtlHours(), getOrderTtlHours(), getPopularityTtlHours() (+3 more)

### Community 35 - "CLI Execution"
Cohesion: 0.15
Nodes (8): command(), AsoCommandResult, getBundledCliEntryPath(), runAsoCommand(), spawnAso(), StdoutErrorEnvelope, MockProc, toMcpToolResult()

### Community 36 - "Dashboard Settings Config"
Cohesion: 0.22
Nodes (13): DashboardRefreshMode, DashboardSettings, DEFAULT_DASHBOARD_SETTINGS, isRefreshMode(), normalizeSettings(), updateDashboardSettings(), ASO_CONFIG_PATH, AsoConfig (+5 more)

### Community 37 - "ASO Difficulty Calculator"
Cohesion: 0.24
Nodes (15): AppDifficultyBreakdown, AppDifficultyInputs, calculateAppDifficultyBreakdown(), calculateKeywordDifficultyBreakdown(), clamp(), finiteOr(), hasDifficultyDetails(), KeywordDifficultyBreakdown (+7 more)

### Community 38 - "Refresh Utils & Handlers"
Cohesion: 0.25
Nodes (10): chunkArray(), getMissingOrExpiredAppIds(), isFreshAsoAppDoc(), createAppDocHandlers(), fetchAsoAppDocsFromApi(), AsoApiAppDoc, AsoRouteDeps, UserSafeError (+2 more)

### Community 39 - "Apple Auth Error Handling"
Cohesion: 0.15
Nodes (10): AppleAuthResponseError, collectAppleServiceErrors(), getFirstAppleServiceError(), getTwoFactorVerificationErrorMessage(), inferAppleAuthFailureReason(), isInvalidAppleCredentialsError(), isRetryableTwoFactorCodeError(), payloadHasAppleServiceErrorCode() (+2 more)

### Community 40 - "Bugsnag Metadata & Reporter"
Cohesion: 0.26
Nodes (10): BugsnagMetadataRecord, getErrorBugsnagMetadata(), toMetadataRecord(), withBugsnagMetadata(), DEDUPABLE_USER_FAULT_REASONS, reportBugsnagError(), resetErrorReporterDeduplicationForTests(), shouldDedupeUserFault() (+2 more)

### Community 41 - "ASO CLI Commands"
Cohesion: 0.22
Nodes (6): asoCommand, fetchKeywordsForStdout(), isAuthReauthRequiredError(), persistKeywordsToApp(), AsoKeychainService, runSecurityCommand()

### Community 42 - "ASO Apps DB"
Cohesion: 0.19
Nodes (10): AppDocInput, AsoAppRow, parseAdditionalLocalizations(), TEST_DB_PATH, toStoredApp(), upsertCompetitorAppDocs(), closeDbForTests(), ensureAppKeywordFavoriteColumn() (+2 more)

### Community 43 - "Cookie Store Service"
Cohesion: 0.22
Nodes (6): CookieJar, AsoCookieStoreService, CookieStorePayload, isExpiredCookie(), pruneExpiredCookies(), StoredCookie

### Community 44 - "ASO Environment Config"
Cohesion: 0.23
Nodes (12): ASO_DEFAULTS, AsoEnvConfig, DEFAULT_DB_PATH, get(), parseEnabled(), parseMode(), parseNonNegativeInt(), parsePositiveInt() (+4 more)

### Community 45 - "Bugsnag Export Script"
Cohesion: 0.30
Nodes (11): api_get(), export_events(), list_orgs(), list_projects(), main(), print_api_error(), require_token(), require_tools() (+3 more)

### Community 46 - "Difficulty Lab Script"
Cohesion: 0.21
Nodes (13): { buildSync }, ensureFiniteNumber(), ensureKeywordMatch(), fs, keywordMatchCode(), loadDifficultyCalculator(), n(), os (+5 more)

### Community 47 - "PostHog Usage Tracking"
Cohesion: 0.33
Nodes (8): main(), getOrCreatePostHogUserId(), PostHogWithPromiseShutdown, shutdownPostHog(), trackCliStarted(), getPostHogClient(), initializePostHog(), normalizeOptional()

### Community 48 - "ASO Auth Service Core"
Cohesion: 0.18
Nodes (9): AsoAuthService, hasInteractiveTerminal(), hostMatchesDomain(), logWithSpinnerPause(), nowInSeconds(), ReAuthenticateOptions, toCookieHeader(), ora (+1 more)

### Community 49 - "ESBuild Config"
Cohesion: 0.22
Nodes (10): build(), buildDashboardUi(), cliBuildConfig, cliWatchConfig, esbuild, { execSync, spawn }, mcpBuildConfig, mcpWatchConfig (+2 more)

### Community 50 - "Prettier Config"
Cohesion: 0.20
Nodes (9): arrowParens, bracketSpacing, endOfLine, printWidth, semi, singleQuote, tabWidth, trailingComma (+1 more)

### Community 51 - "Render App Icon Script"
Cohesion: 0.20
Nodes (8): appIconDir, { chromium }, fs, path, { pathToFileURL }, rootDir, sourceHtmlPath, TARGETS

### Community 52 - "Upload Sourcemaps Script"
Cohesion: 0.22
Nodes (9): assertInputs(), bundlePath, fs, main(), path, rootDir, sourceMapPath, { spawnSync } (+1 more)

### Community 53 - "Enrichment Service Tests"
Cohesion: 0.25
Nodes (7): __resetIncompleteTopDocLookupCooldownForTests(), buildSearchHtml(), buildSearchHtmlForIds(), mockedAsoAppleGet, mockedFetchAppStoreAdditionalLocalizations, mockedFetchAppStoreLookupAppDocs, mockedLogger

### Community 54 - "Bugsnag Dev Dependencies"
Cohesion: 0.29
Nodes (7): @bugsnag/cli, @bugsnag/source-maps, devDependencies, @bugsnag/cli, @bugsnag/source-maps, @types/node, @types/node

### Community 55 - "Noise Deduplication"
Cohesion: 0.33
Nodes (3): DedupeDecision, DedupeState, NoiseDedupeWindow

### Community 56 - "Package Keywords"
Cohesion: 0.29
Nodes (7): cli, keywords, app-store, app-store-optimization, aso, keyword-research, mcp

### Community 57 - "Generate MCP Content Script"
Cohesion: 0.33
Nodes (4): contentDir, fs, generatedDir, path

### Community 60 - "Use Selection Hook"
Cohesion: 0.50
Nodes (3): KeywordRow, useSelection(), UseSelectionParams

### Community 61 - "Package Files"
Cohesion: 0.50
Nodes (4): files, cli/dist/, README.md, THIRD_PARTY_LICENSES.md

## Knowledge Gaps
- **464 isolated node(s):** `tabWidth`, `printWidth`, `useTabs`, `semi`, `singleQuote` (+459 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **36 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Bugsnag Dev Dependencies` to `Instrumentation & Package Info`, `Axios Mock Adapter`, `Jest Environment JSDOM`, `Concurrently Dependency`, `ESBuild Dependency`, `Jest Dependency`, `Playwright Dependency`, `Prettier Dependency`, `React Dependency`, `React DOM Dependency`, `Testing Library Jest DOM`, `Testing Library React`, `TS Jest Dependency`, `Better SQLite3 Types`, `Inquirer Types`, `Jest Types`, `React Types`, `React DOM Types`, `Yargs Types`, `TypeScript Dependency`, `Vite Dependency`, `Vite React Plugin`, `YAML Dependency`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `Logger` connect `CLI Node Version Guard` to `Dashboard Auth State`, `Apple HTTP Client`, `Startup Refresh Manager`, `ASO Enrichment Service`, `ASO CLI Commands`, `App Keywords DB`, `Apple Auth Service`, `ASO App Doc Service`, `Enrichment Service Tests`, `Keyword Handlers & Filters`?**
  _High betweenness centrality (0.041) - this node is a cross-community bridge._
- **Why does `reportBugsnagError()` connect `Bugsnag Metadata & Reporter` to `Dashboard Auth State`, `Evaluate Keywords Tool`, `CLI Execution`, `CLI Node Version Guard`, `Bugsnag Classifier`, `ASO Auth Engine`, `Apple HTTP Trace`, `Noise Deduplication`, `Bugsnag Dashboard Config`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **What connects `tabWidth`, `printWidth`, `useTabs` to the rest of the system?**
  _464 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Dashboard Auth State` be split into smaller, more focused modules?**
  _Cohesion score 0.05143570536828964 - nodes in this community are weakly interconnected._
- **Should `Apple HTTP Client` be split into smaller, more focused modules?**
  _Cohesion score 0.059876543209876544 - nodes in this community are weakly interconnected._
- **Should `Startup Refresh Manager` be split into smaller, more focused modules?**
  _Cohesion score 0.05502392344497608 - nodes in this community are weakly interconnected._