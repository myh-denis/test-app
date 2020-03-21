# TestApp

First - `npm i` to install all packages

## Back-end server

Run `npm run server:start` for a node server. `npm run server:stop` - to stop node server

## Front-end server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Front-end server with server side rendering

Run `npm run build:ssr` then `npm run start:ssr` for a dev server with SSR. Navigate to `http://localhost:4000/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `npm run build:prod` for a production build.

## Running unit tests

`npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

`npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
