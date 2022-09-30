import backgroundVideo from '../src/media/pexels-wencheng-jiang-6635796.jpg';
import sampleImage from '../src/media/pexels-taryn-elliott-4112237.jpg';
import './App.css';
import { BiBrightness, BiImageAdd } from 'react-icons/bi'
import { BsDropletFill, BsFillMoonStarsFill, BsFillTriangleFill } from 'react-icons/bs'
import { RiImageAddFill, RiTempHotFill } from 'react-icons/ri'
import { GrPowerReset } from 'react-icons/gr'
import { useState } from 'react';
import Slider from './Components/Slider';

function App() {
  const [image, setImage] = useState();
  const [brightValue, setBrightValue] = useState({
    brightness: 100,
    saturate: 100,
  });
  const [imageFilterStyles, setImageFilterStyles] = useState({
    filter:"brightness('100%')",
  })
  const [filterName, setFilterName] = useState('');
  const [selectedFilterName, setSelectedFilterName] = useState();
  let ImageStyle = 'filter: `${filterName}(${brightValue.brightness}%)`';

  const imageUploadHandler = (e) => {
    console.log(image)
    // @ts-ignore
    setImage(URL.createObjectURL(e.target.files[0]))
  }
  // let FilterBackStyle = {backgroundColor: 'rgba(255, 255, 255, 0.144)'}; 

  const getValue = (someV) => {
    console.log('some value', someV)
    setImageFilterStyles(
      {
        ...imageFilterStyles,
        // filter: `${filterName}(${brightValue.brightness}%)`
        filter:`${filterName}(${Number(someV)}%)`
      }
    )
    // setImageFilterStyles({...imageFilterStyles,ImageStyle}) 
    console.log(imageFilterStyles);

  }
  return (
    <div className="App">
      {/* <video id="video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <img id="video"  src={backgroundVideo} height={'100vh'} width={'100%'}/>
      <div className='toolMainSection'>
        <div className='toolSectionContent'>
          {/* <h1>LensArt</h1>  */}
          <div className='ImageContainerSection'>
            {image ? <img src={image} alt={"Asa"} style={imageFilterStyles} /> :
              <div className='AddImageSectionMain'>
                <BiImageAdd />
                {/* <p>Choose an Image</p> */}
                <br /> <input type="file" accept="image/*" placeholder='' value={image} onChange={imageUploadHandler} />
              </div>
            }
          </div>
          <div style={{ display: 'flex' }}>
            <div className='FilterSliderMain'>
              {image && filterName && <Slider getValue={getValue} FilterName={'brightness'} />}
            </div>
            <div className='ResetImageMain'>
              <GrPowerReset onClick={() => { setImage(null) }} />
            </div>
          </div>
          {/* <div className='FilterNameLabelMain'>
          <p>{filterName}</p>
          </div> */}
          <div className='editingToolsSection'>
            <div className='editingToolsList'>
              <ul>
                <li className={filterName == 'brightness' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('brightness') }}><BiBrightness /></li>
                <li className={filterName == 'saturate' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('saturate') }}><BsDropletFill /></li>
                <li className={filterName == 'soemthing' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('brightness') }}><BsFillMoonStarsFill /></li>
                <li className={filterName == 'soemthing' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('brightness') }}><RiImageAddFill /></li>
                <li className={filterName == 'soemthing' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('brightness') }}><BsFillTriangleFill /></li>
                <li className={filterName == 'soemthing' ? 'activeFilterLi' : ''} onClick={() => { setFilterName('brightness') }}><RiTempHotFill /></li>
              </ul>
            </div>
          </div>


        </div>

      </div>
      <a href='/hemilrajpura.in'><div className='creatorSectionMain'>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3f9052106543203.5f91fa2e4e14d.png" /><p>hemilrajpura.in</p>
      </div></a>
    </div>
  );
}

export default App;
