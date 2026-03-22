# CI/CD Pipeline Setup

This directory contains GitHub Actions workflows for continuous deployment to Docker Hub.

## Workflows

### 1. **Backend Deployment** (`backend-deploy.yml`)
- Triggers on push to `main` branch when backend files change
- Builds Docker image from `docker/Dockerfile.backend`
- Pushes to Docker Hub with tags: `user-app-backend:latest` and `user-app-backend:<commit-sha>`

### 2. **WebSocket Deployment** (`websocket-deploy.yml`)
- Triggers on push to `main` branch when websocket files change
- Builds Docker image from `docker/Dockerfile.ws`
- Pushes to Docker Hub with tags: `user-app-websocket:latest` and `user-app-websocket:<commit-sha>`

### 3. **Frontend Deployment** (`frontend-deploy.yml`)
- Triggers on push to `main` branch when frontend files change
- Builds Docker image from `docker/Dockerfile.frontend`
- Passes `DATABASE_URL` as build argument
- Pushes to Docker Hub with tags: `user-app-frontend:latest` and `user-app-frontend:<commit-sha>`

## Setup Instructions

### Prerequisites
You need to set up the following secrets in your GitHub repository:

1. **Go to Settings → Secrets and variables → Actions**

2. **Add these secrets:**
   - `DOCKERHUB_USERNAME`: Your Docker Hub username
   - `DOCKERHUB_TOKEN`: Your Docker Hub access token (create at https://hub.docker.com/settings/security)
   - `DATABASE_URL`: PostgreSQL connection string (for frontend build)

### How to Create Docker Hub Token

1. Log in to Docker Hub (https://hub.docker.com)
2. Go to **Account Settings → Security**
3. Click **New Access Token**
4. Name it (e.g., "GitHub Actions")
5. Copy the token and save it as `DOCKERHUB_TOKEN` secret

## Workflow Triggers

Each workflow is configured to trigger only when relevant files change:

- **Backend**: Changes in `apps/backend/`, `packages/db/`, or `docker/Dockerfile.backend`
- **WebSocket**: Changes in `apps/websocket/`, `packages/db/`, or `docker/Dockerfile.ws`
- **Frontend**: Changes in `apps/web/`, `packages/db/`, or `docker/Dockerfile.frontend`

## Docker Hub Image Tags

All images are pushed with two tags:

1. **Commit SHA**: `user-app-backend:<commit-sha>` - For version tracking
2. **Latest**: `user-app-backend:latest` - For easy reference

Example: After pushing, you can pull images with:
```bash
docker pull <your-dockerhub-username>/user-app-backend:latest
docker pull <your-dockerhub-username>/user-app-backend:abc123def456
```

## Monitoring Builds

1. Go to your GitHub repository
2. Click **Actions** tab
3. View workflow runs and build logs

## Testing Locally

To test the Docker builds before pushing:

```bash
# Backend
docker build -f week-27.2/docker/Dockerfile.backend -t user-app-backend:test week-27.2/

# WebSocket
docker build -f week-27.2/docker/Dockerfile.ws -t user-app-websocket:test week-27.2/

# Frontend (with build args)
docker build -f week-27.2/docker/Dockerfile.frontend \
  --build-arg DB_URL="postgresql://..." \
  -t user-app-frontend:test week-27.2/
```

## Troubleshooting

### Workflow not triggering?
- Check that the branch is `main`
- Verify file paths match the `paths` filter
- Check GitHub Actions are enabled in repository settings

### Authentication failed?
- Verify `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` are correct
- Regenerate the token if needed
- Ensure the token has push permissions

### Build failures?
- Check workflow logs in **Actions** tab
- Verify Docker files are correct
- Ensure all dependencies are installed
