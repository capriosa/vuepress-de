---
title: Vue Komponenten im Markdown einsetzen
sidebar: auto
---
# {{ $page.title }}
Ein Alleinstellungsmerkmal von VuePress ist sicherlich die Möglichkeit, Vue.js Code oder Vue Komponenten im Markdown einsetzen zu können.

Dieses Feature lässt sich wunderbar für Dokumentationen und Tutorials nutzen. Es gibt Vue Entwicklern die Möglichkeit, Komponenten nicht nur zu beschreiben, sondern im Text einzubinden und direkt zu demonstrieren.

Komponenten im Markdown lassen sich aber auch nutzen, um VuePress zu erweitern. Entwickler können Autoren kleine Tools zur Verfügung stellen, damit die Autoren mehr Möglichkeiten haben, als einfach nur Texte mit Markdown zu schreiben.

Solche Komponenten können kleine *Helferlein* sein, oder auch komplexe Komponenten, die Interaktivität einer Seite hinzufügen. Der Phantasie sind hier keine Grenzen gesetzt.

Ich habe zwei kleine Komponenten entwickelt, die das demonstrieren. Beide setze ich hier auf **VuePress.de** auch ein.

## Kleine Komponente zur vereinfachten Erstellung von Links
Die erste Komponente ist sehr einfach und hilft einfach nur etwas Tipparbeit zu sparen. Auf einer Seite zum Thema **VuePress** wird man sicherlich öfter einen Link zur Dokumentation von VuePress anbieten. Dank dieser Komponente, ist so ein Link wesentlich schneller, als mit Markdown, geschrieben.

Hier der Code der Komponente.

```js
<template>
  <a href="https://vuepress.vuejs.org" target="_blank">{{ linktext }}</a>
</template>

<script>
export default {
  props: {
  linktext: {
    default: 'VuePress',
    type: String
  }
}
}
</script>
```
Die Komponente kann dann Folgendermaßen im Markdown aufgerufen werden.

``` md
<VuePress />
```

Oder so, mit einem anderen Text für den Link.

``` md
<VuePress linktext="VuePress Doku" />
```

Wie gesagt, eine sehr simple Komponente, aber für mich hier ganz nützlich.

<ShareTwitter url="vue-komponenten-im-markdown-einsetzen.html" sharetext="Artikel über VuePress und Komponenten im Markdown" />

## Share This Komponente
Diese Komponente ist etwas komplexer, aber auch wesentlich nützlicher. Autoren können damit sehr einfach einen Block erstellen, der einen *Share This on Twitter* Link enthält und ansprechend gestaltet ist. Den HTML-Code dazu, habe ich mal irgendwo im Netz gefunden und habe daraus eine Vue Komponente gemacht.

::: Tip
Die einfache Möglichkeit Komponenten im Markdown aufzurufen, hilft auch beim Lernen von Vue.js. Man kann sich auf das Wesentliche konzentrieren: die Entwicklung von Single File Components.
:::

Hier der Code der *Share to Twitter* Komponente.

```js
<template>
<div class="share">
<h4>Teile dies auf Twitter!</h4>
<a :href="twitterUrl" target="_blank" class="resp-sharing-button__link">
  
  <div class="resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large">
    <div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
    </div>
  </div>
    
</a>
</div>
</template>

<script>
export default {
  props: {
  sharetext: {
    type: String
  },
  url: {
    type: String
  }
},
computed: {
    twitterUrl() {
      return 'https://twitter.com/intent/tweet/?text=' + this.sharetext + '&' + 'url=' + this.url;
    }
  }
}
</script>
```

Und so kann diese Komponente im Markdown einer Seite benutzt werden.

``` md
<ShareTwitter url="vue-komponenten-im-markdown-einsetzen" sharetext="Artikel über VuePress und Komponenten im Markdown" />
```
## Fazit
Ich finde die Möglichkeit, Komponenten im Markdown einzubinden, bietet einzigartige Möglichkeiten für VuePress Sites. Mir hilft das sehr bei meinen Bemühungen Vue.js zu lernen.

Entwickler können bessere Dokumentationen schreiben, aber auch Komponenten schreiben, die das UI/UX von VuePress Sites verbessern und Autoren hilft, optisch ansprechende Artikel oder Blog-Beiträge zu schreiben.
