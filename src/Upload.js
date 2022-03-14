import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import Customization from './Customization'


function Upload() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [meme,setMeme] = useState()
    const [modalShow, setModalShow] = useState(false);
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
      };

    return (
        <div>
            <h4>Upload Meme Image</h4>
            <div className="uploadImg">
                <button onClick={handleClick}>Upload Image </button>
                <input
                    type="file"
                    name="myImage"
                    ref={hiddenFileInput}
                    style={{display:'none'}} 
                    onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                    }}
                />
                <br />
                <br /> 
                {selectedImage && (
                    <div>
                        <img alt="not fount" width='300px' height='300px' src={URL.createObjectURL(selectedImage)} />
                        <br /> 
                        <br />
                        <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                            <button onClick={()=>setSelectedImage(null)}>Remove</button>
                            <button onClick={() => {setMeme(URL.createObjectURL(selectedImage)); setModalShow(true);}}>Edit Meme</button>
                        </div>
                    </div>

                )}
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                >
                <Modal.Header closeButton style= {{ backgroundColor: '#7309b9', border: 'none' }}>
                    <Modal.Title id="contained-modal-title-vcenter" style = {{color: '#f72585'}} >
                        Edit your Meme ! 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style= {{ backgroundColor: '#7309b9'}}>
                    <Customization meme={meme}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Upload