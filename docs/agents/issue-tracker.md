# Issue Tracker

This repository uses GitHub Issues for work tracking.

## Repository

Repository: `git@github.com:Charan167/pg-management.git`

Before using `gh issue` commands, install the GitHub CLI and authenticate with `gh auth login` if necessary.

## Workflow

- `/to-spec` may publish the confirmed product specification as a GitHub issue when requested.
- `/to-tickets` should create implementation tickets as GitHub issues with explicit blocking relationships in the issue body until native blocking links are configured.
- `/implement` works from an agent-ready issue whose blockers are complete.
- Do not use local `.scratch/` issue files unless the tracker decision is changed.
