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
// display(movies);


// function sortItems() {
//     var val = document.getElementById("sorter").value;
//     // console.log(val);
//     if (val == "h2l") {
//         movies.sort((a, b) => {
//             return b.imbd - a.imbd
//         })
//         display(movies);
//     }

//     else if (val == "l2h") {
//         movies.sort((a, b) => {
//             return a.imbd - b.imbd
//         })
//         display(movies);
//     }
//     else {
//         window.location.href = "index.html";
//     }

// }