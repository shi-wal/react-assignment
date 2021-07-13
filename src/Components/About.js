import React from 'react';
import './Common.css';
import Header from './Header';

const About= function(){
    return(
        <div>
            <Header/>
            <div className="data-container">
            <div className="main-heading">
                About Us
            </div>
            <h2>
            Building Integrated Customer Experiences in the Telco Space
            </h2>
            <p>With an array of service offerings for Communication Service Providers (CSPs), Telecom Equipment Manufacturers (TEMs) and Independent Software Vendors (ISVs), Tech Mahindra is a chosen transformation partner for several leading wireline, wireless and broadband operators in Europe, Asia-Pacific and North America. Our offerings are based on 3 Mega Trends.</p>
            <h3>We discover the value additions we can give to our customers and help them leverage technology to take them to the next level.</h3>
            <h2>How we work?</h2>
            <p>We protect our client's time, information, reputation, money and relationships.
We endeavor to make our collaborations, products & services resilient and safe.
We learn rapidly by experimenting frequently and deliver value continuously.</p>
        </div>
        </div>
    );
}

export default About;