//http://www.omdbapi.com/?i=tt3896198&apikey=5c35c0d4

const movieInfo = document.getElementById("movie_info")
const movie = document.getElementsByClassName("movie")

function getVal () {
    const val = document.querySelector('input').value
    console.log(val)
    fetch(`http://www.omdbapi.com/?s=${val}&apikey=5c35c0d4`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            for (i = 0; i < 10; i++){
                const title = data.Search[i].Title
                movieInfo.innerHTML += `
                <Div class="movie">
                <img src=${data.Search[i].Poster} class="poster" />
                <h3>${data.Search[i].Title}</h3>
                <p id="y>${data.Search[i].Year}</p>
                </div>
            `
            }
        })
}


document.getElementById("Search-btn").addEventListener("click", getVal,)


