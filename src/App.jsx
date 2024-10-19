import React, { useEffect, useState } from "react";
import { arrayImage } from "./utils/Constants";

const App = () => {
  const [image, setImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setImage((prevImage) => (prevImage === arrayImage.length - 1 ? 0 : prevImage + 1));
    }, 2000);

    return () => clearInterval(intervalId); 
  }, []);

  const handleStateRight = ()=>{
    if(image===arrayImage.length-1){
      return
    }
    setImage(image+1)
  }
  const handleStateleft = ()=>{
    if(image===0){
      return
    }
    setImage(image-1)
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoL2MBmqoJ6B8_T909BOcr65mYUNUW-sHA_w&s"
        alt="image not found"
        onClick={handleStateleft}
        style={{ height: "150px", width: "150px", marginTop:"200px",marginLeft:"100px",marginRight:"100px"}}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{textAlign:"center"}}>image slider</h1>
        <img
          src={arrayImage[image]}
          alt="image not found"
          style={{ height: "400px", width: "500px" }}
        />
{/* acive dot code */}
<div style={{ display: "flex", marginTop: "20px",marginLeft:"200px" }}>
        {arrayImage.map((_, index) => (
          <div
            key={index}
            style={{
              height: "15px",
              width: "15px",
              borderRadius: "50%",
              backgroundColor: index === image ? "#000" : "#ccc", // Active dot is black, inactive dots are gray
              margin: "0 5px",
              transition: "background-color 0.3s ease"
            }}
          ></div>
        ))}
      </div>


      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoL2MBmqoJ6B8_T909BOcr65mYUNUW-sHA_w&s"
        alt="image not found"
        onClick={handleStateRight}
        style={{ height: "150px", width: "150px", marginTop:"200px",marginLeft:"100px", transform:"rotate(180deg)"}}
      />

      </div>
  );
};

export default App;
