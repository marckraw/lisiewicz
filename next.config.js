const withPlugins = require('next-compose-plugins')
const bundleAnalyzer = require('@next/bundle-analyzer')

const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
})

module.exports = withPlugins([
    [withBundleAnalyzer],
], {
    reactStrictMode: true, // https://betterprogramming.pub/react-strictmode-is-your-lifeline-for-the-future-1f73064d3bf8
    trailingSlash: true,
    webpack5: true,
    images: {
        domains: ['img2.storyblok.com','a.storyblok.com'],
    },
    async redirects() {
        return [
            {
                source: '/instagram',
                destination: 'https://www.instagram.com/lisiewicz_design/',
                permanent: true
            },
            {
                source: '/owner',
                destination: 'https://www.instagram.com/herkuless/',
                permanent: true
            },
        ]
    }
})
