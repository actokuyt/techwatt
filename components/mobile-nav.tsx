"use client"

import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { MenuOutlined } from "@mui/icons-material";
import { Dancing_Script } from "next/font/google";

const ds = Dancing_Script({ subsets: ["latin"] });

export default function MobileNav() {
    const [state, setState] = React.useState({
        top: false,
      });
    
      const toggleDrawer =
        (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event &&
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
              (event as React.KeyboardEvent).key === "Shift")
          ) {
            return;
          }
    
          setState({ ...state, top: open });
        };
    
      const list = () => (
        <Box
          sx={{ bgcolor: "#374151" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List className="grid grid-cols-1 gap-4 p-4 text-white w-full">
            <Link href={"/projects"} className="block border-b-2">
              Projects
            </Link>
            <Link href={"/blog"} className="block border-b-2">
              Blog
            </Link>
            <Link href={"/portfolio"} className="block border-b-2">
              Meet Felix
            </Link>
          </List>
          <div className="w-full flex justify-center my-2">
            <Link
              href={"/get-in-touch"}
              className="bg-blue-300 p-4 text-black rounded-lg text-center"
            >
              Book A Service
            </Link>
          </div>
        </Box>
      );
  return (
    <div className="fixed bg-gray-700 top-0 left-0 right-0 w-full flex p-4 z-50 drop-shadow-lg items-center md:hidden z-100">
      <div>
        <Link href={"/"}>
          <h1 className= {`text-2xl text-white font-semibold basis-2/3 ${ds.className}`}>
            TechWatt.ai
          </h1>
        </Link>
      </div>
      <div className="absolute top-4 right-2 text-white">
        <div>
          <Button
            onClick={toggleDrawer(true)}
            sx={{ color: "white" }}
            className=""
          >
            {<MenuOutlined />}
          </Button>
          <SwipeableDrawer
            anchor={"top"}
            open={state.top}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}
          >
            {list()}
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
