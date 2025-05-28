# Nicholas Malm - Portfolio

This is my personal portfolio website built with Next.js. Feel free to fork it and make it your own!

🌐 **Live site:** [nicholasmalm.com](https://nicholasmalm.com)

## About

This portfolio consists of three main sections:

- **Main Portfolio** (`/`) - My developer portfolio showcasing programming projects and skills
- **Photography Portfolio** (`/photo`) - A separate photography showcase with categorized galleries
- **Link Tree** (`/tree`) - A simple link tree page for additional links and resources


## Getting Started

### Prerequisites
- Node.js 18+
- npm, yarn, pnpm or bun

### Installation

1. Clone the project
```bash
git clone https://github.com/nickem00/portfolio-next.git
cd portfolio-next
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Tech Stack

- **Framework:** Next.js 15.1.8 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Analytics:** Vercel Analytics & Speed Insights
- **Hosting:** Vercel

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main portfolio page
│   ├── photo/             # Photography portfolio
│   │   ├── page.tsx       # Photo gallery overview
│   │   └── [category]/    # Dynamic category pages
│   └── tree/              # Link tree page
├── components/
│   ├── DevPort/          # Developer portfolio components
│   ├── PhotoPort/        # Photography portfolio components
│   └── UI/               # Reusable UI components
public/
├── images/               # General images
├── photography/          # Photography portfolio images
│   ├── Animals/
│   ├── Landscape/
│   ├── People/
│   └── Other/
└── sitemap.xml          # SEO sitemap
```

## Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Customization

This portfolio is designed to be easily customizable. You can:

- Replace the content in the components with your own projects and information
- Add or remove photography categories by updating the folder structure in `public/photography/`
- Modify the styling using Tailwind CSS classes
- Add new pages by creating files in the `src/app/` directory

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Feel free to use this project as a template for your own portfolio!
