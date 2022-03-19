import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
    const {id,title,photo,time} = props.user;
   
    const OldDate = new Date(time);
    const Today = OldDate.toLocaleTimeString()

    return (
        <div  className="col-md-4 HomePageStyle" >
            <div  className="row">
              <div className="col-md-4">
              <img className="image" src={photo} alt="" />
              </div>
              <div className="col-md-8">
             <h6 className="news-title"><Link style={{textDecoration:'none', color:'Black'}} to={"/"+id}>{title}</Link></h6>
              </div>
              <p>{Today}</p>
              
            </div>
        </div>
    );
};

export default HomePage;