import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <div className="container">
              <h1 className="m-4">About me</h1> 
                <div className="d-flex justify-content-center">
               
                <p>
                     As a developer, I am continually interested and motivated <br/>
                     to learn about new technologies,improve skills <br/>
                     and develop applications always, aiming at efficient work.<br/>
                     
                     <br/>
                     The applications are based on the Spring framework,<br/>
                     using Hibernate for data persistence in a relational database, <br/>
                     React for user interface development in a Node development environment and the REST architecture.<br/>
                     These applications and others can be found in my portfolio. <br/>

                     <br/>
                     Each new challenge becomes a possibility for new experiences and growth!                
                </p>              
                </div>
            </div>
        );
    }
}

export default AboutContent;