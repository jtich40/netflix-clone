import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

export default function Home() {
    // useMemo is used to prevent the MONTHS array from being re-created every time the component re-renders
    const MONTHS = useMemo(
      () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
      ], []
    )
  
    const [userStats, setUserStats] = useState([])
  
    useEffect(() => {
      const getStats = async () => {
        try {
          const res = await axios.get("/users/stats", { 
            headers: { 
              token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVlODc0NjJmZDM0ZjMzYjU3ZGEzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjQ5NjM4OCwiZXhwIjoxNjkyOTI4Mzg4fQ.mnlAlaLHVJeBTCcDiznJMKm86Z5lkZFQtEz16QaJI4I"
            }
          })
          // sort the data by month
          const statsList = res.data.sort(function (a, b) {
            return a._id - b._id
          })
          // map through the sorted data and create a new array of objects with the month name and total number of users
          statsList.map(item => 
            setUserStats(prev => [
              ...prev, 
              { name: MONTHS[item._id - 1], "New User": item.total }
            ])
          )
        } catch (err) {
        console.log(err)
        }
      }
      getStats()
    }, [MONTHS])
  
    console.log(userStats)
  
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
