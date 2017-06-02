window.onload = function(){
//console.log(model.genrelist[0].titles[0].name);	
//$('#output').text(model.genrelist[0].titles[0].name);
// model.getValue('fields').then(console.log(response))	;	
var model = new falcor.Model({
	crossDomain: true,
	source: new falcor.HttpDataSource('/accident.json')
});
model
  .get('fields')
  .then(function(response) {
    document.getElementById('output').innerHTML = JSON.stringify(response);
  }, function(err) {
    console.log(err);
    // console.log(err['0'].value.message);
  });
}