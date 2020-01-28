module.exports = {
    title: 'JT-framework',
    description: 'JT-framework',

    port: "9527",
    base: "/jt-framework/",
    markdown: {
        externalLinks: {
            target: '_blank', rel: 'noopener noreferrer'
        },
        anchor: {permalink: true},
        // markdown-it-toc 的选项
        toc: {includeLevel: [1]}
    },

    themeConfig: {
        nav: navConfig(),
        sidebar: sidebarConfig(),
        sidebarDepth: 1,
        displayAllHeaders: true,
        activeHeaderLinks: true,
        lastUpdated: 'Last Updated',

        smoothScroll: true,

        repo: 'hylexus/jt-framework',
        repoLabel: '查看源码',
        docsDir: 'docs/pages',
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
    }
};

function sidebarConfig() {
    return {
        '/guide/': false,
        '/jt-808/': jt808SidebarConfig(),
        '/jt-809/': jt809SidebarConfig()
    };
}

function jt808SidebarConfig() {
    return [
        {
            title: '808协议',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['', '介绍'],
                'basic/protocol-introduction',
                'basic/quick-start',
                'basic/principle-of-msg-processing',
                'basic/customized'
            ]
        },
        {
            title: '内置注解',
            collapsable: false,
            sidebarDepth: 1,
            children: []
        },
        {
            title: 'FAQ',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                'FAQ/package-parsing',
                'FAQ/debug'
            ]
        }
    ];
}

function jt809SidebarConfig() {
    return [
        {
            title: '809协议',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['', 'TODO'],
            ]
        }
    ];
}

function navConfig() {
    return [
        {text: '首页', link: '/'},
        // {text: '指南', link: '/guide/'},
        {text: '808协议文档', link: '/jt-808/'},
        {
            text: '协议类型',
            ariaLabel: '协议类型',
            items: [
                {text: 'Jt-808', link: '/jt-808/'},
                {text: 'Jt-809', link: '/jt-809/'}
            ]
        }
    ];
}
