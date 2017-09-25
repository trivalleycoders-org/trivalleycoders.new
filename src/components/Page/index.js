// Page
import React from 'react'
import TopBar from './TopBar'
import Header from './Header'
import TechLogos from './TechLogos'
import Events from './Events'
import Members from './Members'
import Sponsors from './Sponsors'
import Footer from './Footer'
import './style.css'
// import * as ku from '../../lib/ke-utils';

const Page = () => {

    return (
      <div id='page-wrapper' className='page-wrapper'>
        <TopBar />
        <Header />
        <TechLogos />
        <Events />
        <Members />
        <Sponsors />
        <Footer />
      </div>
    )
}

export default Page
