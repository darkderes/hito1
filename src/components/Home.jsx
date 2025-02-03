import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" my-4 container">
        <div className="row">
          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjnx7Opml7a-KHhtQBJSOoxhBEhOuk4hOxWw&s"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomate", "aceitunas", "anchoas"]}
              img="https://media.istockphoto.com/id/1736646828/es/foto/pizza-margherita.jpg?s=612x612&w=0&k=20&c=IRRgFvgCveHav9t5MowrlzqUxTZ-CYCQQIDmqd8i1qE="
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Vegetariana"
              price={6950}
              ingredients={["mozzarella", "tomate", "pimientos", "cebolla"]}
              img="https://media.istockphoto.com/id/1441071364/es/foto/deliciosa-pizza-vegetariana-italiana.jpg?s=612x612&w=0&k=20&c=uZyl15iDmwSquk1f3IpoMN-ztvAf0CPSOHOUPV-K2aE="
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
