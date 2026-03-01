#!/bin/bash
# Auto-deploy: pull from origin, rebuild if changed, swap container.
# Usage:
#   ./scripts/auto-deploy.sh              # 手動跑
#   */5 * * * * /path/to/auto-deploy.sh   # cron 自動跑

set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_DIR"

log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "Checking for updates..."
git fetch origin main

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

log "Local:  $LOCAL"
log "Remote: $REMOTE"

if [ "$LOCAL" = "$REMOTE" ]; then
    log "Already up to date. Nothing to do."
    exit 0
fi

log "New commits detected. Pulling..."
git pull origin main
log "Pull complete. HEAD is now $(git rev-parse --short HEAD)"

log "Building new image..."
if podman-compose build; then
    log "Build succeeded. Stopping old container..."
    podman-compose down
    log "Starting new container..."
    podman-compose up -d
    log "Deploy complete!"
else
    log "BUILD FAILED — old container is still running."
    exit 1
fi
