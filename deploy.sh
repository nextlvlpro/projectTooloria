#!/bin/bash

# Navigate to your project directory
cd /home/ubuntu/github/projectTooloria/client || exit

# Pull latest changes from git
git pull 

# Install dependencies
npm install

# Build the project
npm run build

# Restart the PM2 process
pm2 restart client

# Show PM2 status
pm2 status
