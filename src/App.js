import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {RegistrationPage} from "./RegistrationPage";
import {Route, Routes} from "react-router-dom";
import {LoginPage} from "./LoginPage";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<RegistrationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </>
    );
}

export default App;
