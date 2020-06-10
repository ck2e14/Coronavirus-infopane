import React from 'react'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './Spinner.css'

export default class App extends React.Component {


   render() {
    return(
     <Loader
        type="Grid"
        color="#383337"
        height={100}
        width={100}
        timeout={3000} //3 secs

     />
    );
   }
}