# Naisten Linja Public Website

This readme is stil WIP.

## About the Technologies

This project is developed with [Gatsby](https://gatsbyjs.com).


## Development

### Prerequisites

Project requires Node.js version 14. Our dependencies are installed and managed via npm, and are defined in package.json

To help managing node versions easily, we recommend using a node package manager like [nvm](https://github.com/nvm-sh/nvm).

We are also using [direnv](https://direnv.net/) to automatically set environment variables as you switch directories.

### Development Environment Setup

First, clone the repository and install dependencies with `npm install`. 

You'll need the values for `.envrc` from a developer from this project.

### Running the server

When you have the values, running `npm start` starts the development server. Typical port where Gatsby starts the project is `localhost:8000`, but be sure to check your command line for the correct port.

If you want to explore the GraphQL, you'll find the GraphiQL from `/__graphiql`, so if you have the port running with the default port, then the correct url would be [https://localhost:8000/__graphiql](https://localhost:8000/__graphiql).

## Conventions in This Project

*Work in Progress* 

## Deployment 

Currently the project is deployed from the `production`-branch. To deploy, either merge `master` on your own computer to `production`, and then push, or create a pull request and merge it on Github.

There are plans to make this automatic, but because of the time limits, we haven't gotten to it yet.
