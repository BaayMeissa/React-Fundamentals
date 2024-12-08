import Name from "./components/name";
import Price from "./components/price";
import Description from "./components/description";
import Image from "./components/image";
import product from "./product";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Button } from "react-bootstrap"

const firstname = "BaayMeissa";


function App() {
  return (
    <div>
    <Card style={{ width: "18rem" }}>
      <Image image={product.imageUrl} />
      <Card.Body>
        <Card.Title>
          <Name name={product.name} />
        </Card.Title>
        <Card.Text>
          <Description description={product.description} />
          <Price price={product.price +" $"} />
        </Card.Text>
        <Button variant="primary">Acheter</Button>
      </Card.Body>
    </Card>

    <div>
      <h3 style={{paddingTop:'40px'}}>Hello {firstname?firstname:"There"}</h3>
    </div>

    {firstname && <img style={{width:"200px"}} src="https://freesvgs.com/wp-content/uploads/2021/06/Pikachu-SVG-File-Free.png"/>}
    </div>


  );
}

export default App;