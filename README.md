# pulsefeed-migration
Manage database migrations and seeding.

## Usage
- Run prisma migration scripts.
- Perform seeding operations.

## Setup
```bash
$ npm run submodule init
$ npm run submodule update
$ cp .env.local .env
$ npm install
$ npm run prisma:generate
```

## Run
```bash
$ npm run start
```

## Test
```bash
$ npm run test
```
## Post-Build
### Copy migration scripts to dist folder
- After building, we directly copy the prisma folder to dist folder.
  This is done by including the prisma folder as asset in `nest-cli.json`.
