import React from "react";
import { Drawer, Typography } from "@mui/material";
import "./DrawerItem.css";
import { Link } from "react-router-dom";

const DrawerItem = ({ isDrawerOpen, setDrawerOpen }) => {
  return (
    <>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <div className="links">
          <Typography align="left" sx={{ p: 2 }}>
            <Link onClick={() => setDrawerOpen(false)} className="link" to="/">
              Home
            </Link>
          </Typography>
          <Typography align="left" sx={{p:2}}>
            <Link onClick={() => setDrawerOpen(false)} className="link" to="/todo">
              To-do list
            </Link>
          </Typography>
        </div>
      </Drawer>
    </>
  );
};

export default DrawerItem;
