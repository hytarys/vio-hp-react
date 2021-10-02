import axios from 'axios'
import path from 'path'
// import { createClient } from 'contentful'
import * as Config from './src/contentful/config.tsx'

// const client = createClient({
//   space: "5srgjcronirx",
//   accessToken: "GAA5JhqVqmxlciyuXq5YRgMqFdeVnQpQUX4j4wyCrbE",
// })

export default {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getRoutes: async () => {
    // const { items: posts } = await client.getEntries({
    //   content_type: "post",
    // })
    return [
      {
        path: '/',
        getData: () => ({
          // posts,
        }),
      },
      {
        path: '/profile',
        getData: () => ({
          pageTitle: 'PROFILE'
        })
      },
      {
        path: '/lesson',
        getData: () => ({
          pageTitle: 'LESSON'
        })
      },
      {
        path: '/news',
        getData: () => ({
          pageTitle: 'NEWS'
        })
      },
      {
        path: '/contact',
        getData: () => ({
          pageTitle: 'CONTACT'
        })
      }
    ]
  },
  plugins: [
    'react-static-plugin-typescript',
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
