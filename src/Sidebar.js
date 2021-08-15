import { Button, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontsize="large" />}
        className="sidebar_compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        Number="51"
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" Number="54" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" Number="60" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" Number="74" />
      <SidebarOption Icon={NearMeIcon} title="Sent" Number="108" />
      <SidebarOption Icon={NoteIcon} title="Drafts" Number="5" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" Number="354" />

      <div className="sidebar_footer">
        <div className="sidebar_footerIcon">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
