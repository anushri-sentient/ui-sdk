# UI Component Library - Organized Structure

This directory contains a well-organized collection of reusable UI components, split into logical categories for better maintainability and development experience.

## 📁 Directory Structure

```
components/
├── basic/           # Fundamental UI elements
│   ├── card.html    # Enhanced card component
│   ├── badge.html   # Status and label badges
│   ├── avatar.html  # User profile images
│   ├── chips.html   # Tag and filter chips
│   ├── list.html    # Ordered and unordered lists
│   └── divider.html # Section dividers
├── data/            # Data display components
│   └── table.html   # Enhanced data tables
├── interactive/     # User interaction components
│   ├── accordion.html # Collapsible content sections
│   └── carousel.html  # Image carousel/slider
├── feedback/        # User feedback components
│   └── alert.html   # Notification alerts
├── media/           # Media and visualization
│   └── map.html     # Interactive maps
├── layout/          # Layout and structure
│   └── tabs.html    # Tabbed content sections
├── index.html       # Main demo page
└── README.md        # This documentation
```

## 🎯 Component Categories

### Basic Components (`/basic/`)
Fundamental UI elements that form the building blocks of interfaces:
- **Card**: Enhanced cards with glassmorphism effects
- **Badge**: Status indicators and labels
- **Avatar**: User profile images with different sizes
- **Chips**: Tag and filter components
- **List**: Ordered and unordered lists
- **Divider**: Section separators with different styles

### Data Components (`/data/`)
Components for displaying and organizing data:
- **Table**: Enhanced data tables with sorting, filtering, and status badges

### Interactive Components (`/interactive/`)
Components with user interaction and dynamic behavior:
- **Accordion**: Collapsible content sections
- **Carousel**: Image carousel with auto-play and navigation

### Feedback Components (`/feedback/`)
Components for user feedback and notifications:
- **Alert**: Auto-dismissing notification alerts with different types

### Media Components (`/media/`)
Components for displaying media and visualizations:
- **Map**: Interactive maps with markers, routes, and fallback support

### Layout Components (`/layout/`)
Components for organizing and structuring content:
- **Tabs**: Tabbed content sections with smooth transitions

## 🚀 Usage

### View All Components
Open `index.html` in your browser to see all components organized by category.

### Individual Components
Each component is self-contained with its own HTML, CSS, and JavaScript. You can:
1. Copy individual component files
2. Include them in your projects
3. Customize them as needed

### Component Structure
Each component file contains:
```html
<!-- Component HTML -->
<div class="demo-section">
    <h2 class="demo-title">Component Name</h2>
    <ui-component-name attributes="values"></ui-component-name>
</div>

<style>
/* Component-specific styles */
</style>

<script>
// Component initialization and functionality
</script>
```

## 🎨 Design System

All components use a consistent design system based on:
- **Chota CSS**: Lightweight CSS framework
- **Open Props**: CSS custom properties for consistent theming
- **Inter Font**: Modern, readable typography
- **Glassmorphism**: Modern glass-like effects
- **Smooth Animations**: CSS transitions and transforms

### CSS Custom Properties
```css
:root {
    --brand-hue: 250;
    --color-primary: hsl(var(--brand-hue) 80% 60%);
    --gradient-primary: linear-gradient(135deg, hsl(var(--brand-hue) 80% 60%), hsl(calc(var(--brand-hue) + 30) 80% 60%));
    --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --animation-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🔧 Customization

### Theming
Override CSS custom properties to match your brand:
```css
:root {
    --brand-hue: 200; /* Change to your brand color */
    --radius-size: 0.5rem; /* Adjust border radius */
}
```

### Component Attributes
Each component accepts various attributes for customization:
```html
<ui-card 
    title="Custom Title"
    subtitle="Custom Subtitle"
    image="path/to/image.jpg"
    actionText="Custom Action"
    variant="elevated"
    size="large">
</ui-card>
```

## 📱 Responsive Design

All components are fully responsive and work across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Performance

- Lightweight components with minimal dependencies
- CSS-only animations for smooth performance
- Lazy loading of map components
- Fallback support for unsupported features

## 📝 Development

### Adding New Components
1. Create a new HTML file in the appropriate category directory
2. Follow the component structure pattern
3. Add the component to the `index.html` loading list
4. Update this README with component documentation

### Component Guidelines
- Keep components self-contained
- Use semantic HTML
- Include accessibility features
- Add hover and focus states
- Provide fallback content
- Use CSS custom properties for theming

## 🤝 Contributing

1. Follow the existing component structure
2. Maintain consistent naming conventions
3. Include proper documentation
4. Test across different browsers
5. Ensure accessibility compliance

## 📄 License

This component library is open source and available under the MIT License. 