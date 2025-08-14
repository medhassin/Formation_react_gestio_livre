import { createContext, useState } from "react";

export let FavouriteContext = createContext({
  nbFavourites: 0,
  tabFavourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
  isFavourite: () => {},
});

function FavouriteContextProvider(props) {
  const [tabFav, setTabFav] = useState([]);

  function ajouterFavori(book) {
    console.log(book);

    setTabFav((previous) => [...previous, book]);
  }

  function supprimerFavori(book) {
    setTabFav((previous) => {
      return previous.filter((b) => b.id != book.id);
    });
  }

  function estFavori(idBook) {
    return tabFav.some((b) => b.id == idBook);
  }

  let c = {
    nbFavourites: tabFav.length,
    tabFavourites: tabFav,
    addFavourite: ajouterFavori,
    removeFavourite: supprimerFavori,
    isFavourite: estFavori,
  };

  return (
    <FavouriteContext.Provider value={c}>
      {props.children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteContextProvider;