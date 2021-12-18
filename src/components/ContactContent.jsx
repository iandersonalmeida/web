import React, { Component } from 'react';

class ContactContent extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="m-4">Contact</h1>
                <div className="d-flex justify-content-center">
                    <form>

                        <div className="mb-3" style={{width:"150%"}}>
                            <label for="exampleFormControlInput1" className="form-label  fw-bold">Name</label>
                             <input type="name" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                        </div>

                        <div className="mb-3" style={{width:"150%"}}>
                            <label for="exampleFormControlInput1" className="form-label  fw-bold">Email address</label>
                             <input type="email" className="form-control" id="exampleFormControlInput1" placeholder=""/>
                        </div>

                        <div className="mb-3" style={{width:"150%"}}>
                            <label for="exampleFormControlTextarea1" className="form-label fw-bold">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                        </div>
                        <button type="button" class="btn btn-light">Send</button>
                    </form>
                   
                </div> 
              
            </div>
        );
    }
}

export default ContactContent;