#!/bin/bash

echo "Building and deploying the application..."

# Stop and remove any existing containers
docker-compose down

# Build and start new containers
docker-compose up --build -d

# Show logs
docker-compose logs -f
