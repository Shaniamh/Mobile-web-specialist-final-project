window.onload = function(){
        let mymap = L.map("mapid").setView([-7.276297, 112.793879],14);

        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {maxZoom:20, id:"mapbox.streets", accessToken: "pk.eyJ1Ijoic2hhbmlhbWgiLCJhIjoiY2puZzMwMTM4MWhrazNwbzA0NHljcGh3bCJ9.iUi6mfF0eQi200-7If4S0Q"}).addTo(mymap);
        function findLocation(x,y) {
                console.log(x,y);        
                for (var i=0; i< places.length;i++) {
                        if (places[i].lokasi[0]==x && places[i].lokasi[1]==y) {
                                return i;
                                }
                        }
                        return -1; 
                };

        function showLocation(e) {
                        //console.log("you clicked " + e.latlng.lat + " dan "+ e.latlng.lng);
                        let ix= findLocation(e.latlng.lat,e.latlng.lng);
                if (ix >=0) {
                        img.src= places[ix].gambar;
                        par.textContent=places[ix].review;
                }
        };

        let gmb= document.getElementById("gmb");
        let rev= document.getElementById("review");
        let img= document.createElement('img');
        let par= document.createElement('p');
        gmb.appendChild(img);
        rev.appendChild(par);

        let places= null;
        fetch("data/peta.json")
        .then(res => res.json())
        .then(res => {
            places = res.places;
            for(var p of places){
                console.log(p);
                let marker = L.marker(p.lokasi)
                .addTo(mymap)
                .bindPopup(p.sponsor);
                marker.on("click", showLocation);
            }
        })
        . catch(e => {
            console.log(e);
        });

        // const URL="data/peta.json"; 

        // f(URL);
        // async function f(url){
        //         try {
        //                 const resp= await(fetch(url));
        //                 const resp2= await resp.json();
        //                 localStorage.setItem('places', JSON.stringify(resp.places)); 
        //         } catch(err){ 
        //                 console.log(err);
        //         }
        // }

        // let places= JSON.parse( localStorage.getItem('places')); 
}