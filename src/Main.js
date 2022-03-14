import React from 'react'
import {useState, useEffect} from 'react'
import Customization from './Customization'
import Modal from 'react-bootstrap/Modal'
import Upload from './Upload'
import { Icon } from '@iconify/react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    const [modalShow, setModalShow] = useState(false);
    const [viewPic, setViewPic] = useState(true);
    const [upldPic, setUpldPic] = useState(false);
    const [items,setItems] = useState([])
    const [isLoading,setIsLoading] = useState([true])
    const [meme, setMeme] = useState('');

    useEffect( () => {
        fetch("https://api.imgflip.com/get_memes")
        .then((res) => res.json())
        .then((json) => {
            setIsLoading(false);
            setItems(json.data.memes);
        })
        .catch(() => console.log("request failed"));
    }, []);

    function Pagination({ data, RenderComponent, title, pageLimit, dataLimit }) {

        const [pages] = useState(Math.round(data.length / dataLimit));
        const [currentPage, setCurrentPage] = useState(1);

        function goToNextPage() {
            setCurrentPage((page) => page + 1);
        }

        function goToPreviousPage() {
            setCurrentPage((page) => page - 1);
        }

        function changePage(event) {
            const pageNumber = Number(event.target.textContent);
            setCurrentPage(pageNumber);
        }

        const getPaginatedData = () => {
            const startIndex = currentPage * dataLimit - dataLimit;
            const endIndex = startIndex + dataLimit;
            return data.slice(startIndex, endIndex);
        };

        const getPaginationGroup = () => {
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
            return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
        };

        return (
            <div>
                <p style = {{fontSize: '20px', textAlign: 'center'}}> Click on the Image to add captions ! </p>
                <div className="memeGrid">
                    {getPaginatedData().map((d, idx) => (
                        <RenderComponent key={idx} data={d} />
                    ))}
                </div>
                <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                    >
                        <Icon icon="carbon:previous-filled" color="#f72585" width="20" height="20" />
                    </button>
                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${currentPage === item ? 'active' : null}`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}
                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className={`next ${currentPage === pages ? 'disabled' : ''}`}
                    >
                        <Icon icon="carbon:next-filled" color="#f72585" width="20" height="20" />
                    </button>
                </div>
            </div>
        );
    }

    function Post(props) {
        const { id, name, url } = props.data;
        return (
            <div className="memeItem">
                <img src={url} alt={name} width='200px' height='200px' onClick={() => {setMeme(url) ; setModalShow(true) ;}}/>
            </div>
        );
    }

    return (
        <div className="main">
            <div className="selBtn">
                <div className="btn">
                    <button onClick = {() =>{setViewPic(true); setUpldPic(false);}}>Browse Pictures</button>
                </div>
                <div className="btn">
                    <button onClick = {() =>{setUpldPic(true); setViewPic(false) ;}}>Upload picture</button>
                </div>
            </div>
            <div className="browsePic" style= {{display: viewPic ?'block': 'none'}}>
                {isLoading ? (      
                    <div className="loadingCon">Fetching awesome Meme Pictures </div>) : (
                    <div>
                        {items.length > 0 ? (
                        <>
                            <Pagination
                                data={items}
                                RenderComponent={Post}
                                title="Posts"
                                pageLimit={0}
                                dataLimit={18}
                            />
                        </>) : (
                        <h1>No Posts to display</h1>
                        )}
            
                    </div>
                    ) 
                } 
            </div>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton style= {{ backgroundColor: '#7309b9', border: 'none', color: '#f72585'}}>
                    <Modal.Title id="contained-modal-title-vcenter" style = {{color: '#f72585'}} >
                        Edit your Meme ! 
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style= {{ backgroundColor: '#7309b9'}}>
                    <Customization meme={meme}/>
                </Modal.Body>
            </Modal>
            <div className="uploadPic" style= {{display: upldPic ?'block': 'none'}}>
                <Upload />
            </div>
        </div>
    )
}

export default Main