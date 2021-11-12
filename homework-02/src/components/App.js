import React from 'react';
import { Movies } from './Movies';


export const App = () => {

  const filmovi = [
    {
      name: 'Dune',
      releaseDate: 2021,
      genre: 'Drama',
      plot: 'A mythic and emotionally charged hero\'s journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people',
      imdbLink: 'https://www.imdb.com/title/tt1160419/?ref_=hm_fanfav_tt_t_1_pd_fp1',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg'
    },
    {
      name: 'Idiocracy',
      releaseDate: 2006,
      genre: 'Comedy',
      plot: 'Private Joe Bauers, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he\'s easily the most intelligent person alive.',
      imdbLink: 'https://www.imdb.com/title/tt0387808/?ref_=fn_al_tt_1',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
    },
    {
      name: 'American Psycho',
      releaseDate: 2000,
      genre: 'Drama',
      plot: 'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
      imdbLink: 'https://www.imdb.com/title/tt0144084/?ref_=fn_al_tt_1',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: 'Fight Club',
      releaseDate: 1999,
      genre: 'Drama',
      plot: 'An insomniac office worker and a devli-may-care soap maker form an underground fight club that evolves into much more.',
      imdbLink: 'https://www.imdb.com/title/tt0137523/?ref_=fn_al_tt_1',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg'
    },
    {
      name: 'Helsreach: The Full Movie',
      releaseDate: 2019,
      genre: 'Sci-Fi',
      plot: 'Set during the Third War for Armageddon, Helsreach follows Grimaldus, the newly promoted Reclusiarch of the Black Templars. Leading a group of Black Templars, and supported by the 101st Armageddon Steel Legion and titans of Legio Invigilata, he is tasked with the defense of Hive Helsreach from the Ork invasion.',
      imdbLink: 'https://www.imdb.com/title/tt12820524/?ref_=tt_sims_tt_i_2',
      imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTRhZTEwYWMtYTRjNC00YjQ2LTgyMzMtOGJjY2U1YzdlOWZlXkEyXkFqcGdeQXVyODA2NjcyMTE@._V1_.jpg'
    },
  ]


  return (
    <div>
      <h1>Hello World</h1>
      <Movies 
        movies={filmovi}
      />
    </div>
  );
}