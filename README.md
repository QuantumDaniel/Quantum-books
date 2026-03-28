# Don't Guess Your Future — Landing Page

React landing page for the eBook, ready to deploy on Netlify.

---

## 🔧 Setup Before Deploying

### 1. Add Your Paystack Payment Link
Open `src/App.js` and replace line 8:
```js
const PAYSTACK_LINK = "https://paystack.com/pay/YOUR_LINK_HERE";
```
with your actual Paystack payment page link.

### How to get your Paystack link:
1. Go to [dashboard.paystack.com](https://dashboard.paystack.com)
2. Sign up / log in
3. Go to **Payment Pages** → **Create Payment Page**
4. Set amount to **500**, currency **NGN**
5. Add your eBook name and description
6. Copy the generated link and paste it above

---

## 🚀 Deploy to Netlify

### Option A — Netlify CLI (Fastest)
```bash
npm install
npm run build
npx netlify deploy --prod --dir=build
```

### Option B — Netlify Dashboard (Easiest)
1. Run `npm run build` locally
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Deploy manually**
3. Drag and drop the `build/` folder

### Option C — GitHub + Netlify (Best for updates)
1. Push this folder to a GitHub repo
2. In Netlify: **Add new site** → **Import from Git**
3. Build command: `npm run build`
4. Publish directory: `build`
5. Every push to main auto-deploys ✅

---

## 📁 Project Structure
```
dgyf-landing/
├── public/
│   └── index.html
├── src/
│   ├── App.js       ← All page sections + components
│   ├── App.css      ← All styling
│   └── index.js     ← React entry point
├── netlify.toml     ← Netlify build config
└── package.json
```

---

## ✏️ Customisation Tips
- **Price**: Change `BOOK_PRICE` in App.js line 9
- **Testimonials**: Edit the `testimonials` array in App.js
- **Book cover**: Replace the CSS book mock with an `<img>` tag once you have the cover image
- **Social media links**: Add to the Footer component

---

Built with React · Hosted on Netlify · Payments via Paystack
