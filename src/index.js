import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom'; just the createRoot import instead?
import { createRoot } from 'react-dom/client';
import { getAllPuppies, selectPuppy } from './ajaxHelpers';
import PuppyList from './PuppyList';
import SinglePuppy from './SinglePuppy';
import PuppyCard from './PuppyCard';

//variables to reference the API- move to a data fetch file?
// const cohortName = '2211-FTB-ET-WEB-FT';
// const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const App = () => {
    const [puppies, setPuppies] = useState([]);
    const [selectedPuppy, setSelectedPuppy] = useState([]);
/*
    //fetch all puppies from API - move to a data fetch file?
    // const getAllPuppies = async () => {
        //     try{
            //         const response = await fetch (`${APIURL}/players`);
            //         const results = await response.json();
            //         // console.log(results);
            //         const puppies = results.data.players;
            //         setPuppies(puppies);
            //         // console.log(puppies);
            //     } catch (error) {
                //         console.error(error);
                //     }
*/
    //makes it so it only fetches data from the API again if the values change
    useEffect (() => {
        getAllPuppies(setPuppies);
    }, []);
    console.log(puppies);
        // return(puppies.map(puppy => {
        //     return (
        //         <div class="single-player-card">
        //             <div class="header-info">
        //                 <p class="pup-title">{puppy.name}</p>
        //                 <p class="pup-number">{puppy.id}</p>
        //             </div>
        //             <img src={puppy.imageUrl} />
        //             <button class="detail-button" data-id={puppy.id}>See details</button>
        //             <button class="delete-button" data-id={puppy.id}>Remove from roster</button>
        //         </div>
        //     )
        // }))
    // }
    //HTML to be rendered by App component
    return(
        <div>
            <p>Puppy Bowl!</p>
            <div className='pup-container'>
                {selectedPuppy.id ? (<SinglePuppy selectedPuppy={selectedPuppy} />) : (<PuppyList puppies={puppies} setSelectedPuppy={setSelectedPuppy} />)}
            </div>
        </div>
    )};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />);