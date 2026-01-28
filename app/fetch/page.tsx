import { Suspense } from "react";
import { fetchPost } from "./db";
import FetchPost from "./fetch-post";

export default function page() {
  const posts = fetchPost();
  return (
    <div>
      <p>This is fetch post page</p>
      <Suspense fallback={<p>Loading...</p>}>
        <FetchPost posts={posts} />
      </Suspense>
      {/* <FetchPost posts={posts} /> */}
    </div>
  );
}
