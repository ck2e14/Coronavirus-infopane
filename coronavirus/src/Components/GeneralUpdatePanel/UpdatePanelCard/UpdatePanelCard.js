import React, {useState, useEffect } from 'react'
import './UpdatePanelCard.css';

 const UpdatePanelCard = props => {
   const [caseLoadObj, setCaseLoadObj] = useState([]);

   const { caseLoad } = props

   console.log(caseLoad)


   return (
      
      <div className='panel-cards'>
         <h3 className="panel-card-item">New Confirmed Cases: </h3>{caseLoad.Global.NewConfirmed}
         <h3 className="panel-card-item">New Deaths: </h3>{caseLoad.Global.NewDeaths}
         <h3 className="panel-card-item">Total Confirmed Cases: </h3>{caseLoad.Global.TotalConfirmed}
        
         <h3 className="panel-card-item"></h3>{caseLoad.Global.NewConfirmed}
         <h3 className="panel-card-item"></h3>{caseLoad.Global.NewConfirmed}
      </div>
   )
}

export default UpdatePanelCard