var notes = require('../controllers/notes.js');

module.exports = function(app) {
    app.get('/notes', function(req, res) {
        notes.showAll(req, res);
    });

    app.post('/notes', function(req, res) {
        notes.addNote(req, res);
    });
}