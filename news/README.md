---
sidebar: auto
---
# News
Hier findest du kurz zusammengefasste News zu allen Themen rund um Vue.js und VuePress.


## Algolia Suche
Ohne großes TamTam wurde die Algolia-Suche entegriert. Es stand plötzlich nicht mehr in der Liste der Todos.
Um Algolia zu aktivieren muss der ThemConfig Eintrag in der config.js so erweitert werden.

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