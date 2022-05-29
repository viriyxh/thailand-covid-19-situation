import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "../styles/App.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [dataByProvinces, setDataByProvinces] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.vryh.me/covid19/todayCases"
      );

      const data = response.data;

      setData(data);

      const getDataByProvinces = async () => {
        const response = await axios.get(
          "https://covid19.ddc.moph.go.th/api/Cases/today-cases-by-provinces"
        );

        const [data] = response.data;

        setDataByProvinces(data);
        setIsLoading(false);
      };

      getDataByProvinces();
    };

    getData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <Head>
          <title>COVID-19 Situation Report</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Thailand’s COVID-19 situation report"
          />
          <meta
            property="og:image"
            content="https://cdn.embify.com/assets/images/site_img.jpg"
          />
          <meta property="og:title" content="COVID-19 Situation Report" />
          <meta
            property="og:description"
            content="Thailand’s COVID-19 situation report"
          />
          <meta property="og:url" content="https://covid19.vryh.me" />
          <meta property="og:locale" content="th_TH" />
          <meta property="og:site_name" content="Viriyah" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner className={styles.textMain} animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Head>
          <title>COVID-19 Situation Report</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Thailand’s COVID-19 situation report"
          />
          <meta
            property="og:image"
            content="https://cdn.embify.com/assets/images/site_img.jpg"
          />
          <meta property="og:title" content="COVID-19 Situation Report" />
          <meta
            property="og:description"
            content="Thailand’s COVID-19 situation report"
          />
          <meta property="og:url" content="https://covid19.vryh.me" />
          <meta property="og:locale" content="th_TH" />
          <meta property="og:site_name" content="Viriyah" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jvectormap/2.0.4/jquery-jvectormap.css"
          />
        </Head>

        <div className={styles.wrapper}>
          <div className="py-5">
            <Container className="py-5">
              <Row sm={1}>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h1 className="text-center">
                        🇹🇭 COVID-19 Situation Report
                      </h1>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row sm={1} lg={3}>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-virus"></i> Today’s{" "}
                        <span className={styles.textPrimary}>Confirmed</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.new_case.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-house-user"></i> Today’s{" "}
                        <span className={styles.textSuccess}>Recovered</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.new_recovered.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-skull"></i> Today’s{" "}
                        <span className={styles.textDanger}>Deaths</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.new_death.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row sm={1} lg={3}>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-virus"></i> Total{" "}
                        <span className={styles.textPrimary}>Confirmed</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.total_case.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-house-user"></i> Total{" "}
                        <span className={styles.textSuccess}>Recovered</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.total_recovered.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        <i className="fas fa-skull"></i> Total{" "}
                        <span className={styles.textDanger}>Deaths</span>
                      </h5>
                      <div
                        id="totalConfirmed"
                        className={`${styles.title} pt-2`}
                      >
                        <span
                          className={`${styles.titleTypography} ${styles.textMain}`}
                        >
                          {data.total_death.toLocaleString("en-US")}
                        </span>
                        <span className={`${styles.subtitleTypography} ps-2`}>
                          Cases
                        </span>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row sm={1} md={2}>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>Today’s</h5>
                      <div>
                        <Doughnut
                          data={{
                            labels: ["Confirmed", "Recovered", "Deaths"],
                            datasets: [
                              {
                                label: "Today’s",
                                data: [
                                  data.new_case,
                                  data.new_recovered,
                                  data.new_death,
                                ],
                                backgroundColor: [
                                  "#46b4e6",
                                  "#0ae6a0",
                                  "#e65a6e",
                                ],
                              },
                            ],
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>Total</h5>
                      <div>
                        <Doughnut
                          data={{
                            labels: ["Confirmed", "Recovered", "Deaths"],
                            datasets: [
                              {
                                label: "Total",
                                data: [
                                  data.total_case,
                                  data.total_recovered,
                                  data.total_death,
                                ],
                                backgroundColor: [
                                  "#46b4e6",
                                  "#0ae6a0",
                                  "#e65a6e",
                                ],
                              },
                            ],
                          }}
                        />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              {/* <Row sm={1}>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>Map</h5>
                      <div>
                        <VectorMap map={thMill} />
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row> */}
              <Row>
                <Col className="my-3">
                  <Card className={`${styles.card} h-100`}>
                    <Card.Body>
                      <h5>
                        Last Updated:{" "}
                        <span id="updateTime" className={styles.textMain}>
                          {data.update_date}
                        </span>
                      </h5>
                      <h5>
                        Source:{" "}
                        <a
                          href="https://covid19.ddc.moph.go.th"
                          target="_blank"
                          rel="noreferrer"
                          className={styles.textMain}
                        >
                          https://covid19.ddc.moph.go.th
                        </a>
                      </h5>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className="py-4">
            <Container>
              <div className="text-center">
                <span>
                  Made with{" "}
                  <i className="fas fa-heart" style={{ color: "#e65a6e" }}></i>{" "}
                  in Bangkok.
                </span>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    );
  }
};

export default Home;
