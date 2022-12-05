import React from "react";
import { getAllPuppies, selectPuppy } from "./ajaxHelpers";

const SinglePuppy = (props) => {
    const { selectedPuppy, setSelectedPuppy } = props;
    const { id, name, imageUrl, breed, teamId, status } = selectedPuppy;

    return(
        <div className='puppy-card single-view'>
            <div className='header-info'>
                <p className='puppy-name'>{name}</p>
                <p className='puppy-id'>#{id}</p>
            </div>
            <img src={imageUrl} />
            <p>{breed}</p>
            <p>{status}</p>
            <p>{teamId}</p>
            {/* button not working yet */}
            <button onClick={() => setSelectedPuppy(null)}>Back to All Puppies</button>
        </div>
    );
};

export default SinglePuppy;

