import React, { useRef } from "react";
import Chart from "react-apexcharts";
import {Link} from "react-router-dom";
const Result = () => {
  const res = localStorage.getItem("resData");
  const data = JSON.parse(res);
  console.log(data);
  //data is an array of objects- {category: 1,2,3,4, class:"", name: ""}
  const freq = new Map([
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
  ]);
  data.forEach((element) => {
    freq.set(element.category, freq.get(element.category) + 1);
  });
  let mycategories = [
    "Planner",
    "People Person",
    "Problem Solver",
    "Pathfinder",
  ];
  let options = {
    chart: {
      type: "bar",
      foreColor: "#FFFFFF",
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        colorStops: [
          {
            offset: 0,
            color: "#EB656F",
            opacity: 1,
          },
          {
            offset: 20,
            color: "#FAD375",
            opacity: 1,
          },
        ],
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "20px",
        fontFamily: "Helvetica",
        fontWeight: "bold"
      }
    },
    grid: {
      borderColor: "#6D6D6D",
    },
    xaxis: {
      categories: mycategories,
      labels: {
        style: {
            fontSize: '14px',
            fontFamily: 'Helvetica'
        }
      }
    },
    yaxis: {
      categories: mycategories,
      labels: {
        style: {
            fontSize: '12px',
            fontFamily: 'Helvetica',
        }
      }
    },
  };
  let mydata = Array.from(freq.values());
  let maxCategory = null;
  let maxFrequency = -1;

  freq.forEach((value, key) => {
    if (value > maxFrequency) {
      maxFrequency = value;
      maxCategory = key;
    }
  });
  let series = [
    {
      name: "result",
      data: mydata,
    },
  ];
  return (
    <>
      <h2 className="text-5xl font-extrabold text-center text-red-500">
        You are a {mycategories[maxCategory - 1]}!
      </h2>
      <br />
      <div className="text-black p-2 backdrop-blur-sm flex flex-col items-center border-2 border-yellow-400 border-dashed ring-0 rounded-xl lg:w-[80%] w-[95%] lg:h-[50vh] h-[45vh] mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-yellow-400">
          Result
        </h1>
        <div className="container w-full h-full" style={{
          fontSize: "2rem !important"
        }}>
          <Chart type="bar" options={options} height={"100%"} series={series}></Chart>
        </div>
        {/* <Chart type="donut" options={options} series={series}></Chart> */}
      </div>{" "}
      <br />
      <Link className="text-xl block mx-auto text-center font-bold btn-di max-w-40 text-red-600 underline" to={`/about`}>Know More!</Link>
    </>
  );
};

export default Result;
