import React from "react";
import { selectPuppy } from "./ajaxHelpers";

const PuppyCard = (props) => {
    const { puppy, setSelectedPuppy } = props;
    const { id, name, imageUrl, breed } = puppy;

    return(
        <div className='puppy-card' onClick={() => selectPuppy(id, setSelectedPuppy)}>
            <div className='header-info'>
                <p className='puppy-name'>{name}</p>
                <p className='puppy-id'>#{id}</p>
            </div>
            <img src={imageUrl} />
            <p className='puppy-breed'>{breed}</p>
        </div>
    );
};

export default PuppyCard;