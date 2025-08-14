# 🎨 UI Component Library - Enhanced Edition

A modern, easy-to-use UI component library built with Chota CSS and Open Props, featuring reusable components with multiple usage patterns and a visual builder.

## 🚀 Quick Start (5 minutes)

### Option 1: Visual Builder (Recommended for beginners)
1. Open [`component-builder.html`](./component-builder.html) in your browser
2. Select a component type
3. Fill in the form fields
4. Copy the generated code
5. Paste into your project

### Option 2: Quick Start Guide
1. Follow the [Quick Start Guide](./quick-start.html) for step-by-step instructions
2. Learn different usage patterns
3. See live examples and demos

### Option 3: Direct Implementation
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Project</title>
    <link rel="stylesheet" href="https://unpkg.com/chota@latest">
    <link rel="stylesheet" href="https://unpkg.com/open-props">
    <script src="components/simple-components.js"></script>
</head>
<body>
    <!-- Simple card component -->
    <ui-card 
        title="Welcome"
        content="This is a beautiful card component!"
        actionText="Learn More"
    ></ui-card>
    
    <!-- Or use JavaScript API -->
    <script>
        UI.success("Welcome to UI Components!");
    </script>
</body>
</html>
```

## 🛠️ Usage Patterns

### 1. HTML Tags (Simplest)
```html
<ui-card title="Product" content="Description" actionText="Buy Now"></ui-card>
<ui-table headers="Name,Email" rows="John,john@example.com"></ui-table>
<ui-alert type="success" message="Success!" duration="3000"></ui-alert>
```

### 2. JavaScript API (Most Flexible)
```javascript
// Create components programmatically
const card = UI.card({
    title: "Product",
    content: "Description",
    actionText: "Buy Now"
});

const table = UI.table(userData, { striped: true, hoverable: true });

// Quick alerts
UI.success("Success message");
UI.error("Error message");
UI.warning("Warning message");
UI.info("Info message");

