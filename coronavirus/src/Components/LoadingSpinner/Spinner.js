import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Spinner.css'

export default class App extends React.Component {


   render() {
    return(
       <div className="spinner">
         <Loader
            type="Circles"
            color="#FAEBDA"
            height={300}
            width={300}
            timeout={4000} //4 secs 
          />  
       </div>
    );
   }
}