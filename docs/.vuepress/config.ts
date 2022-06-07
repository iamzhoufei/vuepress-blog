import { defaultTheme, defineUserConfig } from 'vuepress'

import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sidebar, navbar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'EPIPHANY',
    description: '合抱之木，始于毫末。',
    theme: defaultTheme({
        repo: 'vuepress/vuepress-next',
        docsDir: 'docs',
        themePlugins: {
            // only enable git plugin in production mode
            git: isProd,
            // use shiki plugin in production mode instead
            prismjs: !isProd,
        },
        navbar,
        sidebar
    }),
    plugins: [
        docsearchPlugin({
            appId: '34YFD9IUQ2',
            apiKey: '9a9058b8655746634e01071411c366b8',
            indexName: 'vuepress',
            searchParameters: {
                facetFilters: ['tags:v2'],
            },
        })
    ]
})