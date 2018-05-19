---
title: AMP und Progressive Web Apps
sidebar: auto
---
{{ $page.title }}
Im März dieses Jahres wurde ich auf den Relaunch von bmw.com, und die dort eingesetzten Techniken, aufmerksam - PWA und AMP. Bei der neuen Site handelt es sich im Kern, um eine Progressive Web App und eine Accellerate Mobile Page, zwei Techniken, die sich eigentlich widersprechen.

Eine AMP muss schlank sein, darf nur Javascript von Google verwenden, und nur einen reduzierten Teil der HTML5 Spezifikation verwenden. Eine Progressive Web App hingegen, kann ein Javascript Framework, wie Vue.js einsetzen, Push Notifications und andere fortschrittliche Funktionen bereitstellen. Damit ist eine PWA natürlich nicht mehr AMP konform.

Dass man diese beiden Techniken kombinieren kann, wusste ich bis dahin nicht. Google beschreibt es hier: [Combine AMP with Progressive Web Apps](https://www.ampproject.org/docs/integration/pwa-amp).

Erreicht wird dies durch konsequente Verschlankung des Codes der Seiten. Zu den technischen Standards gehören „AMP HTML“, „AMP JS“ und „Google AMP Cache“. Bei AMP HTML handelt es sich um ein HTML, das um einige spezielle AMP-Tags erweitert wurde (Übersicht siehe Project Website). AMP-JS ist ein JavaScript-Framework, welches bewirkt, dass alle Ressourcen asynchron geladen werden. \
Eine AMP wird, sobald einmal Google bekannt, aus dem AMP-Cache von Google ausgeliefert.\
When a user visits AMPbyExample from a AMP-supporting platform and then clicks continues the onward journey onto the same site, they navigate away from the AMP Cache to the origin. The website still uses the AMP library, of course, but because it now lives on the origin, it can use a service worker, can prompt to install and so on.
