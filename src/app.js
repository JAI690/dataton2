const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

// Inicialización
const app = express();
require('./database')

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view.engine', '.hbs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Routes
app.use('/', require('./routes'));
app.use('/data', require('./routes/servidorPublico'));

// Public
app.use(express.static(path.join(__dirname,'public')));

// Start the server
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
});
