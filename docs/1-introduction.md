# Introduction

Dit document is de overdracht van het project "Inbeheername API-standaarden" van John de Graaff in de periode juli t/m okt 2020.

## Overdracht

De overdracht bestaat uit 3 onderwerpen:

1. Beschrijving van de gemaakte setup in Github en op de publicatie-server
2. Een voorstel document voor het Beheermodel API-standaarden
3. Overige aandachtspunten of Agenda-punten voor de eerste API-TO meeting

## Conventie in dit document

Linux command-line instructies zijn weergegeven met een groter-dan teken: `> instructie`

<pre class="monopre">
# opmerkingen worden ingeleid met een '#' (hash-teken)
> instructies worden ingeleid met een '>' (groter-dan teken)
output van instructies worden niet ingeleid
</pre>

## Locatie van dit document

De werkversie van dit document is in MarkDown geschreven en staat in deze repository: <br>
https://github.com/Logius-standaarden/Project-API-inbeheername-2020

De publicatie ('leesbare' of rendered) versie staat in een 'hidden' folder op deze Apache2 webserver: <br>
https://publicatie.centrumvoorstandaarden.nl/hidden-code-53982261/overdracht/

Hieronder de Linux command-line instructies om dit document te hercreëren. <br>
Merk op dat de Apache webserver direct de .html en .md files uit de repo-folder leest (daar zit geen script tussen).

<pre class="monopre">

# clone repo in folder: $HOME/dev/github/Project-API-inbeheername-2020/

> cd $HOME
> mkdir -pv dev/github/
> git clone git@github.com:Logius-standaarden/Project-API-inbeheername-2020.git
> cd ./Project-API-inbeheername-2020/
> git remote -vv
origin  git@github.com:Logius-standaarden/Project-API-inbeheername-2020.git (fetch)
origin  git@github.com:Logius-standaarden/Project-API-inbeheername-2020.git (push)

# symlink to Apache webpage folder (inside the 'pub-cvs-tilaa' repo)

> cd ~/dev/pub-cvs-tilaa/webroot/
> mkdir hidden-code-53982261
> cd hidden-code-53982261
# script to create symlink:
> cat overdracht_create-link.sh
#!/bin/bash
ln -s /home/jdg/dev/github/Project-API-inbeheername-2020/overdracht/ /home/jdg/dev/pub-cvs-tilaa/webroot/hidden-code-53982261/overdracht
# run script:
> ./overdracht_create-link.sh

</pre>

## TODO-JDG

1. [done] change Webhook HTTP to HTTPS
2. [done] add Github parameters (release_url), git-pull met enkel release
3. [done] schrijven proces handmatig save-as static-HTML
4. [done] show waar HTST staat
