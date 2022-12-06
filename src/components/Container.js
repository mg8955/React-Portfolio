import React, { useState } from 'react';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container () {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header />
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}