# WorkingWithApi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Preparation

Cheack if you have node.js and npm installed, u can use `node -v` & `npm -v`  command. In case you dont have any of this heare is a link to download `https://nodejs.org/en/`
Next setp is cheack that you have angular installed, type `ng --version`, if you don't have it installed type `npm install -g @angular/cli` in your terminal.
The last step is to install all pachages, type `npm install` in your terminal.

## Development server

Run `npm run server:all` for a dev server and json-server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
To cheack your json-server navigate to `http://localhost:3000/`

## Instruction manual

This app fetch data from json-server, after succesful fetch on your screen should appear all work orders from API, you can search for any order via search input on top of table, it also contains autocomplete feature. After you type any string search engine will cheack if any of orders match your string and display only matching orders in table.
If after starting the app nothing appear on your screen try to cheack that json-server is running. To do this navigate to `http://localhost:3000/`. If you cannot connect to this link, you need to open new terminal, navigate to place where this app is stored and type `npm run server`. After that refresh page on `http://localhost:4200/` and everything should work well.

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
