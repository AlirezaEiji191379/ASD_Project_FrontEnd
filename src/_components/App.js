import "bootstrap/dist/css/bootstrap.min.css"
import {Route, Routes} from "react-router-dom";
import {RegistrationPage} from "./RegistrationPage";
import {LoginPage} from "./LoginPage";
import {ProfilePage} from "./ProfilePage";


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<RegistrationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/profile" element={<ProfilePage/>}/>
            </Routes>
        </>
    );
}

export default App;
