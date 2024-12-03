import './tooltip.css'
import { useState } from 'react'


function ToolTip({children , content = 'Tooltip' , fontsize , tooltipMargin = '0' , textColor = 'white' ,
    tooltipBgcolor = 'rgba(97, 97, 97, 0.92)' , tooltipHeight = '20px'  , tooltipWidth = 'auto' , tooltipPadding = '0px',
    toolTipTop = '0%' ,toolTipBottom='0%',toolTipRight='0%',toolTipLeft ='0%' , translateTipX = '0%' , translateTipY = '0%',
    maxwidthtip = '300px'
}){
    const [showTip,setTip]=useState(false);
    function DisplayTip(){
        setTip(true)
    }

    function OffTip(){
        setTip(false)
    }

   let tooltipPos;
   tooltipPos = {
    'top' : toolTipTop  , 'left' : toolTipLeft , 'right' : toolTipRight , 'bottom' : toolTipBottom , 'transform' : `translate(${translateTipX},${translateTipY})`
   }

    





return(
    <div id="tooltip-container" 
    onMouseEnter={DisplayTip} onMouseLeave={OffTip}
    
     >
            {children}
            {
                showTip &&
             <div id='tooltip' 
        
             style={{
                ...({
                    maxWidth : maxwidthtip,
                    fontSize : fontsize , margin : tooltipMargin , color : textColor, padding : tooltipPadding,
                    backgroundColor : tooltipBgcolor , height : tooltipHeight ,width:tooltipWidth,
                    ...tooltipPos
                })
             }}  >
                {content}
            </div>
            }
   
    </div>
)
}

export default ToolTip