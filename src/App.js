import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'
function App() {
  return (
    <div className="App">
      {/* nav bar */}

{/* banner */}
<Nav/>
<Banner/>


      <Row
       title = "NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true} />
      <Row
       title = "Trending Now" 
       fetchUrl={requests.fetchTrending}
       
       />
      <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documantaries" fetchUrl={requests. fetchDocumentaries}/>
    </div>
  );
}

export default App;
// fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
//     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries