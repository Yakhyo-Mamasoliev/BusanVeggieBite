import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
<<<<<<< HEAD
import { Link, Route, Switch } from "react-router-dom";
import { HomePage } from "./screens/homePage/homePage";
import { ProductsPage } from "./screens/homePage/productsPage";
import { OrdersPage } from "./screens/homePage/ordersPage";
import { UserPage } from "./screens/homePage/userPage";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
          <li>
            <Link to="/products">ProductsPage</Link>
          </li>
          <li>
            <Link to="/orders">OrdersPage</Link>
          </li>
          <li>
            <Link to="/member-page">UserPage</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
=======
import { RippleBadge } from "./material/MaterialTheme/styled";

function App() {
  return (
    <Container sx={{ backgroundColor: "orange" }}>
      <Stack flexDirection={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create React App pn TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Contained</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
>>>>>>> 440f3de3166927e6cb6246afc3aa2e95e95d6264
  );
}

export default App;
