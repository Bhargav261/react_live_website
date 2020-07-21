import React from 'react';
import { NavLink } from 'react-router-dom';


const Card=(props)=>{
    return(
        <>
            <div className="col-md-4 col-10 max-auto zoom pt-4">
                <div class="card shadow">
                    <img src={props.img} class="card-img-top" alt="..." width="300px" height="220px" />
                    <div class="card-body">
                        <h5 class="card-title fs bd">{props.title}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="" class="btn btn-outline-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Card;