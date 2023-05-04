import React from 'react'
// import CharacterItem from './CharacterItem';

const CharactersList = ({characters, setSelectedCharacter}) => {

    const handleSelected = (event) => {
        console.log(`selected ${characters[event.target.value].name}`)
        setSelectedCharacter(characters[event.target.value])
      }

    const charactersNode = characters.map((character,index) => {
    //   return <CharacterItem character={character} setSelectedCharacter={setSelectedCharacter} key={index}/>
        return <option value={index} key={index}>{character.name}</option>
    })

    return ( <>
        <h1>Character Selector</h1>
        {/* <ul>
            {charactersNode}
        </ul> */}
        <select defaultValue="" onChange={handleSelected}>
            <option value="" disabled>Please Choose a Character</option>
            {charactersNode}
        </select>

    </> );
}
 
export default CharactersList;