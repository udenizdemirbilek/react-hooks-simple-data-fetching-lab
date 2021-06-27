// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [dogs, setDogs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
          setDogs(data.message)
          setIsLoaded(true);
        });
    }, []);
  
    // if the data hasn't been loaded, show a loading indicator
    if (!isLoaded) return <h3>Loading...</h3>;
  
    return <div><img alt="A Random Dog" src={dogs}></img></div>;
  }

  export default App;