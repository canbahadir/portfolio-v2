export interface SocialLink {
  name: string
  url: string
  icon: string
  description: string
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  url?: string
  github?: string
  image?: string
}

export interface Workspace {
  id: string
  name: string
  description: string
  icon: string
  items: Array<{
    title: string
    description: string
    url?: string
  }>
}

export interface GlanceItem {
  title: string
  description: string
  url: string
  date: string
  type: 'blog' | 'project' | 'update'
}

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/bahadircan',
    icon: 'linkedin',
    description: 'Software Design Engineer works with DevOps and Platform technologies.'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/canbahadir',
    icon: 'github',
    description: 'Check out my open source contributions and projects.'
  },
  {
    name: 'Certificates',
    url: 'https://www.credly.com/users/bahadir-can/badges#credly',
    icon: 'award',
    description: 'View my certifications and achievements.'
  },
  {
    name: 'Blog',
    url: 'https://medium.com/@bahadircan',
    icon: 'book',
    description: 'Tech notes about Cloud, DevOps and AI.'
  },
  {
    name: 'Strava',
    url: 'https://strava.com/athletes/bahadircan',
    icon: 'activity',
    description: 'Follow my cycling and running adventures.'
  },
  {
    name: 'Climate Lab',
    url: 'https://ttgv.org.tr/en/programs/climate-lab-community-program',
    icon: 'leaf',
    description: "TTGV's Climate Lab Community Program - Empowering climate action through innovation."
  },
]

export const featuredProjects: Project[] = [
  {
    name: 'Dante AI Saas Boilerplate',
    description: 'A modern SaaS starter template with AI capabilities, authentication, and a beautiful UI.',
    technologies: ['Next.js', 'Supabase', 'Google SSO', 'Tailwind', 'Shadcn', 'NextAuth', 'Langchain', 'Vercel', 'v0', 'Cursor'],
    url: 'https://github.com/canbahadir/dante-ai-saas',
    github: 'https://github.com/canbahadir/dante-ai-saas',
  },
  {
    name: 'Project Zeal',
    description: 'A comprehensive GCP infrastructure example showcasing modern DevOps practices and tools.',
    technologies: ['GKE', 'Docker', 'GCR', 'Helm', 'Prometheus', 'Grafana', 'Sonarqube', 'Gremlin'],
    url: 'https://github.com/canbahadir/project-zeal',
    github: 'https://github.com/canbahadir/project-zeal',
  },
]

export const workspaces: Workspace[] = [
  {
    id: 'projects',
    name: 'Projects',
    description: 'My featured projects and open source contributions',
    icon: 'folder',
    items: [
      {
        title: 'Dante AI Saas Boilerplate',
        description: 'Modern SaaS starter with AI capabilities',
        url: 'https://github.com/canbahadir/dante-ai-saas'
      },
      {
        title: 'Project Zeal',
        description: 'GCP infrastructure example with DevOps tools',
        url: 'https://github.com/canbahadir/project-zeal'
      },
    ]
  },
  {
    id: 'blog',
    name: 'Tech Blog',
    description: 'Articles about Cloud, DevOps, and AI',
    icon: 'book-open',
    items: [
      {
        title: 'Getting Started with GCP',
        description: 'A comprehensive guide to Google Cloud Platform',
        url: 'https://bahadircan.com/blog/gcp-guide'
      },
      {
        title: 'DevOps Best Practices',
        description: 'Modern DevOps workflows and tools',
        url: 'https://bahadircan.com/blog/devops-practices'
      },
    ]
  },
  {
    id: 'certificates',
    name: 'Certificates',
    description: 'Professional certifications and achievements',
    icon: 'award',
    items: [
      {
        title: 'GCP Professional Cloud Architect',
        description: 'Google Cloud Platform certification',
        url: 'https://bahadircan.com/certificates'
      },
    ]
  },
]

export const glanceItems: GlanceItem[] = [
  {
    title: 'Latest Blog Post',
    description: 'How to Use GitHub Repositories Securely?',
    url: 'https://medium.com/@bahadircan/how-to-use-github-repositories-securely-38b951129b4c',
    date: '2024-01-15',
    type: 'blog'
  },
  {
    title: 'New Project Update',
    description: 'Dante AI now supports multi-tenant architecture',
    url: 'https://github.com/canbahadir/dante-ai-saas',
    date: '2024-01-10',
    type: 'project'
  },
  {
    title: 'Community Update',
    description: 'Joined Climate Lab TTGV program',
    url: 'https://climatelab.ttgv.org',
    date: '2024-01-05',
    type: 'update'
  },
]

export const profileInfo = {
  name: 'Bahadır Can',
  title: 'Platform Engineer',
  bio: 'Working with DevOps and Platform technologies. GCP PCA certified. Current tech stack: GCP, AWS, Jira, Confluence, Linux, Openstack, Git(Bitbucket&GitHub), Jenkins, JFrog, Docker, Terraform, VMware, Python, Perl, Bash.',
  affiliations: [
    'Working @Orion Innovation',
    'Runner @beatruncrew',
    'Member @ClimateLab-TTGV'
  ],
  profileImage: 'https://lh3.googleusercontent.com/pw/AP1GczNwCxk9JivV7AqojOB1bVXuxFe6TRNr4vu9z06dQuLshnAPf0NVsijefT1TCxi5vZGq_Fr32QyQxQLn9t1_Gcb_Ie43xkZyplgacTxnZd8B79pjv0-eE9IdLTxvXGZvje63Q2Uyt3DI0cY1Rpdr1uDq=w800-h800-s-no?authuser=0', // Add your profile image path here, e.g., '/profile.jpg'
}

