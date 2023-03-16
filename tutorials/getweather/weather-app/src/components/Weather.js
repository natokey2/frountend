
import React,{Components} from "react";

const Weather=({city,country,temp})=>{
    return(
        
               <div className="container">
        
            <div className="row">
                <div className="col-sm-12">
                <div className="cont-data">
                  <h1 className="text-center">Stockholm.Sweden</h1>
                 <h5 className="text-center"> 
                    <img></img>
                 </h5>
                 <h2> 18&deg;</h2>
                 <h3>
                    <span className=" mx-3">20&deg;</span>
                    <span className=" mx-3">18&deg;</span>
                 </h3>
                 <h5 className="display-2"> Clear Sky </h5>
                  
                
                </div>
                </div>
             
            </div>
        

     </div>
        

    );
}
export default Weather;