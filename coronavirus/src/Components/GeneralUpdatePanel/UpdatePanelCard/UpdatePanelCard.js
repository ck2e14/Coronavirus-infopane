import React, {useState, useEffect } from 'react'
import './UpdatePanelCard.css';

 const UpdatePanelCard = props => { 

   const [caseLoadObj, setCaseLoadObj] = useState([]);

   const { caseLoad } = props

   console.log(caseLoad)

   return (
      
      <div className='panel-cards'>

         <div className="panel-card-item">
            <span>New Confirmed Cases </span> {caseLoad.Global.NewConfirmed}
         </div>

         <div className="panel-card-item">
            <span>New Deaths </span> {caseLoad.Global.NewDeaths}
         </div>

         <div className="panel-card-item">
            <span>Total Confirmed Cases </span> {caseLoad.Global.TotalConfirmed}
         </div>
        


      </div>
   )
}

export default UpdatePanelCard