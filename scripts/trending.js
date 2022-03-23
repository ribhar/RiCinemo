window.onload=function(){
    let Searchresult= document.getElementById("searchresult");
    document.oninput= function(event){ 
        if(event.target.id !== "searchresult"){
            Searchresult.style.display = "block";
        }
        // if(event.target.id !== "search"){
        //     Searchresult.style.display = "none";
        // }
    }
    document.onclick= function(event){ 
        if(event.target.id !== "search"){
            Searchresult.style.display = "none";
        }
    }
}



let timerid;

let searchResult = document.getElementById("searchresult");
async function searchmovie(){
    try{
        let input = document.getElementById("search").value;
        // console.log(input)
        let res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=98dab249`)

        let data = await res.json();
        console.log("data :", data)
        return data.Search;
        // appendmovies(data.Search);
        console.log("data :", data)
        // console.log(data.Search)
    }
    catch (e){
        
        console.log("error :", e)
        
    }
    

}

function appendmovies(data){
    
    searchResult.innerHTML = null;  

    if(data.length>5){
        searchResult.style.overflowY = "scroll";
        searchResult.style.height = "300px";

    }
    
    
    data.forEach(function (el) {
        let iddd = el.imdbID;
        let card = document.createElement("div");
        card.id = "scard"; card.onclick = function (){
            console.log(iddd)
            document.getElementById("con").innerHTML = "";
            let searchvalue = document.getElementById("search").value
            if(searchvalue === null){
                console.log("mai khali hu")
                document.querySelector("#con").append(slidecon,sortbtn,moviegrid);
                return;
            }

            let mobox = document.createElement("div");
            mobox.id = "mobox"

            let url = `https://www.omdbapi.com/?i=${iddd}&apikey=98dab249`
            // console.log(id)

            let mo = fetch(url)
            
            mo.then(function(res){
                return res.json()
            })
            .then(function(res){
                console.log("Mai data hu",res)
                
                document.querySelector("#con").innerHTML = ""   
                let poster = document.createElement('img');
                poster.src = res.Poster; poster.id = "poster";
                let posterdiv = document.createElement("div");
                posterdiv.append(poster); posterdiv.id = "posterdiv"
        
                let title = document.createElement('h2');
                title.innerHTML = "<b>Title : </b>"+res.Title;
        
                let year = document.createElement('p');
                year.innerHTML = "<b>Year : </b>"+res.Year;
        
                let awards = document.createElement('p');
                awards.innerHTML = "<b>Awards : </b>"+res.Awards;
        
                let actors = document.createElement('p');
                actors.innerHTML = "<b>Cast : </b>"+res.Actors;
        
                let genre = document.createElement('p');
                genre.innerHTML = "<b>Genre : </b>"+res.Genre;
        
                let boxoffice = document.createElement('p');
                boxoffice.innerHTML = "<b>BoxOffice : </b>"+res.BoxOffice;
        
                let rated = document.createElement('p');
                rated.innerHTML = "<b>Rated : </b>"+res.Rated;
        
                let imbd = document.createElement('p');
                imbd.innerHTML = "<b>IMBD Ratings : </b>"+res.imdbRating;

                let rec = document.createElement('p');
                rec.innerText = "recommended" ; rec.id = "rec"
        
                let condiv = document.createElement("div");
                if(res.imdbRating>8.5){
                    condiv.append(title,year,awards,actors,genre,boxoffice,rated,imbd, rec); condiv.id = "condiv"
                }
                else{
                    condiv.append(title,year,awards,actors,genre,boxoffice,rated,imbd); condiv.id = "condiv"
                }
                
        
                mobox.append(posterdiv,condiv)

                document.querySelector("#con").append(mobox);
                

            })
            .catch(function(err){
                console.log(err)
            })

        };
        let imgd = document.createElement("div");
        imgd.id = "simgd";
        let scondiv = document.createElement("div");
        scondiv.id = "scondiv";
        
        let img = document.createElement("img");
        img.src = el.Poster; imgd.append(img);

        let title = document.createElement("h4");
        title.innerHTML = "<b>Title : </b>"+ el.Title;

        let type = document.createElement("p");
        type.innerHTML = "<b>Type : </b>"+ el.Type;

        let year = document.createElement("p");
        year.innerHTML = "<b>Year : </b>"+ el.Year;

        scondiv.append(title, type,year)

        card.append(imgd, scondiv)
        searchResult.append(card)
    })
}


