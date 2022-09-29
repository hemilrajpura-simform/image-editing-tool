// import backgroundVideo from '../src/media/pexels-marian-croitoru-5607784.mp4'; 
import sampleImage from '../src/media/pexels-taryn-elliott-4112237.jpg';
import './App.css';
import { BiBrightness,BiImageAdd } from 'react-icons/bi'
import { BsDropletFill, BsFillMoonStarsFill, BsFillTriangleFill } from 'react-icons/bs'
import { RiImageAddFill, RiTempHotFill } from 'react-icons/ri'
import { useState } from 'react';

function App() {
  const [image,setImage] = useState();
  return (
    <div className="App">
      {/* <video id="video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}

      <div className='toolMainSection'>
        <div className='toolSectionContent'>
          {/* <h1>LensArt</h1>  */}
          <div className='ImageContainerSection'>
            { image? <img src={image} alt={"Asa"} />:
            <div className='AddImageSectionMain'>
              <BiImageAdd />
              <p>Choose an Image</p>
            </div>
           }
          </div>

          <div className='editingToolsSection'>
            <div className='editingToolsList'>
              <ul>
                <li><BiBrightness /></li>
                <li><BsDropletFill /></li>
                <li><BsFillMoonStarsFill /></li>
                <li><RiImageAddFill /></li>
                <li><BsFillTriangleFill /></li>
                <li><RiTempHotFill /></li>
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
