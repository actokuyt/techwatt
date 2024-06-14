"use client";

import Link from "next/link";
import * as React from "react";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import List from "@mui/material/List";

import { MenuOutlined } from "@mui/icons-material";
import { Dancing_Script } from "next/font/google";

const ds = Dancing_Script({ subsets: ["latin"] });

type MobileNav = {
  content: React.ReactNode;
};

export default function MobileNav() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(!state);
    };

  return (
    <div className="fixed bg-gray-700 top-0 left-0 right-0 w-full flex p-4 z-50 drop-shadow-lg items-center md:hidden z-200">
      <div>
        <Link href={"/"}>
          <h1
            className={`text-2xl text-white font-semibold basis-2/3 ${ds.className}`}
          >
            TechWatt.ai
          </h1>
        </Link>
      </div>
      <div className="absolute right-2 text-white flex items-center">
        <div>
          <Button onClick={toggleDrawer()} sx={{ color: "white" }} className="">
            {<MenuOutlined />}
          </Button>
          <SwipeableDrawer
            anchor="top"
            open={state}
            onClose={toggleDrawer()}
            onOpen={toggleDrawer()}
          >
            <Box sx={{ bgcolor: "#374151" }} role="presentation">
              <List className="grid grid-cols-1 gap-4 p-4 text-white w-full">
                <Link
                  onClick={toggleDrawer()}
                  href={"/projects"}
                  className="block border-b-2"
                >
                  Projects
                </Link>
                <Link
                  onClick={toggleDrawer()}
                  href={"/blog"}
                  className="block border-b-2"
                >
                  Blog
                </Link>
                <Link
                  onClick={toggleDrawer()}
                  href={"/portfolio"}
                  className="block border-b-2"
                >
                  Meet Felix
                </Link>
              </List>
              <div className="w-full flex justify-center my-2">
                <Link
                  onClick={toggleDrawer()}
                  href={"/get-in-touch"}
                  className="bg-blue-300 p-4 text-black rounded-lg text-center"
                >
                  Book A Service
                </Link>
              </div>
            </Box>
          </SwipeableDrawer>
        </div>
      </div>
    </div>
  );
}
