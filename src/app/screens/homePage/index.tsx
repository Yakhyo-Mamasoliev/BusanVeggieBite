import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisiement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  // Selector: Store => Data
  useEffect(() => {
    // BackEnd server data request => DATA
    //slice: Data => Store
  }, []);
  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisiement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
