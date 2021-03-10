import React from 'react'
import { NavLink } from 'react-router-dom';
import bmg from '../src/images/Momo.JPG'

const Common = (props) => {
    return (
       <>
    <section id="header" className="d-flex align-items-center">
    
       
     <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
               <div className="row">
               <div className="col-md-6 pb-4 pt-4 pt-0-lg oredr-2 order-lg-1">
                  <div >
                   {props.name} <br/> 
                   
                  </div>
                 <h1> <strong className="brand-name"> Mohtasham</strong></h1>
                  <h4 >
                     Traveler |Film Maker
                  </h4>
                  <div className="mt-3">
                     <NavLink to={props.visit} className="btn btn-outline-warning">{props.btname}</NavLink>
                  </div>
                  
               </div>
               <div id="imgpad" className="col-lg-6 order-1 order-lg-2 header-img" >

                  <div className="container">
                  <img src={props.imgsrc} className="img-fluid" id="profileimg"  className="www"/>
                  <div class="overlay">
                  <div id="text">{props.transp}</div>
                  </div>
                  </div>
               </div>
               </div>
            </div>
        </div>
     </div>
     <div id="homeone"></div>
    
     </section>

       </>
    )
}

export default Common;  
