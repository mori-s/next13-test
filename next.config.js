const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@use "_constant.scss" as *;`,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev.media.loom-app.com',
            },
            {
                protocol: 'https',
                hostname: 'placehold.jp'
            }
        ],
    },
}

module.exports = nextConfig
