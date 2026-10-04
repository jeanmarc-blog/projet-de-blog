---
title: De la discussion à un copier-coller
date: 2026-10-03
draft: false
tags:
  - blog
  - IA
  - construction
summary: Comment, par une déduction toute personnelle, je suis arrivé à une solution simple, alors que l'IA me proposait des lignes de codes.
---

## Introduction.
Il y a quelques jours, j'ai eu envie de créer une page intitulée *Blog* sur mon carnet. L'idée était de lister les articles déjà parus, puisque la page d'accueil ne montrait que les 5 derniers. J'aurais pu, évidemment, allonger la liste des articles sur cette page. C'est d'ailleurs la première solution que l'IA m'a suggérée. Mais, je voulais une page dédiée.
## Premières tentatives.
Le flux de discussion m'a d'abord conduit à créer une page en html dans le dossier *content* -> *posts* de mon dépôt sur mon disque dur, qui rassemble les articles de mon blog. Puis à y insérer quelques lignes. Le premier résultat a été les articles entiers mis bout à bout. C'était un premier pas, mais je souhaitais une **liste à puces***, plus élégante, à mon sens. Et c'est là que les choses se sont un peu gâtées avec l'IA qui me proposait du code que j'entrais . Je relançais le blog et le résultat n'était pas là. Il y avait des puces, mais les titres des articles n'étaient pas cliquables. Cela ne me servait donc à rien ! J'essayais, au moyen de captures d'écran de montrer le problème et l'IA ne cessait de prétendre qu'on était à une ligne de la solution… Sauf que cette ligne, je ne l'ai jamais vue et que la solution me paraissait hors de (ma) portée.
## Une déduction toute humaine.
J'ai donc laissé tomber la discussion et la réflexion, résigné.
Après quelques heures, une idée m'est venue, sans que j'y ai vraiment pensé  : 

> Si la page d'accueil affiche les 5 derniers articles, ce même code devrait avoir le même effet sur la page *Blog*, en augmentant le nombre d'items.

Je me suis donc penché sur ces quelques lignes :

```go-html-template

{{ range first 5 (where .Site.RegularPages "Section" "posts") }}

{{ .RelPermalink }}

{{ end }}

```
En y regardant de plus près, j'ai remarqué le '5' qui définit le nombre d'occurrences. Au lieu de la valeur '5', dans la page html *index*, j'ai écrit '100', sachant que j'ai moins de 100 articles publiés. Ce nombre pourra être revu à la hausse si mon blog atteint la centaine d'articles. Et cela a parfaitement marché. Le résultat est celui que je voulais.

```go-html-template

{{ range first 100 (where .Site.RegularPages "Section" "posts") }}

{{ .RelPermalink }}

{{ end }}

```

[Ma page *Blog*](/posts/) présente bien une liste à puces des articles avec les titres.

Ce que j'en ai compris : les lignes de code demandent à Hugo d'afficher les 100 premières entrées du dossier "*posts*", celui qui contient les fichiers textes des articles.
## Conclusion.
C'est un apprentissage instructif : l'intelligence artificielle m'a proposé des réponses ou des solutions basées sur la technique, avec parfois des lignes incompréhensibles, complexifiant au passage les étapes. Ces tâtonnements m'ont conduit à m'intéresser à la construction du code et surtout à repérer **l'élément essentiel**, ici le nombre de titres. J'en arrive à cette conclusion : parfois, la logique et la déduction humaines font plus que la technique et l'IA. Au passage, j'ai aussi compris le code qui a servi à réaliser cette page.

Cette petite réussite a renouvelé ma motivation à continuer à tenir à jour ce blog.

*Avez-vous envie de partager de vos 'petites' ou 'grandes' réussites ? N'hésitez pas à utiliser les commentaires.*