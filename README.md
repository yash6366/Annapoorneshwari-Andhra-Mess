# Annapoorneshwari Andhra Mess — Business Website

A simple, fast-loading, mobile-responsive static website for **Annapoorneshwari Andhra Mess**, an authentic Andhra-style restaurant and mess serving South Indian food in Banashankari 6th Stage, Bengaluru.

---

## 🍛 Project Overview

- **Business Name**: Annapoorneshwari Andhra Mess
- **Business Type**: Andhra-style restaurant & mess serving authentic South Indian meals, banana leaf bhojanam, tiffins, and Andhra spice specialties.
- **Location**: Site No. 15, 100 Feet Road, Banashankari 6th Stage, 4th Block, Bengaluru, Karnataka 560109, India ([Google Maps](https://www.google.com/maps/place/Annapoorneshwari+Andhra+Mess/@12.8790671,77.5118437,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3f7d78a636d7:0xa7f9b78016611918!8m2!3d12.8790671!4d77.5118437!16s%2Fg%2F11fk3_mrsl))
- **Contact Number**: `+91 9535776435`
- **WhatsApp**: `+91 9535776435` ([https://wa.me/919535776435](https://wa.me/919535776435))
- **Instagram**: [`@__andhra__mess__`](https://www.instagram.com/__andhra__mess__/)
- **WhatsApp Channel**: [Annapoorneshwari Andhra Mess Channel](https://whatsapp.com/channel/0029VbCTgRv0rGiNJuyyPO2N)

---

## 🎨 Design & Branding

- **Palette**:
  - Deep Green: `#174D32`
  - Traditional Gold: `#D4AF37`
  - Warm Cream: `#FFF8E7`
  - Dark Brown: `#3B2A20`
- **Typography**: Google Fonts (*Cinzel* for traditional elegance, *Plus Jakarta Sans* for crisp readability)
- **Traditional Elements**: Subtle South Indian banana leaf motif, brass accents, ornamental dividers, and clean mobile-first responsiveness.

---

## 📁 File Structure

```text
annapoorna-andhra-mess/
├── index.html              # Main single-page semantic HTML structure & Schema.org data
├── css/
│   └── style.css           # Pure Vanilla CSS3 design system, responsive breakpoints, & micro-interactions
├── js/
│   └── script.js           # Vanilla JS for responsive navigation, active scroll spy, & dynamic year
├── assets/
│   └── images/
│       ├── logo.png                 # Official Annapoorneshwari Andhra Mess brand logo & emblem
│       ├── hero-meal.jpg            # High-res authentic Andhra banana leaf meal photography
│       ├── andhra-meals.jpg         # Authentic Andhra Bhojanam presentation
│       ├── menu-chart.jpg           # Official menu chart & high-resolution lightbox poster
│       └── favicon.svg              # Traditional vector favicon
├── 404.html                # Custom 404 Not Found error page
├── vercel.json             # Vercel deployment caching & security headers configuration
└── README.md               # Project documentation & deployment guides
```

---

## 🚀 Running Locally

Because this is a pure static website with no backend dependencies, you can run it using any local static file server or by opening `index.html` directly in your browser.

### Option 1: Python Built-in Server (Recommended)
```bash
# In the project directory:
python -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Option 2: Node.js `serve` / `npx http-server`
```bash
npx serve .
# or
npx http-server -p 8080 .
```

### Option 3: VS Code Live Server
Right-click `index.html` and click **"Open with Live Server"**.

---

## 🌐 Deployment Instructions

### 1. Deploying to GitHub Pages
1. Initialize Git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Annapoorneshwari Andhra Mess website"
   ```
2. Create a repository on GitHub (e.g. `annapoorneshwari-andhra-mess`) and push your code:
   ```bash
   git remote add origin https://github.com/<your-username>/annapoorneshwari-andhra-mess.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub, navigate to **Settings** > **Pages**.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Your website will be live at `https://<your-username>.github.io/annapoorneshwari-andhra-mess/`.

### 2. Deploying to Vercel (Recommended)

#### Method A: Using Vercel CLI
1. Run the deployment command in your terminal:
   ```bash
   npx vercel
   ```
2. For production release:
   ```bash
   npx vercel --prod
   ```

#### Method B: Using GitHub & Vercel Dashboard
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Deploy Annapoorneshwari Andhra Mess to Vercel"
   git branch -M main
   git remote add origin https://github.com/<your-username>/annapoorneshwari-andhra-mess.git
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Click **Deploy**. Vercel will automatically detect the static configuration from `vercel.json` and deploy instantly.

### 3. Deploying to Netlify
1. Drag and drop the project folder directly onto the [Netlify Drop](https://app.netlify.com/drop) dashboard.
2. Or use Netlify CLI:
   ```bash
   npx netlify deploy --prod --dir=.
   ```

---

## 📋 Information Verification Notes

- **Verified Details Included**:
  - Restaurant Name: *Annapoorneshwari Andhra Mess*
  - Address: *Site No. 15, 100 Feet Road, Banashankari 6th Stage, 4th Block, Bengaluru, Karnataka 560109*
  - Contact Telephone: `+91 9535776435`
  - WhatsApp Integration: `https://wa.me/919535776435`
  - Direct Google Maps Directions link and interactive location map
- **Future Customizations / Pending Owner Confirmation**:
  - Exact daily operating hours (e.g., lunch and dinner timings).
  - Specific pricing and daily rotating non-veg / veg special offerings (e.g., Mutton Paya / Goat-Leg Soup) can be added to the `#specialties` section once verified by the owner.
