// app/routes.js

var Nerd = require('./models/nerd');
	module.exports = function(app) {

		app.get('/api/nerds', function(req, res) {

			// get all Nerds in database using mongoose
			Nerd.find(function(err, nerds) {
				if (err)
					res.send(err);

				res.join(nerds);
			});
		});

		// route to create (app.post)
		// route to destroy (app.delete)

		app.get('*', function(req, res) {
			res.sendfile('./public/views/index.html');
		});
	};
