#!/bin/bash

# Netlify Build Script - Force NPM usage
# This script ensures npm is used regardless of auto-detection

set -e  # Exit on any error

echo "🔧 Starting Netlify build with npm..."

# Verify npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm not found! Installing..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
fi

# Display versions for debugging
echo "📋 Environment Info:"
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Working directory: $(pwd)"

# Clean any existing builds
echo "🧹 Cleaning previous builds..."
rm -rf .next
rm -rf node_modules/.cache

# Install dependencies with legacy peer deps
echo "📦 Installing dependencies with npm..."
npm ci --legacy-peer-deps --no-fund --no-audit

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Build the Next.js application
echo "🏗️ Building Next.js application..."
npm run build

echo "✅ Build completed successfully!"
