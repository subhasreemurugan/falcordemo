$(window).load(function() {

    var model = new falcor.Model({
        cache: {
            titlesById: {
                5212: {
                    title: "machop",
                    price: 40.00,
                    picture: "img/image3.jpg",
                    skuid: "113",
                    rate: "3",
                    description: "MACHOP’s muscles are special - they never get sore no matter how much they are used in exercise. This POKéMON has sufficient power to hurl a hundred adult humans."
                },
            },
            productList: [{
                    name: "All products",
                    products: [{
                            $type: "ref",
                            value: ["titlesById", 5212]
                        },
                        {
                            title: " pikachu",
                            price: 37.79,
                            picture: "img/image1.jpg",
                            skuid: "111",
                            rate: "2",
                            description: "Whenever PIKACHU comes , it blasts it with a jolt of electricity. If you come across a blackened berry, it’s evidence that this POKéMON mistook the intensity of its charge."
                        },
                        {
                            title: " Haunter",
                            price: 44.99,
                            picture: "img/image2.jpg",
                            skuid: "112",
                            rate: "4",
                            description: "HAUNTER is a dangerous POKéMON. If one beckons you while floating in darkness, you must never approach it. This POKéMON will try to lick you with its tongue and steal your life away."
                        },
                        {
                            title: " Nidoran",
                            price: 44.99,
                            picture: "img/image4.jpg",
                            skuid: "114",
                            rate: "1",
                            description: "The male NIDORAN has developed muscles for moving its ears. Thanks to them, the ears can be freely moved in any direction. Even the slightest sound does not escape this POKéMON’s notice."
                        },
                    ]
                },
                {
                    name: "Offers",
                    products: [{
                        $type: "ref",
                        value: ["titlesById", 5212]
                    }]
                }
            ]
        }
    });
    var allProducts, offers, display, myprice, rateid,rateUpdated;


    model
        .get('productList[0..1].products[0..2]["title", "price","picture","skuid","rate","description"]')
        .then(function(json) {
            console.log(JSON.stringify(json, null, 4));

            allProducts = json.json.productList[0];
            offers = json.json.productList[1];
            createPage(allProducts, offers);
            $("label").click(function() {
                var skuid = $(this).parents('.prodwrapper').attr('id');
                //alert(skuid);
                rateid = $(this).attr('for');

                $(this).parent().find("label").css({
                    "background-color": "#D8D8D8"
                });
                $(this).css({
                    "background-color": "#7ED321"
                });
                $(this).nextAll().css({
                    "background-color": "#7ED321"
                });
                // var checkedValue = $(this).parent().find('input[name=rating1]:checked').val();
                // $('input[name=rating1]:radio:checked').val()
                // alert($('input[name=rating1]:radio:checked').val());
                model
                    .setValue('productList[0].products[0].rate', $('#' + rateid).val())
                    .then(function(value) {
                        model
                            .get('productList[0..1].products[0..2]["skuid","rate"]')
                            .then(function(json) {
                                console.log(JSON.stringify(json, null, 4));
                                rateUpdated=json.json.productList[0].products[0].rate;

                                $('[data-sku="' + skuid + '"]').find('.rate').html(rateUpdated);
                                 $('[data-sku="' + skuid + '"]').find('.updateRate').text(rateUpdated);
                                // $('#' + skuid).find("label").css({
                                //     "background-color": "#D8D8D8"
                                // });
                                // $('.contentwrapper').find('.rate').html(json.json.productList[1].products[0].rate);

                            });

                    });
            });




        });

    var createPage = function(display, display1) {
        $("#productTemplate").tmpl(display.products["0"]).appendTo("#pageContainer");
        $("#productTemplate").tmpl(display.products["1"]).appendTo("#pageContainer");
        $("#productTemplate").tmpl(display.products["2"]).appendTo("#pageContainer");
        // $("#productTemplate").tmpl(display.products["3"]).appendTo("#pageContainer");
        $("#offerTemplate").tmpl(display1.products["0"]).appendTo("#pageContainer");


    };




});