import React, { useState } from 'react';
import Features from '../components/Features';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Feature = () => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <>
              <Navbar />

            <Sidebar activeSection={activeSection} />
            <Features setActiveSection={setActiveSection} />
        </>
    );
};

export default Feature;
