




$("button").on("click", function () {

    var animal = $(this).attr("data-animal");

    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=vWoBLrCiGsRi0lemZntNZWj6gFOaIiZx&q=" + animal + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var animalImage = $("<img>");

            // Giving the image tag an src attribute of a proprty pulled off the
            // result item
            animalImage.attr("src", results[i].images.fixed_height.url);

            // Appending the paragraph and personImage we created to the "gifDiv" div we created

            gifDiv.append(animalImage);

            // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
            $("#gifs-appear-here").prepend(gifDiv);
            //     var animalImage = $("<img>");
            //     animalImage.attr("src", results[i].images.fixed_height.url);
            //     console.log(results[i].images.fixed_height.url);
            //     gifDiv.prepend(animalImage);
            //     $("#divDisplay").prepend(gifDiv)
            // }
        };
    });
});
