
import {
   Accordion,
   AccordionItem,
   AccordionItemHeading,
   AccordionItemButton,
   AccordionItemPanel,
   AccordionItemState
}from 'react-accessible-accordion' ;
import 'react-accessible-accordion/dist/fancy-example.css' ;

import {MdOutlineArrowDropDown}from 'react-icons/md' ;
import data from "../../utils/accordion"
import { useState } from 'react';
import "./Value.css" 


import "./Value.css"

export default function Value(){

    const [classname, setClassName] = useState(null) ;
    return (
      <section className="v-wrapper">
        <div className='paddings innerWidth flexCenter v-container'>

            {/* left version */}
            <div className='v-left'>
                <div className='image-container'>
                    <img src="./value.png" alt="" />
                </div>
            </div>


            {/* right side version */}

            <div className='flexColStart v-right'>
                 <span className='orangeText'>Our Value</span>
                 <span className='primaryText'>Value We Give to You</span>
                 <span className='secondaryText'>
                    We always ready to help by providing  the best services for you
                    <br/>
                    We beleive a god blace to live can make your life better
                 </span>
                 <Accordion
                   className='accordion'
                   allowMultipleExpanded={false}
                   preExpanded={[0]}
                 >
                    {
                         data.map((item,index)=>{
                            return(
                               <AccordionItem className={`accordionItem ${classname}`} key={index} uuid={index}>

                                 <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                       <AccordionItemState>
                                            {
                                             (({expanded}) =>{
                                                expanded? setClassName('expanded'): setClassName('collapsed') ;
                                             })
                                            }
                                       </AccordionItemState>
                                     

                                      <div className='flexCenter icon'> {item.icon} </div>
                                      <span className='primaryText'> {item.heading} </span>
                                        
                                        <div className='flexCenter icon'>
                                             <MdOutlineArrowDropDown size={20}/>
                                        </div>

                                    </AccordionItemButton>
                                 </AccordionItemHeading>

                                 <AccordionItemPanel>
                                    <p className='secondaryText'>{item.detail}</p>
                                 </AccordionItemPanel>

                               </AccordionItem>
                            )
                        })
                    }
                 </Accordion>

                
            </div>
        </div>

      </section>
    )
}