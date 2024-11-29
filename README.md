## Next App Router + styled-components

This repo is meant to be used as part of an exercise in [The Joy of React](https://www.joyofreact.com/).

## Running a development server

First, install the dependencies:

```bash
$ npm install
```

Then, start a local development server:

```bash
$ npm run dev
```

## Troubleshooting

You may get an error like `ERESOLVE unable to resolve dependency tree`.

This happens because styled-components currently has a hard dependency on React 18. This is the version used by this workshop and specified in the lockfile, so you shouldn’t run into this problem if you use the NPM package manager to install the dependencies.

If you’d like to use the latest version of Next/React, you can solve this problem by adding the following flag to your NPM install command:

```bash
$ npm install --legacy-peer-deps
```

This flag instructs NPM to ignore any hard dependencies, allowing styled-components to be used with Next 15 / React 19.
