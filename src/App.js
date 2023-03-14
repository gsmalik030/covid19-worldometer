import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { getCountryData } from './redux/country/countrySlice';
import { getDetailsData} from './redux/details/detailsSlice'
import Navbar from './components/Navbar';
import Details from './components/Details';
import Home from './components/Home';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsData("Afghanistan"));
  }, []);
  useEffect(() => {
    dispatch(getCountryData());
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/details' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
