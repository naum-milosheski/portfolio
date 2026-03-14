// ==============================================
// DATA LAYER - SUPABASE-READY STRUCTURE
// ==============================================

export interface Project {
    id: string;
    slug: string;
    title: string;
    tag: string;
    description: string;
    image?: string;
    caseStudyUrl?: string;
    featured: boolean;
    order: number;
    size: 'large' | 'small';
    techStack: string[];
    features: string[];
    demoLink?: string;
    tagline?: string;
    longDescription?: string;
}

export interface ProcessStep {
    id: string;
    stepNumber: string;
    category: string;
    title: string;
    description: string;
    order: number;
}

export interface Comparison {
    id: string;
    traditionalTitle: string;
    traditionalBody: string;
    myApproachTitle: string;
    myApproachBody: string;
    order: number;
}

// ==============================================
// MOCK DATA - Replace with Supabase fetch
// ==============================================

export const projects: Project[] = [
    {
        id: '1',
        slug: 'shiftsync',
        title: 'ShiftSync',
        tagline: 'Autonomous Operations Orchestrator',
        tag: 'Operations Engine',
        description: "Eliminating the 'Chaos Tax' of manual staffing. ShiftSync transforms natural language commands into mathematically optimized schedules - enforcing budget limits and condensing hours of work into seconds of automated logic.",
        longDescription: "ShiftSync eliminates the operational friction of luxury staffing by replacing manual workflows with an intelligent operations engine. Using a neural parsing engine for intent recognition and a weighted heuristic algorithm for talent matching, the system automatically provisions high-rated staff while enforcing strict budget and availability constraints. Architected as an event-driven system with PostgreSQL triggers and real-time synchronization, it maintains absolute data integrity across the entire shift lifecycle—from roster generation to automated financial reconciliation.",
        featured: true,
        order: 3,
        size: 'small',
        techStack: ['Next.js', 'Supabase', 'Gemini', 'TypeScript'],
        features: [
            'Heuristic Matching Engine: Multi-dimensional scoring for optimized, budget-compliant staffing.',
            'Neural Command Interface: Architect complex rosters via plain English intent recognition.',
            'Sub-Second State Integrity: Event-driven architecture ensuring a single source of truth.'
        ],
        demoLink: 'https://shiftsync.milosheski.com',
        image: '/projects/shiftsync.png',
    },
    {
        id: '2',
        slug: 'luxehome',
        title: 'LuxeHome',
        tagline: 'Luxury Real Estate Intelligence',
        tag: 'Real Estate AI',
        description: "An intelligent operation layer for luxury brokerages. The platform writes listing copy, scores inbound leads, and detects property features from photography - compressing hours of manual work into moments.",
        longDescription: "This platform embeds generative intelligence directly into the luxury real estate lifecycle. Incoming inquiries are analyzed in real-time and scored (0–100) based on buyer intent, urgency, and budget signals—allowing agents to prioritize high-value relationships instantly.\n\nIn the background, computer vision detects luxury amenities from property photography, and multimodal AI drafts sophisticated listing copy automatically. The public-facing catalog features advanced filtering by price, property type, beds, and 15+ luxury amenities—designed to match discerning buyers with their ideal properties.",
        featured: true,
        order: 2,
        size: 'small',
        techStack: ['Next.js', 'TypeScript', 'Gemini', 'Supabase'],
        features: [
            'Behavioral Lead Scoring: AI analyzes inbound inquiries to assign priority scores based on buyer intent and budget signals.',
            'Vision-Based Feature Detection: Computer vision detects luxury amenities from property photography to auto-populate property specs.',
            'Generative Listing Copy: Multimodal AI drafts sophisticated, lifestyle-focused listing descriptions from raw data inputs.'
        ],
        demoLink: 'https://luxehome.milosheski.com',
        image: '/projects/luxehome.png',
    },
    {
        id: '3',
        slug: 'probuild-supply',
        title: 'ProBuild',
        tagline: 'Intelligent Order Management System',
        tag: 'Intelligent Order Management System',
        description: "Eliminating order friction for trade suppliers. ProBuild transforms messy contractor text messages into validated purchase orders—parsing natural language commands, fuzzy-matching products to inventory, and calculating totals in under 2 seconds.",
        longDescription: "ProBuild Supply eliminates the operational friction of B2B trade supply by replacing manual order entry with an intelligent processing engine. Using Gemini for natural language parsing and a Levenshtein-based fuzzy matching algorithm for inventory lookup, the system transforms informal contractor messages into fully validated, priced orders—complete with confidence-scored matches and human-reviewable suggestions for ambiguous items. Built with dual-portal architecture—a staff dashboard for order management and a client portal for self-service ordering—it maintains accuracy across the entire order lifecycle, from raw text input to calculated line totals.",
        featured: true,
        order: 1,
        size: 'large',
        techStack: ['Next.js', 'Supabase', 'Gemini', 'TypeScript'],
        features: [
            'Neural Order Parser: Transform messy contractor text into validated purchase orders via Gemini 2.0 intent recognition.',
            'Fuzzy Matching Engine: Levenshtein-scored product lookup with configurable confidence thresholds and human-reviewable suggestions.',
            'Confidence-Scored Review: Visual match quality indicators with one-click resolution for ambiguous product matches.'
        ],
        demoLink: 'https://probuild.milosheski.com',
        image: '/projects/probuild.png',
    },
];

