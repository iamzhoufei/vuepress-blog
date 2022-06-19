import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
    '/posts/': [
        {
            text: 'Broswer',
            collapsible: true,
            children: ['/posts/broswer/README.md'],
        },
        {
            text: 'CSS',
            collapsible: true,
            children: ['/posts/css/README.md'],
        },
        {
            text: 'JavaScript',
            collapsible: true,
            children: ['/posts/javascript/README.md'],
        },
        {
            text: 'React',
            collapsible: true,
            children: ['/posts/react/README.md'],
        },
        {
            text: 'Vue',
            collapsible: true,
            children: ['/posts/vue/README.md'],
        },
        {
            text: 'Vim',
            collapsible: true,
            children: ['/posts/vim/README.md'],
        },
        {
            text: '网络相关',
            collapsible: true,
            children: ['/posts/network/README.md'],
        },
        {
            text: '好的实践',
            collapsible: true,
            children: ['/posts/practice/README.md'],
        },
    ],
    '/posts/broswer/': [
        {
            text: 'Broswer',
            collapsible: true,
            children: [
                '/posts/broswer/README.md',
                '/posts/broswer/本地存储方案对比.md',
                '/posts/broswer/垃圾回收机制与内存泄漏.md',
                '/posts/broswer/JSBridge实现方案.md',
            ],
        },
    ],
    '/posts/css/': [
        {
            text: 'CSS',
            collapsible: true,
            children: [
                '/posts/css/README.md',
                '/posts/css/对盒模型的理解.md',
                '/posts/css/水平垂直居中的实现方式.md',
                '/posts/css/常见的CSS单位.md'
            ],
        },
    ],
    '/posts/javascript/': [
        {
            text: 'JavaScript',
            collapsible: true,
            children: [
                '/posts/javascript/README.md',
                '/posts/javascript/数据类型.md',
                '/posts/javascript/事件循环.md'
            ],
        },
    ],
    '/posts/react/': [
        {
            text: 'React',
            collapsible: true,
            children: [
                '/posts/react/README.md',
                '/posts/react/框架对比.md',
                '/posts/react/hooks.md'
            ],
        },
    ],
    '/posts/vue/': [
        {
            text: 'Vue',
            collapsible: true,
            children: [
                '/posts/vue/README.md',
                '/posts/vue/API应用.md',
                '/posts/vue/原理源码.md',
                '/posts/vue/综合实践.md'
            ],
        },
    ],
    '/posts/vim/': [
        {
            text: 'Vim',
            collapsible: true,
            children: [
                '/posts/vim/README.md',
                '/posts/vim/练习第一天.md',
                '/posts/vim/练习第二天.md',
                '/posts/vim/练习第三天.md',
                '/posts/vim/练习第四天.md',
                '/posts/vim/练习第五天.md',
            ],
        },
    ],
    '/posts/network/': [
        {
            text: '网络相关',
            collapsible: true,
            children: [
                '/posts/network/README.md',
                '/posts/network/HTTP协议.md',
                '/posts/network/TCP连接的三次握手.md',
                '/posts/network/TCP连接的四次挥手.md',
            ],
        },
    ],
    '/posts/practice/': [
        {
            text: '好的实践',
            collapsible: true,
            children: [
                '/posts/practice/README.md',
            ],
        },
    ]
}