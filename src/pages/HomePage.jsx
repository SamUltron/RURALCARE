import React from 'react'
import HeroHead from '../components/HeroHead';
import FirstNav from "../components/FirstNav";
import CardCont from '../components/CardCont';
import DemoBtn from '../components/DemoBtn';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div >
      <FirstNav/>
      <HeroHead/>
      <CardCont/>
      <DemoBtn/>
      <Footer/>
    </div>
  )
}

export default HomePage