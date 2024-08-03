import { notFound } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string): Promise<Post | null> {
  // In a real app, you'd fetch this data from an API or database
  const posts: Post[] = [
    { id: '1', title: 'My First Blog Post', content: 'This is the content of my first blog post.' },
    { id: '2', title: 'Another Interesting Post', content: 'Here\'s some more interesting content.' },
  ];
  
  return posts.find(post => post.id === id) || null;
}

export async function generateStaticParams() {
  // This function pre-renders pages at build time
  // In a real app, you'd fetch all post IDs from your data source
  return [{ id: '1' }, { id: '2' }];
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </article>
  );
}