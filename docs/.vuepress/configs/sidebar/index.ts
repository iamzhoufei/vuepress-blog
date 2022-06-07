import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/posts/': [
        {
            text: 'React',
            collapsible: true,
            children: ['/posts/react/2测试的.md'],
        },
        {
            text: 'Vue',
            collapsible: true,
            children: ['/posts/vue/测试的.md'],
        },
        {
            text: 'Vim',
            collapsible: true,
            children: ['/posts/vim/2测试的.md'],
        },
        {
            text: '网络相关',
            collapsible: true,
            children: ['/posts/network/测试的.md'],
        },
        {
            text: '好的实践',
            collapsible: true,
            children: ['/posts/practice/1测试的.md'],
        },
    ],
    '/posts/react/': [
        {
            text: 'React',
            collapsible: true,
            children: [
                '/posts/react/2测试的.md'
            ],
        },
    ],
    '/posts/vue/': [
        {
            text: 'Vue',
            collapsible: true,
            children: [
                '/posts/vue/README.md',
                '/posts/vue/测试的.md'
            ],
        },
    ],
    '/posts/vim/': [
        {
            text: 'Vim',
            collapsible: true,
            children: ['/posts/practice/全局Loading组件设计.md'],
        },
    ],
    '/posts/network/': [
        {
            text: '网络相关',
            collapsible: true,
            children: ['/posts/network/1测试的.md'],
        },
    ],
    '/posts/practice/': [
        {
            text: '好的实践',
            collapsible: true,
            children: ['/posts/practice/全局Loading组件设计.md'],
        },
    ]
}