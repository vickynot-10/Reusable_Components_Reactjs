import './scroll_div.css'
import { useRef } from "react";

function ScrollBar( {children ,iconDivWidth = '60px' , iconDivHeight = '60px'  }   ){
    const scrollableDiv = useRef(null);
   
    function scrollNext(){
        if(scrollableDiv.current){
    
            scrollableDiv.current.scrollLeft +=150;
         
            
        }
       
    }
    function scrollPrev(){
        if(scrollableDiv.current){
       
            scrollableDiv.current.scrollLeft -= 150
        
        }
    }

    return (
        <div className="scroll-bar-conatiner"  >
            <div className="scrollable-div" ref={scrollableDiv}>
                {children}
            </div>
             <button id="arrow-lefticon-users-view" onClick={scrollPrev} style={{
                width : iconDivWidth , height : iconDivHeight
             }} >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <polyline
                                  points="15 18 9 12 15 6"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
             <button id="arrow-right-users-view" onClick={scrollNext} style={{
                width : iconDivWidth , height : iconDivHeight
             }} >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                              >
                                <polyline
                                  points="9 18 15 12 9 6"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </button>
        </div>
    )
}

export default ScrollBar