import React, { useState } from "react";
import JsonData from "../../Data/data.json";
import HomePage from "../HomePage/HomePage";

const MainPage = () => {
  const firstNineNews = JsonData.slice(0, 9);
  const [data, setData] = useState(firstNineNews);

  const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
shuffle(data)

  return (
    <div className="row mainPageStyle">
      {data.map((user) => (<HomePage 
      key={user.id}
      
      user={user}/>
      ))}
    </div>
  );
};

export default MainPage;