async function main(){
    try{
        // searchResult.innerHTML = null;
        let data = await searchmovie()

        if(data == undefined){
            searchResult.innerHTML = null;
            let  err = document.createElement("div");
            err.id = "notfound";
            let img = document.createElement("img");
            img.src = "https://www.waterandshark.com/assets/img/icons/noresult.gif";

            err.append(img);
            searchResult.append(err)

            console.log("kuch nhi mila")
            return false;
        }

        console.log("data :", data)
        appendmovies(data);
    }
    catch(e){
        // searchResult.innerHTML = null;
        console.log("error :", e)
        // let  err = document.createElement("div");
        // err.id = "notfound";
        // let img = document.createElement("img");
        // img.id = 'notfoundimg'; img.src = "https://www.sizzion.com/images/noresult.gif";

        // err.append(img);
        // searchResult.append(err)

    }
}


function debounce(func, delay){
    searchResult.style.overflowY = "hidden";
    searchResult.style.height = "auto";
    searchResult.innerHTML = null;
    let  load = document.createElement("div");
    load.id = "sloading";
    let img = document.createElement("img");
    img.src = "https://www.downgraf.com/media/2019/05/Loader-animation-principle-freebie.gif";

    load.append(img);
    searchResult.append(load)

    // console.log("timerid :",timerid)

    if(timerid){
        clearTimeout(timerid)
    }

    timerid = setTimeout(function (){
        func()
    }, delay);

}

//////////////////////////////////////////////// main start  //////////////////////////////////////////////////////////////////
document.getElementById("con").innerHTML = "";

// sort botton start ///////////////////////////////////////
let sortbtn = document.createElement("div");
sortbtn.id = "sort-buttonsdiv";
sortbtn.innerHTML = `<select onchange="sortItems()" id="sorter">
<option value="">Sort by rating</option>
<option value="h2l" id="sort-hl">High to Low</option>
<option value="l2h" id="sort-lh">Low to High</option>
</select>`

document.querySelector("#con").append(sortbtn);
// sort botton end ///////////////////////////////////////


// movies grid start ///////////////////////////////////////
let moviegrid = document.createElement("div")
moviegrid.id = "movies";
document.querySelector("#con").append(moviegrid);
// movies grid end ///////////////////////////////////////







// `https://api.themoviedb.org/3/trending/all/day?api_key=f0b15115a4b14d1e0b3a3b823ac7217e`
async function showmovie(){
    try{

        // console.log(input)
        let res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=f0b15115a4b14d1e0b3a3b823ac7217e`)

        var data = await res.json();
        document.getElementById("con").innerHTML = "";

        // sort botton start ///////////////////////////////////////
        let sortbtn = document.createElement("div");
        sortbtn.id = "sort-buttonsdiv";
        sortbtn.innerHTML = `<select onchange="sortItems(data.results)" id="sorter">
        <option value="">Sort by rating</option>
        <option value="h2l" id="sort-hl">High to Low</option>
        <option value="l2h" id="sort-lh">Low to High</option>
        </select>`

        document.querySelector("#con").append(sortbtn);
        // sort botton end ///////////////////////////////////////


        // movies grid start ///////////////////////////////////////
        let moviegrid = document.createElement("div")
        moviegrid.id = "movies";
        document.querySelector("#con").append(moviegrid);
        // movies grid end ///////////////////////////////////////
        display(data.results)
        console.log(data.results)
        return data.results;
    }
    catch (e){
        
        console.log("error :", e)
        
    }
    

}
showmovie()


function display(movies){
    document.getElementById("movies").innerHTML = "";

    movies.map(function(el){
        let card = document.createElement("div")
    
        let img = document.createElement("img");
        let imgsrc = el.poster_path;
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face${imgsrc}`;
    
        let name = document.createElement("h3");
        name.innerText = "Title : "+el.title;
        let name2 = document.createElement("h3");
        name2.innerText = "Title : "+el.name;

        let pop = document.createElement("p");
        pop.innerHTML = "<b>Popularity : </b>"+el.popularity;

        // let date = document.createElement("p");
        // date.innerHTML = "<b>Release date : </b>"+el.release_date;

        let rating = document.createElement("p");
        rating.innerHTML = "<b>Rating : </b>"+el.vote_average;

        let rec = document.createElement('p');
        rec.innerText = "recommended" ; rec.id = "rec"

        
        if(el.title === undefined){
            card.append(img,name2,pop,rating)
        }
        else{
            card.append(img,name,pop,rating)
        }
        if(el.vote_average>8){
            card.append(rec)
        }
        // else{
        //     card.append()
        // }
        // card.append(img,name,pop,date,rating)
        document.getElementById("movies").append(card);

    })
}


function sortItems(movies){
    console.log(movies)
    var val = document.getElementById("sorter").value;
    console.log(val)
    if(val == "h2l"){
        movies.sort((a,b) => {
            return b.vote_average - a.vote_average
        })
        display(movies)
    }
    else if(val == "l2h"){
        movies.sort((a,b) => {
            return a.vote_average - b.vote_average
        })
        display(movies)
    }

}


//////////////////////////////////////////////// main end  //////////////////////////////////////////////////////////////////



