/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://tooloria.org',
    generateRobotsTxt: true,
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 50000,       // big number to force single sitemap
    exclude: ['/demo', '/demo/*'], // exclude /demo and all its subpages
  };
  