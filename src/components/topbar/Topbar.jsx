import "./topbar.css";
// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { BsChatRightText } from "react-icons/bs";




export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Aule</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          {/* <Search className="searchIcon" /> */}
          <input
            placeholder="Search"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            {/* <Chat /> */}
            <BsChatRightText></BsChatRightText>
            <span className="topbarIconBadge">2</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
