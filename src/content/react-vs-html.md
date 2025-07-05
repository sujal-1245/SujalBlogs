
# ⚔️ React vs Vanilla HTML + JavaScript — Is It Overkill?

When you're just starting a small project, you might ask yourself:  
> “Do I really need React for this? Can’t I just use plain HTML and JavaScript?”

It’s a fair question — and one I’ve asked myself too, especially after diving deep into both styles through different projects.

---

## 🧱 Vanilla HTML + JS — The Basics, Raw & Flexible

Using plain HTML and JavaScript gives you:

- ✅ Full control over the DOM
- ✅ No build tools required
- ✅ Zero dependencies or frameworks
- ✅ Super lightweight (perfect for simple pages)

But…

- ❌ DOM manipulation gets messy quickly
- ❌ No built-in component structure
- ❌ You reinvent a lot of things manually (routing, state mgmt, etc.)

---

## ⚛️ Enter React — Scalable, Modular, Powerful

React isn’t just hype — it exists for a reason:

- 🔁 **Reusable Components**  
- 🎯 **State Management**  
- 🌎 **Community Ecosystem**
- 📦 **Tooling & Dev Experience**

---

## 🧪 Example: Displaying a Button and Updating Count

### 🚫 Vanilla HTML + JS

```html
<!-- index.html -->
<button onclick="increment()">Clicked 0 times</button>

<script>
  let count = 0;
  function increment() {
    count++;
    document.querySelector("button").innerText = `Clicked ${count} times`;
  }
</script>
````

### ✅ React Version (JSX)

```jsx
// Counter.jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

With React, you manage UI and state together — **no manual DOM manipulation**.

---

## 🧠 My Take as a Developer

| Use Case                                     | My Tool of Choice |
| -------------------------------------------- | ----------------- |
| Landing page with 3 sections                 | Vanilla HTML + JS |
| Interactive app (e.g. blog, form, dashboard) | React             |
| Portfolio with animation + routing           | React             |
| Low-resource one-pager                       | Vanilla HTML + JS |

---

## ✨ Real Example from My Portfolio

My portfolio [sujal-bhagat.vercel.app](https://sujal-bhagat.vercel.app) uses **React + Framer Motion + TailwindCSS** for smooth animations, components, and routing.

> I could have done it with HTML + JS — but not at the level of polish, interactivity, and reusability that React provides.

---

<h2 align="center">📌 Final Advice</h2>

<p align="center">
  Use the right tool for the job.  
  👉 Tiny page? Vanilla is fine.  
  🔄 Dynamic UI? Go React.
</p>

---

## 🔗 Related Reads

* [React vs Vite — Blog #2](/blog/react-vs-vite)
* [Building My Portfolio (Blog #1)](/blog/building-a-portfolio)
* [React Docs](https://react.dev/learn)

---

## 💬 Let's Connect

<p align="center">
  <a href="https://github.com/sujal-1245" target="_blank" style="display:inline-block;margin-right:10px;">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/sujal-bhagat-sdb1245" target="_blank" style="display:inline-block;">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

---

