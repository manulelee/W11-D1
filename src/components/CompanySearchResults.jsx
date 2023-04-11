import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getCompanyJobs } from "../redux/actions";
import { useDispatch } from "react-redux";

const CompanySearchResults = () => {
  const jobs = useSelector((state) => state.jobs.jobs.content);
  const dispatch = useDispatch();
  const params = useParams();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    dispatch(getCompanyJobs(baseEndpoint, params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Link to="/" className="m-2 btn btn-success">
            HOME
          </Link>
          <Link to="/favourites" className="mx-2 btn btn-success">
            FAVOURITES
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
