
import React from 'react';


const Form=(props)=>{
   

    return(
     <div className="container">
        <form className="my-5" onSubmit={props.getData} >
            <div className="row">
                <div className="col-md-4">
                    <input type="text" placeholder="city"className="form-control" name="city"autoComplete=""></input>
                </div>
                <div className="col-md-4">
                    <input type="text" placeholder="country"className="form-control" name="country"autoComplete=""></input>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-warning btn-block">Get Weather</button>
                </div>
            </div>
        </form>

     </div>
    );
}
export default Form;