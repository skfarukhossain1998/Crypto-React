import React from 'react';
import './styles.css';
import Button from '../../Common/Button';
import iphone from '../../../assets/iphone.png';
import gradient from '../../../assets/gradient.png';
import {motion} from 'framer-motion';   
import { Link } from 'react-router-dom';
import {RWebShare} from 'react-web-share';
function MainComponent(){
    return <div className='flex-info'>
        <div className='left-component'>
            <motion.h1
             className='track-crypto-heading'
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5}}
            >
            Track Crypto
                
            </motion.h1>
            <motion.h1 className='real-time-heading'
             initial={{opacity:0,y:50}}
             animate={{opacity:1,y:0}}
             transition={{duration:0.5,delay:0.5}}>Real Time.</motion.h1>
            <motion.p className='info-text'
            initial={{opacity:0,y:50}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.5,delay:0.75}}
            >
                Track Crypto through a public api in real time. Visit the dashboard to do so!
            </motion.p>

            <motion.div className='btn-flex'
             initial={{opacity:0,x:50}}
             animate={{opacity:1,x:0}}
             transition={{duration:0.5,delay:1.2}}
            >
            {/* <Button text={"Dashboard"}/> */}
            <Link to='/dashboard'>
             <Button 
             outlined={false}
             text={"Dashboard"} 
             onClick={()=>console.log("Btn Clicked")}/>
            </Link>

            {/* <Button text={"Share"} outlined={true}/> */}
            <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "google.com",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
            </motion.div>
        </div>

        <div className='phone-container'>
            <motion.img src={iphone} className='iphone'
             initial={{y:-10}}
             animate={{y:10}}
             transition={{
                type:"smooth",
                repeatType:"mirror",
                duration:2,
                repeat:Infinity
            }}
            />
            <img src={gradient} className='gradient'/>
        </div>
    </div>
    
     
}
export default MainComponent;



