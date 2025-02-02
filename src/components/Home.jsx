import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
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
              img="https://img-global.cpcdn.com/recipes/c8a84ffca7fcb1ab/1360x1928cq70/pizza-espanola-foto-principal.webp"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomate", "aceitunas", "anchoas"]}
              img="https://www.recetasdeescandalo.com/wp-content/uploads/2018/10/pizza-napolitana-casera.jpg"
            />
          </div>
          <div className="col-md-4">
            <CardPizza
              name="Vegetariana"
              price={6950}
              ingredients={["mozzarella", "tomate", "pimientos", "cebolla"]}
              img="https://www.recetasveganas.net/wp-content/uploads/2019/01/pizza-vegetariana-1.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
