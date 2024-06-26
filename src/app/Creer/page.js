"use client"
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from '../../pages/sidebar/Sidebar';
import Navbar from '../../pages/navbar/Navbar';
import CreerHotel from '../../app/creerHotels/CreerHotel';

export default function CardHotel() {


  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col col-md col-lg-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-12 col-lg-10">
            <Navbar/>
            <CreerHotel/>
        </div>
      </div>
    </div>
  );
}
