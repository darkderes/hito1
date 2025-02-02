import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import ListGroup from "react-bootstrap/ListGroup";

const CardPizza = (prop) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={prop.img} />
      <Card.Body>
        <Card.Title>Pizza {prop.name}</Card.Title>
      </Card.Body>
      <Card.Text>
        <ul>
          {prop.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <p>Precio: ${prop.price}</p>
      </Card.Text>
      {/* <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup> */}
      <Card.Body>
        <Button variant="primary">ewhere</Button>
        <Button variant="primary">ewhere</Button>
        {/* <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link> */}
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
