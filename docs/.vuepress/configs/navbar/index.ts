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
                text: 'React',
                children: ['/react/2测试的.md'],
            },
            {
                text: 'Vue',
                children: [
                    '/vue/README.md',
                ],
            },
            {
                text: '网络相关',
                children: ['/network/1测试的.md'],
            },
            {
                text: '好的实践',
                children: ['/practice/全局Loading组件设计.md'],
            },
        ],
    }
]