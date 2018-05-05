---
sidebar: auto
---
# News
Hier findest du kurz zusammengefasste News zu allen Themen rund um Vue.js und VuePress.

## Eine News-App mit Vue.js entwickeln
Ein sehr anschaulich geschriebener Artikel, der die Entwicklung einer kleinen News-App, mit Vue.js, beschreibt.
[News-App](https://stevenziu.github.io/2018/01/15/News-Feed-App-by-Vue-js/)

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