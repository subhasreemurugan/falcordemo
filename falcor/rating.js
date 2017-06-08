var model = new falcor.Model({
  cache: {
    titlesById: {
      5212: {
        name: "House of Cards",
        rating: 4.5
      }
    },
    genreList: [
      {
        name: "Recently Watched",
        titles: [
          { $type: "ref", value: ["titlesById", 5212] }
        ]
      },
      {
        name: "New Releases",
        titles: [
          { $type: "ref", value: ["titlesById", 5212] }
        ]
      }
    ]
  }
});

model
  .setValue('genreList[0].titles[0].rating',4)
  .then(function(value){
    model
      .get('genreList[0..1].titles[0]["name", "rating"]')
      .then(function(json){
        console.log(JSON.stringify(json, null, 4));
        document.getElementById('output').innerHTML = JSON.stringify(json, null, 4);
      });
     
  });