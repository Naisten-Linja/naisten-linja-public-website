const Heroku = require('heroku-client')

const HEROKU_API_TOKEN = process.env.HEROKU_API_TOKEN
const APP = process.env.HEROKU_APP_ID

if (!HEROKU_API_TOKEN) {
    console.error("Environment variable HEROKU_API_TOKEN is not defined")
    console.error("Define that in config vars of the application")
    process.exit(1)
}

if (!APP) {
    console.error("Environment variable HEROKU_APP_ID is not defined")
    console.error("Define that in config vars or by activating Heroku Labs feature `runtime-dyno-metadata`")
    process.exit(1)
}

const heroku = new Heroku({ token: HEROKU_API_TOKEN })

async function main() {
    const builds = await heroku.get(`/apps/${APP}/builds`)
    // Sort array so that latest build is first
    builds.sort((a, b) => b.created_at.localeCompare(a.created_at))
    
    const previousStillPending = builds
        .filter(b => b.status === 'pending') // Only delete builds that are running
        .slice(1) // Do not delete the latest build

    console.log(builds)
    console.log(previousStillPending)

    for (const build of previousStillPending) {
        console.log(`Deleting build ${build.id} in ${build.app.id} which was created at ${build.created_at} by ${build.user.email}`)
        const result = await heroku.delete(`/apps/${APP}/builds/${build.id}`)
        console.log(result)
    }
}

main().catch(err => {
    console.error("Failed to cancel overlapping builds")
    console.error(err)
    process.exit(1)
})
