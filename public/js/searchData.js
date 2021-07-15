let moviesList = document.getElementById('movies-list');
let searchResult = document.getElementById('searchResult');

const moviesBox = (url,imgId,movieId) => {

    const base_url = 'https://image.tmdb.org/t/p/original/'; 
    const box = document.createElement('div');
    box.classList.add('movies-box');
    const boxImg = document.createElement('div');
    boxImg.classList.add('movies-img');
    const img = document.createElement('img');
    img.src = base_url+url;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const form = document.createElement('form');
    form.action = '/detail';
    form.method = 'POST';

    const inp = document.createElement('input');
    inp.classList.add('m-name');
    inp.value = imgId;
    inp.name = 'mname';

    const mID = document.createElement('input');
    mID.classList.add('m-Id');
    mID.value = movieId;
    mID.name = 'mId';

    const btn = document.createElement('button');
    btn.classList.add('preview-btn');
    btn.type = 'submit';
    btn.innerText = 'Details';

    boxImg.appendChild(img);
    box.appendChild(boxImg);
    box.appendChild(overlay);
    overlay.appendChild(form);
    form.appendChild(btn);
    form.appendChild(inp);
    form.appendChild(mID);
    moviesList.appendChild(box);


}

const banner = ()=>{
    const searchData = searchResult.innerText;
    const srch = JSON.parse(searchData);
    let srch_url;
    const srch_length = srch.results.length;
    
    for (let i = 0; i < srch_length;i++){
        const imgId = srch.results[i].title;
        const movieId = srch.results[i].id;
        srch_url = srch.results[i].poster_path;
        if(srch_url!=null){
            moviesBox(srch_url,imgId,movieId);
        }
        
    }
    
}

banner();