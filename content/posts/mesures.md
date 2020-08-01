+++
title = "Mesures"
date = "2020-07-28T11:11:27+02:00"
author = "Jean-Marc"
authorTwitter = "" #do not include @
cover = "img/performances.jpg"
tags = ["BLOG", "OUTILS"]
keywords = ["", ""]
description = "Mesurer les performances d'un site internet ne dit pas tout, évidemment, mais cela donne une idée de son fonctionnement."
showFullContent = false
+++

## Les sites statiques répondent plus vite

Les sites statiques, par opposition aux sites dynamiques (type Wordpress) sont plus rapides. Cela signifie qu'ils donnent de meilleures réponses et de meilleurs résultats quand on les passe *"à la moulinette"* des outils de mesure.

On peut légitimement se demander si ça a une importance quelconque pour l'internaute, s'il est sensible à cette différence. Pour avoir testé mon blog avec d'autres, dont le mien en Wordpress, la différence à l'oeil nu n'est pas flagrante.

Mais, j'ai eu envie de tenter le test des mesures.

C'est ce que j'ai fait en utilisant [web.dev measure](https://web.dev/measure/). En faisant passer un audit à ce blog, il atteint plus de 90% aux tests.

## La raison est simple

La raison est assez simple. Comme le relève [François Charlet qui a quitté Wordpress au profit de Hugo](https://francoischarlet.ch/2020/jai-quitte-wordpress-pour-hugo/#site-dynamique-et-site-statique), les pages de sites statiques sont stockées et affichées telles que l'auteur les a créées. Il n'y a donc pas de *"regénération"* des pages à chaque affichage, comme le fait un système Wordpress.

## Moins d'espace aussi

Cela implique aussi qu'il y a moins d'espace nécessaire requis sur le serveur. Puisqu'il n'y a pas de base de données, à la manière de Wordpress.

## Plus technique, moins convivial

L'inconvénient souvent relevé est qu'un site statique nécessite plus de connaissances techniques qu'un site dynamique. Wordpress que j'utilise pour mon blog [réformé & connecté](https://jeanmarcleresche.ch) est beaucoup plus intuitif. Il y a des plug-in, un système d'écriture qui ressemble à un traitement de texte. Tout se passe bien pour moi, là aussi.

Mais j'avais envie de tenter l'expérience d'un site statique, de me frotter à cette autre manière de faire, d'en découvrir quelques secrets.

Je ne suis qu'au début de ma quête, mais j'en apprends chaque jour un peu plus. 