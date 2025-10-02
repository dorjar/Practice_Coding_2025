// Imports
const express = require('express');
const path = require('path'); 
const app = express(); 
const db = require('./db/connection');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }));

// Remove specific headers
app.use((req, res, next) => {
    res.removeHeader('X-XSS-Protection');
    next();
});

// Set EJS as templating engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
const indexRouter = require('./routes/index');
const lineupRouter = require('./routes/lineup');
const stagesRouter = require('./routes/stages');
const faqRouter = require('./routes/faq');
const contactRouter = require('./routes/contact');

// Use the routes
app.use('/', indexRouter);
app.use('/lineup', lineupRouter);
app.use('/stages', stagesRouter);
app.use('/faq', faqRouter);
app.use('/contact', contactRouter);

// 404 Route
app.use((req, res) => {
    res.status(404).render('404');
});

app.post('/sendData', (req, res)=>{
    console.log(Object.values(req.body))
})

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
