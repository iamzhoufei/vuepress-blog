import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/': [
        {
            text: 'React',
            collapsible: true,
            children: ['/react/2测试的.md'],
        },
        {
            text: 'Vue',
            collapsible: true,
            children: ['/vue/测试的.md'],
        },
        {
            text: 'Vim',
            collapsible: true,
            children: ['/vim/2测试的.md'],
        },
        {
            text: '网络相关',
            collapsible: true,
            children: ['/network/测试的.md'],
        },
        {
            text: '好的实践',
            collapsible: true,
            children: ['/practice/1测试的.md'],
        },
    ],
    '/react/': [
        {
            text: 'React',
            collapsible: true,
            children: ['/react/2测试的.md'],
        },
    ],
    '/vue/': [
        {
            text: 'Vue',
            collapsible: true,
            children: [
                '/vue/README.md',
                '/vue/测试的.md'
            ],
        },
    ],
    '/vim/': [
        {
            text: 'Vim',
            collapsible: true,
            children: ['/practice/全局Loading组件设计.md'],
        },
    ],
    '/network/': [
        {
            text: '网络相关',
            collapsible: true,
            children: ['/network/1测试的.md'],
        },
    ],
    '/practice/': [
        {
            text: '好的实践',
            collapsible: true,
            children: ['/practice/全局Loading组件设计.md'],
        },
    ]
}