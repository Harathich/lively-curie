# Harathi Chavala — Personal Portfolio Website

An interactive personal portfolio website designed for **Harathi Chavala**, presenting expertise across Software Engineering, Backend Architecture, and AI/ML Systems.

Built with **Next.js 16**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **HTML5 Canvas**.

---

## 🚀 Key Features & Art Direction

- **Dark Obsidian & Electric Lime Palette**: Deep charcoal background (`#080a0f`) paired with electric lime (`#ccff00`) accents and restrained lavender highlights.
- **Interactive Ambient Particle Mesh**: HTML5 Canvas rendering animated connected node networks reacting to mouse hover and scroll.
- **Asymmetric Selected Projects Grid**:
  - **ScamShield AI** (Priority #1): Autonomous multi-agent cyber-threat detection engine (FastAPI, LangGraph, LLM APIs, Tesseract OCR, MongoDB).
  - **Speech Emotion Recognition** (Priority #2): Hybrid CNN + BiLSTM + Attention acoustic audio signal classifier (12,000+ speech samples, Librosa MFCCs/Chroma).
  - **SkillTree**: Spring Boot learning & problem evaluation backend platform.
  - **Kafka Asynchronous Order Engine**: Event-driven distributed microservices.
  - **Customer Segmentation**: Unsupervised machine learning & PCA clustering.
  - **Fitness Microservices**: Distributed Spring Boot + React platform with Eureka service discovery.
- **Interactive Architecture Modals**: Interactive SVG flow diagrams for agent graphs, neural networks, microservices, Kafka topics, and ML clusters.
- **Evidence-Based Skill Pillars**: Dual pillars for Software Engineering and AI/ML linked directly to verified project codebases rather than percentage bars.
- **Single Source of Truth Config**: All profile data, projects, skills, education, and links are managed from `src/config/portfolio.ts`.

---

## 📝 How to Update & Edit Content Later

You can easily add, update, or delete any details without touching complex component code:

### 1. Adding, Editing, or Deleting Projects
Open [`src/config/portfolio.ts`](file:///c:/Users/HARATHI/Documents/antigravity/lively-curie/src/config/portfolio.ts) and locate the `projects` array:

- **To Add a Project**: Copy any existing project object in the array, paste it as a new entry, and fill in `id`, `title`, `tagline`, `description`, `techStack`, `githubUrl`, etc.
- **To Edit a Project**: Update any field (e.g. `techStack`, `implementedFeatures`, `architecture`, `githubUrl`) in `portfolioConfig.projects`.
- **To Delete a Project**: Simply delete the corresponding project object from the `projects` array.

### 2. Updating Personal Bio, Education, & Links
In [`src/config/portfolio.ts`](file:///c:/Users/HARATHI/Documents/antigravity/lively-curie/src/config/portfolio.ts), edit `portfolioConfig.profile`:
- Change your email: `email: "your-email@domain.com"`
- Update GitHub / LinkedIn handles: `github: "https://github.com/..."`
- Update degree or expected graduation: `expectedGraduation: "2027"`

### 3. Updating Achievements & NASA Hackathon Details
In [`src/config/portfolio.ts`](file:///c:/Users/HARATHI/Documents/antigravity/lively-curie/src/config/portfolio.ts), modify the `achievements` array to add hackathon awards, publications, or certificates.

### 4. Updating Your Resume PDF
To update your downloadable resume:
- Replace the file at [`public/Harathi_Chavala_Resume.pdf`](file:///c:/Users/HARATHI/Documents/antigravity/lively-curie/public/Harathi_Chavala_Resume.pdf) with your updated resume PDF file.

---

## 🛠️ Local Development Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Production Build & Verification
```bash
npm run build
```

---

## 🌐 Deploying to Vercel (Minimal Steps)

Deploying Next.js to **Vercel** is free, automatic, and takes under 2 minutes:

1. **Push your repository to GitHub**:
   ```bash
   git add .
   git commit -m "Complete Harathi Chavala portfolio website"
   git push origin main
   ```
2. **Go to Vercel**:
   - Visit [vercel.com](https://vercel.com) and log in with your GitHub account (`Harathich`).
3. **Import Project**:
   - Click **"Add New..."** → **"Project"**.
   - Select your portfolio repository from your GitHub repository list.
4. **Deploy**:
   - Keep default settings (Framework Preset: Next.js).
   - Click **"Deploy"**.
5. **Live Site**:
   - Vercel will build your site and generate a live URL (e.g., `https://harathich-portfolio.vercel.app`).
