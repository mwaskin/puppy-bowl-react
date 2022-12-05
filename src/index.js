import React, { useState, useEffect } from 'react';
// import ReactDOM from 'react-dom'; just the createRoot import instead?
import { createRoot } from 'react-dom/client';
import { getAllPuppies} from './ajaxHelpers';
import PuppyList from './PuppyList';
import SinglePuppy from './SinglePuppy';
import Form from './Form';

const App = () => {
    const [puppies, setPuppies] = useState([]);
    const [selectedPuppy, setSelectedPuppy] = useState([]);

    useEffect (() => {
        getAllPuppies(setPuppies);
    }, []);
    
    return(
        <div>
            <p>Puppy Bowl!</p>
            {/* got form to appear, but does not function yet */}
            <Form />
            <div className='pup-container'>
                {selectedPuppy.id ? (<SinglePuppy selectedPuppy={selectedPuppy} setSelectedPuppy={setSelectedPuppy} />) : (<PuppyList puppies={puppies} setSelectedPuppy={setSelectedPuppy} />)}
            </div>
        </div>
    )};

const appElement = document.getElementById("app");
const root = createRoot(appElement);
root.render(<App />);