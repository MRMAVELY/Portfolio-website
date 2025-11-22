# Typography Guidelines

## Base Font
**Lexend Deca** is now the base font for the entire application, imported from Google Fonts with weights 400, 500, 600, and 700.

## Color Palette
- **Brand Gray**: `#717171` - Used for "Hey!" text
- **Brand Dark**: `#131313` - Used for main content text
- **Brand Cream**: `#faf8ed` - Background color

## Typography Scale

### Display Text
```css
.text-display {
  font-size: 83.85px;
  font-weight: 600;
  letter-spacing: -0.08em;
}
```

### Heading Text
```css
.text-heading {
  font-size: 2.5rem;
  font-weight: 600;
}
```

### Subheading Text
```css
.text-subheading {
  font-size: 1.5rem;
  font-weight: 500;
}
```

### Body Text
```css
.text-body {
  font-size: 1rem;
  font-weight: 400;
}
```

### Caption Text
```css
.text-caption {
  font-size: 0.875rem;
  font-weight: 400;
}
```

### Small Text
```css
.text-small {
  font-size: 0.75rem;
  font-weight: 400;
}
```

## Utility Classes

### Color Classes
- `text-brand-gray` - `#717171`
- `text-brand-dark` - `#131313`
- `text-brand-cream` - `#faf8ed`
- `bg-brand-cream` - `#faf8ed` background

### Font Classes
- `font-lexend` - Explicit Lexend Deca font family

## Usage Examples

### Header (Current Implementation)
```tsx
<h1 className="leading-none text-display">
  <span className="text-brand-gray">Hey!</span>
  <span className="block text-brand-dark">
    I'm Vimal<br />
    (0&gt;1) product designer
  </span>
</h1>
```

### Future Components
Use the typography scale classes for consistent sizing:
```tsx
// For large headings
<h2 className="text-heading text-brand-dark">Section Title</h2>

// For subheadings
<h3 className="text-subheading text-brand-gray">Subsection</h3>

// For body text
<p className="text-body text-brand-dark">Content text</p>

// For captions
<span className="text-caption text-brand-gray">Caption text</span>
```

## Best Practices
1. **Always use the color utility classes** instead of hardcoding colors
2. **Use the typography scale** for consistent font sizing
3. **Maintain the letter spacing** of -0.08em for display text
4. **Use semantic HTML** with proper heading hierarchy
5. **Apply font weights** appropriately (400 for body, 600 for headings)

## Future Updates
When adding new components:
1. Check this documentation first
2. Use existing utility classes
3. Follow the established color palette
4. Maintain consistent letter spacing for headers
5. Test across different screen sizes