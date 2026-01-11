export interface Project {
    id: string;
    title: string;
    category: 'UI' | 'Dashboard' | 'SaaS';
    challenge: string;
    solution: string;
    result: string;
    tech: string[];
    demoUrl?: string;
    githubUrl?: string;
    // Enhanced fields for detail page
    description: string;
    features: string[];
    metrics: {
        label: string;
        value: string;
    }[];
    images: string[]; // Placeholder paths, will generate actual images
}

export const projects: Project[] = [
    {
        id: 'task-flow-ui',
        title: 'TaskFlow Pro',
        category: 'SaaS',
        challenge: 'Users struggled with complex project management in existing tools',
        solution: 'Built intuitive drag-drop interface with real-time collaboration',
        result: '40% faster task completion, 95% user satisfaction',
        description: 'TaskFlow Pro is a modern project management SaaS platform designed to simplify team collaboration. Built with React and TypeScript, it features real-time updates, drag-and-drop task management, and seamless integration with popular tools.',
        features: [
            'Real-time collaborative editing with WebSocket',
            'Intuitive drag-and-drop task boards',
            'Custom workflow automation',
            'Advanced analytics and reporting',
            'Integration with Slack, GitHub, and Jira',
            'Mobile-responsive design',
        ],
        metrics: [
            { label: 'Task Completion Speed', value: '+40%' },
            { label: 'User Satisfaction', value: '95%' },
            { label: 'Daily Active Users', value: '10K+' },
            { label: 'Average Session Time', value: '45 min' },
        ],
        tech: ['React', 'TypeScript', 'Framer Motion', 'WebSocket'],
        images: ['taskflow-1', 'taskflow-2', 'taskflow-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        category: 'Dashboard',
        challenge: 'Marketing team needed real-time insights across 10+ data sources',
        solution: 'Designed modular dashboard with customizable widgets and live updates',
        result: 'Reduced reporting time from 2 hours to 5 minutes',
        description: 'A powerful analytics dashboard that aggregates data from multiple sources into a unified, customizable interface. Features real-time data visualization, exportable reports, and intelligent alerting.',
        features: [
            'Customizable widget-based layout',
            'Real-time data streaming with live charts',
            'Multi-source data aggregation',
            'Advanced filtering and segmentation',
            'Exportable reports in PDF and Excel',
            'Smart alerting and notifications',
        ],
        metrics: [
            { label: 'Reporting Time Saved', value: '96%' },
            { label: 'Data Sources Connected', value: '15+' },
            { label: 'Reports Generated', value: '5K+/month' },
            { label: 'Response Time', value: '<100ms' },
        ],
        tech: ['React', 'TypeScript', 'D3.js', 'REST API'],
        images: ['analytics-1', 'analytics-2', 'analytics-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'design-system',
        title: 'Component Library',
        category: 'UI',
        challenge: 'Inconsistent UI across 3 products slowed development',
        solution: 'Created comprehensive design system with 50+ reusable components',
        result: '3x faster feature delivery, 100% design consistency',
        description: 'A comprehensive design system and component library built to unify the user experience across multiple products. Includes documentation, theming support, and accessibility features.',
        features: [
            '50+ production-ready React components',
            'Comprehensive Storybook documentation',
            'Dark mode and custom theming support',
            'WCAG 2.1 AA accessibility compliance',
            'TypeScript type definitions',
            'Automated visual regression testing',
        ],
        metrics: [
            { label: 'Feature Delivery Speed', value: '3x faster' },
            { label: 'Design Consistency', value: '100%' },
            { label: 'Components', value: '50+' },
            { label: 'Products Using', value: '3' },
        ],
        tech: ['React', 'TypeScript', 'Storybook', 'CSS'],
        images: ['design-system-1', 'design-system-2', 'design-system-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'payment-flow',
        title: 'Checkout Experience',
        category: 'SaaS',
        challenge: '35% cart abandonment due to complex checkout process',
        solution: 'Rebuilt checkout with one-click payments and smart validation',
        result: 'Reduced abandonment to 12%, $500K additional monthly revenue',
        description: 'A streamlined checkout experience that significantly reduced cart abandonment through intelligent form design, one-click payments, and real-time validation. Integrated with Stripe for secure payment processing.',
        features: [
            'One-click checkout for returning customers',
            'Smart form validation with real-time feedback',
            'Multiple payment method support',
            'Guest checkout option',
            'Auto-fill shipping information',
            'Mobile-optimized payment flow',
        ],
        metrics: [
            { label: 'Cart Abandonment', value: '-66%' },
            { label: 'Additional Revenue', value: '$500K/mo' },
            { label: 'Checkout Time', value: '-45%' },
            { label: 'Mobile Conversions', value: '+80%' },
        ],
        tech: ['React', 'TypeScript', 'Stripe API', 'Formik'],
        images: ['checkout-1', 'checkout-2', 'checkout-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'admin-panel',
        title: 'Admin Control Panel',
        category: 'Dashboard',
        challenge: 'Support team needed better tools to manage 10K+ users',
        solution: 'Built comprehensive admin panel with advanced search and bulk actions',
        result: '70% reduction in support ticket resolution time',
        description: 'A powerful admin control panel designed for scale. Features advanced user management, bulk operations, detailed audit logs, and role-based access control for managing thousands of users efficiently.',
        features: [
            'Advanced search with complex filters',
            'Bulk user operations and CSV export',
            'Role-based access control (RBAC)',
            'Detailed audit logs and activity tracking',
            'Real-time user analytics',
            'Automated workflow triggers',
        ],
        metrics: [
            { label: 'Resolution Time', value: '-70%' },
            { label: 'Users Managed', value: '10K+' },
            { label: 'Search Speed', value: '<50ms' },
            { label: 'Support Efficiency', value: '+120%' },
        ],
        tech: ['React', 'TypeScript', 'TanStack Table', 'REST API'],
        images: ['admin-1', 'admin-2', 'admin-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
    {
        id: 'landing-optimizer',
        title: 'Landing Page Builder',
        category: 'UI',
        challenge: 'Marketing needed to ship landing pages without developer time',
        solution: 'Created no-code builder with drag-drop and live preview',
        result: 'Enabled marketing to ship 20+ pages/month independently',
        description: 'A no-code landing page builder that empowers marketing teams to create, customize, and publish landing pages without developer intervention. Features drag-and-drop editing, template library, and A/B testing.',
        features: [
            'Drag-and-drop page builder',
            'Pre-built professional templates',
            'Live preview and responsive design tools',
            'Built-in A/B testing capabilities',
            'SEO optimization tools',
            'Analytics integration',
        ],
        metrics: [
            { label: 'Pages Created', value: '20+/month' },
            { label: 'Developer Time Saved', value: '100%' },
            { label: 'Time to Launch', value: '< 1 hour' },
            { label: 'Conversion Rate', value: '+25%' },
        ],
        tech: ['React', 'TypeScript', 'DnD Kit', 'CSS'],
        images: ['landing-1', 'landing-2', 'landing-3'],
        demoUrl: '#',
        githubUrl: '#',
    },
];
