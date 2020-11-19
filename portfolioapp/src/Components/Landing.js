import React from 'react';
import Header from './Header'
import Home from './home';
import Work from './Project';
import Contact from './Contact';

import data from './mydata';

const Landing = () => {
    return (<div className="App">
        <Header name={data.name} contactEmail={data.contactEmail}></Header>
        <Home name={data.landingPageName} paragraph={data.landingPagePara} authorImage={data.landingPageImage}></Home>
        <Work projects={data.projects}></Work>
        <Contact contactEmail={data.contactEmail} contactPara={data.contactPara} socialLinks={data.social}></Contact>

    </div>)
}

export default Landing;
