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
            height={150}
            width={150}
            timeout={35000} //4 secs 
          />  
       </div>
    );
   }
}