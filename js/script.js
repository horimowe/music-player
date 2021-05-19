function lastfm() {
    //https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=Orianne05&api_key=b6a668f9266b7f0656d967e766c60c0f&format=json
    //https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=Orianne05&api_key=b6a668f9266b7f0656d967e766c60c0f&format=json
    var user = "Orianne05";
    var api_key = "b6a668f9266b7f0656d967e766c60c0f";
    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=' + user +  '&api_key=' + api_key + '&format=json')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        var songNameChange = document.getElementById('songName').innerHTML;
        var result = data.recenttracks.track[0];
        printData(result);


        if(songNameChange) {
            if (songNameChange != result.name) {
                element1 = document.getElementById("songName");
                element1.classList.remove("animate");
                void element1.offsetWidth;
                element1.classList.add("animate");

                element2 = document.getElementById("artistName");
                element2.classList.remove("animate");
                void element2.offsetWidth;
                element2.classList.add("animate");
            }
        }

    })
    .catch(function() {
        console.log("Erreur");
    });

    fetch('https://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=' + user +  '&api_key=' + api_key + '&format=json')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
        printUser(data.user);
    })
    .catch(function() {
        console.log("Erreur");
    });

}

function printData( d ) {

    document.getElementById('bg').style.backgroundImage = "url("+d.image[3]["#text"]+")";
    document.getElementById('box').style.backgroundImage = "url("+d.image[3]["#text"]+")";
    document.getElementById('songName').innerHTML = d.name;
    document.getElementById('artistName').innerHTML = d.artist['#text'];

}

function printUser( d ) {

    document.getElementById('userScrobble').innerHTML = d.playcount;
    document.getElementById("img").src = d.image[3]["#text"];
    document.getElementById("lien").href = d.url;

}

setInterval(lastfm, 10000);

function songChange(songNameBefore, songNameAfter) {

}

function heure() {
    var dateWithouthSecond = new Date();
    document.getElementById('date').innerHTML = dateWithouthSecond.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(heure, 10000);
