---
name: dag-task-runner
description: DEPRECATED ALIAS — the DAG task runner has been promoted to @flatbread/oven. Use the `oven` skill (.cursor/skills/oven/SKILL.md) for new work; this entry only exists to redirect agents that still reference the old name.
---

# DAG Task Runner — moved to `oven`

This skill has been renamed and promoted from a copy-into-skill bundle to the
standalone `@flatbread/oven` package (GitHub: `FlatbreadLabs/oven`).

## What changed

| Before                                                   | After                                       |
| -------------------------------------------------------- | ------------------------------------------- |
| Skill name `dag-task-runner`                             | Skill name `oven`                           |
| Runtime in `.cursor/skills/dag-task-runner/scripts/*.ts` | Runtime in `src/*.ts`                       |
| Run via `tsx .cursor/skills/.../run_dag.ts`              | Run via `pnpm exec oven`                    |
| Supervisor `tsx .../run_dag_supervisor.ts`               | Supervisor `pnpm exec oven-supervisor`      |
| Default state dir `.dag-runner/`                         | Default state dir `.oven/`                  |
| Log prefix `[dag-runner]` / `[dag-runner-supervisor]`    | Log prefix `[oven]` / `[oven-supervisor]`   |
| Examples at `.cursor/skills/dag-task-runner/examples/`   | Examples at `.cursor/skills/oven/examples/` |

CLI flag names, the DAG JSON schema, the `.canvas.tsx` shape, oracle / pause / convergence semantics, and the public library API are all unchanged. Existing DAG JSON files and persisted run-state files (move them from `.dag-runner/` to `.oven/` if you want to resume) work as-is.

## What to do

1. Open `.cursor/skills/oven/SKILL.md` for the canonical workflow.
2. Replace any hardcoded `.cursor/skills/dag-task-runner/scripts/run_dag.ts` paths in your prompts / playbooks with the `pnpm exec oven` invocation.
3. If you have an in-flight run with `.dag-runner/run-state.json`, either rename the directory to `.oven/` or pass the old path explicitly via `--state-path`.

## Why

`dag-task-runner` was always a copy-into-project bundle, which meant every project carried its own bit-rotted snapshot of the runtime. Promoting it to `@flatbread/oven` keeps one maintained runner with tsup builds, lint, and type checks, and gives downstream tooling a stable `import { parseDAG, computeRanks, ... } from '@flatbread/oven'` library surface alongside the CLI.
