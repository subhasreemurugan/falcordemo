$(window).load(function() {
      
var model = new falcor.Model({
  cache: {
    titlesById: {
      5212:{ title: "cool start", price: 4.00, picture: "img/image3.jpg" ,skuid:"113",rate:"3"},
    },
    productList: [
      {
        name: "All products",
        products: [
            { $type: "ref", value: ["titlesById", 5212] },
            { title: " 4 Unleashed", price: 37.79, picture: "img/image1.jpg" ,skuid:"111",rate:"2"},
            { title: " watch Unleashed", price: 44.99, picture: "img/image2.jpg" ,skuid:"112",rate:"4" },
            { title: " Unleashed iPhone", price: 44.99, picture: "img/image4.jpg" ,skuid:"114",rate:"1" },
        ]
      },
      {
        name: "Offers",
        products: [
          { $type: "ref", value: ["titlesById", 5212] }
        ]
      }
    ]
  }
});
var allProducts,offers,display,myprice,rateid;
  
 
      model
      .get('productList[0..1].products[0..2]["title", "price","picture","skuid","rate"]')
      .then(function(json){
        console.log(JSON.stringify(json, null, 4));
       
        allProducts = json.json.productList[0];
        offers  = json.json.productList[1];
         createPage(allProducts,offers);
         $("label").click(function(){
        	var skuid= $(this).parents('.prodwrapper').attr('id');
        	alert(skuid);
        	rateid=$(this).attr('for');

		  $(this).parent().find("label").css({"background-color": "#D8D8D8"});
		  $(this).css({"background-color": "#7ED321"});
		  $(this).nextAll().css({"background-color": "#7ED321"});
		  // var checkedValue = $(this).parent().find('input[name=rating1]:checked').val();
		  // $('input[name=rating1]:radio:checked').val()
		  // alert($('input[name=rating1]:radio:checked').val());
		  model
		  .setValue('productList[0].products[0].rate',$('#'+rateid).val())
		  .then(function(value){
		  	model
      .get('productList[0..1].products[0..2]["title", "price","picture","skuid","rate"]')
      .then(function(json){
        console.log(JSON.stringify(json, null, 4));
         $('#'+skuid).find('.rate').html(json.json.productList[0].products[0].rate);
         $('#'+skuid).find("label").css({"background-color": "#D8D8D8"});
		 $('#'+skuid).css({"background-color": "#7ED321"});
		 $('#'+skuid).nextAll().css({"background-color": "#7ED321"});
        $('.alloffers .contentwrapper').find('.rate').html(json.json.productList[1].products[0].rate);
        // $('.contentwrapper').find('.rate').html(json.json.productList[1].products[0].rate);

      });
		  
	 });   
  });



        
 });
 
 var createPage= function(display,display1){
 	$("#productTemplate").tmpl(display.products["0"]).appendTo("#pageContainer");
 	$("#productTemplate").tmpl(display.products["1"]).appendTo("#pageContainer");
 	$("#productTemplate").tmpl(display.products["2"]).appendTo("#pageContainer");
 	// $("#productTemplate").tmpl(display.products["3"]).appendTo("#pageContainer");
       $("#offerTemplate").tmpl(display1.products["0"]).appendTo("#pageContainer");


 };
    

       
 



});
