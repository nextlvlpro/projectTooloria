const categories = [
    'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital',
    'partsPer', 'speed', 'pace', 'pressure', 'current', 'voltage', 'power',
    'reactivePower', 'apparentPower', 'energy', 'reactiveEnergy', 'volumeFlowRate',
    'illuminance', 'frequency', 'angle'
  ];
  
  module.exports = {
    siteUrl: process.env.SITE_URL || 'https://tooloria.org',  // Replace with your site URL
    generateRobotsTxt: true,
    generateIndexSitemap: false, 
    sitemapSize: 5000,
    // Dynamically generate sitemap entries for all category pages
    additionalPaths: async (config) => {
      return categories.map(category => ({
        loc: `${config.siteUrl}/unit-converter/${category}`,
        lastmod: new Date().toISOString(),
      }));
    },
  };
  