---
title: Progressive Web Apps
sidebar: auto
---
# {{ $page.title }}

_Progressive_, also fortschrittliche Web Apps, sollen die Apps der Zukunft werden. So stellt es sich zumindest Google vor. Apps sollen dann nicht mehr über App-Stores installiert werden, sondern einfach über den Browser. Es sei mal dahingestellt, ob sich dieses Model durchsetzt, aber bereits heute haben PWA's enorme Vorteile verglichen mit _normalen_ Websites.

::: tip Info
Eine PWA ist eine Responsive Website, die einige Merkmale besitzt, die wir von nativen Apps kennen. So können z.B. Inhalte auch Offline gelesen werden.
:::

## Anforderungen

Folgende Anforderungen müssen erfüllt werden, damit ein Browser die Website als PWA identifiziert.

* Die Website muss das HTTPS Protokoll unterstützen.
* Ein Redirect von HTTP zu HTTPS sollte angeboten werden.
* Eine serviceworker.js muss vorhanden sein.
* Eine manifest.json muss vorhanden sein.

Viele Frameworks bieten _Out of the box_ schon alles an, damit eine PWA erstellt werden kann. So kann man mit dem Vue CLI auch direkt alles generieren lassen, was eine PWA benötigt.

Bei Vuepress muss man die manifest.json manuell erzeugen. Mein [One-Click Deploy](/one-click-deploy/) Projekt enthält die manifest.json, die natürlich bearbeitet und an die eigene Website angepasst werden muss.

Wer Netlify zum Hosting nutzt, kann ein _Force HTTPS_ einstellen. Diese Möglichkeit wird auch bei der kostenlosen Version angeboten :100:

## Entwicklung einer PWA

Die Entwicklung einer PWA entspricht der Entwicklung einer normalen Website mit HTML5, CSS 3 und Javascript. Bei Vuepress kann jede erweiterte Funktionalität mit Vue.js und Vuex entwickelt werden.

## Wie funktioniert die App?

Einem Benutzer, der die Website auf einem Smartphone aufruft, wird ein Banner angezeigt, wo er mit einem Klick die Site zu seinem Homescreen hinzufügen kann.
Ruft er später die Site über das Homescreen-Icon auf, sieht er die Site mit einem Look and Feel einer App. So wird z.B. nicht mehr die URL-Leiste angezeigt.

<ShareTwitter sharetext="Hier schreibe ich über Vuepress Sites, als PWA" url="https://vuepress.de/progressive-web-apps.html" />

## Vorteile einer PWA

<GridBlocks  feature1="Muss nicht über einen **App-Store** bezogen und installiert werden." feature2="Kann zum Homescreen hinzugefügt werden" feature3="Funktioniert auch Offline oder einer schlechten Verbindung"></GridBlocks>

* Muss nicht über einen Store bezogen und installiert werden
* Kann zum Homescreen hinzugefügt werden
* Funktioniert auch Offline oder einer schlechten Verbindung

::: tip Info
Wer es mit seiner Website auf den Homescreen eines Besuchers schafft, hat enorme Wettbewerbsvorteile gegenüber seiner Konkurrenz.
:::

## Die fertige App mit Lightroom testen

Entwickler können im Chrome, über die Entwicklertools mit Lightroom, prüfen, ob alle Kriterien für eine PWA erfüllt werden. Einfach auf den Tab _Audit_ klicken und dann _Run Audit_ aufrufen. Dort kann dann angegeben werden was alles geprüft werden  soll.
Zur Verfügung stehen Tests für

* Performance
* PWA
* Best Practices
* Accessibility
* SEO

Vuepress.de erzielt hier die Werte 97, 91, 100, 100, 89.
