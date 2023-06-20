import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import Navbar from './Navbar'
import Card from './Card'
import Axios from 'axios';

function Location (props){
    const { id } = useParams()
    const [data, setData] = useState({});
    const [data2, setData2] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const getData = async () => {
        try {
            const [request1] = await Promise.all([
                Axios.get('https://rickandmortyapi.com/api/location/' + id),
             ]);

             console.log(request1)

             const ids = []
             request1.data.residents?.map((url) => {
                    const splitedUrl = url.split('/')
                    const episodeNumber = splitedUrl[splitedUrl.length-1]
                    ids.push(episodeNumber)
                });

            const request2 = await Axios.get('https://rickandmortyapi.com/api/character/' + ids);
            console.log(request2);
            
          setData(request1.data);
          setData2(request2.data)

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
        //const linkValue = link ? <p class="mb-0"><a href={link}>{value}</a></p> : <p class="mb-0 text-muted">{value}</p>

        return (
            <div class="row">
                <div class="col-md-3">
                    <p class="mb-0">{name}</p>
                </div>
                <div class="col-md-9">
                    <p class="mb-0 text-muted">{value}</p>
                </div>                              
            </div> 
        );
    }    

    function Cards(){

        if (typeof data2 !== 'undefined'){
            data2.

        }
    }

    function DetailPage(){
        return(
            <>
            <div class="row">
                <h2 class="col-lg-12 pt-4 pl-5">{data.name}</h2>
            </div>
            <div class="row">
                <div class="col-lg-12 pt-4 pl-5 pr-5">               
                    <div class="card shadow border-0">            
                        <div class="card-body">
                            <Attribute name={"Type"} value={data.type}/>
                            <hr></hr>
                            <Attribute name={"Dimension"} value={data.dimension}/>
                    </div>
                </div>
                </div>
            </div>
            <div class="row">
                <h2 class="col-lg-12 pt-4 pl-5">Residents</h2>
            </div>
                    {data2 && data2.map((resident, index) => {                                            
                        return (                                                                                   
                            <div class="col-md-2">
                                <Card src={resident.image} alt={resident.name} title={resident.name} href={"/character/" + resident.id}/> 
                            </div>  
                        )})}                 
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

export default Location;
