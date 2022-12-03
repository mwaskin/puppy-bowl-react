import React from "react";
import { selectPuppy } from "./ajaxHelpers";

const PuppyCard = (props) => {
    const { puppy, setSelectedPuppy } = props;
    const { id, name, imageUrl, breed } = puppy;

    return(
        <div className='puppy-card-all' onClick={() => selectPuppy(id, setSelectedPuppy)}>
            <div className='header-info'>
                <p className='puppy-name'>{name}</p>
                <p className='puppy-id'>#{id}</p>
                <p className='puppy-breed'>{breed}</p>
            </div>
            <img src={imageUrl} />
        </div>
    );
};

export default PuppyCard;