const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const PORT = 3000;

// define paths for express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars and setup views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// setup static directory to serve
app.use(express.static(publicPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Kim Nejudne',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Kim Nejudne',
    job: 'Javascript Developer',
    dream: 'becoming an elite javascript master',
    title: 'About',
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam animi eligendi, ea dolor autem. Id incidunt, dolorum unde libero. Et.',
    title: 'Help Page',
  });
});

app.get('/weather', (req, res) => {
  res.send({
    location: 'location',
    forecast: 'forecast',
  });
});

app.get('/*', (req, res) => {
  res.send('Page not found');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
