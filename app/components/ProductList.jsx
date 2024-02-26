import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";

const ProductList = ({ products }) => {
  if (!Array.isArray(products)) {
    return null;
  }
  return (
    <Grid container spacing={1}>
      {products.map((product, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <ProductCard {...product}></ProductCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
