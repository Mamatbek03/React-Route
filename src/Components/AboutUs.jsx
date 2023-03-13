import React from "react";
import { Button, Card, CardGroup } from "react-bootstrap";

const AboutUs = () => {
  return (
    <div className="d-flex flex-derection-row flex-wrap">
      <div
        className="w-25 h-50 mx-4 my-3 rounded-4 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ backgroundColor: "#9de2ff" }}
      >
        <Card.Body className="p-4">
          <div className="d-flex text-black">
            <div className="flex-shrink-0">
              <Card.Img
                style={{
                  marginLeft: "-19px",
                  width: "130px",
                  borderRadius: "10px",
                }}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image"
                fluid
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Card.Title>Danny McLoan</Card.Title>
              <Card.Text>Senior Journalist</Card.Text>

              <div
                className="d-flex justify-content-start rounded-3 p-2 mb-2"
                style={{ backgroundColor: "#efefef" }}
              >
                <div>
                  <p className="small text-muted mb-1">Articles</p>
                  <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                  <p className="small text-muted mb-1">Followers</p>
                  <p className="mb-0">976</p>
                </div>
                <div>
                  <p className="small text-muted mb-1">Rating</p>
                  <p className="mb-0">8.5</p>
                </div>
              </div>
              <div className="d-flex pt-1">
                <Button outline className="me-1 flex-grow-1">
                  Chat
                </Button>
                <Button className="flex-grow-1">Follow</Button>
              </div>
            </div>
          </div>
        </Card.Body>
      </div>
      <div
        className="w-25 h-50 mx-4 my-3 rounded-4 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ backgroundColor: "#9de2ff" }}
      >
        {/* <Card> */}
        {/* <Card className="justify-content-center"> */}
        {/* <Card md="9" lg="7" xl="5" className="mt-5"> */}
        {/* <Card style={{ borderRadius: "15px" }}> */}
        <Card.Body className="p-4">
          <div className="d-flex text-black">
            <div className="flex-shrink-0">
              <Card.Img
                style={{
                  marginLeft: "-19px",
                  width: "130px",
                  borderRadius: "10px",
                }}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image"
                fluid
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Card.Title>Danny McLoan</Card.Title>
              <Card.Text>Senior Journalist</Card.Text>

              <div
                className="d-flex justify-content-start rounded-3 p-2 mb-2"
                style={{ backgroundColor: "#efefef" }}
              >
                <div>
                  <p className="small text-muted mb-1">Articles</p>
                  <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                  <p className="small text-muted mb-1">Followers</p>
                  <p className="mb-0">976</p>
                </div>
                <div>
                  <p className="small text-muted mb-1">Rating</p>
                  <p className="mb-0">8.5</p>
                </div>
              </div>
              <div className="d-flex pt-1">
                <Button outline className="me-1 flex-grow-1">
                  Chat
                </Button>
                <Button className="flex-grow-1">Follow</Button>
              </div>
            </div>
          </div>
        </Card.Body>
        {/* </Card> */}
        {/* </Card> */}
        {/* </Card> */}
        {/* </Card> */}
      </div>
      <div
        className="w-25 h-50 mx-4 my-3 rounded-4 shadow-lg p-3 mb-5 bg-body rounded"
        style={{ backgroundColor: "#9de2ff" }}
      >
        {/* <Card> */}
        {/* <Card className="justify-content-center"> */}
        {/* <Card md="9" lg="7" xl="5" className="mt-5"> */}
        {/* <Card style={{ borderRadius: "15px" }}> */}
        <Card.Body className="p-4">
          <div className="d-flex text-black">
            <div className="flex-shrink-0">
              <Card.Img
                style={{
                  marginLeft: "-19px",
                  width: "130px",
                  borderRadius: "10px",
                }}
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image"
                fluid
              />
            </div>
            <div className="flex-grow-1 ms-3">
              <Card.Title>Danny McLoan</Card.Title>
              <Card.Text>Senior Journalist</Card.Text>

              <div
                className="d-flex justify-content-start rounded-3 p-2 mb-2"
                style={{ backgroundColor: "#efefef" }}
              >
                <div>
                  <p className="small text-muted mb-1">Articles</p>
                  <p className="mb-0">41</p>
                </div>
                <div className="px-3">
                  <p className="small text-muted mb-1">Followers</p>
                  <p className="mb-0">976</p>
                </div>
                <div>
                  <p className="small text-muted mb-1">Rating</p>
                  <p className="mb-0">8.5</p>
                </div>
              </div>
              <div className="d-flex pt-1">
                <Button outline className="me-1 flex-grow-1">
                  Chat
                </Button>
                <Button className="flex-grow-1">Follow</Button>
              </div>
            </div>
          </div>
        </Card.Body>
        {/* </Card> */}
        {/* </Card> */}
        {/* </Card> */}
        {/* </Card> */}
      </div>
    </div>
  );
};

export default AboutUs;
