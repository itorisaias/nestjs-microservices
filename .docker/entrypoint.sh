#!/bin/bash

npm install

cd ~/app/apps/module-a/
npx prisma migrate reset --force

cd ~/app/apps/module-b/
npx prisma migrate reset --force

# tail -f /dev/null