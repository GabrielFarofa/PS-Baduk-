
// ----------- Função que conecta com a API do TMDB -------------//
function getFilmes(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);  

    let Filme = document.getElementById('nomeFilme').value //resgatando o nome a ser buscado

    // ------------ Concatenacao da url com o filme buscado ----------------------//
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=pt-BR&query='+Filme+'&page=1&include_adult=false'
    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w342"
        for (let i = 0; i < 6; i++){
            
            // ------- Crição dos elementos html e preenchendo eles com os resultados da busca ---//
            let divMovie = document.createElement('div')
                divMovie.className = 'movie'

            let poster = document.createElement('div')
                poster.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "movie_poster" >  `
            
            let divIn = document.createElement('div')
                divIn.className = 'movie_in'

            let title = document.createElement('h1')
                title.className = 'movie_title'
                title.innerHTML = data['results'][i]['original_title']
            
            let score = document.createElement('h2')
                score.className = 'movie_score'
                score.innerHTML = data['results'][i]['vote_average']

            let description = document.createElement('h2')
                description.className = 'movie_description'
                description.innerHTML = data['results'][i]['overview']
            
            // ----- Criando a relação pai-filho dos elementos html ---//
            divMovie.appendChild(poster)
            divMovie.appendChild(divIn)
                divIn.appendChild(title)
                divIn.appendChild(score)
                divIn.appendChild(description)

            let results = document.createElement('div')
                results.id = 'results'

            // ----- inserindo os elementos na pag principal ---------//
            document.getElementById('central_Body').appendChild(results)
            document.getElementById('results').appendChild(divMovie)
        }
    })
}

function getFilmesAcao(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=28&with_watch_monetization_types=flatrate"
    
    
    let resultados = document.createElement('div')
        resultados.id = 'results'
    let results_title = document.createElement('h1')
        results_title.className = 'results_title'
        results_title.innerHTML = "Melhores filmes de Ação"
    let vitrine = document.createElement('div')
        vitrine.id = 'vitrine'

    document.getElementById('central_Body').appendChild(resultados)
    document.getElementById('results').appendChild(results_title)
    document.getElementById('results').appendChild(vitrine)

    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w92"
        for (let i = 0; i < 20; i++){
            
            
            
            let vitrine_element = document.createElement('div')
            vitrine_element.className = 'vitrine_element'
            
            let element_img = document.createElement('div')
            element_img.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "element_img" >  `
            
            let element_title = document.createElement('h1')
            element_title.className = 'element_title'
            element_title.innerHTML = data['results'][i]['original_title']
            console.log(element_title)
            
            vitrine.appendChild(vitrine_element)
            vitrine_element.appendChild(element_img)
            vitrine_element.appendChild(element_title)
            
            
        }
            
    })
}

