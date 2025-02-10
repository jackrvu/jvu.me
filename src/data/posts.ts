// src/data/posts.ts
export const posts = [
    { date: '25-02-09', title: 'my setups', slug: 'intro' },
    { date: '25-02-10', title: 'learning', slug: 'learning' },
    { date: '25-00-00', title: 'three', slug: 'intro' }
] as const;
  
// if u need just recent posts somewhere
export const getRecentPosts = () => posts.slice(0, 3);