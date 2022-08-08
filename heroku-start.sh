#!/bin/bash

if [ "$NODE_ENV" == "development" ]
then # DEV/PREVIEW Heroku app
    bin/start-nginx npm run start
else # PRODUCTION Heroku app
    bin/start-nginx-solo
fi;
