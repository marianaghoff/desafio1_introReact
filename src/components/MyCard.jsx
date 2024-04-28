import Card from "react-bootstrap/Card";
import Tags from "./Tags";

function MyCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.imagen} className="img-general" />
      <Card.Body>
        <Card.Title className="title-general">{props.nombre}</Card.Title>
        <Card.Text className="descrip-general">{props.descrip}</Card.Text>
        <Tags color={props.color} raza={props.raza}></Tags>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
