#!/usr/bin/env node
import os from "node:os";
import path from "node:path";
import { runCli } from "../dist/cli.js";

// This is a renamed distribution of Roughdraft. Default its server state to a
// separate directory so it never collides with a stock `roughdraft` install
// that a user might already have. Still overridable via ROUGHDRAFT_STATE_DIR.
if (!process.env.ROUGHDRAFT_STATE_DIR?.trim()) {
  process.env.ROUGHDRAFT_STATE_DIR = path.join(
    os.homedir(),
    ".roughdraft-test",
  );
}

const exitCode = await runCli(process.argv.slice(2));
process.exit(exitCode);
