import { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { fetchJobs } from "../redux/actions";
import { useDispatch } from "react-redux";

const MainSearch = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const jobs = useSelector((state) => state.jobs.jobs.content);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchJobs(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/favourites" className="m-2 btn btn-success w-100">
            FAVOURITES
          </Link>
        </Col>
      </Row>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
