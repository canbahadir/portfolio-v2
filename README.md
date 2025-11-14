# Portfolio v2

A modern, minimalist portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean monochrome design inspired by [Zen Browser](https://zen-browser.app/) with a warm beige color palette.

![Portfolio Preview](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38bdf8?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Multi-page Architecture**: Home, About, Blog, and Stack pages with smooth navigation
- **Monochrome Design**: Clean #f2f0e3 color scheme with orange accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern UI Components**: Built with Shadcn UI and Radix UI primitives
- **Borderless Cards**: Zen Browser-inspired hover effects with subtle background darkening
- **Profile Sections**: 
  - Hero section with profile image and bio
  - Contact/schedule section
  - Social links grid
  - Featured projects showcase
  - Workspaces organization
  - Quick glance previews
- **Blog Integration**: Display Medium posts with titles and dates
- **Stack Showcase**: Hardware and software tools in compact list format

## 🛠 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Netlify](https://www.netlify.com/)

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm
- Git

### Setup

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio-v2
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your profile image** (optional)
   - Place your image in the `public` folder
   - Update the `profileImage` path in `lib/constants.ts`

4. **Customize content**
   - Update personal information in `lib/constants.ts`
   - Update blog posts in `lib/blog-data.ts`
   - Update stack items in `lib/stack-data.ts`

5. **Run development server**
```bash
npm run dev
```

6. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-v2/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── blog/
│   │   └── page.tsx          # Blog index page
│   ├── stack/
│   │   └── page.tsx          # Stack page (hardware/software)
│   ├── layout.tsx            # Root layout with navigation
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles + Tailwind
├── components/
│   ├── ui/
│   │   ├── button.tsx        # Button component
│   │   └── card.tsx          # Card component
│   ├── vaulted/              # Unused components (preserved)
│   │   ├── workspace-section.tsx  # Workspaces section (vaulted)
│   │   └── README.md         # Vaulted components guide
│   ├── glance-section.tsx    # Quick preview cards
│   ├── hero-section.tsx      # Profile hero section
│   ├── links-section.tsx     # Social links grid
│   ├── navigation.tsx        # Top navigation menu
│   ├── projects-section.tsx  # Featured projects
│   ├── schedule-section.tsx  # Contact/meeting section
│   ├── theme-provider.tsx    # Theme context provider
│   └── theme-toggle.tsx      # Theme toggle component
├── lib/
│   ├── blog-data.ts          # Blog posts data
│   ├── constants.ts          # Profile and content data
│   ├── stack-data.ts         # Hardware/software stack
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── components.json           # Shadcn UI config
├── netlify.toml              # Netlify deployment config
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Customization

### Update Profile Information

Edit `lib/constants.ts`:

```typescript
export const profileInfo = {
  name: 'Your Name',
  title: 'Your Title',
  bio: 'Your bio...',
  affiliations: [
    'Your affiliation 1',
    'Your affiliation 2'
  ],
  profileImage: '/your-image.jpg',
}
```

### Add Blog Posts

Edit `lib/blog-data.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    title: 'Your Post Title',
    date: '2024-01-15',
    url: 'https://medium.com/@yourhandle/post',
    excerpt: 'Post description'
  },
]
```

### Add Stack Items

Edit `lib/stack-data.ts`:

```typescript
export const hardwareStack: StackItem[] = [
  {
    name: 'Item Name',
    description: 'Item description',
    url: 'https://product-url.com',
    category: 'hardware'
  },
]
```

### Customize Colors

Edit `app/globals.css` to change the base color scheme:

```css
:root {
  --background: 42 22% 93%; /* Base: #f2f0e3 */
  --foreground: 42 6% 12%;  /* Dark text */
  /* ... other color variables */
}
```

## 🚀 Deployment to Netlify

### Method 1: Deploy via Git (Recommended)

1. **Push to Git Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, Bitbucket)
   - Select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - The `netlify.toml` file will handle the configuration automatically

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Your site will be live at `https://your-site-name.netlify.app`

### Method 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login to Netlify**
```bash
netlify login
```

3. **Initialize Netlify**
```bash
netlify init
```

4. **Deploy**
```bash
netlify deploy --prod
```

### Method 3: Drag and Drop

1. **Build the project**
```bash
npm run build
```

2. **Drag and drop**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `.next` folder to the drop zone

### Post-Deployment

1. **Verify Deployment**
   - Visit your Netlify URL
   - Test all pages and navigation
   - Check mobile responsiveness

2. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records as instructed

3. **Environment Variables (If Needed)**
   - Go to Site settings → Environment variables
   - Add any required environment variables

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🗄️ Vaulted Features

Some features are preserved but not currently active. They can be easily restored when needed.

### Workspaces Section
**Status**: Currently hidden  
**Location**: `components/vaulted/workspace-section.tsx`

A section that organizes content into categorized workspaces (Projects, Blog, Certificates). Inspired by Zen Browser's workspace feature.

**To Restore:**
1. Open `app/page.tsx`
2. Uncomment the import:
   ```typescript
   import { WorkspaceSection } from "@/components/vaulted/workspace-section"
   ```
3. Uncomment the component:
   ```tsx
   <WorkspaceSection />
   ```
4. Place it where you want it in the page layout

**Why vaulted?** Simplified the home page layout while keeping the feature available for future use.

See `components/vaulted/README.md` for more details on vaulted components.

## 🎯 Key Design Decisions

1. **Monochrome Palette**: Single color (#f2f0e3) for a calm, professional look
2. **Borderless Design**: Zen Browser-inspired hover effects without borders
3. **Compact Lists**: Efficient use of space in stack and blog pages
4. **Orange Accents**: Highlighted "Platform Engineer" title for visual interest
5. **Mobile-First**: Responsive breakpoints ensure great experience on all devices
6. **Modular Sections**: Easy to show/hide sections by commenting out components

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- Design inspiration from [Zen Browser](https://zen-browser.app/)
- UI components from [Shadcn UI](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact section on the website.

---

Built with ❤️ using Next.js and TypeScript
