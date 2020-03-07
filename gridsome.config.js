// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mothr Board',
  siteDescription: 'A Portland Resource Guide for Pregnant Heroes.',
  plugins: [
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
        route: '/blog/:slug'
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



