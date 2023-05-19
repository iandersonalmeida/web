import React, { Component } from 'react';
import images from './images/images.js';



class PortfolioContent extends Component {

  
   
    render() {
        return (
            <div className="container">                
                <h1 className="m-4">Portfolio</h1> 

                <div className="row">

                    
                        <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/crud-jdbc" target="_blanck"> <img src={images.crudJdbc} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Basic CRUD with JDBC</p>                          
                        </div> 

                        <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/personal-data-storage-project" target="_blanck"> <img src={images.dataStorage} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Data capture and storage, using MVC architecture</p>                          
                        </div>   

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/Hotel-project" target="_blanck" > <img src={images.hotelApp} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Simple java program for managing hotel guests</p>                          
                        </div>   

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/form-spring" target="_blanck" > <img src={images.springForm} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Simple form with springboot.</p>                          
                        </div>   

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/spring-thymeleaf-crud" target="_blanck" > <img src={images.springThyme} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Application with springboot and thymeleaf</p>                          
                        </div>   

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/Ticket-Sales-System-Project/blob/main/Ticket%20Sales%20System%20Project.pdf"
                                 target="_blanck" > <img src={images.ticketSales} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Ticket Sales System Project</p>                          
                        </div>    

                          <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/REST-services-with-Spring"
                                 target="_blanck" > <img src={images.restApiSpring} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">REST services with Spring</p>                          
                        </div> 

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/phoenix-app-repo.git"
                                 target="_blanck" > <img src={images.phoenixApp} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Phoenix Web Application</p>                          
                        </div> 

                         <div className="card m-4 border border-dark" style={{'width':'12%'}}>                            
                                <a href="https://github.com/iandersonalmeida/Almeida-Library-Web-Application-Project.git"
                                 target="_blanck" > <img src={images.microservice} alt="pic" className="card-img-top"></img> </a>
                                <p class="card-text">Digital Book Purchase Project</p>                          
                        </div>                    
                     
                </div>                  

            </div>
        );
    }
}

export default PortfolioContent;