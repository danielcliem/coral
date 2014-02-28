var models = require("../models");
var mongoose = require("mongoose");
var ObjectId = mongoose.Types.ObjectId;

exports.view = function(req, res){
	res.render('login', {	
		});
}
exports.loginFunction = function(req, res){
	var name = req.query.name;
	var password = req.query.password;

	models.User
	.find( {"name": name, "password": password} )
	.exec(checkLogin);

	function checkLogin(err, user) {
		if(err) {console.log(err); res.send(500); }
		if(user.length > 0) {
			var userID = user[0]['_id'];
			req.session.userID = userID;
			url = /homepage/ + userID;
			res.redirect(url);
		}else {
			res.render("login", {
				"invalid": true
			});
		}
	}
}
