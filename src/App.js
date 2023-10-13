import React from 'react';



import Navbar from './Component/Navbar';
import About from './Component/About'
import Section from './Component/Section';
import sectionData from './data/sectiondata';
import Footer from './Component/Footer';

// import './style.css';

const App = () =>{
  return (
    <div>
        <Navbar />
        <About />

      {

      sectionData.map((values)=>(
        <Section
         title={values.title}
         des={values.des}
         />
      ))
      }

      <Footer />
      
    </div>  

    
    
   
  );

}

export default App;

//if else= ternary

//loops=>higher order fuction (map.,filter)

