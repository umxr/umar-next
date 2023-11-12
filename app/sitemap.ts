export default async function sitemap() {
  const routes = [''].map((route) => ({
    url: `https://umar.codes${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes];
}