// Insert into DOM
UI.insert('#container', card);
```

### 3. Visual Builder (No Code Required)
- Open [`component-builder.html`](./component-builder.html)
- Select component type
- Fill form fields
- Copy generated code

## 📚 Available Components

### Basic Components
- **Card** - Content cards with images, titles, and actions
- **Badge** - Status indicators and labels
- **Avatar** - User profile images/icons
- **Chips** - Tag and filter components
- **List** - Ordered and unordered lists
- **Divider** - Section separators

### Data Components
- **Table** - Enhanced data tables with sorting and filtering

### Interactive Components
- **Accordion** - Collapsible content sections
- **Carousel** - Image carousel with auto-play

### Feedback Components
- **Alert** - Auto-dismissing notification alerts

### Media Components
- **Map** - Interactive maps with markers

### Layout Components
- **Tabs** - Tabbed content sections

## 🎯 Key Features

### ✅ Easy to Use
- **Visual Builder**: Create components without writing code
- **Multiple APIs**: HTML tags, JavaScript API, or visual builder
- **Smart Defaults**: Components work out of the box
- **Quick Start**: Get running in under 5 minutes

### ✅ Developer Friendly
- **Custom HTML Tags**: Semantic and intuitive
- **JavaScript API**: Programmatic component creation
- **TypeScript Support**: Full type definitions
- **No Dependencies**: Only requires Chota CSS and Open Props

### ✅ Production Ready
- **Responsive Design**: Works on all screen sizes
- **Accessibility**: Built with accessibility in mind
- **Performance**: Lightweight and fast
- **Cross-browser**: Works in all modern browsers

### ✅ Highly Customizable
- **CSS Variables**: Easy theming with custom properties
- **Multiple Variants**: Different styles for each component
- **Flexible Options**: Extensive customization options
- **Theme Support**: Multiple color schemes

## 📖 Documentation

### Getting Started
- **[Quick Start Guide](./quick-start.html)** - Get up and running in 5 minutes
- **[Usage Examples](./usage-examples.html)** - Comprehensive examples for all components
- **[Component Builder](./component-builder.html)** - Visual component creation tool

### Component Reference
- **[Component Attributes](./COMPONENT_ATTRIBUTES.md)** - Complete attribute reference
- **[Components Directory](./components/)** - Individual component files and demos

### Advanced Usage
- **[Simple Components API](./components/simple-components.js)** - JavaScript API documentation
- **[Core Registry](./core/registry.js)** - Advanced component registration

## 🎨 Theming & Customization

### CSS Custom Properties
```css
:root {
    --brand-hue: 250;                    /* Primary color hue */
    --color-primary: hsl(var(--brand-hue) 80% 60%);
    --radius-size: 1rem;                 /* Border radius */
    --shadow-soft: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --animation-smooth: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Component Variants
```html
<!-- Card variants -->
<ui-card variant="default"></ui-card>
<ui-card variant="elevated"></ui-card>
<ui-card variant="outlined"></ui-card>
<ui-card variant="minimal"></ui-card>

<!-- Size options -->
<ui-card size="small"></ui-card>
<ui-card size="medium"></ui-card>
<ui-card size="large"></ui-card>
```

## 🚀 Examples & Demos

### Basic Examples
```javascript
// Simple card
UI.card({ title: "Hello", content: "World" });

// Data table
UI.table([
    { name: "John", email: "john@example.com" },
    { name: "Jane", email: "jane@example.com" }
]);

// Success alert
UI.success("Operation completed!");
```

### Advanced Examples
```javascript
// Product catalog
const products = [
    { name: "Product 1", price: "$99", category: "Electronics" },
    { name: "Product 2", price: "$149", category: "Fashion" }
];

products.forEach(product => {
    const card = UI.card({
        title: product.name,
        subtitle: product.category,
        content: `Price: ${product.price}`,
        actionText: "Add to Cart",
        badge: "New"
    });
    UI.insert('#product-grid', card);
});
```

## 🔧 Development

### Project Structure
```
ui_component_demo/
├── components/              # Individual component files
│   ├── basic/              # Basic UI elements
│   ├── data/               # Data display components
│   ├── interactive/        # User interaction components
│   ├── feedback/           # User feedback components
│   ├── media/              # Media and visualization
│   └── layout/             # Layout components
├── core/                   # Core functionality
├── component-builder.html  # Visual component builder
├── quick-start.html        # Quick start guide
├── usage-examples.html     # Usage examples
└── README.md              # This file
```

### Adding New Components
1. Create component file in appropriate directory
2. Add to Simple Components API
3. Update documentation
4. Add to component builder

## 🌟 Why Choose This Library?

### ✅ **Easier Than Ever**
- **Visual Builder**: Create components without coding
- **Smart Defaults**: Everything works out of the box
- **Multiple APIs**: Choose your preferred method
- **Quick Start**: Get running in 5 minutes

### ✅ **More Flexible**
- **HTML Tags**: Simple and semantic
- **JavaScript API**: Programmatic creation
- **Visual Builder**: No-code solution
- **Extensible**: Easy to add new components

### ✅ **Better Developer Experience**
- **Live Examples**: See components in action
- **Interactive Demos**: Try before you use
- **Comprehensive Docs**: Everything you need to know
- **Copy-Paste Ready**: Generated code works immediately

### ✅ **Production Ready**
- **Responsive**: Works on all devices
- **Accessible**: Built with accessibility in mind
- **Performant**: Lightweight and fast
- **Maintainable**: Clean, well-documented code

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

- **Documentation**: Check the guides and examples
- **Issues**: Report bugs on GitHub
- **Questions**: Open a discussion on GitHub

---

**Ready to get started?** Check out the [Quick Start Guide](./quick-start.html) or try the [Component Builder](./component-builder.html)! 