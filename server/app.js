const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const eventsRoutes = require('./routes/events');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use('/api', eventsRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
