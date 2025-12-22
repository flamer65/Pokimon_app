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
            <div className="max-w-7xl mx-auto mt-2 inset-0 h-full w-full z-0 fixed">
                <div className="absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-300 to-transparent pointer-events-none z-0" />
                <div className="absolute inset-y-0 right-0 h-full w-px bg-linear-to-b from-neutral-300/50 via-neutral-300 to-transparentd pointer-events-none z-0" />
            </div>
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
