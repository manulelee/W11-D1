import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SingleCity from "./SingleCity";
import Error from "./Error";
import Loading from "./Loading";
import { BsSearch } from "react-icons/bs";

const Home = () => {
  const [query, setQuery] = useState("");
  const [geolocationData, setGeolocationData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [weather, setWeather] = useState([]);

  const findCity = async () => {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=1&appid=1e52898d5c56f1e5fb8826eebf923705`
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(geolocationData);
        setGeolocationData(data);
      } else {
        console.log("error while searching geolocation");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const findWeather = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geolocationData[0].lat}&lon=${geolocationData[0].lon}&appid=1e52898d5c56f1e5fb8826eebf923705`
      );
      console.log(response);
      if (response.ok) {
        let weatherData = await response.json();
        console.log(weatherData);
        setIsLoading(false);
        setIsError(false);
        setWeather(weatherData);
      } else {
        console.log("error while searching weather");
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    console.log("ComponentDidUpdate (useEffect)");
    findWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [geolocationData]);

  return (
    <Container>
      <Row>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            findCity();
          }}
        >
          <InputGroup className="my-3 mt-5">
            <Form.Control
              placeholder="Search location"
              aria-label="Search location"
              aria-describedby="basic-addon2"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
            <Button variant="outline-primary" type="submit">
              <BsSearch />
            </Button>
          </InputGroup>
        </Form>
      </Row>

      <Row>
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <Error />
        ) : (
          <SingleCity wd={weather} error={isError} loading={isLoading}></SingleCity>
        )}
      </Row>
    </Container>
  );
};

export default Home;
