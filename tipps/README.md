---
sidebar: auto
---
# Tipps
Auf dieser Seite sammle ich Tipps, die dir vielleicht helfen, das eine oder andere Problem mit Vue.js oder VuePress zu lösen.

## Master Frontend Development
Hier findest du alles zum Thema Frontend-Entwicklung.  
[Front-End Developer Handbook 2018](https://frontendmasters.com/books/front-end-handbook/2018/)

## Eine News-App mit Vue.js entwickeln
Ein sehr anschaulich geschriebener Artikel, der die Entwicklung einer kleinen News-App, mit Vue.js, beschreibt.  
[News-App](https://stevenziu.github.io/2018/01/15/News-Feed-App-by-Vue-js/)

## Mit Vue eine Web-Komponente entwickeln
Hier wird beschrieben, wie mit Vue.js eine echte Web-Komponente entwickelt werden kann.  
[Vue Web-Komponenten](http://vuetips.com/vue-web-components)

## Page classes
Im Frontmatter einer Seite kann man mit
```
pageClass: front
```
eine für spezielle Seiten geltende class vergeben.  
Es können aber auch mehrere classes angegeben werden.
```
pageClass: front logged-in
```
## Clean URL's
Wenn ich es richtig sehe, müssen Links zu Vuepress-Seiten immer so aussehen '/impressum.html'.  
Änders lässt sich das, indem man für jede Seite ein neues Verzeichnis mit einer README.md anlegt. Dann kann die Seite einfach mit '/impressum/' aufgerufen werden. Zumindest bei mir ist es so, dass der Slash am Ende zwingend erforderlich ist.

## Home Frontmatter
Mit den besonderen Frontmatter Angaben von VuePress zur schicken Gestaltung der Startseite, können auch beliebig viele Landingpages eingerichtet werde. Aber du kannst das jeder Seite hinzugefügen.
```bash
---
home: true
actionText: Start →
actionLink: /start/
```
Nicht so schön ist, dass dann auf jeder Seite die default Angaben der globalen config.js benutzt werden.
```
module.exports = {
    title: "VuePress.de",
    description: "Hier schreibe ich über Vue und Vuepress"
```
Das bedeutet, dass dieser Text auf jeder Landingpage erscheint.

Vermutlich lässt sich das per Javascript ändern. Es geht aber auch mit CSS. Das habe ich [hier](/one-click-deploy/) so gemacht.
```
.front .home .hero h1, .front .home .hero .description {
    text-indent: -9999px;
    line-height: 0; /* Collapse the original line */
}

.front .home .hero h1:after {
  content: "Netlify Deploy Button";
  text-indent: 0;
  display: block;
  line-height: initial;
}

.front .home .hero p.description:after {
  content: "Mit dem One-Click Installer kann VuePress in nur einer Minute installiert werden.";
  text-indent: 0;
  display: block;
  line-height: initial;
}
```