function getFilmesAventura(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=12&with_watch_monetization_types=flatrate"
    
    
    let resultados = document.createElement('div')
        resultados.id = 'results'
    let results_title = document.createElement('h1')
        results_title.className = 'results_title'
        results_title.innerHTML = "Melhores filmes de Aventura"
    let vitrine = document.createElement('div')
        vitrine.id = 'vitrine'

    document.getElementById('central_Body').appendChild(resultados)
    document.getElementById('results').appendChild(results_title)
    document.getElementById('results').appendChild(vitrine)

    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w92"
        for (let i = 0; i < 20; i++){
            
            
            
            let vitrine_element = document.createElement('div')
            vitrine_element.className = 'vitrine_element'
            
            let element_img = document.createElement('div')
            element_img.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "element_img" >  `
            
            let element_title = document.createElement('h1')
            element_title.className = 'element_title'
            element_title.innerHTML = data['results'][i]['original_title']
            console.log(element_title)
            
            vitrine.appendChild(vitrine_element)
            vitrine_element.appendChild(element_img)
            vitrine_element.appendChild(element_title)
            
            
        }
            
    })
}

function getFilmesRomance(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=10749&with_watch_monetization_types=flatrate"
    
    
    let resultados = document.createElement('div')
        resultados.id = 'results'
    let results_title = document.createElement('h1')
        results_title.className = 'results_title'
        results_title.innerHTML = "Melhores filmes de Romance"
    let vitrine = document.createElement('div')
        vitrine.id = 'vitrine'

    document.getElementById('central_Body').appendChild(resultados)
    document.getElementById('results').appendChild(results_title)
    document.getElementById('results').appendChild(vitrine)

    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w92"
        for (let i = 0; i < 20; i++){
            
            
            
            let vitrine_element = document.createElement('div')
            vitrine_element.className = 'vitrine_element'
            
            let element_img = document.createElement('div')
            element_img.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "element_img" >  `
            
            let element_title = document.createElement('h1')
            element_title.className = 'element_title'
            element_title.innerHTML = data['results'][i]['original_title']
            console.log(element_title)
            
            vitrine.appendChild(vitrine_element)
            vitrine_element.appendChild(element_img)
            vitrine_element.appendChild(element_title)
            
            
        }
            
    })
}

function getFilmesTerror(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=27&with_watch_monetization_types=flatrate"
    
    
    let resultados = document.createElement('div')
        resultados.id = 'results'
    let results_title = document.createElement('h1')
        results_title.className = 'results_title'
        results_title.innerHTML = "Melhores filmes de Terror"
    let vitrine = document.createElement('div')
        vitrine.id = 'vitrine'

    document.getElementById('central_Body').appendChild(resultados)
    document.getElementById('results').appendChild(results_title)
    document.getElementById('results').appendChild(vitrine)

    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w92"
        for (let i = 0; i < 20; i++){
            
            
            
            let vitrine_element = document.createElement('div')
            vitrine_element.className = 'vitrine_element'
            
            let element_img = document.createElement('div')
            element_img.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "element_img" >  `
            
            let element_title = document.createElement('h1')
            element_title.className = 'element_title'
            element_title.innerHTML = data['results'][i]['original_title']
            console.log(element_title)
            
            vitrine.appendChild(vitrine_element)
            vitrine_element.appendChild(element_img)
            vitrine_element.appendChild(element_title)
            
            
        }
            
    })
}

function getFilmesFic(){

    // ----- Removendo os resultados anteriores para que eles não empilhem ----//
    const results = document.getElementById("results");
    const parent = results.parentNode;
    parent.removeChild(results);

    let url = "https://api.themoviedb.org/3/discover/movie?api_key=a53ca289dc58d6563101b3d17e451ad7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2021&with_genres=878&with_watch_monetization_types=flatrate"
    
    
    let resultados = document.createElement('div')
        resultados.id = 'results'
    let results_title = document.createElement('h1')
        results_title.className = 'results_title'
        results_title.innerHTML = "Melhores filmes de Ficção Científica"
    let vitrine = document.createElement('div')
        vitrine.id = 'vitrine'

    document.getElementById('central_Body').appendChild(resultados)
    document.getElementById('results').appendChild(results_title)
    document.getElementById('results').appendChild(vitrine)

    
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        constIMG = "https://image.tmdb.org/t/p/w92"
        for (let i = 0; i < 20; i++){
            
            
            
            let vitrine_element = document.createElement('div')
            vitrine_element.className = 'vitrine_element'
            
            let element_img = document.createElement('div')
            element_img.innerHTML = `  <img src = "${constIMG+data['results'][i]['poster_path']} "  class = "element_img" >  `
            
            let element_title = document.createElement('h1')
            element_title.className = 'element_title'
            element_title.innerHTML = data['results'][i]['original_title']
            console.log(element_title)
            
            vitrine.appendChild(vitrine_element)
            vitrine_element.appendChild(element_img)
            vitrine_element.appendChild(element_title)
            
            
        }
            
    })
}
