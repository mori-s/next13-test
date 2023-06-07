const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
        additionalData: `@use "_constant.scss" as *;`,
    },
    env: {
        AWS_BRANCH: process.env.AWS_BRANCH,
        AWS_APP_ID: process.env.AWS_APP_ID,
        AWS_PULL_REQUEST_ID: process.env.AWS_PULL_REQUEST_ID
    }
}

module.exports = nextConfig
