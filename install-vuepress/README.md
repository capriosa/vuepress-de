# VuePress Deploy

Dies ist ein Start Template für eine [VuePress](https://vuepress.vuejs.org) Site und einer Progressive Web App (PWA).
Außerdem ist das NetlifyCMS integriert.

## One-click Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/capriosa/vuepress-deploy)

## NetliyCMS Konfiguration

In der Datei ‘.vuepress/public/config.yml’ den Namen deines Github Repositories eintragen.

backend:
  name: github
  repo: name/repositorie
  branch: master

Dann füge eine Oauth deinem Github account hinzu: https://github.com/settings/developers Für die Authorization callback URL, gibt's du https://api.netlify.com/auth/done ein.

Du erhältst eine Client ID und einen Client Secret für deine App. Diese musst du für dein Netlify Projekt eintragen:

Gehe zu deinem Netlify Dashboard und klicke auf dein Projekt.
Gehe zu Settings > Access control > OAuth.
Unter Authentication Providers, klicke auf Install Provider.
Wähle GitHub und gebe die Client ID und den Client Secret ein und klicke auf 'Save'.

Jetzt kannst du auf deiner VuePress Site das NetlifyCMS aufrufen indem du ‘/admin’ am Ende der URL deiner Site eingibst.

<ShareTwitter sharetext="Artikel über den Netlify Deploy Button für VuePress" url="https://vuepress.de/install-vuepress/" />

## Lokale Entwicklung

Zur lokalen Entwicklung kannst du gerne mein Github Repository nutzen.

```bash{3}
git clone https://github.com/capriosa/vuepress-deploy
cd vuepress-deploy
npm install
npm run build or npm run dev to start a local server
```

Die VuePress Dokumentation findest du hier. [VuePress Docs](https://vuepress.vuejs.org)