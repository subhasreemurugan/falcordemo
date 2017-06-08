var $ref = falcor.Model.ref;
var model = {
    mainarray:[
    {
      name:"allprods",
    prod: [
       {
        name: "Fonzie",
        price: "25!"
      },
      {
        name: "Lumineers",
        price: "35"
      }
    ]
  },
    {
      name:"offers",
    prod: [
       {
        name: "Fonzie",
        price: "25"
      },
     {
        name: "Lums",
        price: "56"
      }
    ]
  }]
  };
console.log('model'+model.mainarray[0].prod[0].name)
$('.products').


model.
  get('', 'greeting[0..9].name').
  then(function(response){
    var greeting = response.json.greeting;
    var messages = Object.keys(greeting).
      map(function (key){
        return "<h4><em>" +  
          greeting[key].name + 
          "</em>, " + 
          greeting[key].message + 
          "</h4>";
      });
      console.log(response+JSON.stringify(response));
      console.log("mess"+messages);
     document.
      getElementById('output'). 
      innerHTML = messages.join("") +
         JSON.stringify(response);
  });
