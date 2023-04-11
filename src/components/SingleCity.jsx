import Loading from "./Loading";
import Error from "./Error";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { BsFillStarFill } from "react-icons/bs";

const SingleCity = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      {props.loading && <Loading />}
      {props.error && <Error />}
      <Row>
        <Col xs={6}>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>
                {props.wd.name} ({props.wd.sys.country})
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Coordinates: Lat: {props.wd.coord.lat} - Lon: {props.wd.coord.lon}
              </Card.Subtitle>
              <Card.Text>
                <b>Weather:</b> {props.wd.weather[0].description}
                <img src={`https://openweathermap.org/img/wn/${props.wd.weather[0].icon}@2x.png`} alt="icon weather" />
                <br />
                <b>Temperature:</b> {Math.trunc(props.wd.main.temp - 273)}° <br />
                <b>Min:</b> {Math.trunc(props.wd.main.temp_min - 273)}° <br />
                <b>Max:</b> {Math.trunc(props.wd.main.temp_max - 273)}° <br />
                <b>Perceived temp:</b> {Math.trunc(props.wd.main.feels_like - 273)}° <br />
                <b>Cloudiness:</b> {props.wd.clouds.all}% <br />
                <b>Wind:</b> {props.wd.wind.speed} km/h - {props.wd.wind.deg}°<br />
                <b>Visibility:</b> {props.wd.visibility} m <br />
              </Card.Text>

              <Button
                className="mx-2"
                variant="success"
                onClick={() => {
                  dispatch({
                    type: "ADD_FAVOURITES",
                    payload: props.wd.name,
                  });
                }}
              >
                <BsFillStarFill /> Add favourites
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={6}>
          <iframe
            src={`https://maps.google.com/maps?q='${props.wd.coord.lat},'${props.wd.coord.lon}'&hl=es&z=14&amp;output=`}
          ></iframe>
        </Col>
      </Row>
    </>
  );
};

export default SingleCity;
