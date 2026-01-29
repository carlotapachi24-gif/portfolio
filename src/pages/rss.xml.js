import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = await getCollection('post');
  return rss({
    title: 'Portfolio profesional | Carlota López Carracedo',
    description: 'Artículos y recursos sobre diseño, branding y creatividad.',
    site: context.site,
    items: blog.map((post) => {
      const link = `/blog/${post.id}/`;
      return {
        title: post.data.title,
        pubDate: post.data.publishDate,
        description: post.data.description,
        link,
        stylesheet: '/rss/pretty-feed-v3.xsl',
      };
    }),
  });
}
