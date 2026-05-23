import type { Creation } from "../site";
import "./CreationEntry.css";

const kindLabel: Record<Creation["kind"], string> = {
  project: "project",
  blog: "blog",
  writing: "writing",
  art: "art",
  other: "other",
};

export function CreationEntryCard({ item }: { item: Creation }) {
  const href = item.href ?? "";
  const external = href.startsWith("http");

  return (
    <article className="creation-entry">
      <p className="creation-kind">{kindLabel[item.kind]}</p>
      {!href ? (
        <span className="creation-title">{item.title}</span>
      ) : external ? (
        <a
          href={href}
          className="creation-title"
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
      ) : (
        <a href={href} className="creation-title">
          {item.title}
        </a>
      )}
      <div className="creation-desc">
        {item.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </article>
  );
}
