const router = require('express').Router();

const routes = ['user', 'session'];

for (let route of routes) {
    console.log(`route: ${route}`)
    router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
