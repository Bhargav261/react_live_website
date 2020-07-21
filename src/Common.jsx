import React from 'react';
import web from "../src/images/img1.jpg"
import { NavLink } from 'react-router-dom';

const Common=(props)=>{
    return(
        <>
            <section id="header" className="">                       
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row" >
                                <div className="col-md-6" style={{paddingTop:50,marginTop:120}}>
                                    <h1 className="fs-1" >{props.name} <br/> With <strong className="brand-name" >Bhargav Patel</strong></h1>
                                    <h2 className="pt-5 fs-2">we are the Team of talented developer Making Website</h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn btn-outline-primary" style={{borderRadius:25}}>{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 pt-5 ">
                                    <img src={web} height="100%;" width="100%" className="text-center shadow  animated" alt="Home Img"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Common;