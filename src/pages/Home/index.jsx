import React from "react";
import { Api } from "../../consumoApi/consumoApi";
import ListaPosts from "./ListaPosts";

const Home = () => {
  const { data } = Api();

  console.log(data);
  return (
    <div>
      <ListaPosts blog={data} />

    </div>
  );
};

export default Home;