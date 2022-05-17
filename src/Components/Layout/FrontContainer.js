import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'


  
const FrontContainer = ({ children }) => {
    const add = (function () {
        let counter = 0;
        console.log(counter);

        return function () {counter += 1; 
            console.log(counter);
            return counter
        
        };
        console.log(counter);
      })();
    return (
        <div className="container-scroller">
            <Header />
            <div className="container-fluid page-body-wrapper">
                <Aside />
            <div className="main-panel">
                {children}
                <Footer />
            </div>

            </div>
        </div>
    )
}

export default FrontContainer