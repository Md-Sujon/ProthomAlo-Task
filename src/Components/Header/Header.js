import React, { useState } from "react";
import JsonData from "../../Data/data.json";
import topAddImage from "../../image/1.gif";
const Header = () => {
    const firstNineNews = JsonData.slice(4, 5);
  const [data, setData] = useState(firstNineNews);

  const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(data)
    return (
        <div className="container">
           {data.map((news) =><div className="row header">
           <div className="col-md-3">
               <h5>{news.title}</h5>
           </div>
           <div className="col-md-3">
             <img src={news.photo} alt="" />
           </div>
           <div className="col-md-3">
               <h5>{news.title}</h5>
           </div>
           <div className="col-md-3">
             <img src={topAddImage} alt="" />
           </div>
           </div>)}
           
        </div>
    );
};

export default Header;