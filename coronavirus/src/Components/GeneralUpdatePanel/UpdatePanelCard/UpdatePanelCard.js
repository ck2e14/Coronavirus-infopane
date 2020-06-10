import React, {useState, useEffect } from 'react'
import './UpdatePanelCard.css';

 const UpdatePanelCard = props => { 

   const [caseLoadObj, setCaseLoadObj] = useState([]);

   const { caseLoad } = props

   console.log(caseLoad)

   return (
      
      <div className='panel-cards'>

         <div className="panel-card-item">New Confirmed Cases: </div>{caseLoad.Global.NewConfirmed}

         <div className="panel-card-item">New Deaths: </div>{caseLoad.Global.NewDeaths}

         <div className="panel-card-item">Total Confirmed Cases: </div>{caseLoad.Global.TotalConfirmed}
        


      </div>
   )
}

export default UpdatePanelCard