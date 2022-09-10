import { useState } from "react";
import { Theme } from "../App";

function Main() {
   
    
  return (
    <>
    
    <Theme.Consumer>{(theme)=>{
        
        return (
            <>
            <span class="material-symbols-outlined">
light_mode
</span>
            <button onClick={()=>{
                
                if(document.body.classList.toggle(theme)) {
                    localStorage.setItem("theme", "dark")
                } else {
                    localStorage.setItem("theme", "light")
                }
               
            }}>Toggle</button>
        
        </>)}
}</Theme.Consumer>

      </>
  );
}

export default Main;
