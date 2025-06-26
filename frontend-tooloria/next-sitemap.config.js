const categories = [
  "length",
  "area",
  "mass",
  "volume",
  "each",
  "temperature",
  "time",
  "digital",
  "partsPer",
  "speed",
  "pace",
  "pressure",
  "current",
  "voltage",
  "power",
  "reactivePower",
  "apparentPower",
  "energy",
  "reactiveEnergy",
  "volumeFlowRate",
  "illuminance",
  "frequency",
  "angle",
];

module.exports = {
  siteUrl: process.env.SITE_URL || "https://tooloria.org",
  generateRobotsTxt: true,
  trailingSlash: false,
  changefreq: 'weekly',
  sitemapSize: 5000,
  generateIndexSitemap: false,

  additionalPaths: async (config) => {
    const now = new Date().toISOString();

    /* 0. segment roots */
    const roots = [
      { loc: `${config.siteUrl}/`,                 lastmod: now, priority: 1.0 },
      { loc: `${config.siteUrl}/unit-converter`,   lastmod: now, priority: 0.8 },
    ];

    /* 1. /unit-converter/<category> */
    const converterPages = categories.map((cat) => ({
      loc: `${config.siteUrl}/unit-converter/${cat}`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.7,
    }));

    return [...roots, ...converterPages];
  },

  /* default transform so any other static path is still listed */
  transform: async (config, url) => ({
    loc: url,
    changefreq: 'monthly',
    priority: 0.5,
    lastmod: new Date().toISOString(),
  }),
};