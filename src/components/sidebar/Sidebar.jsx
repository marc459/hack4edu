import "./sidebar.css";
// import {
//   RssFeed,
//   Chat,
//   PlayCircleFilledOutlined,
//   Group,
//   Bookmark,
//   HelpOutline,
//   WorkOutline,
//   Event,
//   School,
// } from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
          <span className="sidebarListItemText">For You</span><br/>
          </li>
          <li className="sidebarListItem">
            <span className="sidebarListItemText">Categories</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}
