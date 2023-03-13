import Carousel from "react-bootstrap/Carousel";

function ContactList() {
  return (
    <Carousel fade className="bg-dark">
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://avatars.mds.yandex.net/i?id=befff67e1edbd9d36c3a3043f36bf16aeb9ebb32-5233348-images-thumbs&n=13"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Demon slayers</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://avatars.mds.yandex.net/i?id=e260a8c9b944ef93dc9d23daacb00dec196dc742-7451990-images-thumbs&n=13"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Naruto</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-75 m-auto"
          src="https://avatars.mds.yandex.net/i?id=d442f7147062a0021dc3f784ffd1b9320cddbdb5-3519607-images-thumbs&n=13"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Attack on Titan</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ContactList;
