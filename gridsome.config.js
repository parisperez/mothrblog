// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mothr Board',
  siteUrl: 'https://mothrboard.com',
  siteDescription: 'Resources for new parents in Portand, Oregon.',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        exclude: ['/exclude-me'],
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          },
          '/about': {
            changefreq: 'monthly',
            priority: 0.7
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-57767134-2'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        route: '/blog/:title'
      }
    },
     {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/data/**/*.csv',
        typeName: 'Listing'
      }
    }
  ],
  transformers: {
    csv: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noopener', 'noreferrer']
    }
  },
  chainWebpack: config => {
    config.module
      config.mode('development')
  }
}



