const express = require('express');
const app = express();
const PORT = process.env.PORT || 3020;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));