import React , {useState ,useEffect} from "react";

import useCustomHook from "../useCustomHook"


  
function FirstComponent(props){
      
      
    const clickedButton = useCustomHook(0,"FirstComponent")
  
    return (
        <div>
            <h1> This is the First Component</h1>
            <button onClick={clickedButton}> 
               Click here!
            </button>
        </div>
    );
}
  
export default FirstComponent;