    
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

//////////////////////////////////////////////// main start  //////////////////////////////////////////////////////////////////
// function showp(){

    document.getElementById("con").innerHTML = "";
        // Slider start ///////////////////////////////////////
    let slidecon = document.createElement("div");
    slidecon.id = "slideshow";
    document.querySelector("#con").append(slidecon)
    // Slider end ///////////////////////////////////////

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


var slideData = [

    "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low,w_1366/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_foreground/UndekhiS2-1_Foreground_reviews.png"
    ,

    "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low,w_1366/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_foreground/RocketBoys1_Foreground.png"
    ,

    "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low,w_1366/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_foreground/Maharani13_Foreground_Review.png"
    ,

    "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low,w_1366/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_foreground/Salute_Foreground_7thmarch.png"
    ,

    "https://res.cloudinary.com/Sony-liv/image/fetch/c_fill,e_contrast:30,f_auto,fl_lossy,q_auto:low,w_1366/e_brightness:10/https://origin-staticv2.sonyliv.com/masthead_foreground/TVFGullakS3-1_Foreground.png"
    ,
]
localStorage.setItem("images", JSON.stringify(slideData));
console.log(slideData);


let images = JSON.parse(localStorage.getItem("images"));
let container = document.getElementById("slideshow");
let i = 1
container.innerHTML = "";

let img = document.createElement("img");
img.src = images[0];
container.append(img);
setInterval(function () {
    if (i === images.length) {
        i = 0;
    }
    container.innerHTML = ""
    let image = images[i];
    let img = document.createElement("img");
    img.src = image;
    container.append(img);
    i++;
}, 3000)



let moviesData = [
    
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Star Wars",
        category: "Action, Adventure, Fantasy",
        rdate: "(1977)",
        imbd: 8.6
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Spider-Man: No Way Home",
        category: "Action, Adventure, Fantasy",
        rdate: "(2021)",
        imbd: 8.7
    },
   
    
    {
        poster: "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Star Wars: Episode V - The Empire Strikes Back",
        category: "Action, Adventure, Fantasy",
        rdate: "(1980)",
        imbd: 8.7
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Inception",
        category: "Action, Adventure, Sci-Fi",
        rdate: "(2010)",
        imbd: 8.8
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Avengers: Infinity War",
        category: "Action, Adventure, Sci-Fi",
        rdate: "(2018)",
        imbd: 8.5
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Interstellar",
        category: "Adventure, Drama, Sci-Fi",
        rdate: "(2014)",
        imbd: 8.7
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Terminator 2: Judgment Day",
        category: "Action, Sci-Fi",
        rdate: "(1991)",
        imbd: 8.6
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "Back to the Future",
        category: "Adventure, Comedy, Sci-Fi",
        rdate: "(1985)",
        imbd: 8.6
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX67_CR0,0,67,98_AL_.jpg",
        name: "The Matrix",
        category: "Action, Sci-Fi",
        rdate: "(1999)",
        imbd: 8.7
    },
    
    
]
console.log(moviesData)
localStorage.setItem("movies", JSON.stringify(moviesData))

let movies = JSON.parse(localStorage.getItem("movies")) || [];

function display(movies){
    document.getElementById("movies").innerHTML = "";
    movies.map(function(el){
        let card = document.createElement("div")
    
        let imgd = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.poster;
        imgd.id = "mimgdiv"
        imgd.append(img)
    
        let con = document.createElement("div");
        con.id = "mcondiv"
    
        let name = document.createElement("h3");
        name.innerText = el.name;
    
        let rdate = document.createElement("p");
        rdate.innerText = el.rdate;
    
        let category  = document.createElement("p");
        category.innerText = el.category
    
        let imbd = document.createElement('p');
        imbd.innerText =  "★ "+el.imbd;
        con.append(name,rdate,category,imbd)
        card.append(imgd,con)
        document.getElementById("movies").append(card);
    })
}
display(movies)

function sortItems(){
    
    var val = document.getElementById("sorter").value;
    console.log(val)
    if(val == "h2l"){
        movies.sort((a,b) => {
            return b.imbd - a.imbd
        })
        display(movies)
    }
    else if(val == "l2h"){
        movies.sort((a,b) => {
            return a.imbd - b.imbd
        })
        display(movies)
    }

}

//////////////////////////////////////////////// main end  //////////////////////////////////////////////////////////////////



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

    if(data.length>3){
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
                rec.innerText = "recommended<b>" ; rec.id = "rec"
        
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