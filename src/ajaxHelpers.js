const cohortName = '2211-FTB-ET-WEB-FT';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const getAllPuppies = async (setPuppies) => {
    try{
        const response = await fetch (`${APIURL}/players`);
        const results = await response.json();
        const puppies = results.data.players;
        setPuppies(puppies);
    } catch (error) {
        console.error(error);
        console.log('Who let the dogs out?!')
    }
}

export const selectPuppy = async (puppyId, setSelectedPuppy) => {
    // console.log(puppyId);
    try {
        const response = await fetch(`${APIURL}/players/${puppyId}`);
        const result = await response.json();
        setSelectedPuppy(result.data.player);
    } catch (error) {
        console.error(error);
        console.log('Looks like your dog ran away!');
    }
}


