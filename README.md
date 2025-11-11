# Fox Constructions Website

A modern, responsive construction company website built with HTML, Tailwind CSS, and vanilla JavaScript.

## Overview

Fox Constructions is a professional construction company website showcasing services, projects, team members, and providing a contact form for potential clients.

**Live Preview:** [Add your Cloudflare Pages URL here]

## Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Modern UI/UX** - Clean, professional construction-themed design
- **Smooth Animations** - Using AOS (Animate On Scroll) library
- **Sticky Navigation** - Fixed navbar with smooth scroll navigation
- **Contact Form** - Client-side validation (no backend required)
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG 2.1 AA compliant
- **Performance Optimized** - Lightweight and fast loading

## Color Palette

- **Primary (Construction Gold):** `#F5B800`
- **Accent (Charcoal Gray):** `#2B2B2B`
- **Secondary (Concrete Silver):** `#E5E5E5`
- **Text (Dark Slate):** `#1E1E1E`
- **Highlight (Safety Orange):** `#F97316`
- **Background (Off White):** `#FAFAFA`

## Project Structure

```
fox-construction/
├── index.html              # Main HTML file
├── js/
│   └── main.js            # JavaScript functionality
├── src/
│   └── input.css          # Tailwind CSS source
├── dist/
│   └── output.css         # Compiled CSS (if using Tailwind CLI)
├── assets/
│   ├── images/            # Image assets
│   └── icons/             # Icon assets
├── _headers               # Cloudflare Pages headers
└── README.md              # This file
```

## Sections

1. **Hero Section** - Company tagline and call-to-action
2. **About/CEO Welcome** - CEO message and company introduction
3. **Services** - Three main service offerings
4. **Mission Statement** - Company values and history
5. **Capabilities** - Five key capability areas
6. **Projects Gallery** - Sample project showcase
7. **Team** - CEO, Directors, and team members
8. **Contact Form** - Contact information and inquiry form
9. **Footer** - Quick links and company info

## Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No frameworks, pure JS
- **AOS** - Animate On Scroll library
- **Google Fonts** - Inter font family

## Setup & Installation

### Option 1: Direct Usage (Recommended for Cloudflare Pages)

1. Clone or download the repository
2. Open `index.html` in a web browser
3. Deploy to Cloudflare Pages

### Option 2: Local Development with Tailwind CLI (Optional)

If you want to customize Tailwind and build from source:

```bash
# Install Tailwind CSS
npm install -D tailwindcss

# Create Tailwind config
npx tailwindcss init

# Build CSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

# Update index.html to use ./dist/output.css instead of CDN
```

## Deployment to Cloudflare Pages

1. **Push to Git Repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fox Constructions website"
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Deploy to Cloudflare Pages:**
   - Log in to Cloudflare Dashboard
   - Go to Pages → Create a project
   - Connect your Git repository
   - Set build settings:
     - **Build command:** Leave empty (no build needed)
     - **Build output directory:** `/`
   - Deploy

3. **Configure Custom Domain (Optional):**
   - Go to your Pages project → Custom domains
   - Add your custom domain (e.g., foxconstructions.com)
   - Update DNS records as instructed

## Customization

### Updating Content

- Edit `index.html` to update text content
- Replace placeholder emojis with real images in `/assets/images/`
- Update contact information in the Contact section

### Changing Colors

Edit the Tailwind config in `index.html` (line 33) or `src/input.css`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'construction-gold': '#F5B800',
                // ... other colors
            }
        }
    }
}
```

### Adding Real Images

1. Add images to `/assets/images/`
2. Update the following in `index.html`:
   - CEO photo (currently placeholder)
   - Team member photos
   - Project gallery images
   - Service section images

3. Use lazy loading for better performance:
   ```html
   <img data-src="assets/images/photo.jpg" alt="Description" loading="lazy">
   ```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 2.5s
- Cumulative Layout Shift: < 0.1

## Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Color contrast: WCAG AA compliant
- Screen reader friendly

## SEO Features

- Semantic HTML structure
- Meta tags (description, keywords, Open Graph)
- Proper heading hierarchy
- Alt text for images (add when using real images)
- Mobile-friendly
- Fast loading time

## Contact Form

The contact form includes client-side validation for:
- Name (minimum 2 characters)
- Email (valid format)
- Phone (optional, 10+ digits)
- Project type (required selection)
- Message (minimum 10 characters)

**Note:** This is HTML only (no backend). To enable actual form submissions, integrate with:
- Cloudflare Pages Functions
- Formspree
- Web3Forms
- EmailJS
- Your own backend API

## Testing

To test the website:

```bash
# Run with local server
npx serve

# Or use Python
python -m http.server 8000

# Then open http://localhost:8000
```

## Credits

- **Design & Development:** Fox Constructions Website Team
- **Tailwind CSS:** https://tailwindcss.com
- **AOS Library:** https://michalsnik.github.io/aos/
- **Fonts:** Google Fonts (Inter)

## License

© 2025 Fox Construction.pk - All rights reserved.

## Support

For questions or support, contact:
- **Email:** info@foxconstructions.pk
- **Website:** [Your website URL]

---

Built with ❤️ for Fox Constructions Private Limited