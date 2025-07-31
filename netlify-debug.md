# Netlify Deployment Troubleshooting Guide

## Issue: Netlify ignoring netlify.toml build command

### Problem
Netlify is trying to run `bun run build` instead of the configured `npm ci --legacy-peer-deps && npm run build` command.

### Root Cause Analysis
When Netlify ignores the `netlify.toml` configuration, it's usually due to:

1. **Dashboard Override**: Build settings configured in Netlify dashboard override file-based config
2. **Auto-detection**: Netlify incorrectly detecting project as using bun
3. **Caching**: Previous build settings being cached

### Solution Steps

#### 1. Check Netlify Dashboard Settings
1. Go to your Netlify dashboard
2. Navigate to Site Settings → Build & Deploy → Build Settings
3. Look for any custom build commands or environment variables
4. **Clear all build commands** - set to empty/default to force using netlify.toml
5. Clear any environment variables that might override package manager

#### 2. Clear Build Cache
1. In Netlify dashboard, go to Site Settings → Build & Deploy → Post Processing
2. Click "Clear cache and retry deploy"
3. Or trigger a new deploy with cache cleared

#### 3. Verify netlify.toml Priority
The updated netlify.toml now includes:
- Explicit `NETLIFY_USE_NPM = "true"`
- Disabled other package managers
- Additional npm-specific environment variables
- Force package manager detection

#### 4. Alternative Build Commands
If the issue persists, try these alternative approaches:

**Option A: Use the netlify-specific build script**
Change netlify.toml build command to:
```toml
command = "npm run build:netlify"
```

**Option B: Explicit npm path**
```toml
command = "/usr/bin/npm ci --legacy-peer-deps && /usr/bin/npm run build"
```

**Option C: Shell script approach**
```toml
command = "bash -c 'npm ci --legacy-peer-deps && npm run build'"
```

#### 5. Environment Variables Check
Ensure these are set in netlify.toml:
```toml
NETLIFY_USE_NPM = "true"
PACKAGE_MANAGER = "npm"
NPM_CONFIG_LEGACY_PEER_DEPS = "true"
```

### Expected Result
After implementing these changes, Netlify should:
1. Use npm instead of bun
2. Install dependencies with `--legacy-peer-deps` flag
3. Successfully build the Next.js application
4. Deploy to the `.next` directory

### Verification
Check the build logs for:
- `npm ci --legacy-peer-deps` running successfully
- `npm run build` executing the Next.js build
- No references to bun in the build process
