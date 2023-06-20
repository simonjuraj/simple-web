import Card from './Card'
import Axios from 'axios';
import React, { useState, useEffect } from 'react';

const CardsGrid = () => {
    const img1 = require('../img/1.jpeg');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   useEffect(() => {
    var characters = [];
    characters.push(randomNumberInRange(1, 826));
    characters.push(randomNumberInRange(1, 826));
    characters.push(randomNumberInRange(1, 826));
    characters.push(randomNumberInRange(1, 826));
    characters.push(randomNumberInRange(1, 826));
    characters.push(randomNumberInRange(1, 826));

    const getData = async () => {
      try {
        const response = await Axios.get(
          'https://rickandmortyapi.com/api/character/' + characters
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

    function CharacterData(){
        return(
            <>
                <div class="row">
                {data && data.slice(0,3).map((character) => (      
                                <div class="col-sm-4">                      
                                    <Card src={character.image} alt={character.name} title={character.name} href={"/character/" + character.id}/>
                                </div>
                            ))}                 
                </div>            
                <div class="row mt-sm-5">
                {data && data.slice(3,6).map((character) => (      
                                <div class="col-sm-4">                      
                                    <Card src={character.image} alt={character.name} title={character.name} href={"/character/" + character.id}/>
                                </div>
                            ))}  
                </div>
            </>
        );
    }
    return (
        <div id="section1" class="cards-menu container">
            <h3 class="text-center pb-5 text-light">Random Characters</h3>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data != null ? <CharacterData/> : <div></div>}             
        </div>
    );
}

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default CardsGrid;


