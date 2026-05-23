import { marked } from "marked";
import { Link, Navigate, useParams } from "react-router-dom";
import { getBlogPost } from "../posts";
import "./BlogArticle.css";
import "./ContentPage.css";

marked.setOptions({
  breaks: true,
  gfm: true,
});

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = getBlogPost(slug);

  if (!post) return <Navigate to="/creations" replace />;

  const html = marked.parse(post.body) as string;

  return (
    <article className="content-page blog-article">
      <Link to="/creations" className="content-back">
        ← creations
      </Link>
      <h1>{post.title}</h1>
      <div
        className="blog-article-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
}
