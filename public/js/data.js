let top_rated = document.getElementById('top_rated');
let popularData = document.getElementById('popularData');
let upcomingData = document.getElementById('upcomingData');
let autoWidth = document.getElementById('autoWidth');
let autoWidth2 = document.getElementById('autoWidth2');
let moviesList = document.getElementById('movies-list');
let img = document.getElementsByTagName('img');

const showBox = (url,liClass,imgId,movieId) => {

    const base_url = 'https://image.tmdb.org/t/p/original/'; 
    const li = document.createElement('li');
    li.classList.add('item-'+liClass);
    const box = document.createElement('div');
    box.classList.add('showcase-box');
    const boxImg = document.createElement('div');
    boxImg.classList.add('showcase-img');
    const img = document.createElement('img');

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

    img.src = base_url+url;
    // img.id = imgId;
    boxImg.appendChild(img);
    box.appendChild(boxImg);
    box.appendChild(overlay);
    overlay.appendChild(form);
    form.appendChild(btn);
    form.appendChild(inp);
    form.appendChild(mID);
    // overlay.appendChild(anchor);
    // box.appendChild(overlay);
    li.appendChild(box);
    autoWidth.appendChild(li);


}
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
const latestBox = (url,liClass,imgId,movieId) => {

    const base_url = 'https://image.tmdb.org/t/p/original/'; 
    const li = document.createElement('li');
    li.classList.add('item-'+liClass);
    const box = document.createElement('div');
    box.classList.add('latest-box');
    const imgBox = document.createElement('div');
    imgBox.classList.add('latest-b-img');
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

    imgBox.appendChild(img);
    box.appendChild(imgBox);
    box.appendChild(overlay);
    overlay.appendChild(form);
    form.appendChild(btn);
    form.appendChild(inp);
    form.appendChild(mID);
    li.appendChild(box);
    autoWidth2.appendChild(li);


}

const banner = ()=>{
    const topData = top_rated.innerText;
    const td = JSON.parse(topData);
    const popData = top_rated.innerText;
    const pd = JSON.parse(popData);
    const comingData = upcomingData.innerText;
    const upd = JSON.parse(comingData);
    let top_rated_url,popular_url,upcoming_url;
    const td_length = td.results.length;
    const pd_length = pd.results.length;
    const upd_length = upd.results.length;
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    for (let i = 0; i < td_length;i++){
        top_rated_url = td.results[i].poster_path;
        const imgId = td.results[i].title;
        const movieId = td.results[i].id;
        showBox(top_rated_url,alpha[i],imgId,movieId);
    }
    for (let i = 0; i < pd_length;i++){
        const imgId = pd.results[i].title;
        const movieId = pd.results[i].id;
        popular_url = pd.results[i].poster_path;
        latestBox(popular_url,alpha[i],imgId,movieId);
    }
    for (let i = 0; i < upd_length;i++){
        const imgId = upd.results[i].title;
        const movieId = upd.results[i].id;
        upcoming_url = upd.results[i].poster_path;
        moviesBox(upcoming_url,imgId,movieId);
    }
    
}

banner();


// $(".showcase-box").on('click', function(event){
//     const id = $('img').id;
//     console.log(id);
//     window.location = '/detail';
//     //(... rest of your JS code)
// });

