import React, {useState }  from 'react';
import JsonData from "../../Data/data.json";
import MainPage from '../MainPage/MainPage';

const HomeMainPage = () => {
  const firstFiveNews = JsonData.slice(0, 3);
    const [data, setData] = useState(firstFiveNews);
    console.log(data);

    const shuffle = a => {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
  }
  shuffle(data)


    return (
        <div className="main-container app">
        
        <div className="full-container">
        <MainPage/>
        </div>
  
        <div className="side-container">
           {data.map((datas) =>(  
           <div className="row sideBar" key={datas.id}>
             
             <div className="col-md-3">
             <img className="sideImage" src={datas.photo} alt="" />
             </div>
             <div className="col-md-8">
             <h6>{datas.title}</h6>
             </div>
             </div> 
           )
           )}
        </div>
      </div>
      //--------
    );
};

export default HomeMainPage;