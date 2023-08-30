import './index.css'
//import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Login from './pages/Login/login';
import MainPage from './pages/mainPage';
import Register from './pages/Register/register';
import PrivateRoute from './components/PrivateRoute';
import Footer from './components/footer/footer';
import Navbar from './components/Navbar/navbar';
import ScrollToTop from './components/ScrollToTop/buttonScrollToTop';



const App = () => {
    return (
        <CookiesProvider>
            <Router>
                <Navbar />
                <div className="wrapper">

                    <div className="container-fluid row mainPage">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route
                                path="/mainPage"
                                element={
                                    <PrivateRoute path="/MainPage">
                                        <MainPage />
                                    </PrivateRoute>
                                }
                            />

                            <Route path="/*" element={<Login />} />
                        </Routes>
                    </div>

                    <div className="footer">
                        <Footer />
                        <ScrollToTop/>
                    </div>
                </div>
                
                
            </Router>
        </CookiesProvider>
    );
};

// This is the entry point of the app. It creates the root of your application and it renders the React component `App` inside an HTML element identified with the id `root`.
createRoot(document.getElementById('root')).render(<App />)