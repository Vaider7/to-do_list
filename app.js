const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const config = require('./config/config');
const sessionStore = require('./database/connectMYSQLStore')
const routes = require('./routes/index');
const conn = require('./database/connectDB');

const app = express();


// db connect
conn.connect()
    .then(()=> {
        console.log('Connection to database successful')
    })
    .catch(err => {
        console.log(err)
    });


// sessions
app.use(
    session({
        secret: config.SECRET_CODE_SESSION,
        resave: false,
        saveUninitialized: false,
        store: sessionStore,
        cookie: {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            maxAge: 1000 * 60 * 60 * 24 * 30
        }
    })
)


//sets and uses
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


//routes
app.use('/sign_in', routes.sign_in)
app.use('/', routes.main);
app.use('/api/reg', routes.reg);
app.use('/api/auth', routes.auth)
app.use('/api/logout', routes.logout)
app.use('/api/task/add', routes.addTask)
app.use('/api/task/delete', routes.deleteTask)
app.use('/api/task/changing', routes.changingTask)
app.use('/teams', routes.teams)
app.use('/api/team/add', routes.addTeam)
app.use('/api/team/join', routes.joinTeam)
app.use('/teams', routes.pageTeam)
app.use('/api/team/task/add', routes.addTeamTask)
app.use('/api/team/task/delete', routes.deleteTeamTask)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})


//error handler
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: error
    });
});


app.listen(config.PORT, () =>
    console.log(`Example app listening on port ${config.PORT}! http://localhost:3000/sign_in`)
);

