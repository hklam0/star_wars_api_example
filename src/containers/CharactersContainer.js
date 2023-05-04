import React, { useEffect, useState } from 'react'
import CharactersList from '../components/CharactersList'
import CharacterDetail from '../components/CharacterDetail'

const CharacterContainer = () => {

    const [characters, setCharacters] = useState([])
    const [selectedCharacter, setSelectedCharacter] = useState("")
    const [planets, setPlanets]= useState([])
    const [selectedPlanets, setSelectedPlanets] = useState([])

    useEffect(() => {
      getAllCharacters()
      getAllPlanets()
    },[]) 

    
    const onSelectedCharacters = (selectedCharacter) => {
        setSelectedCharacter(selectedCharacter)
    }

    const onSelectedPlanets = (selectedPlanets) => {
        setSelectedPlanets(selectedPlanets)
    }

    const getAllCharacters = () => {
        const allRequests = [] 
        const allCharacters = []
            for (let i=1; i <=9; i++) {
                const newFetch = fetch("https://swapi.dev/api/people/?page=" + i + "&format=json")
                .then(response => response.json())
                allRequests.push(newFetch)
              }
              Promise.all(allRequests)
              .then(data => {
                for (let charArray of data) {
                    for (let charObj of charArray.results) {
                        allCharacters.push(charObj)
                    }
                }
                setCharacters(allCharacters)
              })
        
      
    }


    const getAllPlanets = () => {

        const allRequests = [] 
        const allPlanets = []
            for (let i=1; i <=6; i++) {
                const newFetch = fetch("https://swapi.dev/api/planets/?page=" + i + "&format=json")
                .then(response => response.json())
                allRequests.push(newFetch)
              }
              Promise.all(allRequests)
              .then(data => {
                for (let charArray of data) {
                    for (let charObj of charArray.results) {
                        allPlanets.push(charObj)
                    }
                }
                setPlanets(allPlanets)
              })
        
      
        
    }
    


    return (<>
            <h1>Star Wars Characters Container</h1> 
            {characters ? <CharactersList characters={characters} setSelectedCharacter={onSelectedCharacters} setSelectedPlanets={onSelectedPlanets}/>  : null}
            {selectedCharacter ? <CharacterDetail character={selectedCharacter} planets={planets}/> : null}
    

    </> 
    
    );
}
 
export default CharacterContainer;