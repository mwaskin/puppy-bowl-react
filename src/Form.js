import React, { useState } from "react";

const Form = () => {
    const [search, setSearch] = useState("")
    return (
        <form onSubmit={(event) => {event.preventDefault()}}>
            <label htmlFor="search">Search :</label>
            <input
                value={search} onChange={(event) => {
                    setSearch(event.target.value);
                }}
                type="text"
                placeholder="Puppy Search"
                >
            </input>
            <button type="submit">Search</button>
        </form>
    )
}

export default Form;

