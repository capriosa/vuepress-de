---
sidebar: auto
---
# Tipps
Auf dieser Seite sammle ich Tipps, die dir vielleicht helfen, das eine oder andere Problem mit VuePress zu lösen.

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
Änders lässt sich das, indem man für jede Seite ein neues Verzeichnis mit einer README.md anlegt. Dann kann die Seite einfach mit '/impressum/' aufgerufen werden.
