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

## Environments and configuration in Heroku

|                         | Production                       | Preview / development          |
| ----------------------- | -------------------------------- | -------------------------------|
| URL address             | https://naistenlinja.fi          | http://dev.naistenlinja.fi     |
| Heroku application name | naisten-linja-production         | naistenlinja-dev               |
| Git branch              | production                       | master                         |
| Heroku buildpacks       | nodejs + heroku-buildpack-static | nodejs                         |
| How it is served        | Nginx serving static build       | Gatsby dev + nginx proxy/auth  |
| Contentful environment  | master                           | master                         |
| Contentful API          | cdn.contentful.com               | preview.contentful.com         |

The common preview/dev environment is used both as a staging version of the application code, and as a preview environment for Contentful updates.

**In production** Heroku has second buildpack `heroku-buildpack-static` activated, which causes first `nodejs` step to only run `npm run heroku-postbuild` (overrides `npm run build`). That builds the website based on current content in Contentful. The built files will be served by the Nginx server created by `heroku-buildpack-static`.

**In preview/development** Heroku has only one buildback, which causes it to first build the application, and then run `npm run start` command. This will launch the Gatsby development server.

We can not specify a `Procfile` file here, because it would override the default logic described above, and thus run the same command both in production and preview.

### Cancelling overlapping builds

There is a script `heroku-cancel-other-builds.js` which will be run in the beginning of the build phase of the application. This will cancel all previously started builds, and that way prevents the race condition between different versions of the application.

This requires that Dyno Metadata feature has been enabled for the applications. That can be done by running
```shell
heroku labs:enable runtime-dyno-metadata -a naistenlinja-dev
heroku labs:enable runtime-dyno-metadata -a naisten-linja-production
heroku labs:enable runtime-dyno-metadata -a naisten-linja-preview
```

You also need to set a config variable `HEROKU_API_TOKEN` to a valid token. The token can be generated and set e.g. with
```shell
heroku authorizations:create -d "Heroku remove overlapping builds"
heroku config:set HEROKU_API_TOKEN="PUT HERE THE GENERATED TOKEN"
```