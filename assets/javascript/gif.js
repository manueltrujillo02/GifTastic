


var animal = $(this).attr("data-animal");
var apiKey = "vWoBLrCiGsRi0lemZntNZWj6gFOaIiZx";
var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";


var input = $("#data-animal");
var add = $("#add-animal").val().trim();

    $("button").on("click", function (event) {
        
        animal = $(this).attr("data-animal");
        apiKey = "vWoBLrCiGsRi0lemZntNZWj6gFOaIiZx";
        queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + apiKey + "&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function (response) {

            var results = response.data;



            for (var i = 0; i < results.length; i++) {

                var image = $("<img>");


                image.attr("src", results[i].images.fixed_height.url);
               

                $("#divDisplay").prepend(image);
            

            };
        });
    });
    $(document).on("click", ".show-btn", function(event){
        input = $("#data-animal");
        add = $("#add-animal").val().trim();
    
        // and a value of the title of the show 
      
        // with a data-attribute of data-title
        btn.attr(add , input);
        // add the class of btn btn-success
        
       
    });


    $("#submit").on("click", function (event) {
        event.preventDefault();
         input = $("#data-animal");
         add = $("#add-animal").val().trim();

         btn = $("<button>");
        // and a value of the title of the show 
        btn.text(add);
        // with a data-attribute of data-title
        btn.attr(add , input);
        // add the class of btn btn-success
        btn.addClass("btn btn-success show-btn");

        // append the new button the #buttons div
        $("#btn1").append(btn);
        console.log(btn)
    });
console.log("button")


$(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

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