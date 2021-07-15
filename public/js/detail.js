let moviesList = document.getElementById('movies-list');
let searchResult = document.getElementById('searchResult');
let moviesHeading = document.getElementById('movies-heading');



const moviesBox = (url,budget,vote_average,production_companies,release_date,revenue,overview,title) => {

    const base_url = 'https://image.tmdb.org/t/p/original/';
    const box = document.createElement('div');
    const s1 = document.createElement('span');
    const h1 = document.createElement('h1');
    s1.innerText = 'Budget';
    h1.innerText = budget;
    box.classList.add('movies-box');
    const boxImg = document.createElement('div');
    boxImg.classList.add('movies-img');
    const img = document.createElement('img');
    img.src = base_url + url;
    
    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movie-info');
    const h2 = document.createElement('h1');
    const s2 = document.createElement('span');
    h2.innerText = vote_average;
    s2.innerText = 'Rating - '
    h2.prepend(s2);
    
    const h3 = document.createElement('h1');
    const s3 = document.createElement('span');
    h3.innerText = production_companies;
    s3.innerText = 'Production Companies - '
    h3.prepend(s3);
   
    const h4 = document.createElement('h1');
    const s4 = document.createElement('span');
    h4.innerText = release_date;
    s4.innerText = 'Release Date - '
    h4.prepend(s4);
    
    const h5 = document.createElement('h1');
    const s5 = document.createElement('span');
    h5.innerText = revenue;
    s5.innerText = 'Revenue - '
    h5.prepend(s5);
    
    const p = document.createElement('p');
    const s6 = document.createElement('span');
    p.innerText = overview;
    s6.innerText = 'Overview - '
    p.prepend(s6);
    
    const h6 = document.createElement('h1');
    h6.innerText = title;
    
    moviesHeading.appendChild(h6);
    boxImg.appendChild(img);
    box.appendChild(boxImg);
    box.appendChild(s1);
    box.appendChild(h1);
    moviesList.appendChild(box);
    movieInfo.appendChild(h2);
    movieInfo.appendChild(h3);
    movieInfo.appendChild(h4);
    movieInfo.appendChild(h5);
    movieInfo.appendChild(p);
    moviesList.appendChild(movieInfo);

}

const banner = () => {
    const searchData = searchResult.innerText;
    const srch = JSON.parse(searchData);

    const srch_url = srch.poster_path;
    const budget = srch.budget;
    const vote_average = srch.vote_average;
    const production_companies = srch.production_companies[0].name;
    const release_date = srch.release_date;
    const revenue = srch.revenue;
    const overview = srch.overview;
    const title = srch.title;
    if (srch_url != null) {
        moviesBox(srch_url,budget,vote_average,production_companies,release_date,revenue,overview,title);
    }



}

banner();