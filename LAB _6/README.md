# Lab 6 - Udemy Landing Page Clone

A simple React webpage that mimics the Udemy landing page design.

## Project Structure

```
LAB _6/
├── src/
│   ├── components/          # All section components
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── AIEraSection.jsx
│   │   ├── CourseList.jsx
│   │   └── TrustedCompanies.jsx
│   ├── main.jsx             # Entry point - starts the app
│   ├── UdemyLandingPage.jsx # Main component - combines all sections
│   └── index.css            # All styling
├── index.html               # HTML template
└── package.json             # Dependencies
```

## How It Works

### main.jsx
- The starting point that runs first
- Imports the main component and CSS
- Renders the app to the page

### UdemyLandingPage.jsx
- The main component that combines everything
- Imports all the section components
- Puts them together in the correct order
- Includes the promo banner and footer

### Component Files (in components folder)

Each component is a separate file that handles one section:

1. **Header.jsx** - Top navigation bar with logo, links, search, and buttons
2. **HeroSection.jsx** - Main banner with big title and signup button
3. **SkillsSection.jsx** - Shows 3 skill category cards (uses array + map)
4. **AIEraSection.jsx** - Dark section about AI learning (uses array + map for benefits list)
5. **CourseList.jsx** - Grid of courses with details (uses array + map)
6. **TrustedCompanies.jsx** - Company logos section (uses array + map)

### index.css
- All the styling in one place
- Controls colors, layouts, spacing
- Already done - no need to change

## To Run

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser

## Key Beginner Concepts

### What you'll learn from this code:

1. **Components** - Each section is a separate function that returns HTML-like code
2. **JSX** - Writing HTML inside JavaScript (like `<div>content</div>`)
3. **Arrays** - Storing lists of data (courses, companies, skills)
4. **map() function** - Looping through arrays to create multiple elements
5. **Props** - Using data with curly braces `{variable}`
6. **Import/Export** - Sharing components between files
7. **CSS Classes** - Styling with `className` instead of `class`

### Simple Examples:

**Creating data:**
```javascript
const companies = ['Samsung', 'Cisco', 'Vimeo'];
```

**Looping through data:**
```javascript
{companies.map(function(name, index) {
  return <div key={index}>{name}</div>;
})}
```

**Using variables in JSX:**
```javascript
<h1>{course.title}</h1>
<p>{course.price}</p>
```

## Tips for Beginners

- Each `.jsx` file is one component
- Components start with capital letters
- Always add comments (`//`) to understand your code
- Use `function` instead of arrow functions `() =>` for clarity
- The `map()` function creates multiple items from an array
- Always include a `key` when using `map()`
