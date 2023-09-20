import React from 'react';
import { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Component } from 'react'
import axios from "axios";



 

    export default function BarChart() {
      const url = "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relativehumidity_2m,windspeed_10m";
      const [data, setData] = useState([]);
      const [chartData, setChartData] = useState([]);
      const fetchInfo = () => {
        return axios.get(url).then((res) => setData(res.data));
      };
    
      useEffect(() => {
        fetchInfo();
      }, []);





    

    
   
    setChartData( {
      labels: JSON.stringify(data['hourly']['time']), 
      datasets: [
        {
          label: "Users Gained ",
          data: JSON.stringify(data['hourly']['temperature_2m']),
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })


    return(<div>
     
   hi
    </div>


    );




  }
