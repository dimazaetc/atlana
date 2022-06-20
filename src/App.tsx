import React from 'react';
import MainPage from "./Pages/MainPage/MainPage";
import InfoPage from "./Pages/InfoPage/InfoPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/:id" element={<InfoPage/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
