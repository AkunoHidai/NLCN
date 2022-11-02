require('dotenv').config();
const app = require('./src/app');

// start the server
const PORT = process.env.PORT;
app.listen(PORT, function () {
    console.log(`Starting server on port ${PORT}`);
});