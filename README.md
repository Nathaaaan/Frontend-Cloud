# FrontendCloudM2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.





Partie Front-end du projet Software-Engineering for the Cloud M2

La partie backend est composée de la base de données PostgreSQL et de l'application Java Spring.

Pour initialiser la base de données il faut effectuer la commande : docker run -p 12321:5432 --name pgdbcloud -e POSTGRES_PASSWORD=rootpass -d postgres

Pour y accéder via pgAdmin il faut se connecter sur localhost:12321, et ce sera de même dans le fichier de configuration de Spring.

Le nom d'utilisateur et le mot de passe de l'utilisateur root de la base de donnée sont postgres/rootpass


docker build -t frontcloud .

docker run -d -it -p 80:80/tcp --name frontendcloud frontcloud
