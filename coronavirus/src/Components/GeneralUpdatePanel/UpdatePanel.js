import React, { useState, useEffect } from 'react'
import Card from './UpdatePanelCard/UpdatePanelCard';
import API from '../../Adapters/API/API';
import axios from 'axios';
import LoadingSpinner from '../LoadingSpinner/Spinner';
import { CSSTransition } from 'react-transition-group';
import './UpdatePanel.css';

const UpdatePanel = props =>  {
   
   const [infoBundle, setInfoBundle] = useState([]);
   const [inProp, setInProp] = useState(false)

   useEffect(() => {
     initialFetch()
   }, []);

   const initialFetch = () => {
      axios.get(`${API.BASE_URL}`)
      .then(res => {
         // console.log(res.data)
         console.log('successfully fetched')
         let bundle = res.data;
         setInfoBundle(bundle);
      })
      .catch((error) => {     
        if (error.response) {
         /*
          * The request was made and the server responded with a
          * status code that falls out of the range of 2xx
          */
         console.log(error.response.data);
         console.log(error.response.status);
         console.log(error.response.headers);
     } else if (error.request) {
         /*
          * The request was made but no response was received, `error.request`
          * is an instance of XMLHttpRequest in the browser and an instance
          * of http.ClientRequest in Node.js
          */
         console.log(error.request);
     } else {
         // Something happened in setting up the request and triggered an Error
         console.log('Error', error.message);
     }
     console.log(error.config);
     alert('Please refresh the page - API fetch failure.')
      })
   }

   if (infoBundle.length === 0 ) {  
      return (
         <div className='spinner-wrapper'>
               <LoadingSpinner/>
         </div>
      )
   } else {
      return (

         <div className='update-panel-flex-wrapper'>

            <div className="update-panel-flex-item-1">
               <div className="time-stamp">@ {infoBundle.Date}</div>
            </div>

            <div className="update-panel-flex-item">
               <Card caseLoad={infoBundle} />   
            </div>
        
         </div>
      )
   }
   
   }

   export default UpdatePanel
