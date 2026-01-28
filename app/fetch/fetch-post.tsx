"use client";

import { use } from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function FetchPost({ posts }: { posts: Promise<Post[]> }) {
  const allPosts = use(posts);

  return (
    <div>
      {allPosts?.map((post) => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
