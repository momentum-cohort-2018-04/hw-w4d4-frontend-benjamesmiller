import request from "superagent";
import $ from "jQuery";

let song = []

function apiURL(artist) {
    return `https://itunes.apple.com/lookup${artist}`
}

function getandshowResults () {
    request
    .get(apiURL('artist'))
    .then(Response => {
        
    })
}



$(document).ready(function() {

    $(document).on('click', '.button', function (event) {
        const artistID = event.target.dataset.artistID
        getandshowResults(artistID)  
    })
}
)



