# Pulse Social Network

A modern, minimalist social media platform built with React, featuring a distinctive dark brutalist aesthetic.

## Features

- 🎨 **Modern Design**: Clean, brutalist-inspired interface with gradient accents
- 💬 **Post Creation**: Share your thoughts with the community
- ❤️ **Interactions**: Like, comment, share, and bookmark posts
- 📱 **Responsive**: Works seamlessly across all devices
- ⚡ **Fast**: Built with Vite for lightning-fast performance
- 🎯 **Trending**: Discover what's popular in real-time

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Lucide React** - Beautiful icons
- **Pure CSS** - Custom animations and styling

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Deployment to Netlify

### Option 1: Drag and Drop (Easiest)

1. Build the project:
```bash
npm install
npm run build
```

2. Drag the `dist` folder to Netlify's drop zone at https://app.netlify.com/drop

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket

2. Go to https://app.netlify.com and click "New site from Git"

3. Connect your repository

4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

5. Click "Deploy site"

### Option 3: Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Initialize and deploy:
```bash
netlify init
netlify deploy --prod
```

## Project Structure

```
pulse-social/
├── src/
│   ├── App.jsx          # Main application component
│   └── main.jsx         # React entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── netlify.toml         # Netlify deployment config
└── README.md           # This file
```

## Customization

The platform uses CSS variables and inline styles for easy customization:

- **Colors**: Modify the gradient values in App.jsx
- **Fonts**: Change the Google Fonts import in the component
- **Layout**: Adjust sidebar widths and spacing in the style objects

## Features in Detail

### Navigation
- Home feed with latest posts
- Trending topics
- Notifications center
- Saved posts collection
- User profile
- Settings panel

### Posts
- Create new posts (called "Pulses")
- Like/unlike posts
- Comment on posts
- Share posts
- Bookmark for later
- Rich text content

### Sidebar
- Trending topics with post counts
- Suggested users to follow
- Real-time statistics

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading ready
- Smooth animations with CSS
- Responsive images support

## License

MIT License - feel free to use this for your portfolio!

## Credits

Built with ❤️ using modern web technologies
