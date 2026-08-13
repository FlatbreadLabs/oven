# Agents

Oven is a standalone agent-orchestration tool. It takes a DAG of Cursor
subagent tasks, runs them in dependency order with a model chosen by task
complexity, and writes live status into a `.canvas.tsx` file.

The npm package name is `@flatbread/oven`. The GitHub repo is
`FlatbreadLabs/oven`.

## Key commands

```bash
pnpm install
pnpm build
pnpm test
pnpm typecheck
pnpm lint
```

Useful extras: `pnpm lint:fix`, `pnpm models:list`, and
`pnpm cursor:fetch-cloud-agent`.

## Gotchas

1. **Build before test or CLI use.** `pnpm test` and `pnpm exec oven` need
   `dist/`. Run `pnpm build` after a clean install or source edit.
2. **`CURSOR_API_KEY` for real runs.** Full DAG runs and `pnpm models:list`
   need the key. `--init-only` and `--dry-check-cmds` do not.
3. **Ripgrep for `@cursor/sdk`.** The SDK expects a bundled ripgrep. If that
   is missing, set `CURSOR_RIPGREP_PATH` to a system binary (for example
   `/usr/bin/rg`).
4. **AVA is single-shot.** Use `pnpm test` (plain `ava`). Do not leave AVA
   in watch mode for CI or one-off checks; use `pnpm test:watch` only when
   you want interactive re-runs.
