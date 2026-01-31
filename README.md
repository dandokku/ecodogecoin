# EcodogeCoin

## Overview

**EcodogeCoin** is a modern, responsive crypto coin website built with React and Tailwind CSS.
It’s designed as a marketing and informational site for a cryptocurrency project, showcasing the coin’s vision, tokenomics, roadmap, and contact details in a clean, animated layout.

## Tech Stack

* **React 18** – Component-based UI
* **React Router v6** – Single Page App routing
* **Tailwind CSS 3** – Utility-first styling
* **Framer Motion** – Animations and transitions
* **Swiper** – Sliders and carousels
* **React Icons & Heroicons** – Iconography
* **React Typed** – Animated typewriter text effect

## Features

* **Hero Section** – Eye-catching intro with animated text
* **About Section** – Explains the purpose and mission of EcodogeCoin
* **Tokenomics** – Visual breakdown of coin distribution
* **Roadmap** – Project milestones in a timeline format
* **Contact Section** – Easy way for visitors to reach out
* **Responsive Layout** – Works across desktop, tablet, and mobile

## Project Structure

```
src/
  components/
    SharedLayout.jsx
  pages/
    home/
      Home.jsx
      HeroSection.jsx
      AboutSection.jsx
      Tokenomics.jsx
      RoadMap.jsx
      Contact.jsx
  App.jsx
  index.js
  App.css
tailwind.config.js
postcss.config.js
```

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/dandokku/ecodogecoin.git
   cd ecodogecoin
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm start
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

## Tailwind Setup

Tailwind is configured in `tailwind.config.js` and processed via PostCSS.
Utility classes are used across all components for layout, spacing, and colors.

## Deployment

The site can be deployed to platforms like Netlify, Vercel, or GitHub Pages with no additional backend requirements.