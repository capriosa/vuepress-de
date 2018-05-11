---
sidebar: auto
---
# News
Hier findest du kurz zusammengefasste News zu allen Themen rund um Vue.js und VuePress.

## Neue npm Version und Sicherheits-Audits verfügbar
Die neue NPM Version kann so installiert werden:
```bash
npm install npm -g
```
In Verzeichnissen von Projekten kann dann npm audit aufgerufen werden und man erhält eine Auflistung von Aktualisierungen und Sicherheitslücken.
[Artikel lesen](https://docs.npmjs.com/getting-started/running-a-security-audit?utm_campaign=2018-05-09%20nsp%20audit%20announcement&utm_medium=email&utm_source=Eloqua)

## Vuejs.org auf Netlify
[Vue.js](http://Vuejs.org)  Vuejs.org ist seit Anfang Mai 2018 *powered by*  [Netlify](https://netlify.com).

<ShareTwitter sharetext="Vuepress News" url="https://vuepress.de/news/" />

## Algolia Suche
Ohne großes TamTam wurde die Algolia-Suche integriert. Es stand plötzlich nicht mehr in der Liste der Todos.
Um Algolia zu aktivieren muss der ThemeConfig Eintrag in der config.js so erweitert werden.

```js{3}
module.exports = {
  themeConfig: {
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    }
  }
}
```
Den API_KEY und INDEX_NAME erhälst du nach der Registrierung bei [Algolia.com](https://algolia.com)

## Netlify Deploy Button
Mein Netlify Deploy Button, zur einfachen Installation von VuePress ist fertig.  
Die [Installation](/install-vuepress/) richtet eine PWA *out of the box* ein, bietet eine Integration des NetlifyCMS und hat das selbe schicke Style, wie VuePress.de