#!/bin/bash

echo "🚀 Starting production build optimization..."

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build for production
echo "🏗️  Building for production..."
npm run build:prod

# Check if build was successful
if [ -d "dist" ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Files ready for deployment in 'dist' folder"
    echo ""
    echo "📊 Build size analysis:"
    du -sh dist/*
    echo ""
    echo "🌐 Ready to deploy to Hostinger!"
    echo "📖 See DEPLOYMENT.md for deployment instructions"
else
    echo "❌ Build failed!"
    exit 1
fi