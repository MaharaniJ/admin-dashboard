import React from "react";
import Card from "./Card";
import "../App.css";

function Dashboard() {
  const cardDatas = [
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
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        {cardDatas.map((data, i) => {
          return <Card datas={data} key={i}></Card>;
        })}
      </div>
    </div>
  );
}

export default Dashboard;
