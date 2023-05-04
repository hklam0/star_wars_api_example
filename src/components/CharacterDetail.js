import React from 'react'

const CharacterDetail = ({character, planets}) => {
    
    // const begin = len("https://swapi.dev/api/planets")
    console.log(character.homeworld)
    let url = character.homeworld
    const end = url.lastIndexOf("/")
    const index = url.substring(30,end)
    // console.log(begin)
    console.log(end)
    console.log(index)
    console.log(planets[index-1])

    return ( <>
        <h2>Character Detail</h2>
        <p>Name: {character.name}</p>
        <p>Height: {character.height} cm</p>
        <p>mass: {character.mass} kg</p>
        <p>Hair Colour: {character.hair_color}</p>
        <p>Skin Colour: {character.skin_color}</p>
        <p>Eye Colour: {character.eye_color}</p>
        <p>Gender: {character.gender}</p>
        {/* <p onClick={renderHomeWorld}>Home</p> */}
        <p>HomeWorld: {planets[index-1].name}</p>
    </> );
}
 
export default CharacterDetail;