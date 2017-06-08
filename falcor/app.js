window.onload = function(){
//console.log(model.genrelist[0].titles[0].name);	
//$('#output').text(model.genrelist[0].titles[0].name);
// model.getValue('fields').then(console.log(response))	;	
var model = new falcor.Model({source: new falcor.HttpDataSource('/model.json')});
 model
  .get(["events", {from: 0, to: 2}, ["name", "description", "location"],["city", "state"]])

  .then(function(response) {
    document.getElementById('event-data').innerHTML = JSON.stringify(response, null, 2);
  });
}