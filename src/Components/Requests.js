import React from 'react'
import {useSelector} from 'react-redux'
import '../Style/requests.css'
import Data from '../data/dataall'

function Requests() {
    var activity = useSelector(state => state.counter)
 
    return(
                Data.map((data) => {
                    return (
                        
                //    activity === data.activity? true:false
                    true                        
                    &&
                        <>
                        <div className= "requests">
                        <div className="customer">
                            <div className ="col0">
                                <img src ="/images/profile.png" alt="profile"/>
                            </div>
            
                            <div className="col1">
                             <h1>{data.details.name}</h1> 
                             <h2>{data.details.city}</h2>   
                            </div>

                            <div className="col2">
                             <p>Availability:</p>   
                            <h2>{data.details.date}/{data.details.month}/{data.details.year}</h2>  
                            <h3>{data.details.timing}</h3>
                            </div>
                            <div className="col3">
                            <h2>You and {data.details.name} have done {data.details.deals} deals together. </h2>   
                            <h2> status : {data.details.status} </h2>   
                            <button id ="b57">register</button>              
                            </div>
                        </div> 
                    </div>
                    </>
                    )
                })
           
            
    )

        // <div className= "requests">
        //     <div className="customer">
        //         <div className ="col0">
        //             <img src ="/images/profile.png" alt="profile"/>
        //         </div>

        //         <div className="col1">
        //          <h1>{data[0].details.name}</h1> 
        //          <h2>{data[0].details.city}</h2>  
                  
        //         </div>
        //         <div className="col2">
        //          <p>Availability:</p>   
        //         <h2>{data[0].details.date}/{data[0].details.month}/{data[0].details.year}</h2>  
        //         <h3>{data[0].details.timing}</h3>
        //         </div>
        //         <div className="col3">
        //         <h2>You and {data[0].details.name} have done {data[0].details.deals} deals together. </h2>   
        //         <h2> status : {data[0].details.status} </h2>   
        //         <button id ="b57">register</button>              
        //         </div>
        //     </div> 
        // </div>

}

export default Requests
