import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Navbar from './Navbar'
import Axios from 'axios';

function Character (props){
    const { id } = useParams()
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
          const response = await Axios.get(
            'https://rickandmortyapi.com/api/character/' + id
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

    function Attribute({name, value, link}){
        var locId = "0"

        if (typeof link !== 'undefined'){
            const splitedUrl = link.split('/')
            locId = splitedUrl[splitedUrl.length-1]
        }

        const linkValue = link ? <p class="mb-0"><a href={"/location/" + locId}>{value}</a></p> : <p class="mb-0 text-muted">{value}</p>

        return (
            <div class="row">
                <div class="col-md-3">
                    <p class="mb-0">{name}</p>
                </div>
                <div class="col-md-9">
                    {linkValue}
                </div>                              
            </div> 
        );
    }    

    function DetailPage(){
        return(
            <>
            <div class="row">
                <h2 class="col-lg-12 pt-4 pl-5">{data.name}</h2>
            </div>
            <div class="row">
                <div class="col-lg-4 pt-4 pl-5">                    
                    <img class="shadow" src={data.image}></img>
                </div>
                <div class="col-md-8 pt-4 pl-5 pl-xl-0 pr-5">               
                    <div class="card shadow border-0">            
                        <div class="card-body">
                            <Attribute name={"Gender"} value={data.gender}/>
                            <hr></hr>
                            <Attribute name={"Status"} value={data.status}/>
                            <hr></hr>
                            <Attribute name={"Spieces"} value={data.species}/>
                            <hr></hr>
                            <Attribute name={"Origin"} value={data.origin?.name}/>
                            <hr></hr>
                            <Attribute name={"Location"} value={data.location?.name} link={data.location?.url}/>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <h2 class="col-lg-12 pt-4 pl-5">Episodes</h2>
            </div>
            <div class="row">
                <div class="col-lg-12 pt-4 pl-5 pb-4">
                    <div class="d-flex flex-wrap">
                        {data.episode && data.episode.map((url) => {
                        const splitedUrl = url.split('/')
                        const episodeNumber = splitedUrl[splitedUrl.length-1]
                        
                        return (
                            
                             <h5><span class="badge badge-pill badge-primary mr-1">Episode {episodeNumber}</span></h5>
                        )})}                        
                    </div>                    
                </div>
            </div>
            </>
        );
    }
    
    return (
        <>
        <Navbar/>
        <div class="character-detail container mb-5">
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{`There is a problem fetching the post data - ${error}`}</div>
            )}
            {data != null ? <DetailPage/> : <div></div>}            
        </div>    
        </>
    );
}

export default Character;
