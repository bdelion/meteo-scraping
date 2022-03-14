# Welcome to `meteo-scraping` :wave:

| Service | Main | Develop |
|---|---|---|
| CI GitHub Actions Status | [![Node.js CI](https://github.com/bdelion/meteo-scraping/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/bdelion/meteo-scraping/actions/workflows/node.js.yml) | [![Node.js CI](https://github.com/bdelion/meteo-scraping/actions/workflows/node.js.yml/badge.svg?branch=develop)](https://github.com/bdelion/meteo-scraping/actions/workflows/node.js.yml) |
| Quality Gate Sonar Status | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bdelion_meteo-scraping&branch=main&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bdelion_meteo-scraping&branch=main) | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=bdelion_meteo-scraping&branch=develop&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=bdelion_meteo-scraping&branch=develop) |

> NOTE : Le format est basé sur [Make a README].

`meteo-scraping` est un script qui permet de récupérer les températures min et max entre deux dates via un scraping de site météo.

## Prérequis

Les éléments suivants doivent être installés :

* Node 16 ou supérieur
* NPM

## Installation

1. Se placer dans un dossier `meteo-scraping` ou autre
   ```sh
   $ mkdir meteo-scraping && cd meteo-scraping
   ```
2. Installer le logiciel :
    ```sh
    $ npm install -g meteo-scraping
    ```
3. Afin de vérifier la version installée et de créer le fichier de configuration par défaut, exécutez la commande la commande :
    ```sh
    $ meteo-scraping -V
    ```
4. La commande ci-dessus crée le fichier de configuration [config.json] dans votre home directory (C:\users\[matricule] sous Windows) nommé `~/.meteo-scraping/`. Pour ajuster la configuration, consulter la page de documentation [Configuration].

## :house: [Homepage]

## Usage

:construction: TO DO

## :construction_worker: Fabriqué avec

* [Visual Studio Code] - Editeur de code source.
* [Travis CI] - Logiciel libre d'intégration continue.
* [Codacy] - Outil d'analyse de code : qualité, compléxité, duplication et taux de couverture des tests unitaires.
* [Code Climate / Quality] - Outil d'analyse de code : qualité, maintenabilité, duplication et taux de couverture des tests unitaires.
* [Code Coverage] - Outil d'analyse de la couverture de tests.
* [Coveralls] - Outil d'analyse de la couverture de tests.
* [SonarCloud] - Service en ligne d'analyse de qualité et de sécurité du code.

## :busts_in_silhouette: Authors

:bust_in_silhouette: **Bertrand DELION**

* Github: [@bdelion]

Voir aussi la liste des [contributeurs] ayant participés à ce projet.

## :books: Journal des modifications

Pour connaître les dernières évolutions et leurs impacts, consuler la page [CHANGELOG].

## :handshake: Contributions

Les contributions, problèmes et demandes de fonctionnalités sont les bienvenus !
N'hésitez pas à consulter la page des [issues], et à ouvrir une `issue` afin de discuter de ce que vous souhaitez modifier.

## :bookmark: Versioning

Nous utilisons [SemVer] pour le versioning.

Pour les versions disponibles, voir [les tags de ce projet].

## :link: Liens utiles

* :pencil: Documentation : [GitHub Pages]
* :building_construction: Build :
  * [Job Travis CI]
  * [Github Actions]
* Code Quality :
  * [Sonar]
* Repository : [GitHub Package Registry]

## :spider_web: Dependency

* [Dependencies] - Dépendances de ce projet
* [Dependents] - Projets dépendants de celui-ci

[Make a README]: https://www.makeareadme.com/#template-1 "README Template et bonnes pratiques"
[config.json]: https://github.com/bdelion/meteo-scraping/blob/main/src/assets/config.json "Lien vers le fichier de configuration de référence"
[Configuration]: https://bdelion.github.io/meteo-scraping/Installation-&-configuration/Configuration "Documentation pour configurer meteo-scraping"
[Homepage]: https://github.com/bdelion/meteo-scraping/tree/main "Documentation pour configurer meteo-scraping"
[Visual Studio Code]: https://code.visualstudio.com/
[Travis CI]: https://travis-ci.com/
[Codacy]: https://www.codacy.com/
[Code Climate / Quality]: https://codeclimate.com/quality/
[Code Coverage]: https://codecov.io/
[Coveralls]: https://coveralls.io/
[SonarCloud]: https://sonarcloud.io/about
[@bdelion]: https://github.com/bdelion
[contributeurs]: https://github.com/bdelion/meteo-scraping/graphs/contributors "Liste des contributeurs au projet"
[CHANGELOG]: CHANGELOG.md "CHANGELOG du projet"
[issues]: https://github.com/bdelion/meteo-scraping/issues "Liste des issues ouvertes"
[SemVer]: https://semver.org/lang/fr/ "Bonnes pratique de la Gestion de Version"
[les tags de ce projet]: https://github.com/bdelion/meteo-scraping/tags "Liste des tags du projet"
[GitHub Pages]: https://bdelion.github.io/meteo-scraping/
[Job Travis CI]: https://travis-ci.com/bdelion/meteo-scraping "Job Travis du projet"
[Github Actions]: https://github.com/bdelion/meteo-scraping/actions "Workflows GitHub Actions du projet"
[Sonar]: https://sonarcloud.io/project/overview?id=bdelion_meteo-scraping "Dashboard Sonar du projet"
[GitHub Package Registry]: https://github.com/bdelion/meteo-scraping/packages
[Dependencies]: https://github.com/bdelion/meteo-scraping/network/dependencies
[Dependents]: https://github.com/bdelion/meteo-scraping/network/dependents
