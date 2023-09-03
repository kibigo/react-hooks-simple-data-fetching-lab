import React, {useEffect, useState} from "react";

const App = () => {
    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random/3')
        .then((response) => response.json())
        .then((data) => {
            setDogs(data.message)
            setIsLoaded(true)
        })
    }, [])
    
    if(!isLoaded) return <p>Loading...</p>
    return(
        <div>
            {dogs.map((dog) => (
                <img src={dog} key={dog} alt="A Random Dog"></img>
            ))}
        </div>
    )
}

export default App