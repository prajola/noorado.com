# Noorado - Custom Software Solutions Website

> Modern, futuristic website for IT consulting services, emphasizing custom software development based on client requirements.

## 🚀 Live Demo

- **Development**: http://localhost:5174/
- **Production**: [Deploy to GitHub Pages or Vercel]

## ✨ Features

### Custom Software Focus
- **Hero Section**: Clear messaging about custom software built to requirements
- **4-Step Process**: Visual journey from requirements to delivery
- **Comparison Section**: Templates vs Custom Built comparison
- **Services Grid**: 8 custom software services
- **Animated Stats**: Live counting statistics
- **Portfolio Showcase**: Case studies with metrics
- **Contact Form**: Requirements gathering focused

### Modern UI/UX
- Futuristic black theme with orange (#FF6B35) accents
- Glassmorphism effects throughout
- Smooth scroll animations (Framer Motion)
- Responsive mobile-first design
- Custom gradient text and glow effects
- Animated counters and interactions

## 🛠 Tech Stack

- **React 19** - UI Framework
- **TypeScript** - Type Safety
- **Vite 8** - Build Tool & Dev Server
- **Tailwind CSS 4** - Styling
- **Framer Motion 12** - Animations
- **Lucide React** - Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/prajola/noorado.com.git
cd noorado.com

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.tsx           # Navigation with mobile menu
│   ├── Hero.tsx             # Hero section with requirements messaging
│   ├── CustomProcess.tsx    # 4-step process visualization
│   ├── WhyCustom.tsx        # Templates vs Custom comparison
│   ├── Services.tsx         # Custom software services grid
│   ├── Stats.tsx            # Animated statistics
│   ├── Portfolio.tsx        # Case studies carousel
│   ├── About.tsx            # About section
│   ├── Contact.tsx          # Requirements form
│   └── Footer.tsx           # Footer with links
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles
```

## 🎨 Customization

### Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  brand: {
    orange: '#FF6B35',        // Primary
    'orange-dark': '#FF8500', // Secondary
  },
}
```

### Content Updates
- **Services**: `src/components/Services.tsx`
- **Case Studies**: `src/components/Portfolio.tsx`
- **Process Steps**: `src/components/CustomProcess.tsx`
- **Contact Info**: `src/components/Contact.tsx`

## 🚢 Deployment

### GitHub Pages (Automated)
Push to `main` branch - GitHub Actions will auto-deploy

### Manual Build
```bash
npm run build
# Upload /dist folder to your hosting
```

### Vercel/Netlify
Connect your repository - auto-deploy on push

## 📝 Environment Variables

No environment variables required for basic setup.

## 🎯 Key Messaging

Every section emphasizes:
- ✅ Custom software built to YOUR requirements
- ✅ No templates or cookie-cutter solutions
- ✅ 100% code ownership
- ✅ Scalable and unique
- ✅ Transparent process

## 🤝 Contributing

This is a private project for Noorado. For suggestions or issues, please contact the team.

## 📄 License

Apache License 2.0 - See LICENSE file for details

## 🙏 Credits

- Design inspired by modern IT consulting firms
- Built with Claude AI assistance
- Icons: Lucide React
- Fonts: Inter & Space Grotesk (Google Fonts)

---

**Built for Noorado** - Custom Software Solutions
