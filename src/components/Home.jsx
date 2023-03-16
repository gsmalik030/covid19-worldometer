import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { SiWorldhealthorganization } from 'react-icons/si';
import { getCountryData } from '../redux/country/countrySlice';
import Header from './Header';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountryData());
  }, []);

  const countries = useSelector((store) => store.country);
  const [querry, setQuerry] = useState('');
  const dataSearch = (str) => setQuerry(str);

  return (
    <section>
      <Header />
      <div className="search__container">
        <span>
          <FiSearch />
        </span>
        <input
          className="country__search"
          placeholder="Eg: Afghanistan , South Africa"
          onChange={(e) => dataSearch(e.target.value)}
        />
      </div>
      <div>
        <h1>STATS BY COUNTRY</h1>
      </div>
      <div>
        <ul className="container">
          {countries.covidData
            .filter((value) => value.country.toLowerCase().includes(querry.toLocaleLowerCase()))
            .map((data) => (
              <NavLink
                to={`/details/${data.country}`}
                key={data.country}
                state={
                  data.country === null
                    ? ''
                    : { country: data.country, flag: data.flag }
                }
              >
                <div className="country__info">
                  {' '}
                  <SiWorldhealthorganization className="world-icon" />
                  <div>
                    <h2 className="country__name">{data.country}</h2>
                    <div className="country__facts">
                      <p className="country__population">{data.cases}</p>
                      <p className="country__continent">{data.continent}</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Home;
