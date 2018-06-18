---
title: NPM Module erstellen
sidebar: 'False'
---
# NPM Module erstellen

In diesem Beitrag möchte ich darstellen, wie einfach du ein NPM Modul, z.B. für eine Vue Komponente, erstellen kannst. Du brauchst zunächst einmal einen NPM Account. Dann wechselst du im Terminal in das Verzeichnis deiner Vue Komponente. Dort meldest du dich dann in deinem NPM Account an.

```
npm login
```

Danach öffnest du eine interaktive Terminal Session.

```
npm init
```

Dadurch wird eine package.json Datei generiert, die zur Veröffentlichung deines Node Moduls benötigt wird. Die Datei sollte so aussehen:

```
{
  "name": "my-vue-component",
  "version": "1.0.0",
  "description": "Das ist meine großartige Vue Komponente",
  "main": "MyVueComponent.vue",
  "repository": {
    "type": "git",
    "url": "https://github.com/capriosa/my-vue-component.git"
  },
  "keywords": [
    "Vue",
    "Components"
  ],
  "author": "Meinolf Droste",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/capriosa/my-vue-component/issues"
  },
  "homepage": "https://github.com/capriosa/my-vue-component#readme"
}
```

Du solltest unbedingt eine readme.md Datei erstellen, die eine Beschreibung und Installationsanleitung deiner Komponente beinhalten sollte.

## Modul veröffentlichen

Mittels

```
node publish
```

wird dein Modul im NPM Repository veröffentlicht. 
Eine neue Version erstellst du mit:

```
npm version 1.0.1
npm publish
```

Das war's auch schon. Andere Entwickler können deine Komponente mit

```
npm install my-vue-component
```

installieren.

<ShareTwitter url="npm-module-erstellen.html" sharetext="Hier wird beschrieben, wie ein Node Modul erstellt wird." />
