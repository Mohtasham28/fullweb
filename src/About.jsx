import React from 'react'
import Common from './Common'
import bmg from '../src/images/about.JPG'
const About = () => {
    return (
      <>
      <Common  name="Mohtasham is a photographer by profession, an artist by own imagination and an adventurist by nature. Born and raised in Pakistan, Mohtasham holds a Bs. degree in Film Making and now lives in Lahore, Pakistan. Besides, he is an avid photographer who has displayed his work in few local exhibitions, both solo and collaborative. Sometimes ago, Mohtasham also used to regularly draw and paint but now enjoys the combination of photography and Photoshop more."
               imgsrc={bmg}
               visit="" 
               btname="Home"
               transp={<p><b>Traveler</b><br></br><br></br> Film Maker<br></br><br></br> Graphic Designer<br></br><br></br> Developer</p>}
               />
              
      </>
    )
}
export default About;
