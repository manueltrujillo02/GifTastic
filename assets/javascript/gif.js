




    $("button").on("click", function () {

        var animal = $(this).attr("data-animal");
        var apiKey = "vWoBLrCiGsRi0lemZntNZWj6gFOaIiZx";
        var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {
        
            var results = response.data;
            

            
            for (var i = 0; i < results.length; i++) {
                
                var image = $("<img>");

            
                image.attr("src", results[i].images.fixed_height.url);
                console.log( results[i].images.fixed_height.url)

                $("#divDisplay").prepend(image);
                    console.log(image)
                
            };
        });
    
  });
    // function renderButtons() {

    //     // Deleting the movies prior to adding new movies
    //     // (this is necessary otherwise you will have repeat buttons)
    //     $("#buttons-view").empty();

    //     // Looping through the array of movies
    //     for (var i = 0; i < movies.length; i++) {

    //       // Then dynamicaly generating buttons for each movie in the array
    //       // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    //       var a = $("<button>");
    //       // Adding a class of movie-btn to our button
    //       a.addClass("movie-btn");
    //       // Adding a data-attribute
    //       a.attr("data-name", movies[i]);
    //       // Providing the initial button text
    //       a.text(movies[i]);
    //       // Adding the button to the buttons-view div
    //       $("#buttons-view").append(a);
    //     }
    //   }

    //   // This function handles events where a movie button is clicked
    //   $("#add-movie").on("click", function(event) {
    //     event.preventDefault();
    //     // This line grabs the input from the textbox
    //     var movie = $("#movie-input").val().trim();

    //     // Adding movie from the textbox to our array
    //     movies.push(movie);

    //     // Calling renderButtons which handles the processing of our movie array
    //     renderButtons();
    //   });

    //   // Adding a click event listener to all elements with a class of "movie-btn"
    //   $(document).on("click", ".movie-btn", displayMovieInfo);

    //   // Calling the renderButtons function to display the intial buttons
    //   renderButtons();