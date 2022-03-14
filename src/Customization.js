import React,  { useRef, useState } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image';
import { Icon } from '@iconify/react';
import Draggable from 'react-draggable';
import Dropdown from 'react-bootstrap/Dropdown'
function Customization({meme}) {

  const componentRef = useRef();
  const [topLine,setTopLine] = useState('Enter Text ');
  const [bottomLine,setBottomLine] = useState('Enter  Text ');
  const [fontTop, setFontTop] = useState("Roboto");
  const [boldTop, setBoldTop] = useState(false);
  const [italicTop, setItalicTop] = useState(false);
  const [underLineTop, setUnderLineTop] = useState(false);
  const [colorTop, setColorTop] = useState('#f72585')
  const [sizeTop, setSizeTop] = useState('normal')
  const [bgTop, setBgTop] = useState('white')
  const [shapeTop,setShapeTop] = useState('');

  const [fontBottom, setFontBottom] = useState("Roboto");
  const [boldBottom, setBoldBottom] = useState(false);
  const [italicBottom, setItalicBottom] = useState(false);
  const [underLineBottom, setUnderLineBottom] = useState(false);
  const [colorBottom, setColorBottom] = useState('#f72585')
  const [sizeBottom, setSizeBottom] = useState('normal')
  const [bgBottom, setBgBottom] = useState('white')
  const [shapeBottom, setShapeBottom] = useState('')

  const colorArray = [
    {color: '#4D4D4D', name: 'Black'}, 
    {color: '#999999', name: 'Grey'}, 
    {color: '#FFFFFF', name: 'White'}, 
    {color: '#F44E3B', name: 'Red'}, 
    {color: '#FE9200' , name:'Orange' }, 
    {color: '#FCDC00' , name:'Yellow' }, 
    {color: '#DBDF00', name:'Light Green' }, 
    {color: '#A4DD00', name: 'Dark Green'}, 
    {color: '#68CCCA', name:'Turquoise' }, 
    {color: '#73D8FF', name: 'Blue'}, 
    {color:  '#AEA1FF', name:'Purple' }, 
    {color: '#FDA1FF', name:'Pink' }, 
  ]

  const fontSizeArray = [
    {font: '10px', name: '10'}, 
    {font: '12px', name: '12'},
    {font: '14px', name: '14'},
    {font: '16px', name: '16'},
    {font: '20px', name: '20'},
    {font: '24px', name: '24'},
    {font: '28px', name: '28'},
    {font: '30px', name: '30'},
    {font: '32px', name: '32'},
  ]

  const fontArray = [
    {font:"'Roboto', sans-serif", name: 'Roboto'},
    {font:"'Playfair Display', serif", name: 'Playfair' },
    {font:"'Montserrat', sans-serif", name: 'Montserrat'},
    {font:"'Lobster', cursive", name: 'Lobster'},
    {font:"'Abril Fatface', cursive", name: 'Abril Fatface'},
    {font:"'Dancing Script', cursive", name: 'Dancing Script'},
    {font:"'Space Mono', monospace", name: 'Space Mono'},
  ]

  const shapeArray = [
    {class:'square', name:'Square'},
    {class:'circle', name:'Circle'},
    {class:'oval', name:'Oval'},
    {class:'tv', name:'TV'},
    // {class:'', name:''},
    // {class:'', name:''},
    // {class:'', name:''},
    // {class:'', name:''},
    // {class:'', name:''},


  ]

  return (
    <div className="editingMemeCon">
      <div className="customizationCon">
        <div className="modalImg" >
          <div ref={componentRef}  className="memeBox">
            <Draggable>
              <div className={`line${shapeTop}`} style= {{ 
                fontFamily: fontTop,
                fontWeight: boldTop ? 'bold' :'normal',
                fontStyle: italicTop ? 'italic' : 'normal',
                textDecoration: underLineTop ? 'underline' :'none',
                color : colorTop,
                fontSize: sizeTop,
                backgroundColor: bgTop
                }}
                >
                  {topLine} 
              </div>
            </Draggable>
            <img src={meme} alt='memeImage' width='300px' height='300px'/>
            <Draggable>
              <div className={`line${shapeBottom}`} style= {{ 
                fontFamily: fontBottom,
                fontWeight: boldBottom ? 'bold' :'normal',
                fontStyle: italicBottom ? 'italic' : 'normal',
                textDecoration: underLineBottom ? 'underline' :'none',
                color : colorBottom,
                fontSize: sizeBottom,
                backgroundColor: bgBottom
                }}>
                  {bottomLine}
              </div>
            </Draggable>
          </div>
        </div>
        <div className="editor" >
          <div style={{ marginLeft: '15px', marginBottom: '10px', color: '#7309b9'}}>Top Text</div>
          <div style={{ border: '2px solid #f72585', borderRadius: '10px', margin: '5px', marginBottom: '10px' }}> 
            <div className="stylingBox">
              <div className="editorForm">
                <input
                type="text" 
                name="topLine"
                value={topLine}
                onChange = {(e) => setTopLine(e.target.value) }>
                </input>
              </div>
              <div className="fontStyles">
                <button onClick={() => setBoldTop(!boldTop)}><Icon icon="ant-design:bold-outlined"  color="#868383" width="25" height="25" /></button>
                <button onClick={() => setItalicTop(!italicTop)}><Icon icon="bi:type-italic" color="#868383" width="25" height="25" /></button> 
                <button onClick={() => setUnderLineTop(!underLineTop)}> <Icon icon="ant-design:underline-outlined" color="#868383" width="25" height="25" /> </button>      
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="bx:font-family" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fontArray.map(item => {
                      return <Dropdown.Item value={item.font} onClick = {(e) => setFontTop(item.font)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="ant-design:font-size-outlined" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fontSizeArray.map(item => {
                      return <Dropdown.Item value={item.font} onClick = {(e) => setSizeTop(item.font)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="bx:font-color" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {colorArray.map (item => {
                      return <Dropdown.Item value={item.color} style={{ backgroundColor: item.color }} onClick = {(e) => setColorTop(item.color)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  <Icon icon="fluent:color-background-20-filled" color="#868383" width="25" height="25" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {colorArray.map (item => {
                    return <Dropdown.Item value={item.color} style={{ backgroundColor: item.color }} onClick = {(e) => setBgTop(item.color)}>  {item.name} </Dropdown.Item>
                  })}
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  <Icon icon="cil:text-shapes" color="#868383" width="25"height="25"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {shapeArray.map (item => {
                    return <Dropdown.Item value={item.class} onClick = {(e) => setShapeTop(item.class)}>  {item.name} </Dropdown.Item>
                  })}
                </Dropdown.Menu>
              </Dropdown>



              </div>
            </div>
          </div>
  
          <div style={{ marginLeft: '15px', marginBottom: '10px', color: '#7309b9'}}> Bottom Text</div>
          <div style={{ border: '2px solid #f72585', borderRadius: '10px', margin: '5px', marginBottom: '10px'  }}> 
            <div className="stylingBox">
              <div className="editorForm">
                <input
                type="text" 
                name="bottomLine"
                value={bottomLine}
                onChange = {(e) => setBottomLine(e.target.value) }>
                </input>
              </div>
              <div className="fontStyles">
                <button onClick={() => setBoldBottom(!boldBottom)}><Icon icon="ant-design:bold-outlined"  color="#868383" width="25" height="25" /></button>
                <button onClick={() => setItalicBottom(!italicBottom)}><Icon icon="bi:type-italic" color="#868383" width="25" height="25" /></button> 
                <button onClick={() => setUnderLineBottom(!underLineBottom)}> <Icon icon="ant-design:underline-outlined" color="#868383" width="25" height="25" /> </button>      
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="bx:font-family" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fontArray.map(item => {
                      return <Dropdown.Item value={item.font} onClick = {(e) => setFontBottom(item.font)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="ant-design:font-size-outlined" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {fontSizeArray.map(item => {
                      return <Dropdown.Item value={item.font} onClick = {(e) => setSizeBottom(item.font)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                    <Icon icon="bx:font-color" color="#868383" width="25" height="25" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {colorArray.map (item => {
                      return <Dropdown.Item value={item.color} style={{ backgroundColor: item.color }} onClick = {(e) => setColorBottom(item.color)}>  {item.name} </Dropdown.Item>
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  <Icon icon="fluent:color-background-20-filled" color="#868383" width="25" height="25" />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {colorArray.map (item => {
                    return <Dropdown.Item value={item.color} style={{ backgroundColor: item.color }} onClick = {(e) => setBgBottom(item.color)}>  {item.name} </Dropdown.Item>
                  })}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                  <Icon icon="cil:text-shapes" color="#868383" width="25"height="25"/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {shapeArray.map (item => {
                    return <Dropdown.Item value={item.class} onClick = {(e) => setShapeBottom(item.class)}>  {item.name} </Dropdown.Item>
                  })}
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </div>
            
          </div>    
        </div>
      </div>
      <div className="btnDwnld">
        <button onClick={() => exportComponentAsPNG(componentRef, { fileName:'myMeme'} )}>Download Meme</button>
      </div>   
    </div>
  )
}

export default Customization