import * as React from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>blog index</h3>
      <Link
        to="/blog/post/$postId"
        params={{
          postId: "my-first-blog-post",
        }}
      >
        Link to my-first-blog-post
      </Link>
    </div>
  );
}
