// src/data/posts.ts
export const posts = [
    { date: '25-03-10', title: 'website update', slug: 'update' },
    { date: '25-02-09', title: 'the stack', slug: 'intro' },
    { date: '25-02-10', title: 'learning', slug: 'learning' },
    // { date: '25-00-00', title: 'three', slug: 'intro' } // Removed
] as const;
  
// if u need just recent posts somewhere
export const getRecentPosts = () => posts.slice(0, 3);