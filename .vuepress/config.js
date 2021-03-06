module.exports = {
    title: "VuePress.de",
    description: "Ich bin Meinolf Droste, Frontend-Entwickler und Inhaber von mdwp - Digital Consulting & Services. Hier schreibe ich über Vue.js und Vuepress.",
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: 'manifest.json' }],
        ['meta', { name: 'theme-color', content: '#4527a0' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#4527a0' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    themeConfig: {
        search: false,

        nav: [
            { text: 'VuePress', link: '/start/' },
            { text: 'Artikel', link: '/artikel/' },
            { text: 'About', link: '/about/' },
            { text: 'Impressum', link: '/impressum/' },
            { text: 'Datenschutz', link: '/datenschutz/' },
            { text: 'Kontakt', link: '/kontakt/' },
            { text: 'One-Click Deploy', link: '/one-click-deploy/' }

        ]
    }
}