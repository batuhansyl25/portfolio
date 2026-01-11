export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'reusable-components',
        title: 'Designing Reusable React Components for Product Teams',
        excerpt: 'How I build component libraries that scale from MVP to enterprise',
        date: '2024-12-15',
        readTime: '8 min read',
        content: `
# Designing Reusable React Components for Product Teams

After building 200+ projects, I've learned that the difference between good and great frontend work isn't just the code—it's how reusable and scalable your components are.

## The Problem

Most teams start with one-off components. A button here, a modal there. Six months later, you have 12 different button styles, inconsistent spacing, and every feature takes 3x longer to ship.

## My Approach

### 1. Start with Composition

I build components like LEGO blocks. Each piece has one job, and you combine them to create complex UIs.

\`\`\`tsx
// ❌ Don't: Monolithic component
<SuperButton size="lg" variant="primary" icon="check" loading={true} disabled={false} />

// ✅ Do: Composable pieces
<Button size="lg" variant="primary">
  <Icon name="check" />
  {loading ? <Spinner /> : 'Save Changes'}
</Button>
\`\`\`

### 2. Enforce Consistency with TypeScript

I use strict types to prevent inconsistencies:

\`\`\`tsx
type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  // ... TypeScript won't let you pass invalid values
}
\`\`\`

### 3. Design System Tokens

All spacing, colors, and typography come from CSS variables. Change one value, update everywhere.

### 4. Document with Examples

Every component includes usage examples. New developers ship features on day one because they can copy-paste working patterns.

## Results

Teams I've worked with ship features 3x faster after adopting this approach. Consistency goes to 100%, and designer-developer handoff becomes seamless.

The key? **Think in systems, not pages.**
    `,
    },
    {
        id: 'shipping-fast',
        title: 'Shipping Fast Without Breaking UX: My Frontend Checklist',
        excerpt: 'The checklist I use to deliver quality features in days, not weeks',
        date: '2024-11-28',
        readTime: '6 min read',
        content: `
# Shipping Fast Without Breaking UX: My Frontend Checklist

Speed matters in startups. But shipping broken features kills user trust. Here's my checklist for delivering fast without compromising quality.

## Pre-Development (15 min)

**1. Understand the "Why"**
- What user problem does this solve?
- What's the success metric?
- What can we skip for v1?

**2. Spike the Unknowns**
- API shape unclear? Ask backend now.
- Design feels off? Flag it before coding.
- New library? Test in a sandbox first.

## During Development

**3. Start with the Data Flow**
\`\`\`tsx
// I always start by typing the data
interface User {
  id: string;
  name: string;
  // ... this forces me to think through the feature
}
\`\`\`

**4. Build Mobile-First**
Mobile constraints force better UX decisions. Desktop is easier to expand than mobile is to compress.

**5. Use Real Data ASAP**
Mock data hides issues. I integrate the API on day one, even if it's incomplete.

## Before Shipping

**6. The Five States**
Every feature has these states. Test all of them:
- ✅ Loading
- ✅ Success
- ✅ Empty
- ✅ Error
- ✅ No Permission

**7. Accessibility Basics**
- Keyboard navigation works?
- Color contrast passes?
- Screen reader labels present?

**8. Performance Check**
- Bundle size OK?
- No layout shifts?
- 60fps interactions?

## Results

This checklist lets me ship features in 2-3 days that other teams take 2 weeks for. Quality stays high because I catch issues early.

**The secret? Structure, not speed.**
    `,
    },
    {
        id: 'api-driven-ui',
        title: 'API-Driven UIs: Patterns I Use for Scalable Frontends',
        excerpt: 'How to build frontends that adapt to changing APIs without rewrites',
        date: '2024-10-10',
        readTime: '10 min read',
        content: `
# API-Driven UIs: Patterns I Use for Scalable Frontends

Most frontend complexity comes from API integration. After 200+ projects, I've found patterns that make this dramatically simpler.

## Pattern 1: Separate Data from UI

**Bad:**
\`\`\`tsx
function UserProfile() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch('/api/user').then(res => res.json()).then(setUser);
  }, []);
  
  // UI logic mixed with data fetching
}
\`\`\`

**Good:**
\`\`\`tsx
// hooks/useUser.ts - Data logic isolated
function useUser(id: string) {
  // All API logic here
  return { user, loading, error, refetch };
}

// UserProfile.tsx - Pure UI
function UserProfile() {
  const { user, loading } = useUser(userId);
  if (loading) return <Skeleton />;
  return <div>{user.name}</div>;
}
\`\`\`

## Pattern 2: Type the API Response

I use TypeScript to catch API changes at compile time:

\`\`\`tsx
interface ApiUser {
  id: string;
  full_name: string; // API uses snake_case
}

interface User {
  id: string;
  name: string; // UI uses camelCase
}

// Transform at the boundary
function transformUser(apiUser: ApiUser): User {
  return {
    id: apiUser.id,
    name: apiUser.full_name,
  };
}
\`\`\`

When the API changes, TypeScript errors guide me to what needs updating.

## Pattern 3: Optimistic Updates

Don't wait for the server. Update UI immediately, rollback on error:

\`\`\`tsx
function toggleLike() {
  // Update UI instantly
  setLiked(true);
  setCount(count + 1);
  
  // Send request
  api.like(postId).catch(() => {
    // Rollback on error
    setLiked(false);
    setCount(count);
  });
}
\`\`\`

Users perceive this as 10x faster.

## Pattern 4: Normalize Data

Store API responses in a normalized structure:

\`\`\`tsx
// Instead of nested mess
{ user: { posts: [...], comments: [...] } }

// Flat and reusable
{
  users: { '1': {...} },
  posts: { '1': {...}, '2': {...} },
  comments: { '1': {...} }
}
\`\`\`

Now multiple components can share the same data without prop drilling.

## Results

These patterns let me:
- Build features 50% faster
- Handle API changes in minutes
- Keep components pure and testable
- Scale to complex data requirements

**The key? Treat API integration as architecture, not plumbing.**
    `,
    },
];
