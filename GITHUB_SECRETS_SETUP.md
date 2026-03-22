# 🔐 Complete GitHub Secrets Setup Guide

## Your Account Details
- **Docker Hub Username:** `aakash2612` ✅

---

## 📋 Step-by-Step Instructions

### STEP 1️⃣: Generate Docker Hub Personal Access Token

**Location:** https://hub.docker.com/settings/security

**Actions:**
1. Open https://hub.docker.com/settings/security in your browser
2. Click the blue **"Generate new token"** button
3. In the dialog that appears:
   - **Token name:** Type `GitHub Actions`
   - **Permissions:** Check the box for `Read & Write`
4. Click **Generate** button
5. ⚠️ **IMPORTANT:** Copy the token immediately and save it somewhere
   - The token will NOT be shown again
   - Looks like: `dckr_pat_abcdefg123456xyz`

---

### STEP 2️⃣: Add Secrets to GitHub Repository

**Location:** https://github.com/aakashthapa12/docker-kubernetes-labs/settings/secrets/actions

**Instructions:**

#### Secret #1: DOCKERHUB_USERNAME
1. Click **"New repository secret"** button
2. **Name:** `DOCKERHUB_USERNAME`
3. **Value:** `aakash2612`
4. Click **"Add secret"**

#### Secret #2: DOCKERHUB_TOKEN
1. Click **"New repository secret"** button
2. **Name:** `DOCKERHUB_TOKEN`
3. **Value:** Paste your token from Step 1 (the long string starting with `dckr_pat_`)
4. Click **"Add secret"**

#### Secret #3: DATABASE_URL
1. Click **"New repository secret"** button
2. **Name:** `DATABASE_URL`
3. **Value:** `postgresql://postgres:mysecretpassword@localhost:5432/postgres`
4. Click **"Add secret"**

---

### STEP 3️⃣: Verify Secrets Created

Go to: https://github.com/aakashthapa12/docker-kubernetes-labs/settings/secrets/actions

You should see:
- ✅ DOCKERHUB_USERNAME (value masked)
- ✅ DOCKERHUB_TOKEN (value masked)
- ✅ DATABASE_URL (value masked)

---

### STEP 4️⃣: Test the CI/CD Pipeline

1. Make a small change in your code (e.g., add a comment)
2. Commit and push to `main` branch:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline"
   git push origin main
   ```

3. Go to GitHub → **Actions** tab
4. You should see workflows starting automatically
5. Wait for "Continuous Deployment" workflows to complete
6. ✅ If green checkmarks appear, your images were pushed to Docker Hub!

---

### STEP 5️⃣: Verify Images on Docker Hub

1. Go to https://hub.docker.com/repositories
2. You should see three new repositories:
   - `user-app-backend`
   - `user-app-websocket`
   - `user-app-frontend`
3. Each should have tags:
   - `latest`
   - `<commit-sha>` (e.g., `65cab9c`)

---

## 🎯 What Happens Automatically

After you add the secrets and push code:

1. **GitHub detects push to main**
2. **Checks for file changes** (backend/websocket/frontend/db)
3. **Starts relevant CI/CD workflows**
4. **Builds Docker images** in GitHub's infrastructure
5. **Authenticates to Docker Hub** using your secrets
6. **Pushes images** with tags:
   - `aakash2612/user-app-backend:latest`
   - `aakash2612/user-app-backend:<commit-sha>`
   - (same for websocket and frontend)
7. **Images available** for download immediately

---

## 🔧 Troubleshooting

### Issue: Workflow fails with "Authentication failed"
**Solution:**
- Verify token is correct in GitHub secrets
- Regenerate token on Docker Hub if needed
- Ensure `DOCKERHUB_USERNAME` matches your Docker Hub account

### Issue: Workflow doesn't start
**Solution:**
- Push to `main` branch (not another branch)
- Check if file changes match the workflow's path filter
- Go to Actions tab to see if workflow is listed

### Issue: Image not showing on Docker Hub
**Solution:**
- Check GitHub Actions tab for workflow logs
- Verify Docker Hub token has "Read & Write" permissions
- Try regenerating the token

---

## ✅ Checklist

- [ ] Generated Docker Hub Personal Access Token
- [ ] Added `DOCKERHUB_USERNAME` secret to GitHub
- [ ] Added `DOCKERHUB_TOKEN` secret to GitHub  
- [ ] Added `DATABASE_URL` secret to GitHub
- [ ] Verified all three secrets appear in settings
- [ ] Made a test commit and pushed to main
- [ ] Checked Actions tab for successful workflow
- [ ] Verified images on Docker Hub

---

## 📚 Quick Reference

| Secret Name | Value |
|------------|-------|
| `DOCKERHUB_USERNAME` | `aakash2612` |
| `DOCKERHUB_TOKEN` | Your token (generated on Docker Hub) |
| `DATABASE_URL` | `postgresql://postgres:mysecretpassword@localhost:5432/postgres` |

---

## 🚀 Once Everything is Working

Your CI/CD pipeline will automatically:
- Build Docker images on every push to `main`
- Push images to Docker Hub with commit SHA and latest tags
- Enable you to deploy anywhere using these images

Enjoy your automated CI/CD! 🎉
