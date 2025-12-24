import Cointainer from "./components/layout/Cointainer";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Herosection from "./components/layout/Herosection";
import SigningPage from "./components/Pages/SigningPage";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    return (
        <>
        
            <Cointainer>
                <Routes>
                    <Route
                        path="/login"
                        element={<SigningPage navigate={navigate} />}
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                <Navbar navigate={navigate} />
                                <Search />
                                <Herosection />
                            </>
                        }
                    />
                </Routes>
            </Cointainer>
        </>
    );
}
