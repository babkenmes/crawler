import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PeopleIcon from '@material-ui/icons/People';
import SettingsIcon from '@material-ui/icons/Settings';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import MailIcon from '@material-ui/icons/Mail';
import { Link as RouterLink } from 'react-router-dom';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { useLocation } from "react-router-dom";

export default function LeftMenu({ classes, theme, open, setOpen }) {

  const location = useLocation();
  const [route, setroute] = useState("");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setroute(location.pathname.replace("/app/", "").toLowerCase())
  }, [location]);
  console.log(route)
  return (

    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List className={classes.sidebar}>
        <ListItem selected={route == ""} button key="Dashboard" to={`/app/`} component={RouterLink}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem selected={route == "keywords"} button key="Keywords" to={`/app/keywords`} component={RouterLink}>
          <ListItemIcon><VpnKeyIcon /></ListItemIcon>
          <ListItemText primary="Keywords" />
        </ListItem>
        <ListItem selected={route == "devices"} button key="Devices" to={`/app/Devices`} component={RouterLink}>
          <ListItemIcon><DevicesOtherIcon /></ListItemIcon>
          <ListItemText primary="Devices" />
        </ListItem>
        <ListItem selected={route == "animations"} button key="Animations" to={`/app/Animations`} component={RouterLink}>
          <ListItemIcon><DirectionsRunIcon /></ListItemIcon>
          <ListItemText primary="Animations" />
        </ListItem>
        <ListItem selected={route == "groups"} button key="Groups" to={`/app/Groups`} component={RouterLink}>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItem>
        <Divider />
        <ListItem selected={route == "containers"} button key="Containers" to={`/app/Containers`} component={RouterLink}>
          <ListItemIcon><VpnKeyIcon /></ListItemIcon>
          <ListItemText primary="Containers" />
        </ListItem>
      </List>
      <Divider />
      <Divider />
    </Drawer>
  );
}