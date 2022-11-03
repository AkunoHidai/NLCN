const express = require('express');
const cors = require('cors');
const contactController = require('./controllers/contact.controller');
const ApiError = require('./api-error');

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

// update api error handler
app.use((req, res, next) => {
    // handler for unknow routes
    // call next() to pass the error hadling middleware
    return next(new ApiError(404, 'Resource not found!'));
});

// define error handling middleware last, after orther app.use() and routes calls.
app.use((error, req, res, next) =>{
    // the centralized error handling middleware
    // in any routes handler, call next(error) to pass the error hadling middleware
    return res.status(error.statusCode || 500).json({
        message: error.message || 'Internal Server Error',
    });
});

module.exports = app;