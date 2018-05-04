---
title: Netlify - Die Deploy und Hosting Plattform
sidebar: auto
---
# {{ page.title }}
Die US-Amerikanische Firma [Netlily](https://netlify.com) betreibt eine ausgezeichnete Plattform für automatische Deployments und dem Hosting von statischen Websites oder Sites des sog. JAMstacks. Netlify nutzt für Deployments das Versionskontrollsystem Git und einen dieser Service-Anbieter: Github, Gitlab oder Bitbucket.

:::tip
Du brauchst einen Account bei einer der drei genannten Git-Plattformen. 
Aber welcher Entwickler hat die nicht?
:::

Entwickler können auch direkt nach Netlify deployen. Das geht Folgendermaßen mit dem Netlify-CLI.

```sh {3}
npm install netlify-cli -g;
cd ~/my-static-website;
netlify deploy
```
Einfach in das Verzeichnis deiner statischen Site wechseln, *netlify deploy* aufrufen und eine Minute später ist die Site über eine Subdomain bei Netlify erreichbar. Der Name der Subdomain ist frei wählbar, solange der Name noch nicht vergeben ist. Selbstverständlich können auch eigene Domains benutzt werden.

Diese einfache Art des Deployments würde ich nur für kleine Landingpages oder zum schnellen Testen empfehlen.

## Contiunous Deployments
Größere Projekte, die eh mit Git verwaltet werden, sollten den automatischen Workflow von Netlify nutzen. [Hier wird die notwendige Konfiguration](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) beschrieben, damit z.B. Github und Netlify miteinander kommunizieren können.
Wenn du das eingerichtet hast, und lokal bei dir ein Repository mit einer Static Site Engine läuft, sieht dein Workflow ab jetzt so aus:

1. Änderungen am Code oder Inhalten commiten
2. Nach Github pushen
3. Die Änderungen werden automatisch nach Netlify gesendet
4. Netlify startet den Build Prozess der jeweiligen **Static Site Engine**
5. Die Änderungen werden Online auf deiner Site angezeigt

:::tip
Die einfachste Möglichkeit ein neues Projekt anzulegen bietet der Netlify Deploy Button. Auf [Staticgen.com](https://www.staticgen.com/) sind alle möglichen Engines aufgelistet. Sehr viele, bieten mit dem Netlify Deploy Button, eine *One-Click* Installation an.
:::

## Vorteile von Netlify
- HTTPS und Redirects von HTTP zu HTTPS
- Automatischer Build Prozess für nahezu alle **Static Site Engines**
- Deploy Previews
- **Fallback, wenn der Build Prozess durch einen Fehler abgebrochen wird**
- Schnittstellen via Webhooks zu Github, Gitlab und Bitbucket
- Anbindung an viele **Decoupled CMS** möglich
- Globales CDN
- Hohe Performance
- Sicherheit

Alleine die Tatsache, dass eine Website **nie ausfallen** kann, ist für mich Grund genug Netlify einzusetzen. Kommt es zu einem Fehler bei dem Build Prozess, schaut man sich in Ruhe die Deploy Logs an, korrigiert den Fehler und der Build Prozess wird erneut gestartet.

:::tip Info
Alle diese Features stehen mit dem kostenlosen Netlify Plan zur Verfügung.
:::

## Zusätzliche Features des kostenpflichtigen Netlify Plan
- Formulare
- AWS Lamda Funktionen
- Teams
- Identity

Diese Features sind aber erst nach einem bestimmten Volumen kostenpflichtig. Ein einfaches Kontaktformular z.B. kostet erst nach der hundersten Anfrage im Monat Geld.

## Fazit
Netlify bietet m.E. die beste Plattform und die besten Services rund um Static Site Engines und dem JAMstack.

:::tip
Hintergrundinformationen zum JAMstack sind auf [Jamstack.org](https://jamstack.org/) zu finden. Dort sind auch viele *Real World* JAMstack-Sites zu finden.
:::

