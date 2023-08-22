import React, { useState, useEffect } from "react";
import axios from "axios";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", { 
          headers: { 
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGVlODc0NjJmZDM0ZjMzYjU3ZGEzNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MjQ5NjM4OCwiZXhwIjoxNjkyOTI4Mzg4fQ.mnlAlaLHVJeBTCcDiznJMKm86Z5lkZFQtEz16QaJI4I"
          }
        })
        setNewUsers(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map(user => (
        <li className="widgetSmListItem">
          <img
            src={user.profilePic || "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        ))}
      </ul>
    </div>
  );
}
