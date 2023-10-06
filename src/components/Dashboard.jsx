import React from "react";
import Card from "./Card";

// import {
//   BsFillArchiveFill,
//   BsFillGrid3X3GapFill,
//   BsFillBellFill,
//   BsPeopleFill,
// } from "react-icons/bs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useState } from "react";

function Dashboard() {
  const cardData = [
    {
      title: "EARNINGS (MONTHLY)",
      price: "$40,000",
      theme: "primary",
    },
    {
      title: "EARNINGS (ANNUAL)",
      price: "$215,000",
      theme: "success",
    },
    {
      title: "TASKS",
      price: "50%",
      theme: "info",
    },
    {
      title: "PENDING REQUESTS",
      price: "18",
      theme: "warning",
    },
  ];
  const chartData = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  // return (
  //   <div className="container-fluid">
  //     <div className="d-sm-flex align-items-center justify-content-between mb-4">
  //       <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
  //       <a
  //         href="#"
  //         className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
  //       >
  //         <i className="fas fa-download fa-sm text-white-50"></i> Generate
  //         Report
  //       </a>
  //     </div>
  //     <div className="row">
  //       {data.map((datas) => {
  //         return <Card datas={datas}></Card>;
  //       })}
  //     </div>

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>

      <div className="row">
        {cardData.map((datas) => {
          return <Card datas={datas} key={datas.title} />;
        })}
      </div>

      <div className="row charts">
        <div className="col-md-6">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="col-md-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
