import React, { useState } from "react";
import "./App.css";
import Cal from "./components/Cal";
import Right from "./pages/Right";
function App() {
    const [event, setEvent] = useState([]);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 col-sm-12'>
                    <Cal setEvent={setEvent} event={event} />
                </div>
                <div className='col-md-6 col-sm-12'>
                    <Right events={event.data} />
                </div>
            </div>
        </div>
    );
}

export default App;
