---
title: AMP und Progressive Web Apps
sidebar: auto
---
{{ $page.title }}
Im März dieses Jahres wurde ich auf den Relaunch von bmw.com, und den dort eingesetzten Techniken, aufmerksam - PWA und AMP. Bei der neuen Site handelt es sich im Kern, um eine Progressive Web App und eine Accellerate Mobile Page, zwei Techniken, die sich eigentlich widersprechen.

Eine AMP muss schlank sein, darf nur Javascript von Google verwenden, und nur einen reduzierten Teil der HTML5 Spezifikation verwenden. Eine Progressive Web App hingegen, kann ein Javascript Framework, wie Vue.js einsetzen, Push Notifications und andere fortschrittliche Funktionen bereitstellen. Damit ist eine PWA natürlich nicht mehr AMP konform.

Dass man diese beiden Techniken kombinieren kann, wusste ich bis dahin nicht. Google beschreibt es hier: [Combine AMP with Progressive Web Apps](https://www.ampproject.org/docs/integration/pwa-amp).

Eine Progressive Web App (PWA) ist eigentlich eine Responsive Webseite, welche einige Merkmale von nativen Apps besitzt. Letztlich ist es mehr eine moderne Website, als eine App. In wenigen Jahren wird jede professionelle Website eine PWA sein, ähnlich wie **vor** wenigen Jahren aus jeder *normalen* Website eine Responsive Website wurde. Und ambitionierte PWA's werden mit einer AMP kombiniert werden.

Nachdem ich den Artikel über den bmw.com Relaunch gelesen hatte, kam mir sofort der Gedanke ein Demo-Projekt aufzusetzen, das eine AMP mit einer PWA kombiniert.
