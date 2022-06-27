import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "@mui/material";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import { MainContext } from "../context/MainState";


export default function Detail() {

  const {addMovieWatchlist} = useContext(MainContext)




  useEffect(() => {
    fetchItems();
  });

  const movieData = useLocation();

  const { data } = movieData.state;

  const [items, setItems] = useState({});
  const fetchItems = async () => {
    const fetchItems = await fetch(
      `http://www.omdbapi.com/?i=${data.imdbID}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    const items = await fetchItems.json();
    setItems(items);
  };

 

  return (
    <div className="detail_page">
      <section id="movieDetailsPage">
        <header>
          <h2 className="detail_title">{items.Title}</h2>
        </header>
        <div className="info_details">
          <div className="movie_year_and_type">
            <span style={{ color: "white" }}>
              {items.Type
                ? items.Type.charAt(0).toUpperCase() + items.Type.slice(1)
                : "N/A"}
            </span>

            <span className="detail_movei_year">{items.Year}</span>
          </div>
          <div className="raiting">
            <div className="rating_star">
              <span>IMDb RATING</span>
              <div className="rating_score">
                <StarIcon className="star_icon" />
                <span style={{ display: "inline-block" }}>
                  <span className="data_item_raitng">{items.imdbRating}</span>
                  /10
                </span>
              </div>
            </div>
            <div className="watchlist">
              <Button
                onClick={() => addMovieWatchlist(items)}
                className="btn_wathclist"
                variant="outlined"
                startIcon={<BookmarkAddIcon />}
              >
                Add to Watchlist
              </Button>
             
            </div>
          </div>
        </div>
        <section>
          <div className="details-img">
            <img src={items.Poster} alt="" />
          </div>
          <section className="genre">
            {items.Genre
              ? items.Genre.split(",").map((item, i) => (
                  <>
                    <span className="genre_items" key={i}>
                      {item}
                    </span>
                  </>
                ))
              : "movie Genre not Found"}
          </section>
          <section className="detail_info">
            <div className="actors_plot">
              <div className="plot">
                <p>
                  <span className="plots"> </span>
                  {items.Plot}
                </p>
              </div>
              <hr />
              <div className="Actors">
                <span className="movie_stars">
                  <span className="stars_span">Stars</span> {items.Actors}
                </span>
              </div>
              <hr />
            </div>

            <section className="run_box">
              <div className="runtime">
                <h5>
                  <span className="spans">Runtime</span>: {items.Runtime}
                </h5>
              </div>
              <div className="boxOffice">
                <h5>
                  <span className="spans">BoxOffice</span> : {items.BoxOffice}
                </h5>
              </div>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}
