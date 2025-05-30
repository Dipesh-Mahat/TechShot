# GitHub Pages Deployment Guide for TechTrend Digest

This document provides step-by-step instructions for deploying the TechTrend Digest website to GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your local machine
3. The TechTrend Digest codebase (this repository)

## Deployment Steps

### 1. Create a New GitHub Repository

1. Log in to your GitHub account
2. Click the "+" button in the top-right corner and select "New repository"
3. Name your repository (e.g., "techtrend-digest")
4. Add a description (optional)
5. Keep the repository public (required for GitHub Pages with a free account)
6. Click "Create repository"

### 2. Push Your Code to GitHub

From your local terminal/command prompt:

```bash
# Navigate to your project directory
cd path/to/TechTrend-Digest

# Initialize git repository (if not already done)
git init

# Add all files to git
git add .

# Commit changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/YOUR-USERNAME/techtrend-digest.git

# Push to GitHub
git push -u origin main
```

### 3. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" (tab in the repository navigation)
3. Scroll down to the "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait a few minutes for your site to be published

Your site will be available at: `https://YOUR-USERNAME.github.io/techtrend-digest/`

### 4. Set Up a Custom Domain (Optional)

If you have a custom domain you'd like to use:

1. In the GitHub Pages section of your repository settings
2. Enter your domain in the "Custom domain" field
3. Click "Save"
4. Create a CNAME record with your domain provider pointing to `YOUR-USERNAME.github.io`
5. Wait for DNS propagation (can take up to 48 hours)

### 5. Enable HTTPS (Recommended)

1. After your site is published and DNS is configured (if using a custom domain)
2. Check the "Enforce HTTPS" option in the GitHub Pages section of your repository settings

## Updating Your Site

To update your site after making changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Update description"

# Push to GitHub
git push
```

GitHub Pages will automatically rebuild and deploy your site after each push.

## Troubleshooting

- If your site isn't publishing, check the GitHub Pages section in repository settings for error messages
- Make sure your repository is public
- Check if there are any build errors in the "Actions" tab
- Verify all links in your HTML files use relative paths

## Support

For any issues with GitHub Pages deployment, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
