
import React, { useState, useEffect } from "react";


export default function CountDown (){

  
    
      const [time, setTime] = useState("");
      useEffect(() => {
        let countDownDate = new Date("May 27, 2023 07:30:00").getTime();
        let x = setInterval(() => {
          let now = new Date().getTime();
    
          let distance = countDownDate - now;
    
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
          setTime(" Quedan " + days + " dias " + hours + " horas " + minutes + " minutos " + seconds + " segundos para el aniversario ");
    
          if (distance < 0) {
            clearInterval(x);
            setTime("COUNTDOWN FINISHED");
          }
        }, 1000);
      }, []);
      return (
        <div className="countdown">
          <h2>{time}</h2>
        </div>
      );
    };
    
