'use client'

import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
} from "@mui/material";
import { useRouter } from 'next/navigation'

const ProductCard = ({
  weight,
  country,
  brand,
  product,
  price,
  unit,
  currency,
}) => {
  const router = useRouter()

  return (
    <Card
      sx={{
        width: "100%",
        flexBasis: "50%",
        margin: "5px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardActionArea >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Brand: {brand}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Country: {country}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price+currency}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight: {weight}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => router.push(`/detail/${product.replace(/\s+/g, "")}`)}>
          Detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
