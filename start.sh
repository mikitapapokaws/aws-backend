#!/usr/bin/env bash
npm run migration:generate -- db/migrations/init
npm  run migration:run
npm run start:prod
