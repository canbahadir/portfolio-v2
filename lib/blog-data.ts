export interface BlogPost {
  title: string
  date: string
  url: string
  excerpt?: string
}

// Medium posts from @bahadircan
// Note: These should be updated manually or fetched from Medium RSS
export const blogPosts: BlogPost[] = [
  {
    title: 'Getting Started with Cloud Infrastructure',
    date: '2024-01-15',
    url: 'https://medium.com/@bahadircan',
    excerpt: 'A comprehensive guide to building modern cloud infrastructure'
  },
  {
    title: 'DevOps Best Practices',
    date: '2024-01-10',
    url: 'https://medium.com/@bahadircan',
    excerpt: 'Essential practices for modern DevOps workflows'
  },
  {
    title: 'Platform Engineering Fundamentals',
    date: '2024-01-05',
    url: 'https://medium.com/@bahadircan',
    excerpt: 'Understanding the core concepts of platform engineering'
  },
]

