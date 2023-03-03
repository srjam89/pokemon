import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { pokemonItemsCall } from "../Api/api";
import objectCSS from "../styles/objectCSS.module.css";

const PokemonObjects = (props) => {
  const [collectPokemonItem, setCollectPokemonItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPokemonObjects = (id) => {
    pokemonItemsCall(`${id}`).then((res) => {
      res.json().then((data) => {
        setCollectPokemonItem(data);
        setIsLoading(false);
        setIsLoaded(true);
      });
    });
  };

  const { id } = useParams();

  useEffect(() => {
    getPokemonObjects(id);
  }, [id]);

  if (isLoading && !isLoaded) {
    return <div>Loading...</div>;
  }

  const { name, cost, effect_entries, category } = collectPokemonItem;
  const imgArr = [
    {
      img: "/dive-ball.jpeg",
      title: "blue round ball",
    },
    {
      img: "/hyper-potion.jpeg",
      title: "pink potion",
    },
    {
      img: "/pokeball-logo-logo.png",
      title: "red round ball",
    },
  ];

  return (
    <div className={objectCSS.container}>
      <div className={objectCSS.title}>
        <h1>Objects To Be Collected</h1>
      </div>
      <div className={objectCSS.tileContainer}>
        <div className={objectCSS.infoContainer}>
          <div className={objectCSS.flex}>
            <h2 className={objectCSS.category}>Name :</h2>{" "}
            <h2 className={objectCSS.result}>&nbsp; {name}</h2>
          </div>
          <div className={objectCSS.flex}>
            <h2 className={objectCSS.category}>Category :</h2>{" "}
            <h2 className={objectCSS.result}>&nbsp; {category.name}</h2>
          </div>
          <div className={objectCSS.flex}>
            <h2 className={objectCSS.category}>Cost :</h2>{" "}
            <h2 className={objectCSS.result}>&nbsp; {cost}</h2>
          </div>
          <div className={objectCSS.flex}>
            <h2 className={objectCSS.category}>Effect :</h2>
            <h2 className={`${objectCSS.result}, ${objectCSS.effect}`}>
              {effect_entries[0].effect}
            </h2>
          </div>
        </div>
        <ImageList
          sx={{ width: 400, height: 300 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {imgArr.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=161&fit=crop&auto=format`}
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

export default PokemonObjects;
