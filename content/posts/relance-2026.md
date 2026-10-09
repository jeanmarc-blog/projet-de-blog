---
title: Je relance ce blog en 2026
author: Jean-Marc
date: 2026-10-09
draft: false
tags:
  - construction
  - IA
  - relance
  - écriture
summary: Les raisons qui me poussent à relancer ce blog
cover: /img/Outils26.jpg
---
*Image de couverture générée par IA (Copilot)*
## Introduction
J'ai lancé ce blog en 2020, en pleine crise du Covid, alors que j'avais plus de temps pour moi. J'ai essayé de comprendre ce que je faisais en alignant du code dans le terminal de mon mac. À cette époque, l'intelligence artificielle grand public n'en était qu'à ses balbutiements et je me suis découragé, j'ai laissé ce blog, tenté de le relancé à plusieurs reprises et sans conviction.

## Quelques reprises peu convaincantes
Si je délaissais mon blog, je n'arrivais pas à l'oublier totalement ni à le supprimer. J'y revenais pour y déposer mes états d'âme du moment, à l'image de cet [article](reprise-du-blog), entre l'envie de continuer et la lassitude. J'ai encore essayé des publications sous la forme d'un [billet (ou carnet) mensuel](janvier). Mais, je n'ai pas trouvé la formule qui me ferait tenir dans le temps. Alors, j'ai laissé tomber. Entre temps, j'ai changé mon ordinateur, passant de mac à windows et je n'ai pas repris le dossier de mon blog.

## 2026 : un nouveau départ
À l'automne 2026, l'envie m'est revenue de reprendre ce blog. Même si j'écris (ou ai écrit) dans d'[autres blogs](mes-blogs), je n'ai pas vraiment oublié celui-ci. Et, depuis quelques semaines, je faisais quelques recherches "théoriques" au moyen de l'IA. J'avais oublié certains aspects techniques. Les réponses apportées par l'IA étaient faciles à comprendre. Allaient-elles l'être tout autant dans la pratique. Je me suis donc lancé à redonner un nouveau départ à ce blog.

## Le quatuor gagnant
Pour relancer mon blog, j'ai consulté plusieurs sites et ai questionné l'IA. Celle-ci m'a proposé d'utiliser [Obsidian](https://obsidian.md/) comme outil d'écriture. J'avais déjà tâté ce programme, plutôt comme un système de prise de notes et de mise en liens entre elles.  Je parlerai bientôt plus mes premières expériences avec ce programme.
J'ai ensuite installé [Hugo](https://gohugo.io/) que j'avais déjà sur mon mac et qui traduit les pages écrites en markdown dans Obsidian en pages statiques du site internet.
J'ai clôné mon dépôt [Github](https://github.com/jeanmarc-blog?tab=repositories) dans lequel figurent les sources du blog et l'historique des mises à jour. L'IA m'a alors proposé la version *Desktop* qui est plus visuelle.
Cette solution me convient, car, comme je l'ai déjà évoqué, je n'ai pas de connaissances techniques.

Derrière ce blog, il y a donc :
- Obsidian sert à rédiger les pages en langage markdown; je développerai les avantages de ce langage dans un prochain billet.
- Github Desktop "pousse" les modifications vers le dépôt (ou coffre-fort) en ligne
- Hugo transforme les fichiers en markdown en pages internet
- Et Netlify publie les modifications.

Concrètement, je n'utilise que les deux premiers. Je lance la commande dans le Terminal :
```
hugo server -D
```
Avant la publication en ligne, je publie les articles en mode *brouillon* ou *draft* (d'où le -D dans la commande), vérifie si le texte s'affiche correctement, si les liens fonctionnent bien, si la mise en page est lisible. Au besoin, je corrige.

L'architecture de mon blog est enregistrée sur mon disque dur : 

![La hiérarchie des dossiers de mon blog](/img/blog_local.jpg)
## Conclusion
Une fois les soucis techniques résolus, je peux me consacrer à ce qui sera le cœur de mon blog : l'écriture. Hugo, Github, Obsidian, Netlify ont leur importance, évidemment, car sans eux, pas de blog lisible. Mais ce sont des outils au service de mon essentiel : le plaisir d'écrire. Après plusieurs tentatives, je me dis que cette relance pourrait bien être la bonne, car, enfin, la technique laisse la place à la créativité et au contenu.

### Pour aller plus loin

* [AI](/tags/ia)
* [Relance](tags/relance)
* [Mon premier article sur ce blog](ma-petite-boite-a-outils)