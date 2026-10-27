---
title: 📒 Carnet du mois • Octobre 2026
date: 2026-10-12
draft: true
tags:
  - CARNET
description: Quelques réflexions du mois d'octobre rassemblées sous la forme d'un carnet
cover: /img/machine.jpg
---
> Chaque mois, je garde quelques traces écrites de ce qu'ont été les semaines passées. À terme, cela pourra devenir un vrai journal de bord. J'y rassemble quelques réflexions personnelles. Vous pourrez les découvrir dans [cette liste](/tags/carnet/).
## Prologue
En octobre, je reprends le format *Carnet* que j'ai inauguré il y a plusieurs années. À l'époque, il me permettait de garder une trace de ce qui m'avait occupé. Aujourd'hui, il retrouve sa place, avec une forme renouvelée. Celui-ci paraîtra peut-être trop technique à des non-initiés, trop superficiel à des érudits. C'est un risque et une dimension que j'assume.


![Sonogno, Val Verzasca, Tessin](/img/sonogno26.jpg)
Cascata Froda di Sonogno à quelques minutes à pied du village de Sonogno (Val Verzasca, Tessin)

##  ✏️ Blog et écriture
J'ai relancé ce blog avec les outils que j'avais découverts il y  a plusieurs années et un peu oubliés. Avec l'aide de l'IA, j'ai pu résoudre certains problèmes techniques, même si d'autres restent en suspens, mais ils n'empêchent pas la bonne marche du blog. 

Après avoir installé les différents outils nécessaires à la [relance de mon blog](/posts/relance-2026), j'ai repris le contenu de certaines pages qui dataient de 5-6 ans. J'en ai profité pour explorer de nouvelles fonctionnalités et redécouvrir des outils que j'avais laissés de côté. 

Par exemple, j'ai créé la [page blog](/posts). Je redécouvre le plaisir d'écrire en *markdown* dans [*Obsidian*](/posts/Obsidian/) qui prend alors une autre utilité.


![Champ de Mars, Colmar](/img/colmar26.jpg)
Parc du Champ de Mars, au centre-ville de Colmar (France)

### Ce que j'ai appris
En créant une page [blog](/posts/), je me suis dit que je pourrais faire la même chose pour en créer une listant les [carnets mensuels](/carnets/). En fait, c'est la même mécanique qui permet à Hugo de générer une page. Ayant compris les rouages, j'ai repris les mêmes lignes de code, tout en adaptant pour obtenir une liste des articles du blog et une autre liste des carnets.
```
<ul>
        {{ range first 100 (where .Site.RegularPages "Section" "carnets") }}
            <li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
        {{ end }}
</ul>

```
La section "carnets" indique à Hugo de lister les 100 premiers items du dossier "carnets" que j'ai créé dans le dossier "content". Tout comme la page blog, je pourrais revoir à la hausse le nombre de carnets à afficher. Ainsi, quelques lignes de code permettent de parcourir et afficher tout le contenu d'un dossier.

Quelques réglages assez simples dans [Obsidian](/posts/Obsidian) m'ont permis de rendre la rédaction encore plus facile et aisée : j'ai précisé le format des liens markdown par défaut sous la forme entre crochets et parenthèses et le chemin relatif qui indique le chemin complet vers la note. Tout cela n'a l'air de rien, mais ça fait gagner un temps fou. 

J'ai encore appris à m'initier au langage html pour ce qui est des pages *index* qui listent les articles et les carnets et la page d'accueil. Sans cette page d'accueil, le site affiche directement les derniers articles.
### Ce qui m'a surpris
Il m'est venu l'idée de vouloir changer la police d'écriture de ce blog. En effet, je n'aime pas les zéros barrés et je souhaitais une police plus élégante. J'ai donc sollicité l'IA pour m'aider à régler ce problème. J'imaginais qu'il suffirait de modifier une ou deux lignes de codes quelque part pour voir le résultat. Ce qui devait ne prendre que quelques dizaines de minutes, d'après moi, m'a pris beaucoup plus de temps et sans résultat. J'ai donc remis ce projet à plus tard.

