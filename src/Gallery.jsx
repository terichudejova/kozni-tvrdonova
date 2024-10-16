import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Gallery({ images }) {
  const [show, setShow] = useState(false);
  const [urlImage, setUrlImage] = useState(null);
  const [imgTitle, setImageTitle] = useState(null);

  const handleClose = () => setShow(false);

  const handleShow = (e, src, title) => {
    e.preventDefault();
    setUrlImage(src);
    setImageTitle(title);
    setShow(true);
  };

  return (
    <>
      <div className="content">
        {images.map((img, i) => (
          <div key={i} className="img-box">
            <a href={img.src} onClick={e => handleShow(e, img.src, img.title)}>
              <img alt="klinika" {...img} />
            </a>
          </div>
        ))}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <img src={urlImage} alt={imgTitle} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="galleryButton">
            Zavřít
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Gallery;
