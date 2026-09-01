import { BlogHero } from "@/components/layout/Blog/BlogHero";
import { BlogGrid } from "@/components/layout/Blog/BlogGrid";
import { BlogCTA } from "@/components/layout/Blog/BlogCTA";

export default function Blog() {
  return (
    <>
      <BlogHero />

      <BlogGrid />

      <BlogCTA />
    </>
  );
}
