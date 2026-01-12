# Deploying Traviax Tourism to GitHub + Vercel

This guide will walk you through deploying your Traviax Tourism website to Vercel using GitHub.

## Prerequisites

- A GitHub account
- A Vercel account (free at vercel.com)

**No database needed!** Contact form submissions are sent directly to your email via Web3Forms.

---

## Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., "traviax-tourism")
2. In your terminal/command line, run:

```bash
git init
git add .
git commit -m "Initial commit - Traviax Tourism website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/traviax-tourism.git
git push -u origin main
```

---

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. **Important:** Add your environment variable:
   - Click "Environment Variables"
   - Add: `VITE_WEB3FORMS_KEY` = (your Web3Forms access key)
5. Click "Deploy"

Vercel will automatically:
- Build your frontend using Vite
- Give you a live URL (e.g., traviax-tourism.vercel.app)

---

## Step 3: Test Your Deployment

1. Visit your Vercel URL
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your email (TRAVIAXTOURISMPVT@GMAIL.COM) for the inquiry!

---

## Custom Domain (Optional)

To use your own domain (e.g., www.traviax.com):

1. In Vercel, go to your project → Settings → Domains
2. Add your domain
3. Update your domain's DNS settings as instructed by Vercel

---

## Updating Your Website

Whenever you push changes to GitHub, Vercel will automatically redeploy:

```bash
git add .
git commit -m "Your update message"
git push
```

---

## Environment Variables Reference

| Variable | Description | Where to find |
|----------|-------------|---------------|
| `VITE_WEB3FORMS_KEY` | Web3Forms access key | Your Web3Forms dashboard (web3forms.com) |

---

## Troubleshooting

**Contact form not working?**
- Check that VITE_WEB3FORMS_KEY is set in Vercel environment variables
- Make sure the Web3Forms access key is correct

**Build failing?**
- Check the Vercel deployment logs for specific errors
- Ensure all dependencies are in package.json

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Web3Forms Docs: https://web3forms.com/docs
