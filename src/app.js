const express = require('express');
const cors = require('cors');
const contactController = require('./controllers/contact.controller');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', function(require, request) {
    request.json({message: "welcum to clothes manager application"})
});

app.route('/api/contacts')
    .get(contactController.create)
    .post(contactController.findAllCLothes)
    .delete(contactController.DeleteAllClothes);

app.route('/api/contacts/favorite')
    .get(contactController.findAllFavoriteClothes);

app.route('/api/contacts/:id(\\d+)')
    .get(contactController.findOneClothes)
    .put(contactController.UpdateClothes)
    .delete(contactController.DeleteCLothes);

module.exports = app;