import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../../Data/data.json';

const NewsDetails = () => {
    const {id} = useParams();

    const fakeData = jsonData.find(pd => pd.id === id);
    const{title,photo,description}=fakeData;
    
    return (
        <div className="news row">
            <div className="col-md-5">
            <img  src={photo} alt="" />
            </div>
            <div className="col-md-7">
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
            
        </div>
    );
};

export default NewsDetails;