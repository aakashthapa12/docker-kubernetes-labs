# 🔐 GitHub Secrets Setup - Visual Guide

## Quick Copy-Paste Values

Ready to add? Here are your values:

### Secret 1 - Name
```
DOCKERHUB_USERNAME
```
### Secret 1 - Value
```
aakash2612
```

---

### Secret 2 - Name
```
DOCKERHUB_TOKEN
```
### Secret 2 - Value
```
<Use the token from your Docker Hub screen - the one starting with dckr_pat_>
```

---

### Secret 3 - Name
```
DATABASE_URL
```
### Secret 3 - Value
```
postgresql://postgres:mysecretpassword@localhost:5432/postgres
```

---

## 📍 Where to Add Them

**Direct Link:**
https://github.com/aakashthapa12/docker-kubernetes-labs/settings/secrets/actions

Or navigate:
1. Go to GitHub repo: https://github.com/aakashthapa12/docker-kubernetes-labs
2. Click **Settings** (top navigation)
3. Left sidebar → **Secrets and variables**
4. Click **Actions** tab

---

## 🎯 Add Each Secret

### Adding Secret #1

**Page shows: "Repository secrets"**

1. Click blue **"New repository secret"** button
2. In **"Name"** field, type:
   ```
   DOCKERHUB_USERNAME
   ```
3. In **"Secret"** field, paste:
   ```
   aakash2612
   ```
4. Click **"Add secret"** button
5. ✅ Green checkmark appears - Secret added!

---

### Adding Secret #2

1. Click blue **"New repository secret"** button again
2. In **"Name"** field, type:
   ```
   DOCKERHUB_TOKEN
   ```
3. In **"Secret"** field, paste the token from your Docker Hub screen:
   (The token starting with `dckr_pat_`)
4. Click **"Add secret"** button
5. ✅ Green checkmark appears - Secret added!

---

### Adding Secret #3

1. Click blue **"New repository secret"** button again
2. In **"Name"** field, type:
   ```
   DATABASE_URL
   ```
3. In **"Secret"** field, paste:
   ```
   postgresql://postgres:mysecretpassword@localhost:5432/postgres
   ```
4. Click **"Add secret"** button
5. ✅ Green checkmark appears - Secret added!

---

## ✅ Verification

After adding all 3, you should see a list:

```
DOCKERHUB_USERNAME
  Updated just now
  ***

DOCKERHUB_TOKEN
  Updated just now
  ***

DATABASE_URL
  Updated just now
  ***
```

All values hidden (shown as `***`) = Security working correctly ✅

---

## 🚀 Next Step: Test It

Once secrets are added:

1. Make any small change to code
2. Push to main:
   ```bash
   cd /Users/aakashthapa/Projects/devops/week-27.2
   git add .
   git commit -m "Activate CI/CD with secrets"
   git push origin main
   ```

3. Go to: https://github.com/aakashthapa12/docker-kubernetes-labs/actions

4. Watch workflows run in real-time

5. Check Docker Hub: https://hub.docker.com/repositories

---

## ⚠️ Important Notes

- ✅ Token is **ONE-TIME ONLY** display - You have it from Docker Hub
- ✅ Secrets are **ENCRYPTED** - GitHub never shows them
- ✅ Secrets are **AUTOMATIC** - CI/CD workflows use them automatically
- ✅ Secrets are **PRIVATE** - Only used by your workflows, not visible in logs

---

## 🎉 Ready?

Just add the 3 secrets and you're done! Your CI/CD will start working immediately! 🚀