export const processSteps: ProcessStep[] = [
    {
        id: '1',
        stepNumber: '01',
        category: 'Discovery & Blueprint',
        title: 'We agree on exactly what gets built before a single line of code is written.',
        description: "I start with a focused discovery session to understand your current workflow, your existing systems, and the exact problem we're solving. You get a concrete written scope — features, timeline, and cost — before any work begins. No surprises.",
        order: 1,
    },
    {
        id: '2',
        stepNumber: '02',
        category: 'Build & Preview',
        title: 'You watch it come to life before it goes live.',
        description: "I build iteratively and give you access to a live staging environment from day one. You can test every feature as it's built, give feedback in real time, and approve before anything ships to production.",
        order: 2,
    },
    {
        id: '3',
        stepNumber: '03',
        category: 'Launch & Handoff',
        title: 'Your product. Your code. Your asset.',
        description: 'Once approved, I handle deployment, domain setup, and integrations. Then I hand over the full codebase and admin access — you own it completely, with no ongoing dependency on me unless you choose it.',
        order: 3,
    },
];

export const comparisons: Comparison[] = [
    {
        id: '1',
        traditionalTitle: 'Incentives Are Broken',
        traditionalBody: 'Agencies make more money when projects take longer.',
        myApproachTitle: 'Single-Threaded Ownership',
        myApproachBody: 'Strategy, architecture, design, and execution — one brain.',
        order: 1,
    },
    {
        id: '2',
        traditionalTitle: 'Vision Gets Diluted',
        traditionalBody: 'Your idea passes through PMs, designers, and developers.',
        myApproachTitle: 'Outcome-Aligned Pricing',
        myApproachBody: 'Speed and clarity are rewarded, not punished.',
        order: 2,
    },
    {
        id: '3',
        traditionalTitle: 'Slow by Design',
        traditionalBody: 'Human-speed workflows in an AI-first world.',
        myApproachTitle: 'AI-Native Execution',
        myApproachBody: 'LLMs eliminate boilerplate and dead time.',
        order: 3,
    },
    {
        id: '4',
        traditionalTitle: 'Fragmented Ownership',
        traditionalBody: 'No single person is truly accountable for the outcome.',
        myApproachTitle: 'Design Equals Code',
        myApproachBody: 'What’s designed is what ships.',
        order: 4,
    },
    {
        id: '5',
        traditionalTitle: 'Built-In Overhead',
        traditionalBody: 'You pay for layers, meetings, offices, and process.',
        myApproachTitle: 'Zero Overhead',
        myApproachBody: 'Every dollar goes into the product itself.',
        order: 5,
    },
];

// ==============================================
// FUTURE: SUPABASE INTEGRATION
// ==============================================

// import { createClient } from '@supabase/supabase-js';
// 
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// 
// export async function getProjects(): Promise<Project[]> {
//   const { data, error } = await supabase
//     .from('projects')
//     .select('*')
//     .eq('featured', true)
//     .order('order', { ascending: true });
//   
//   if (error) throw error;
//   return data;
// }