![La chapelle Le Corbusier à Rondchamp](/img/Rondchamp.jpg)
La chapelle de Le Corbusier à Rondchamp (France)
## 🧠 L'IA au quotidien
J'ai lu quelques articles autour de la polémique autour du roman *C'était ça ou mourir de [Thélyson Orélien](https://www.huffingtonpost.fr/culture/article/thelyson-orelien-dement-tout-usage-de-l-ia-et-denonce-les-nombreuses-attaques-racistes_329256.html). Pour rappel : à l'occasion de la rentrée littéraire de cet automne, l'auteur canado-haïtien était en lice dans les livres retenus par les Prix. Son premier roman cartonnait. Un compte sur X *"Balance ton Claude"* a prétendu que ce livre avait été écrit en très grande partie par l'IA. 

Certains comités ont fait le choix de retirer ce livre des papables à une récompense. L'auteur se défend d'avoir eu recours à une IA, expliquant que son style est ancré dans une culture qui lui est propre. Les essais qui ont été faits à la suite de cette histoire ont montré que les détecteurs de textes humains ou IA ne sont pas unanimes et peuvent révéler autant de faux positifs que de faux négatifs (ça vous rappelle quelque chose ?) 

Finalement, courant octobre, la maison Les Éditions du Boréal qui a publié *"C'était ça ou mourir"* a décidé de [rompre son contrat avec cet auteur](https://www.editionsboreal.qc.ca/actualites/18-les-editions-du-boreal-mettent-fin-a-leur-collaboration-avec-thelyson-orelien.html).

Ce que j'en retire tient en quelques mots : les outils, à l'image de [Pangram](https://tcrouzet.com/2026/09/23/plagiat-IA/), qui servi à "prouver" la supercherie de Thelyson Orélien et qui sont censés évaluer à quel degré un texte est rédigé par un humain ou une IA sont justement alimentés par des IA. Ils ne sont donc que des outils. Trancher la question de qui est à la manœuvre derrière un texte se révèlera toujours plus compliqué, voire impossible. Mais se réfugier derrière les résultats pour le moins discutables d'une machine, c'est lui donner un pouvoir et une autorité qu'elle n'a pas.

## 💻 Lectures & vidéos

* [Pangram, le logiciel qui accuse... dans Le Point.fr](https://www.lepoint.fr/high-tech-internet/pangram-le-logiciel-qui-accuse-thelyson-orelien-davoir-ecrit-son-livre-par-ia-est-il-vraiment-fiable-7I5INZHUORAQPOIDMBX4MDXIOA/)
* [Des écrivains romands s'expriment sur l'utilisation de l'IA](https://www.rts.ch/play/tv/19h30/video/des-ecrivains-romands-sexpriment-sur-lutilisation-de-lia-pour-lecriture?urn=urn:rts:video:32735857-7347-378b-8fe8-1b45edea433b)
* [Thierry Crouzet : hypocrisie éditoriale](https://tcrouzet.com/2026/10/02/hypocrisie-editoriale/)
* [Olivier Leclère : L'IA a un grain...de sel](https://olivierleclere.ch/blog/2024/09/cuisine-l-ia-a-un-grain--de-sel/)

![Port de Locarno, Tessin, Suisse](/img/Locarno.jpg)
Port de Locarno (Tessin, Suisse)
## Le mois prochain
Les aspects techniques me semblent en grande partie résolus : le site fonctionne, il est lisible, son architecture est devenue claire et propre (en tout cas pour moi), si ce n'est le projet de changer la police qui peut bien attendre. Tout cela me rassure : toute l'énergie et le temps investis n'ont pas été vains.  je pourrai me consacrer **vraiment** au cœur de mon projet : l'écriture. Les évolutions techniques viendront certainement au fur et à mesure.

Les prochains mois seront pour moi une phase test pour vérifier si ce projet s'inscrit dans la durée, s'il vient raviver mon envie et mon plaisir d'écrire et de tester. J'ai d'ailleurs déjà quelques idées, quelques brouillons qui n'attendent qu'à être publiés. J'ai également l'intention de partager ce blog avec des lecteurs d'horizons divers, afin de recueillir leurs suggestions et avis. 

Ce blog est d'abord un espace d'expressions et d'écriture et de partage. Il se veut en évolution : rien n'est figé. Tout peut changer et ceci grâce à vous. C'est en tout cas la direction que je souhaite prendre au moment de donner une nouvelle refonte de ce blog. Il est aussi possible que ce blog se transforme peu à peu en un carnet numérique (à l'image d'un [jardin numérique](https://jardin.liut.me/jardin-num%C3%A9rique)), où je publierai des notes, des réflexions ou des articles susceptibles d'être complétés ou modifiés par la suite.

Tout cela reste ouvert. Et c'est cela qui est beau !

*Le contenu de ce carnet a été en partie révisé par IA (Copilot)*.

---

### Pour aller plus loin
* Découvrez [d'autres carnets](/tags/carnet)