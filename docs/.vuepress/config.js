module.exports = {
    title: '学习VUE',
    description: "学一个呗>_<",
    lastUpdated: '最近更新',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'VuePress',
            description: 'Vue-powered Static Site Generator'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '谢谢',
            description: 'Vue 驱动的静态网站生成器'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                selectText: 'Languages',
                label: 'English',
                editLinkText: 'Edit this page on GitHub',
                serviceWorker: {
                    updatePopup: {
                        message: "New content is available.",
                        buttonText: "Refresh"
                    }
                },
                nav: [
                    {text: 'home', link: '/'},
                    {text: 'studyRemarks',
                        items: [
                            { text: 'Java', link: '/study/java/' },
                            { text: 'SpringBoot', link: '/study/springboot/' },
                            { text: 'SpringCloud', link: '/study/springcloud/' },
                            { text: 'Linux', link: '/study/linux/' },
                            { text: 'Javascript', link: '/study/javascript/' },
                            { text: 'Vue', link: '/study/vue/' },
                            { text: 'Docker', link: '/study/docker/' },
                            { text: 'other', link: '/study/other/' },
                        ]
                    },
                    {text: 'favorite tools', link: '/favorite/'},
                    {text: 'MyBlog', items: [
                            { text: 'csdn', link: 'https://blog.csdn.net/m0_37903882' },
                            { text: '掘金', link: 'https://juejin.im/user/5aa1029c51882555770c0603' },
                            { text: '简书', link: 'https://www.jianshu.com/u/6740c2a5866d' },
                            { text: '码云', link: 'https://gitee.com/DuebassLei' },
                            { text: '个人网站', link: 'https://duebasslei.gitee.io' }
                        ] },
                ],
                sidebar: {
                    '/study/java/': getJavaSidebar("Java","更多"),
                    '/study/docker/': getDockerSidebar("Docker","更多"),
                    '/study/javascript/': getJavascriptSidebar("Javascript","更多"),
                    '/study/linux/': getLinuxSidebar("Linux","更多"),
                    '/study/springboot/': getSBSidebar("Spring","更多"),
                    '/study/springcloud/': getSCSidebar("SpringCloud","更多"),
                    '/study/vue/': getVueSidebar("Vue","更多"),
                    '/study/other/': getOtherSidebar("随笔","更多"),
                    '/favorite/': ['']
                }
            },
            '/zh/': {
                // 多语言下拉菜单的标题
                selectText: '选择语言',
                // 该语言在下拉菜单中的标签
                label: '简体中文',
                // 编辑链接文字
                editLinkText: '在 GitHub 上编辑此页',
                // Service Worker 的配置
                serviceWorker: {
                    updatePopup: {
                        message: "发现新内容可用.",
                        buttonText: "刷新"
                    }
                },
                // 当前 locale 的 algolia docsearch 选项
                nav: [
                    {text: '主页', link: '/zh/'},
                    {text: '学习笔记',
                        items: [
                            { text: 'Java', link: '/zh/study/java/' },
                            { text: 'SpringBoot', link: '/zh/study/springboot/' },
                            { text: 'SpringCloud', link: '/zh/study/springcloud/' },
                            { text: 'Linux', link: '/zh/study/linux/' },
                            { text: 'Javascript', link: '/zh/study/javascript/' },
                            { text: 'Vue', link: '/zh/study/vue/' },
                            { text: 'Docker', link: '/zh/study/docker/' },
                            { text: 'other', link: '/zh/study/other/' },
                        ]
                    },
                    {text: '收藏工具', link: '/zh/favorite/'},
                    {text: '我的博客', items: [
                            { text: 'csdn', link: 'https://blog.csdn.net/m0_37903882' },
                            { text: '掘金', link: 'https://juejin.im/user/5aa1029c51882555770c0603' },
                            { text: '简书', link: 'https://www.jianshu.com/u/6740c2a5866d' },
                            { text: '码云', link: 'https://gitee.com/DuebassLei' },
                            { text: '个人网站', link: 'https://duebasslei.gitee.io' }
                        ] },
                ],
                sidebar: {
                    '/zh/study/java/': getJavaSidebar("Java","更多"),
                    '/zh/study/docker/': getDockerSidebar("Docker","更多"),
                    '/zh/study/javascript/': getJavascriptSidebar("Javascript","更多"),
                    '/zh/study/linux/': getLinuxSidebar("Linux","更多"),
                    '/zh/study/springboot/': getSBSidebar("Spring","更多"),
                    '/zh/study/springcloud/': getSCSidebar("SpringCloud","更多"),
                    '/zh/study/vue/': getVueSidebar("Vue","更多"),
                    '/zh/study/other/': getOtherSidebar("随笔","更多"),
                    '/zh/favorite/': ['']
                }
            }
        }
    },
    base: '/vuepress/',
    dest: './docs/.vuepress/dist',
    // 假定 GitHub。也可以是一个完整的 GitLab URL。
    repo: 'https://github.com/DuebassLei/vuepress-blog',
    // 自定义项目git remote add origin https://github.com/DuebassLei/vuepress-blog.git仓库链接文字
    // 默认根据 `themeConfig.repo` 中的 URL 来自动匹配是 "GitHub"/"GitLab"/"Bitbucket" 中的哪个，如果不设置时是 "Source"。
    repoLabel: '贡献代码！',
    // 以下为可选的 "Edit this page" 链接选项
    editLinks: true,
    // 自定义编辑链接的文本。默认是 "Edit this page"
    editLinkText: '帮助我们改进页面内容！'
}
function getDockerSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavaSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }
    ]
}
function getJavascriptSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'js-tools'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getLinuxSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'SetProxy',
                'Git-Qs',
                'IosVpn',
                'InstallTools'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getSBSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'poi-excel',
                'vue-excel'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getSCSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getVueSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                '',
                'Moment',
                'arrayConvertTree'
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
function getOtherSidebar (groupA,groupB) {
    return [
        {
            title: groupA,
            collapsable: false,
            children: [
                ''
            ]
        },
        {
            title: groupB,
            collapsable: false,
            children: [
                'About'
            ]
        }]
}
