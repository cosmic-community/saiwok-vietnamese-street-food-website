# Saiwok Vietnamese Street Food Website

![Saiwok Restaurant Website](https://imgix.cosmicjs.com/d9fab1a0-63d3-11f0-a051-23c10f41277a-photo-1585032226651-759b368d7246-1752842198390.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, responsive restaurant website for Saiwok Vietnamese Street Food built with Next.js 15 and powered by [Cosmic](https://www.cosmicjs.com). Features dynamic menu management, online ordering integration, and a striking black-themed design with red accents that reflect the restaurant's brand identity.

## ✨ Features

- **Dynamic Menu Display** - Organized by categories with food images, descriptions, and pricing
- **Restaurant Information** - Contact details, hours, location, and about section
- **Online Ordering Integration** - Direct link to ordering platform
- **Special Announcements** - Featured promotions and offers
- **Mobile-Responsive Design** - Optimized for all devices
- **Content Management** - Easy updates through Cosmic CMS
- **Fast Image Loading** - Optimized with imgix for performance
- **SEO Optimized** - Proper meta tags and structured data

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=687a3e077ce43d105ef5eb25&clone_repository=687a40c67ce43d105ef5eb47)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "I want to build a website for a vietnamese restaurant called Saiwok Vietnamese Street Food. It should have their logo, location, a menu with food images, price and description that can be editable, an order online link. I included in the context their menu and logo."

### Code Generation Prompt

> I want to build a website for a vietnamese restaurant called Saiwok Vietnamese Street Food. It should have their logo, location, a menu with food images, price and description that can be editable, an order online link. I included their logo to be used as the color theme with a primarily black website with accents of white and red. Let's also have their logo be prominant when you reach the websites

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and transformation

## 📋 Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd saiwok-restaurant-website
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Cosmic credentials to `.env.local`:
```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

5. Start the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Cosmic SDK Examples

### Fetching Restaurant Information
```typescript
import { cosmic } from '@/lib/cosmic'

const restaurantInfo = await cosmic.objects.findOne({
  type: 'restaurant-info',
  slug: 'saiwok-restaurant-information'
}).props(['id', 'title', 'metadata'])
```

### Fetching Menu Items by Category
```typescript
const menuItems = await cosmic.objects.find({
  type: 'menu-items',
  'metadata.category': categoryId
}).props(['id', 'title', 'slug', 'metadata']).depth(1)
```

### Fetching Website Settings
```typescript
const settings = await cosmic.objects.findOne({
  type: 'restaurant-settings',
  slug: 'saiwok-website-settings'
}).props(['id', 'title', 'metadata'])
```

## 🎨 Cosmic CMS Integration

The application integrates with your Cosmic bucket structure:

- **Restaurant Info** - Contact details, hours, location, and about information
- **Restaurant Settings** - Homepage hero content, announcements, and ordering preferences
- **Menu Categories** - Organized menu sections with descriptions and display order
- **Menu Items** - Individual dishes with images, descriptions, pricing, and dietary information

All content is managed through the Cosmic dashboard and updates automatically on the website.

## 🚀 Deployment Options

### Deploy to Vercel
1. Connect your repository to Vercel
2. Add environment variables in the Vercel dashboard
3. Deploy automatically on every push to main

### Deploy to Netlify
1. Connect your repository to Netlify
2. Add environment variables in the Netlify dashboard
3. Set build command to `bun run build`
4. Set publish directory to `.next`

### Environment Variables for Production
Set these in your deployment platform:
- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key

Visit the [Cosmic docs](https://www.cosmicjs.com/docs) for more information about the Cosmic SDK and API.

<!-- README_END -->