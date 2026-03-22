# Docker Hub Token Setup - Manual Steps

## Your Docker Hub Username
✅ **Username:** `aakash2612`

## Step 1: Generate Personal Access Token from Docker Hub UI

1. Go to: https://hub.docker.com/settings/security
2. Click **"New Access Token"** button (top right)
3. Fill in the form:
   - **Token name:** `GitHub Actions`
   - **Permissions:** Select `Read, Write, Delete`
4. Click **Generate**
5. **COPY the token immediately** (looks like: `dckr_pat_...`)
6. Save it somewhere safe temporarily

## Step 2: Add Token to GitHub Secrets

### Option A: Using GitHub Web UI (Easiest)

1. Go to: https://github.com/aakashthapa12/docker-kubernetes-labs
2. Click **Settings** tab
3. Left sidebar → **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add three secrets:

| Name | Value |
|------|-------|
| `DOCKERHUB_USERNAME` | `aakash2612` |
| `DOCKERHUB_TOKEN` | `<paste-your-token-here>` |
| `DATABASE_URL` | `postgresql://postgres:mysecretpassword@localhost:5432/postgres` |

6. Click **Add secret** for each one

### Option B: Using GitHub CLI (Advanced)

If you have GitHub CLI installed:

```bash
# Set your token temporarily
export DOCKER_TOKEN="dckr_pat_..."

# Add to GitHub
gh secret set DOCKERHUB_USERNAME --body "aakash2612"
gh secret set DOCKERHUB_TOKEN --body "$DOCKER_TOKEN"
gh secret set DATABASE_URL --body "postgresql://postgres:mysecretpassword@localhost:5432/postgres"
```

## Step 3: Verify Secrets Added

1. Go to GitHub repo → Settings → Secrets and variables → Actions
2. You should see three secrets listed (values are masked)
3. They're now ready for CI/CD pipelines to use

## Step 4: Test the Pipeline

1. Make a small change to backend code
2. Push to `main` branch
3. Go to **Actions** tab in GitHub
4. Watch the "Continuous Deployment (Prod) (Backend)" workflow run
5. If successful, image will be pushed to Docker Hub!

## Troubleshooting

### Token wrong or expired?
- Go to Docker Hub Settings → Security
- Delete old token if needed
- Generate a new one
- Update GitHub secret with new token

### Still getting auth errors?
- Verify token has `Read, Write, Delete` permissions
- Check username is exactly `aakash2612`
- Try regenerating the token

## Next Steps

1. ✅ Get personal access token from Docker Hub
2. ✅ Add three secrets to GitHub
3. ✅ Push a change to trigger pipeline
4. ✅ Check Docker Hub for new image
