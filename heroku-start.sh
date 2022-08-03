#!/bin/bash

if [ "$NODE_ENV" == "development" ]
then # DEV/PREVIEW Heroku app
    # Runs two commands simultaneously
    # source: https://help.heroku.com/CTFS2TJK/how-do-i-run-multiple-processes-on-a-dyno
    trap '' SIGTERM;
    npm run start & # run gatsby dev server for serving a preview with fast reload
    bin/boot & # start nginx from heroku-buildpack-static
    wait -n;
    kill -SIGTERM -$$;
    wait
else # PRODUCTION Heroku app
    bin/boot
fi;
