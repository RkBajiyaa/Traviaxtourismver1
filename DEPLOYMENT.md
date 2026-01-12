# Deploying Traviax Tourism to GitHub + Vercel

This guide will walk you through deploying your Traviax Tourism website to Vercel using GitHub.

## Prerequisites

- A GitHub account
- A Vercel account (free at vercel.com)
- A Neon account for PostgreSQL database (free at neon.tech)

---

## Step 1: Set Up Your Database (Neon)

1. Go to [neon.tech](https://neon.tech) and sign up for a free account
2. Create a new project (name it "traviax-tourism" or similar)
3. Once created, you'll see your **Connection String** - copy it!
   - It looks like: `postgresql://username:password@ep-xxx.region.aws.neon.tech/neondb?sslmode=require`
4. In the Neon SQL Editor, run the SQL from `scripts/setup-database.sql` to create your tables

---

## Step 2: Push to GitHub

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

## Step 3: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. **Important:** Add your environment variable:
   - Click "Environment Variables"
   - Add: `DATABASE_URL` = your Neon connection string (from Step 1)
5. Click "Deploy"

Vercel will automatically:
- Build your frontend using Vite
- Set up your API serverless functions
- Give you a live URL (e.g., traviax-tourism.vercel.app)

---

## Step 4: Test Your Deployment

1. Visit your Vercel URL
2. Navigate to the Contact section
3. Fill out and submit the form
4. Check your Neon database to see the inquiry saved!

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

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Neon PostgreSQL connection string | `postgresql://user:pass@host/db?sslmode=require` |

---

## Troubleshooting

**Contact form not working?**
- Check that DATABASE_URL is set in Vercel environment variables
- Make sure you ran the SQL setup script in Neon

**Build failing?**
- Check the Vercel deployment logs for specific errors
- Ensure all dependencies are in package.json

**Need help?**
- Vercel Docs: https://vercel.com/docs
- Neon Docs: https://neon.tech/docs
