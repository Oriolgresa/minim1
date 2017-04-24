var Controller = require ('./controller.js');

module.exports = function(app) {

    app.post('/api/estudiant', Controller.setEstudiant);
    app.get('/api/estudiant', Controller.getEstudiants);
    app.get('/api/estudiant/:estudiant_nom', Controller.getEstudiantByName);
    app.get('/api/estudiant/:estudiant_id', Controller.getEstudiant);
    app.delete('/api/estudiant/:estudiant_id', Controller.deleteEstudiant);
    app.put('/api/estudiant/:estudiant_id', Controller.modificarEstudiant);

    /////////////////////////////////////////////////////////////////
    app.post('/api/assignatura', Controller.setAssignatura);
    app.get('/api/assignatura', Controller.getAssignatures);
    app.get('/api/assignatura/:assignatura_id', Controller.getAssignatura);
    app.delete('/api/assignatura/:assignatura_id', Controller.deleteAssignatura);
    app.post('/api/assignatura/:assignatura_id', Controller.addEstudiant);
    app.get('/api/assignatura', Controller.getAssignatures);


    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
};