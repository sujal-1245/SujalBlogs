# 🚀 Hosting Your Site on Vercel — The Right Way

Deploying your frontend app shouldn't feel like rocket science.  
Enter **Vercel** — the modern developer's go-to for hosting React, Next.js, Vite, and even plain HTML/CSS/JS projects.

In this guide, we’ll cover how to host a site on Vercel, best practices, and personal pro tips.

---

## 🔧 Why Vercel?

- ⚡ Blazing fast global CDN
- ✅ One-click deploy from GitHub
- 📦 Automatic builds for React/Vite/Next apps
- 🌀 Custom domains + env variables support
- 🚫 No server setup, no DevOps headaches

---

## 📁 Step-by-Step: Hosting Your Project

### 1. Push Your Code to GitHub

Make sure your project (React/Vite/HTML/CSS/etc.) is on GitHub.

```bash
git init
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

---

### 2. Sign in to Vercel

Go to 👉 [vercel.com](https://vercel.com)

* Log in with GitHub
* Click **“New Project”**
* Select your repo

---

### 3. Configure Settings

Vercel will auto-detect your framework (React, Vite, etc.)

If using **Vite**, make sure:

* Build Command: `vite build`
* Output Directory: `dist`

For **CRA (Create React App)**:

* Build Command: `npm run build`
* Output Directory: `build`

Hit **Deploy** 🚀

---

## 🌐 Add a Custom Domain (Optional)

1. Go to your project dashboard
2. Click **Settings → Domains**
3. Add your domain like `yourname.dev`
4. Configure DNS (Vercel provides step-by-step instructions)

---

## 📁 Best Practices for Hosting

| Practice                      | Why It Matters                               |
| ----------------------------- | -------------------------------------------- |
| ✅ Use `.env` files            | Keeps secrets safe with `VERCEL_ENV` support |
| 🧪 Enable preview deployments | For testing every PR                         |
| 🧹 Ignore unnecessary files   | Clean build by customizing `.vercelignore`   |
| 🔁 Re-run failed builds       | Debug CI easily with Vercel’s UI             |
| 📊 Check analytics            | Built-in Vercel analytics are free & useful  |

---

## ⚔️ Vercel vs Netlify — Which Hosting Platform Wins?

| Feature                       | 🖤 Vercel                           | 💚 Netlify                          |
|------------------------------|------------------------------------|-------------------------------------|
| **Best For**                 | Next.js, Vite, React                | Static sites, JAMstack, Hugo, Vue   |
| **Build Tool Detection**     | Auto (esp. Next/Vite optimized)    | Auto-detects many frameworks        |
| **Preview Deployments**      | ✅ Perfect with PRs                 | ✅ Works well too                    |
| **Edge/Serverless Functions**| Good (Next-based APIs)             | Great + built-in form handling      |
| **Analytics**                | Paid (Pro plan)                    | Free analytics (basic)              |
| **Custom Domains + SSL**     | Easy to set and verify             | Also easy, includes Netlify DNS     |
| **Pricing**                  | Free + Paid Tiers                  | Free + Paid Tiers                   |

---

## 🧠 Personal Tips from Me

* I host multiple live sites on Vercel:

  * 🛒 [ShopEZ](https://shop-ez-sujal-1245s-projects.vercel.app/)
  * 🧑‍💻 [My Portfolio](https://sujal-bhagat.vercel.app)
* I always set up **preview deployments** for blog changes
* **Don’t ignore your `robots.txt`** — especially on SEO-friendly blogs!

---

<h2 align="center">🚀 Host Your Site in 5 Minutes</h2>

<p align="center">
  <a href="https://vercel.com/import" target="_blank">
    <img src="https://img.shields.io/badge/Deploy%20Now%20with-Vercel-000?style=for-the-badge&logo=vercel" alt="Deploy with Vercel" />
  </a>
</p>

---

## 📌 Related Blogs

* [Building a Dev Portfolio from Scratch](/blog/building-a-portfolio)
* [React vs Vite — Speed Showdown](/blog/react-vs-vite)
* [Tailwind vs CSS — Styling Smackdown](/blog/tailwind-vs-css)

---

## 💬 Let’s Connect

If you found this helpful — connect with me!

<p align="center">
  <a href="https://github.com/sujal-1245" target="_blank" style="display:inline-block;margin-right:10px;">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/sujal-bhagat-sdb1245" target="_blank" style="display:inline-block;margin-right:10px;">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

---

## 🌟 Enjoyed the Read?

Consider starring the repo or sharing this with a dev friend who’s still afraid of deployment 😄

---
