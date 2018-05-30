import request from "superagent";
import $ from "jQuery";
window.$ = $
let song = []

function apiURL(artist) {
    return `https://itunes.apple.com/search?term=${artist}&media=music`
}


$(document).ready(function() {

    $(document).on('')
    

    $(document).on('click', '.button', function (event) {
        const artistID = event.target.dataset.artistID
        let artist = $(".search").val()
        getandshowResults(artistID)  
        
    })

    function getandshowResults () {
        let artist = $(".search").val()
        request
        .get(apiURL(artist))
        .then(response => { 
            let parsedrep = JSON.parse(response.text) 
            console.log(parsedrep)
            artisttoHTML(parsedrep) 
        })
    }
    
    function artisttoHTML (response) {
        for (var i=1; i<response.length; i++) {
            const img = i.response
            console.log(img)
        return `<img src="${img}">`
    }
    }
    
}
)



