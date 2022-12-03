import React from "react";
import { getAllPuppies, selectPuppy } from "./ajaxHelpers";
import PuppyCard from "./PuppyCard";

const PuppyList = (props) => {
    const { puppies, setSelectedPuppy } = props;

    return(
        puppies.map(puppy => {
            return <PuppyCard key={puppy.id} puppy={puppy} setSelectedPuppy={setSelectedPuppy} />;
        })
    );
};

export default PuppyList;