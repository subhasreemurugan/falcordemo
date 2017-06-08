 // var display = [
 //            { title: " 4 Unleashed", price: 37.79, picture: "image1.jpg" ,skuid:"111"},
 //            { title: " watch Unleashed", price: 44.99, picture: "wristwatch.jpg" ,skuid:"112" },
 //            { title: "cool start", price: 4.00, picture: "wristwatch-2.jpg" ,skuid:"113"},
 //            { title: " Unleashed iPhone", price: 44.99, picture: "wristwatch.jpg" ,skuid:"114" },
 //        ];

   

//  var model = new falcor.Model({
//   cache: {
//     titlesById: {
//       5212: {
//         name: "House of Cards",
//         rating: 4.5
//       }
//     },
//     genreList: [
//       {
//         name: "Recently Watched",
//         titles: [
//           { $type: "ref", value: ["titlesById", 5212] }
//         ]
//       },
//       {
//         name: "New Releases",
//         titles: [
//           { $type: "ref", value: ["titlesById", 5212] }
//         ]
//       }
//     ]
//   }
// });
var model = new falcor.Model({
  cache: {
    titlesById: {
      5212:{ title: "cool start", price: 4.00, picture: "wristwatch-2.jpg" ,skuid:"113"},
    },
    genreList: [
      {
        name: "Recently Watched",
        products: [
            { title: " 4 Unleashed", price: 37.79, picture: "image1.jpg" ,skuid:"111"},
            { title: " watch Unleashed", price: 44.99, picture: "wristwatch.jpg" ,skuid:"112" },
             { $type: "ref", value: ["titlesById", 5212] },
            { title: " Unleashed iPhone", price: 44.99, picture: "wristwatch.jpg" ,skuid:"114" },
        ]
      },
      {
        name: "New Releases",
        products: [
          { $type: "ref", value: ["titlesById", 5212] }
        ]
      }
    ]
  }
});
var display;
 model
      .get('genreList[0..1].products[0..2]["title", "price","picture","skuid"]')
      .then(function(json){
        console.log(JSON.stringify(json, null, 4));
        //display=JSON.stringify(json.json.genreList[0].products, null, 4);
        display=json.json.genreList[0].products;
       //console.log(json.json.genreList[0]+JSON.stringify(display, null, 4))
       // document.getElementById('output').innerHTML = JSON.stringify(json, null, 4);
      });


        // Render the books using the template
        $("#productTemplate").tmpl(products).appendTo("#pageContainer");
 
        function formatPrice(price) {
            return "$" + price.toFixed(2);
        }

        $("label").click(function(){
        	var skuid= $(this).parents('.prodwrapper').attr('id');
        	alert(skuid);
		  $(this).parent().find("label").css({"background-color": "#D8D8D8"});
		  $(this).css({"background-color": "#7ED321"});
		  $(this).nextAll().css({"background-color": "#7ED321"});
});
 