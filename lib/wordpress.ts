// @ts-nocheck
// WordPress REST API - Headless CMS helper
const WP_BASE = 'https://themadhatterchimneysweep.com/wp-json';
export const revalidate = 3600;
const wpFetch = async (path) => {
  try {
    const res = await fetch(WP_BASE + path, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
};
export async function getAllPages() {
  return (await wpFetch('/wp/v2/pages?per_page=50&status=publish')) || [];
}
export async function getPageBySlug(slug) {
  const data = await wpFetch('/wp/v2/pages?slug=' + slug + '&status=publish');
  return (data && data[0]) || null;
}
export async function getRecentPosts(count = 6) {
  return (await wpFetch('/wp/v2/posts?per_page=' + count + '&status=publish&orderby=date&order=desc')) || [];
}
export async function getPostBySlug(slug) {
  const data = await wpFetch('/wp/v2/posts?slug=' + slug + '&status=publish');
  return (data && data[0]) || null;
}
export function extractSEOMeta(page) {
  if (!page) return { title: '', description: '', image: '' };
  const y = page.yoast_head_json || {};
  return {
    title: y.title || page.title.rendered || '',
    description: y.description || (page.excerpt && page.excerpt.rendered ? page.excerpt.rendered.replace(/<[^>]+>/g,'') : ''),
    image: (y.og_image && y.og_image[0] && y.og_image[0].url) || '',
  };
}
// Vercel Deploy Hook - POST to this URL to trigger a rebuild
export const VERCEL_DEPLOY_HOOK = 'https://api.vercel.com/v1/integrations/deploy/prj_dNjB8Imil9cea7dhjJ56AomVYiyl/hK7anpWQPi';
