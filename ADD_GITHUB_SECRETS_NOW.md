# GitHub Secrets Setup - Ready to Add

## Your Information (Ready to Use)

| Secret Name | Value |
|-------------|-------|
| `DOCKERHUB_USERNAME` | `aakash2612` |
| `DOCKERHUB_TOKEN` | `<YOUR_TOKEN_FROM_DOCKER_HUB>` |
| `DATABASE_URL` | `postgresql://postgres:mysecretpassword@localhost:5432/postgres` |

⚠️ **NOTE:** Token has already been generated and shown on your Docker Hub screen. Use that token value for the DOCKERHUB_TOKEN secret.

---

## ✅ Step-by-Step: Add Secrets to GitHub

### Go to GitHub Secrets Page
**URL:** https://github.com/aakashthapa12/docker-kubernetes-labs/settings/secrets/actions

Or manually:
1. Go to: https://github.com/aakashthapa12/docker-kubernetes-labs
2. Click **Settings** tab
3. Left sidebar → **Secrets and variables** → **Actions**

---

## Adding Secret #1: DOCKERHUB_USERNAME

1. Click **New repository secret** button
2. **Name field:** Type exactly: `DOCKERHUB_USERNAME`
3. **Secret field:** Paste: `aakash2612`
4. Click **Add secret**

✅ Secret #1 added!

---

## Adding Secret #2: DOCKERHUB_TOKEN

1. Click **New repository secret** button
2. **Name field:** Type exactly: `DOCKERHUB_TOKEN`
3. **Secret field:** Paste the token from your Docker Hub screen (the one starting with `dckr_pat_`)
4. Click **Add secret**

✅ Secret #2 added!

---

## Adding Secret #3: DATABASE_URL

1. Click **New repository secret** button
2. **Name field:** Type exactly: `DATABASE_URL`
3. **Secret field:** Paste: `postgresql://postgres:mysecretpassword@localhost:5432/postgres`
4. Click **Add secret**

✅ Secret #3 added!

---

## Verify All Secrets

After adding all 3, you should see:
- ✅ DOCKERHUB_USERNAME (value hidden)
- ✅ DOCKERHUB_TOKEN (value hidden)
- ✅ DATABASE_URL (value hidden)

All values are encrypted and shown as `***` for security.

---

## Next: Test the Pipeline

Once all secrets are added:

1. Make a small change to your backend code:
   ```bash
   cd /Users/aakashthapa/Projects/devops/week-27.2
   # Edit any file, e.g., add a comment to apps/backend/index.ts
   ```

2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI/CD pipeline activation"
   git push origin main
   ```

3. Go to GitHub → **Actions** tab
4. Watch the workflows run
5. ✅ If successful, images appear on Docker Hub!

---

## 🎉 You're Almost Done!

Just add these 3 secrets to GitHub and your CI/CD will be live!
