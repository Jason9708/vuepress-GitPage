module.exports = {
    title: 'CHICAGO',
    description: '前端仔的自我挣扎',
    head: [
        ['link', { rel: 'icon', href: '/logo/favicon.ico' }],
    ],
    base: '/vuepress-GitPage/', // 仓库是vuepress-GitPage
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
        nav: [{
                text: '前端算法',
                link: '/algorithm/'
            }, // 内部链接 以docs为根目录
            {
                text: '前端小册',
                items: [{
                        text: 'Webpack',
                        link: '/webpack/'
                    },
                    {
                        text: 'Designpattern',
                        link: '/designpattern/'
                    },
                    {
                        text: 'Canvas',
                        link: '/'
                    }
                ]
            },
            // 下拉列表
            {
                text: 'GitHub',
                link: 'https://github.com/Jason9708'
            } // 外部链接      
        ],
        sidebar: {
            // docs文件夹下面的webpack文件夹 文档中md文件 书写的位置(命名随意)
            '/webpack/': [
                '/webpack/', // webpack文件夹的README.md 不是下拉框形式
                '/webpack/webpack01/',
                '/webpack/webpack02/',
                '/webpack/webpack03/',
                '/webpack/webpack04/',
                '/webpack/webpack05/',
                '/webpack/webpack06/'
            ],
            // docs文件夹下面的canvas文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/canvas/': [
                '/canvas/',
            ],
            '/designpattern/': [
                '/designpattern/',
                '/designpattern/designpattern01/',
                '/designpattern/designpattern02/',
                '/designpattern/designpattern03/',
                '/designpattern/designpattern04/',
                '/designpattern/designpattern05/',
                '/designpattern/designpattern06/',
                '/designpattern/designpattern07/',
                '/designpattern/designpattern08/',
                '/designpattern/designpattern09/'
            ]
        }
    }
}