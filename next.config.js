const fs = require('fs')
const { join } = require('path')
const { promisify } = require('util')
const copyFile = promisify(fs.copyFile)
const withOffline = require('next-offline')
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript(
  withOffline({
    exportPathMap: async function(
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      if (dev) {
        return defaultPathMap
      }
      // This will copy robots.txt from your project root into the out directory
      await copyFile(join(dir, 'static/robots.txt'), join(outDir, 'robots.txt'))
      await copyFile(
        join(dir, 'static/manifest.json'),
        join(outDir, 'manifest.json')
      )
      await copyFile(
        join(dir, 'static/sitemap.xml'),
        join(outDir, 'sitemap.xml')
      )
      return defaultPathMap
    },
    webpack: config => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: 'empty'
      }

      // const originalEntry = config.entry
      // config.entry = async () => {
      //   const entries = await originalEntry()

      //   if (
      //     entries['main.js'] &&
      //     !entries['main.js'].includes('./polyfills.js')
      //   ) {
      //     entries['main.js'].unshift('./polyfills.js')
      //   }

      //   return entries
      // }

      return config
    }
  })
)

// https://github.com/zeit/next-plugins/tree/master/packages/next-typescript
// https://github.com/hanford/next-offline
