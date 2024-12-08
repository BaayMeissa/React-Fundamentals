import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
const Joueur = (props)=>{
    return <Card style={{ width: '18rem', marginLeft:"10px"}}>
        <Card.Img style={{ width: '100%', height: '150px' }} src={props.imageUrl}/>
        <Card.Body>
        <Card.Title style={{fontSize:"25px"}}>{props.nom} - {props.numeroMaillot}</Card.Title>
            <Card.Text>
            <h6>Team: {props.equipe}</h6>
            <h6>Nationality: {props.nationalite}</h6>
            <h6>Age: {props.age}</h6>
            </Card.Text>
            <Button>More details {">"}</Button>
        </Card.Body>
    </Card>
}

export default Joueur;