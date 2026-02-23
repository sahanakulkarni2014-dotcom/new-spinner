#!/bin/bash
# ─────────────────────────────────────────────────────────
#  deploy.sh — Runs ON the EC2 instance to build & restart
#  the Spinner app Docker container.
# ─────────────────────────────────────────────────────────
set -e  # Exit immediately on any error

APP_DIR="$HOME/spinner-app"

echo "📂 Entering app directory..."
cd "$APP_DIR"

echo "🐳 Building Docker image..."
sudo docker compose build --no-cache

echo "🛑 Stopping old container (if running)..."
sudo docker compose down --remove-orphans || true

echo "🚀 Starting new container..."
sudo docker compose up -d

echo "🧹 Cleaning up dangling images..."
sudo docker image prune -f

echo "✅ Deployment complete! App is live on port 80."
