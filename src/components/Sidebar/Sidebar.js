import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { Avatar } from "@material-ui/core";
import SidebarOption from "../SideBarOption/SidebarOption";
import db from "../../database/firebase";
import { useStateValue } from "../../StateProvider";

import "./Sidebar.css";

function Sidebar() {
  const [channels, setChannels] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  const [isHidden, setIsHidden] = useState(true);
  let history = useHistory();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  useEffect(() => {
    document.title = `Chat App | ${user?.displayName}`;
  }, [user.displayName]);

  const signOut = () => {
    if (window.confirm("Do you want to sign out?")) {
      dispatch({
        //type: actionTypes.SET_USER,
        type: "LOG_OUT_USER",
        user: null,
      });
      history.push("/");
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <h3>
          <span role="img" aria-label="app emoji">
            👋
          </span>{" "}
          Chat App
        </h3>
      </div>
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h3>{user?.displayName}</h3>
        </div>
        <div className="sidebar__avatar">
          <Avatar
            alt={user?.displayName}
            src={user?.photoURL}
            onClick={() => setIsHidden(!isHidden)}
          />
          <div hidden={isHidden} className="sidebar__signOut">
            <p onClick={signOut}>sign out</p>
          </div>
        </div>
      </div>
      <SidebarOption Icon={AddIcon} title="Add Channel" addChannelOption />
      <hr />
      {channels.map((channel, i) => (
        <SidebarOption key={i} title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
