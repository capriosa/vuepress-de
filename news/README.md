---
sidebar: auto
---
# News
Hier findest du kurz zusammengefasste News zu allen Themen rund um Vue.js und VuePress.

## Suche
Im Moment macht die Suche hier Zicken. Sie funktioniert einfach nicht :(  
Da muss ich mal nachhaken.

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