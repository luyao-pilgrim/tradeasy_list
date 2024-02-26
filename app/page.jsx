import React from "react";
import ProductList from "./components/ProductList";
import data from "./resources/data";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Product sheet
          </Typography>
        </Toolbar>
      </AppBar>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 mt-10">
        <div>
          <ProductList products={data} />
        </div>
      </main>
    </>
  );
};

export default Home;
