import type { NavbarConfig } from '@vuepress/theme-default'

export const navbar: NavbarConfig = [
    {
        text: '主页',
        link: '/',
    },
    {
        text: '文档合集',
        children: [
            {
                text: 'CSS',
                children: [
                    '/posts/css/README.md'],
            },
            {
                text: 'JavaScript',
                children: [
                    '/posts/javascript/README.md'],
            },
            {
                text: 'React',
                children: [
                    '/posts/react/README.md'
                ],
            },
            {
                text: 'Vue',
                children: [
                    '/posts/vue/README.md',
                ],
            },
            {
                text: '网络相关',
                children: [
                    '/posts/network/README.md'
                ],
            },
             {
                text: 'Vim',
                children: [
                    '/posts/vim/README.md'
                ],
            },
            {
                text: '好的实践',
                children: [
                    '/posts/practice/README.md'],
            },
        ],
    }
]