import React, { useState } from "react";
import axios from "axios";
import { Autocomplete, colors } from "@mui/material";
import TextField from "@mui/material/TextField";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cards from "./Card";

import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

function Search({addFavourite}) {

  

  const API_KEY = process.env.REACT_APP_API_KEY;

  const url = `http://www.omdbapi.com/?apikey=${API_KEY}`;

  const [movie, setMovie] = useState([]);

  const [state, setState] = useState({
    query: "",
    result: [],
  });

  const loadMovieNames = async (txt,v) => {
    console.log("value= "+v)
    let queryFromInput = v;
    setState((prevState) => {
      return { ...prevState, query: queryFromInput };
    });
    const response = await axios.get(url + "&s=" + txt + "&plot=full", {
      params: {},
    });

    let arrayOfMoviesName = [];

    if (txt.length > 2) {
      response.data.Search.forEach((t) => {
        arrayOfMoviesName.push(t.Title);
      });
      setMovie(arrayOfMoviesName);
    }
  };

  const search = async (e) => {
    
      await axios
        .get(url + "&s=" + state.query + "&plot=full", {
          params: {},
        })
        .then(({ data }) => {
          let result = data.Search;

          setState((prevState) => {
            return { ...prevState, result: result };
          });
          console.log(data.Search);
        });
    
  };

  let moviePost = state.result;

  console.log(moviePost)

  
  return (
    <div
      className={moviePost.length > 0 ? "search_movie" : "search_movie_empty"}
    >
      <div className="search_movie_auto">
        <Autocomplete
          placeholder="Search Movie"
          sx={{ width: 300 , height:30}}
          loading={true}
          limit={8}
          getOptionLabel={(option) => option}
          onInputChange={(e,value) => loadMovieNames(e.target.value,value)}
          options={movie}
          value={state.query}
          onChange={search}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Movie"
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
            />
          )}
        />
       
      </div>

              <div className="search_movie_list">

          {
          
          moviePost.length > 0
            ? moviePost.slice(0, 2).map((x, i) => (
                <div className="searc_movie_result">
                  <Cards data={x} key={i} />
                </div>
              ))
            : null
            
            }
              </div>
      {moviePost.length > 0 ? (
        <Link
          className="link_to_list"
          to="/list"
          state={{ moviePost: moviePost, API_KEY: API_KEY,addFavourite:addFavourite}}
        >
          <button className="custom-btn btn-3">
            <span>Daha Fazla Sonuç</span>
          </button>
        </Link>
      ) : null}
    </div>
  );
}

export default Search;
