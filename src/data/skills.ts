export interface Skill {
    category: string;
    skills: {
        title: string;
        description: string;
    }[];
}

export const skillCategories: Skill[] = [
    {
        category: 'Technical Excellence',
        skills: [
            {
                title: 'React & TypeScript Mastery',
                description: 'Advanced patterns, hooks, performance optimization, and type-safe architectures in production environments',
            },
            {
                title: 'Component Architecture',
                description: 'Designing scalable, reusable component systems that grow with the product',
            },
            {
                title: 'Performance-First Mindset',
                description: 'Deep understanding of rendering behavior, code splitting, lazy loading, and Core Web Vitals',
            },
            {
                title: 'Responsive & Adaptive Design',
                description: 'Pixel-perfect implementation across all devices with mobile-first approach',
            },
        ],
    },
    {
        category: 'Product Development',
        skills: [
            {
                title: 'Ownership Mindset',
                description: 'Taking features from idea to production—not just implementing specs',
            },
            {
                title: 'Speed Without Compromise',
                description: 'Delivering fast while maintaining clean, maintainable code quality',
            },
            {
                title: 'API-Driven Development',
                description: 'Expert at integrating REST APIs and building data-driven UI layers',
            },
            {
                title: 'Design Translation',
                description: 'Turning UI/UX designs into pixel-accurate, interactive interfaces',
            },
        ],
    },
    {
        category: 'Collaboration & Impact',
        skills: [
            {
                title: 'Cross-Functional Teams',
                description: 'Strong collaboration with designers, product managers, and backend engineers',
            },
            {
                title: 'Startup Velocity',
                description: 'Thriving in fast-paced environments where priorities shift quickly',
            },
            {
                title: 'Rapid Learning',
                description: 'Quickly adopting new tools, patterns, and best practices as the ecosystem evolves',
            },
            {
                title: 'Code Quality Advocate',
                description: 'Writing clean, readable code that other developers enjoy working with',
            },
        ],
    },
];
