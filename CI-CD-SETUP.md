# GitHub Actions CI/CD Pipeline Setup Guide

## Overview

This project includes automated CI/CD pipelines that build and push Docker images to Docker Hub whenever code is pushed to the main branch.

## 🚀 Quick Setup

### Step 1: Create Docker Hub Account (if you don't have one)
1. Go to https://hub.docker.com
2. Sign up for a free account
3. Confirm your email

### Step 2: Generate Docker Hub Access Token
1. Log in to Docker Hub
2. Click your profile icon → **Account Settings**
3. Go to **Security** tab
4. Click **New Access Token**
5. Name it: `GitHub Actions`
6. Select **Read & Write** permissions
7. Copy the generated token (you won't see it again!)

### Step 3: Add Secrets to GitHub Repository

1. Go to your GitHub repository: https://github.com/aakashthapa12/docker-kubernetes-labs
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

#### Secret 1: DOCKERHUB_USERNAME
- Name: `DOCKERHUB_USERNAME`
- Value: Your Docker Hub username

#### Secret 2: DOCKERHUB_TOKEN
- Name: `DOCKERHUB_TOKEN`
- Value: The access token you generated in Step 2

#### Secret 3: DATABASE_URL (Optional, for frontend builds)
- Name: `DATABASE_URL`
- Value: `postgresql://postgres:password@localhost:5432/postgres`

### Step 4: Verify Setup

1. Go to **Actions** tab in your GitHub repository
2. You should see three workflows:
   - Continuous Deployment (Prod) (Backend)
   - Continuous Deployment (Prod) (WebSocket)
   - Continuous Deployment (Prod) (Frontend)

## 📋 Workflow Details

### Backend Deployment Pipeline

**File:** `.github/workflows/backend-deploy.yml`

**Triggers on:**
- Push to `main` branch
- Changes in: `apps/backend/`, `packages/db/`, or `docker/Dockerfile.backend`

**Actions:**
1. Checks out code
2. Logs into Docker Hub
3. Builds Docker image from `docker/Dockerfile.backend`
4. Pushes to Docker Hub with tags:
   - `<username>/user-app-backend:latest`
   - `<username>/user-app-backend:<commit-sha>`

### WebSocket Deployment Pipeline

**File:** `.github/workflows/websocket-deploy.yml`

**Triggers on:**
- Push to `main` branch
- Changes in: `apps/websocket/`, `packages/db/`, or `docker/Dockerfile.ws`

**Actions:**
1. Checks out code
2. Logs into Docker Hub
3. Builds Docker image from `docker/Dockerfile.ws`
4. Pushes to Docker Hub with tags:
   - `<username>/user-app-websocket:latest`
   - `<username>/user-app-websocket:<commit-sha>`

### Frontend Deployment Pipeline

**File:** `.github/workflows/frontend-deploy.yml`

**Triggers on:**
- Push to `main` branch
- Changes in: `apps/web/`, `packages/db/`, or `docker/Dockerfile.frontend`

**Actions:**
1. Checks out code
2. Logs into Docker Hub
3. Builds Docker image from `docker/Dockerfile.frontend`
   - Passes `DB_URL` as build argument
4. Pushes to Docker Hub with tags:
   - `<username>/user-app-frontend:latest`
   - `<username>/user-app-frontend:<commit-sha>`

## 🔍 Monitoring Builds

### View Active Builds
1. Go to your repository
2. Click **Actions** tab
3. See all workflow runs in real-time

### View Build Logs
1. Click on a specific workflow run
2. Click **build** job to expand
3. View detailed logs for each step

### Check Docker Hub
1. Log into Docker Hub
2. Go to **Repositories**
3. See newly pushed images with their tags

## 📦 Using the Built Images

After a successful build, you can pull and run the images:

```bash
# Backend
docker pull <your-username>/user-app-backend:latest
docker run -p 8080:8080 -e DATABASE_URL=... <your-username>/user-app-backend:latest

# WebSocket
docker pull <your-username>/user-app-websocket:latest
docker run -p 8081:8081 -e DATABASE_URL=... <your-username>/user-app-websocket:latest

# Frontend
docker pull <your-username>/user-app-frontend:latest
docker run -p 3000:3000 <your-username>/user-app-frontend:latest
```

## 🐛 Troubleshooting

### Pipeline not triggering?
**Solution:**
- Verify you pushed to `main` branch (not another branch)
- Check that changed files match the `paths` filter
- Ensure GitHub Actions are enabled (Settings → Actions)

### "Docker login failed" error?
**Solution:**
- Verify `DOCKERHUB_USERNAME` secret is correct
- Verify `DOCKERHUB_TOKEN` secret is correct
- Regenerate token if it's old

### "Push failed" error?
**Solution:**
- Ensure repository name is lowercase (Docker Hub requirement)
- Check Docker Hub storage limits haven't been exceeded
- Verify internet connection is stable

### Build timeout or memory issues?
**Solution:**
- This shouldn't happen on GitHub Actions (generous limits)
- If it does, check for infinite loops or large files being copied

## 📝 File Paths Reference

The workflows reference these paths:

```
week-27.2/
├── apps/backend/          ← Backend source
├── apps/websocket/        ← WebSocket source
├── apps/web/              ← Frontend source
├── packages/db/           ← Database package (used by all)
├── docker/
│   ├── Dockerfile.backend
│   ├── Dockerfile.ws
│   └── Dockerfile.frontend
└── .github/workflows/
    ├── backend-deploy.yml
    ├── websocket-deploy.yml
    └── frontend-deploy.yml
```

## 🔐 Security Best Practices

1. **Never commit secrets** - Always use GitHub Secrets
2. **Rotate tokens regularly** - Regenerate Docker Hub tokens every 6 months
3. **Use specific access levels** - Docker Hub tokens should have only necessary permissions
4. **Monitor builds** - Check Actions logs regularly for failures
5. **Keep secrets separate** - Don't share Docker Hub credentials

## 🚀 Next Steps

1. ✅ Set up Docker Hub account and token
2. ✅ Add GitHub Secrets
3. ✅ Push code to `main` branch
4. ✅ Monitor first build in Actions tab
5. ✅ Pull and test images from Docker Hub

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Build and Push Action](https://github.com/docker/build-push-action)
- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
