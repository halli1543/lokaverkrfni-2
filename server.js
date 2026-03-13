const express = require('express');
const path = require('path');

const startrekRouter = require('./src/routes/startrek.routes');


const app = express();
const PORT = process.env.PORT || 3000;

app.set('viwes', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', startrekRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});