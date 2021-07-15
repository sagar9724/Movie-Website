require('dotenv').config()
const express = require("express");
const hbs = require("hbs");
const path = require("path");
const axios = require("axios");
const app = express();

// Paths
const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");


// App Config
const port = process.env.PORT || 8000;
app.use(express.static(publicPath));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "hbs");
app.set("views", viewsPath);

hbs.registerPartials(partialPath);
console.log(publicPath);
// Routing

app.get("/", async (req, res) => {
    try {
        const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63';

        const popularUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63';

        const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1';

        let top_rated, popularData, upcomingData;

        const topRated = await axios.get(topRatedUrl);
        top_rated = JSON.stringify(topRated.data);

        const popular = await axios.get(popularUrl);
        popularData = JSON.stringify(popular.data);

        const upcoming = await axios.get(upcomingUrl);
        upcomingData = JSON.stringify(upcoming.data);

        res.render("index", { top_rated, popularData, upcomingData });

        // 
    }
    catch (err) {
        console.log(err);
    }
})
app.post("/search", async (req, res) => {
    try {
        const search = req.body.search;
        const url = `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${search.trim()}&language=en-US&page=1&include_adult=false`;
        const searchData = await axios.get(url);
        searchResult = JSON.stringify(searchData.data);
        // console.log(searchResult);
        res.render("search", { searchResult });
    } catch (err) {
        console.log(err);
    }

})

app.post("/detail", async (req, res) => {

    try {
        const movieName = req.body.mname;
        const movieId = req.body.mId;
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
        const Data = await axios.get(url);
        const searchResult = JSON.stringify(Data.data);
        // const budget = searchResult.budget;
        // const release_date = searchResult.release_date;
        // const production_companies = searchResult.production_companies[0].name;
        // const vote_average = searchResult.vote_average;
        // const revenue = searchResult.revenue;
        // const overview = searchResult.overview;
        // const poster_path = searchResult.poster_path;
        // console.log(d);
        // console.log(budget);
        res.render("detail", {searchResult}/* {poster_path, movieName, budget,release_date,production_companies,vote_average,revenue ,overview} */);
    } catch (err) {
        console.log(err);
    }

})
app.get("*", (req, res) => {
    res.send("Page Not Found 404 Error");
})

app.listen(port, () => {
    console.log(`Listening to the port ${port}`);
});