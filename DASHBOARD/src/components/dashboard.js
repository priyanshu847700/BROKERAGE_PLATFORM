import React from 'react'

import Watchlist from './watchlist';
import Summary from './summary';
import App from './app';
import Funds from './funds';
import Order from './order';
import Holdings from './holdings';
import Positions from './positions';


import {Routes } from 'react-router-dom'

function Dashboard() {
    return ( 
    <>
    <div className='container'>
        <Watchlist/>
        <div className='content'>
            <Routes path='/' element={<Summary/>}></Routes>
            <Routes path='/orders' element={<Order/>}></Routes>
            <Routes path='/holdings' element={<Holdings/>}></Routes>
            <Routes path='/positions' element={<Positions/>}></Routes>
            <Routes path='/funds' element={<Funds/>}></Routes>
            <Routes path='/app' element={<App/>}></Routes>
        </div>
    </div>

    </>
    );
}

export default Dashboard;