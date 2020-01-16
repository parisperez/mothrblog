// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {


  })


  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  })
}

// module.exports = function (api) {
//   api.loadSource(async store => {
//     const { data } = await axios.get('https://gist.github.com/parisperez/d6ddcf83d873135eb1770bb6cb2b3660')

//     const contentType = store.addContentType({
//       typeName: 'Listing',
//       route: '/listings/id'
//     })

//     for (const item of data) {
//       contentType.addNode({
//         id: item.id,
//         name: item.name,
//         slug: item.slug,
//         url: item.url,
//         category: item.category,
//         location: item.location
//       })
//     }
//   })
// }

