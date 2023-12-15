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

server.post(LOGIN, (req, res) => {
    const payload = req.body;
    console.log(payload, 'payload')
    if (!payload) {
        res.jsonp({
            status: 'error',
            message: 'inputs required',
            results: []
        })
    }
    const userRow = DB_USERS_DATA.filter((row) => (row.emailId == payload.userId))
    if (userRow && userRow.length) {
        if (userRow[0].password == payload.password) {
            res.jsonp({
                status: 'success',
                message: 'lgoin is success',
                results: userRow[0]
            })
        } else {
            res.jsonp({
                status: 'error',
                message: 'password is incorrect',
                results: []
            })
        }
    } else {
        res.jsonp({
            status: 'error',
            message: 'user id is incorrect',
            results: []
        })
    }
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

