import { ArrowUpRight, Clock3 } from "lucide-react";

import type { BlogPost } from "./blog.data";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-slate-200/50
      "
    >
      {/* Área visual */}
      <div
        className="
          relative
          flex
          h-56
          items-end
          overflow-hidden
          bg-slate-100
          p-6
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -right-10
            -top-10
            h-40
            w-40
            rounded-full
            bg-[#0F4C81]/10
            blur-2xl
            transition-transform
            duration-500

            group-hover:scale-125
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -bottom-16
            -left-10
            h-40
            w-40
            rounded-full
            bg-blue-300/10
            blur-2xl
          "
        />

        <span
          className="
            relative
            rounded-full
            bg-white
            px-3
            py-1.5
            text-xs
            font-semibold
            text-[#0F4C81]
            shadow-sm
          "
        >
          {post.category}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="p-7">
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span>{post.date}</span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span className="flex items-center gap-1.5">
            <Clock3 size={14} />
            {post.readTime}
          </span>
        </div>

        <h2
          className="
            mt-4
            text-xl
            font-bold
            leading-snug
            tracking-tight
            text-slate-950
            transition-colors
            duration-300

            group-hover:text-[#0F4C81]
          "
        >
          {post.title}
        </h2>

        <p
          className="
            mt-4
            text-sm
            leading-6
            text-slate-600
          "
        >
          {post.excerpt}
        </p>

        <div
          className="
            mt-6
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[#0F4C81]
          "
        >
          Ler artigo
          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300

              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </div>
      </div>
    </article>
  );
}
