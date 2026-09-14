#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

command -v pnpm >/dev/null || { echo "pnpm not found — install it: https://pnpm.io/installation" >&2; exit 1; }

[ -d node_modules ] || pnpm install
exec pnpm dev
