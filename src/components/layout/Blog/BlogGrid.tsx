import { useMemo, useState } from "react";

import { ZContainer } from "@/components/common/ZContainer";

import { BlogCategories } from "./BlogCategories";
import { BlogCard } from "./BlogCard";
import { blogPosts } from "./blog.data";

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Todos") {
      return blogPosts;
    }

    return blogPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="pb-20 sm:pb-24 lg:pb-28">
      <ZContainer>
        <BlogCategories activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        <div
          className="
            grid
            gap-6

            md:grid-cols-2

            lg:grid-cols-3
          "
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-slate-500">Nenhum artigo encontrado nesta categoria.</p>
          </div>
        )}
      </ZContainer>
    </section>
  );
}
