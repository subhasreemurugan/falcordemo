var $ref = falcor.Model.ref;
var model = new falcor.Model({
  cache: {
    messagesById: {
      0: {
        name: "Fonzie",
        message: "AAAY!"
      },
      1: {
        name: "Lumineers",
        message: "Ho!, Hey!"
      }
    },
    greeting: [
      {
        name: "Friendly",
        message: "Hi"
      },
      $ref("messagesById[0]"),
      $ref("messagesById[1]"),
      $ref("messagesById[0]"),
      $ref("messagesById[1]"),
    ]
  }
});

model.
  get('greeting[0..9].message', 'greeting[0..9].name').
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
