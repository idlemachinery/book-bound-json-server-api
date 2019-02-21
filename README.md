# Book-Bound JSON Server API

This project is a [JSON Server](https://github.com/typicode/json-server) implementation of an API for the Book-Bound API Challenge.  JSON Server is extremely simple to use from the command line but I have also included `server.js` to demonstrate setting up a custom server in code.

## Book-Bound API Challenge

[The API Challenge](https://idlemachinery.com/io/the-api-challenge/) involves creating the same API with book and author endpoints using as many different implementations as possible.

## Installing the application

Download the project from GitHub.  Run `npm install` to install package dependencies.

## Running the application

Run `npm start` to start the custom JSON server or run `npm run start-cli` to start the server using command-line attributes. Navigate to `http://localhost:3000` to view the endpoint.  The app will automatically reload if you edit the contents of `db.json`.

### API endpoints

* `http://localhost:3000/api/books`
* `http://localhost:3000/api/authors`