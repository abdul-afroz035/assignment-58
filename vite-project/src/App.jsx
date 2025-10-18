import React from "react";
import { Routes, Route } from "react-router-dom";
import Productlistpage from './Productlistpage'
import Productdetails from './Productdetails'

function App() {
    const path = window.location.pathname;
    return (
        <div>
            <Routes>
                <Route path= "/" element={<Productlistpage />}/>
                <Route path="/Productdetails" element={<Productdetails />} />
                <Route path="/Productlistpage" element={<Productlistpage />} />
            </Routes>
        </div>
    );

}

export default App;