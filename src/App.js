import React from 'react';
import PortfolioContainer from "./components/PortfolioContainer";

// First we import our Hello component from our components folder.



// React apps typically have a single App component at the very top that can reference other React components.
// This component, `App`, is our main component that is importing `Hello` and rendering it in the return method.
import './App.css'


function App(){
    return(
     <div className="App">
     <PortfolioContainer />
     </div>
 )   }


export default App;
