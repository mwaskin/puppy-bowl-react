import React from "react";
import { getAllPuppies, selectPuppy } from "./ajaxHelpers";

const SinglePuppy = (props) => {
    const { selectedPuppy } = props;
    const { id, name, imageUrl, breed, teamId, status } = selectedPuppy;

    return(
        <div className='puppy-card-single'>
            <div className='header-info'>
                <p className='puppy-name'>{name}</p>
                <p className='puppy-id'>#{id}</p>
            </div>
            <img src={imageUrl} />
            <p className='puppy-breed'>{breed}</p>
            <p className='puppy-breed'>{status}</p>
            <p className='puppy-breed'>{teamId}</p>
            {/* button not working yet */}
            <button onClick={() => getAllPuppies()}>Back to All Puppies</button>
        </div>
    );
};

export default SinglePuppy;

