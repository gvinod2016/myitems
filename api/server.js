// server.js
const jsonServer = require('json-server')
const server = jsonServer.create()
const userRouter = jsonServer.router('users.json')
const middlewares = jsonServer.defaults()

const usersData = require('./users.json')

server.use(middlewares)
server.use(jsonServer.bodyParser)

const isAuth = [
    '/api/signin',
    '/api/signup',
    '/api/forget'
]

function isAuthorized(req) {
    console.log(req.params, 'pppp')
    return true
}

server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})

const API_URL = '/api';
/** USERS APIS */
const DB_USERS_DATA = usersData.user

server.use(jsonServer.rewriter({
    // '/api/signup': '/user',
    // '/api/add/*': '/*',
    // '/api/update/*': '/user',
    // '/api/delete/*': '/user',
    '/*': '/$1'
}))

const USERS = API_URL + '/get/users'

server.get(USERS, (req, res) => {
    res.jsonp(DB_USERS_DATA)
})

const LOGIN = API_URL + '/login'

server.get(LOGIN, (req, res) => {
    // console.log(DB_USERS_DATA, 'DB_USERS_DATA..')
    res.jsonp({
        code: 200,
        status: 'success',
        results: DB_USERS_DATA
    })
})
server.use(jsonServer.rewriter({
    '/api/signup': '/user',
    '/api/add/user/*': '/user/$1',
    '/api/update/*': '/user',
    '/api/delete/*': '/user',
}))
server.use(userRouter);

server.listen(3000, () => {
    console.log('JSON Server is running')
})

