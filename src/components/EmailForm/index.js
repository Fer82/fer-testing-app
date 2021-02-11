import React from "react";
import "./style.css";

function EmailForm() {
    return (
        <div className="col-md-7">
            <div className="card bg-light shadow">
                <div className="card-body">
                    <h1 className="card-title" title="Contact"><span id="contact">Contact </span><strong><span id="me">Me</span></strong></h1>
                    <hr></hr>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                        </div>

                        <div className="form-group">
                            <label for="exampleInputPassword1">Email</label>
                            <input type="email" className="form-control" id="exampleInputPassword1"></input>
                        </div>

                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary shadow" title="Submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EmailForm;