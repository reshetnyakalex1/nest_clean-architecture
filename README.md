# NestJS project template

A NestJS project template with an attempt to implement the clean architectures concepts.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Sequelize migration scripts
Necessary files for the migration configuration are:
.sequelizerc, sequelizeMigrationsConfig.js


```bash
# generate a migration file
$ sequelize-cli migration:generate --name UserTable

# run migrations
$ sequelize-cli db:migrate

# revert the last migration
$ sequelize-cli db:migrate:undo

# revert all the migrations
$ sequelize-cli db:migrate:undo:all

#revert migrations to the file
$ sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

```

## Typeorm migration scripts
The necessary file for the migration configuration is ormconfig.ts

```bash
#generate a migration file
$ npx typeorm-ts-node-commonjs migration:create ./migrations/typeorm/MigrationFileName

# run migrations
$ npx typeorm-ts-node-commonjs migration:run -d ./ormconfig.ts
or
$ npm run migration:up

# revert the last migration
$ npx typeorm-ts-node-commonjs migration:revert -d ./ormconfig.ts
or
$ npm run migration:down
```
