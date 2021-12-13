import StoryblokClient from 'storyblok-js-client'

const Storyblok = new StoryblokClient({
    accessToken: process.env.NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN,
    cache: {
        clear: 'auto',
        type: 'memory'
    },
})

export const version = process.env.NEXT_PUBLIC_CONTENT_VERSION;

export default Storyblok
