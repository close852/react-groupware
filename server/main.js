/* EXPRESS SERVER */
import express from 'express'
import bodyParser from 'body-parser'

/* LOGGER */
import logger from 'morgan';
import fs from 'fs';
import path from 'path'

/* SESSION(REDIS) */
import session from 'express-session';
import connectRedis from 'connect-redis'
import redis from 'redis'

/* ROUTER */
import api from './routes'

/* Server */
const app = express();
const PORT = process.env.PORT || 4000;


/* Log */
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), {
    flags: 'a'
})

/* Session */
const RedisStore = connectRedis(session);
const redisClient = redis.createClient();
const redisTTL = 1800;
const $session = {
    secret: 'MW-Groupware',
    name: '_redisPractice',
    resave: false, // 세션을 언제나 저장할 지 정하는 값
    saveUninitialized: true, //세션이 저장되기전에 uninitialized 상태로 미리 만들어 저장.
    cookie: {
        secure: false
    }, // Note that the cookie-parser module is no longer needed
    store: new RedisStore({
        client: redisClient,
        ttl: redisTTL
    }),
}

/* applyMiddleware */
app.use(logger('combined', {
    stream: accessLogStream
}))

app.use('/', express.static(path.join(__dirname, './../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session($session))

/*add Router */
app.use('/api', api);


app.listen(PORT, (req, res) => {
    console.log(`http://127.0.0.1:${PORT} start!`)
})