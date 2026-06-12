# roughdraft-test

An organization fork of [Roughdraft](https://github.com/Lex-Inc/roughdraft) — a
local-first Markdown review app. This fork fixes a bug where Markdown tables
containing pipes (escaped `\|` or pipes inside inline code) rendered as blank
space, and it installs under the command name **`roughdraft-test`** so it can
live alongside a stock `roughdraft` install without overriding it.

> This tool runs locally on each person's machine and opens Markdown files from
> that machine's disk. Everyone who wants to use it installs it on their own
> computer.

## Prerequisites

- **Node.js 20+**
- **pnpm** (via Corepack, which ships with Node):
  ```bash
  corepack enable
  ```

## Install

### Option A — From source (recommended)

Clone the fork, build it, and install the global command:

```bash
git clone <your-fork-url> roughdraft-test
cd roughdraft-test
pnpm install
pnpm build
npm i -g .            # installs the `roughdraft-test` command
```

Verify:

```bash
roughdraft-test status
```

### Option B — From a tarball (no repo access needed)

If someone hands you a `roughdraft-test-<version>.tgz` file:

```bash
npm i -g ./roughdraft-test-0.1.9.tgz
```

To produce that tarball yourself (from a built checkout):

```bash
pnpm build
npm pack             # → roughdraft-test-0.1.9.tgz
```

## Run

Start the local server (runs in the background, prints its URL):

```bash
roughdraft-test start
```

Open a Markdown file for review (starts the server automatically if needed):

```bash
roughdraft-test open /absolute/path/to/file.md
```

Check status or stop the server:

```bash
roughdraft-test status
roughdraft-test stop
```

You can also open a file by URL once the server is running:

```
http://localhost:7373/?path=/absolute/path/to/file.md
```

## Running alongside a stock `roughdraft`

This fork is built to coexist with the original `roughdraft`:

- **Different command:** it installs as `roughdraft-test`, never `roughdraft`.
- **Different state:** it stores its server state in `~/.roughdraft-test/`
  instead of the stock `~/.roughdraft/`, so the two never share a running
  server.

If port `7373` is already taken (e.g. by a stock `roughdraft`), this fork picks
a free port automatically. To force a specific port:

```bash
roughdraft-test start --port 8080
roughdraft-test open /absolute/path/to/file.md --port 8080
```

## Update to a newer version of the fork

```bash
cd roughdraft-test
git pull
pnpm install
pnpm build
npm i -g .
```

## Uninstall

```bash
npm rm -g roughdraft-test
```

Optionally remove its state directory:

```bash
rm -rf ~/.roughdraft-test
```

## Develop / run the tests

```bash
pnpm test            # rfm + app + server unit tests
pnpm lint            # Biome lint + format check
pnpm build           # build all packages
```

The table-rendering fix is covered by tests in
`packages/app/src/markdown.test.ts` (rendering + round-trip) and
`packages/app/test/critic-markup.test.ts`. A sample document that exercises the
fix lives at `.context/table-render-test.md`.
