var falcor = require('falcor');
var falcorExpress = require('falcor-express');
var Router = require('falcor-router');

var express = require('express');
// var _ = require('lodash');
var app = express();

app.use(express.static('.'));

// Have Express request index.html
var $ref = falcor.Model.ref;

// Same data that was used in the view for our
// events, but this time on a simple object
// and not a Falcor model.
// var eventsData = {
//   locationsById: {
//     1: {
//       city: "Salt Lake City",
//       state: "Utah"
//     },



// We setup a model.json endpoint and pass it a dataSourceRoute which
// allows us to serve a router. Various route requests can be sent to the
// router to grab whatever data is required
app.use('/accident.json', falcorExpress.dataSourceRoute(function(req, res) {
	console.log("res"+res);
  return model.asDataSource();
}));

app.listen(3000);
console.log("https://data.gov.in/node/735301/datastore/export/json");



// var model= new falcor.Model({
// 	cache: {
// 	genrelist :[
//       {
//       	name: "dramas",
//       	titles: [
//       	{
//       		id: 456,
//       		name: " house of cards",
//       		rating: 4
//       	}

//       	]
//       },
//       {
//       	name: "recently watched",
//       	titles: [
//       	{
//       		id: 456,
//       		name: " daredevil",
//       		rating: 4
//       	}

//       	]
//       }

// 	]
// }
// });


