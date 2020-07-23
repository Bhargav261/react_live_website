import React, { useState } from 'react';

const Contact=()=>{

    const [data,setData]=useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });

    const InputEvent = (event) =>{
        const {name,value}=event.target;
        setData((preval)=>{
            return{
                ...preval,
                [name] : value,
            };
        });
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert (`My Name is : ${data.fullname} My Phone Number : ${data.phone} My Email : ${data.email} My Message : ${data.msg}`);
    }

    return(
        <>
            <div classNam="my-5">
                <h1 className="text-center">Contact US</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="" className="form-label">Full Name</label>
                                <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} className="form-control" placeholder="Enter Your Name" required />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Phone</label>
                                <input type="number" name="phone" value={data.phone} onChange={InputEvent} className="form-control" placeholder="Enter Mobile Number" required />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Email</label>
                                <input type="email" name="email" value={data.email} onChange={InputEvent} className="form-control" placeholder="Enter Email" required />
                            </div>
                            <div className="mb-3">
                                <label for="" className="form-label">Message</label>
                                <textarea name="msg" value={data.msg} onChange={InputEvent}  className="form-control" rows="3" placeholder="Enter Message" required></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit"> 
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Contact;