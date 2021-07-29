// create your App component here
import React, { useEffect, useState } from 'react';

function App(){

    const [pics, setPics] = useState('')

    useEffect(() => {
        console.log("Fetching data...");
        fetch("https://dog.ceo/api/breeds/image/random/1")
          .then(res => res.json())
          .then(data => {console.log("Data fetched!", data);
          setPics(data.message); 
        });
    }, []
    )

    if (pics){
      return(
          <img src = {pics} alt = "A Random Dog"/>  
      )
    }

    console.log(pics)

    return (
        <p>Loading...</p>
    )
}

export default App;