
import React, { useEffect, useState } from "react";

export default function Digital (){


      const [time, setTime] = useState();
    
      useEffect(() => {
        setInterval(() => {
          const date = new Date();
          setTime(date.toLocaleTimeString());
        }, 1000);
      }, []);
      return (
        <div className="digital-clock">
          <h2>{time}</h2>
        </div>
      );
    };
    
