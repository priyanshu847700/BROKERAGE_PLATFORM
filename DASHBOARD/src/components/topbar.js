import React from 'react'
import Menu from './menu';


function Topbar() {
    return ( 
    <>
    <div className='container'>
        <div className='row mt-4 border-bottom '>
            <div className='col-4 d-flex'>

                <div className='d-flex me-5'>
                    <p>NIFTY 50</p>
                    <p className='ms-5'>100.2</p>
                </div>

                <div className='d-flex ms-5'>
                    <p>SENSEX</p>
                    <p className='ms-5'>100.2</p>
                </div>

            </div>

            <div className='col-8 border-start'>
                <Menu/>
            </div>

        </div>
    </div>


    </> 
    );
}

export default Topbar;