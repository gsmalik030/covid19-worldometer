import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDetailsData } from '../redux/details/detailsSlice';

function Details() {
  const location = useLocation();
  const { country, flag } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsData(country));
  }, []);
  const countryDetials = useSelector((store) => store.details);
  return (
    <section className="details__box">
      <img className="flag" src={flag} alt="flag" />
      <div>
        <p className="details_info even">
          <span>Name :</span>
          <span>{country}</span>
        </p>
        <p className="details_info odd">
          <span>Continent :</span>
          <span>{ countryDetials.detailsData.continent }</span>
        </p>
        <p className="details_info even">
          <span>Population :</span>
          <span>{ countryDetials.detailsData.population }</span>
        </p>
        <p className="details_info odd">
          <span>Cases :</span>
          <span>{ countryDetials.detailsData.cases }</span>
        </p>
        <p className="details_info even">
          <span>Tests :</span>
          <span>{ countryDetials.detailsData.tests }</span>
        </p>
        <p className="details_info odd">
          <span>Recovered :</span>
          <span>{ countryDetials.detailsData.recovered }</span>
        </p>
        <p className="details_info even">
          <span>Critical:</span>
          <span>{ countryDetials.detailsData.critical }</span>
        </p>
        <p className="details_info odd">
          <span>CasePerPeople :</span>
          <span>{ countryDetials.detailsData.oneCasePerPeople }</span>
        </p>
        <p className="details_info even">
          <span>DeathPerPeople :</span>
          <span>{ countryDetials.detailsData.oneDeathPerPeople }</span>
        </p>
        <p className="details_info odd">
          <span>TestPerPeople :</span>
          <span>{ countryDetials.detailsData.oneTestPerPeople }</span>
        </p>
      </div>
    </section>
  );
}

export default Details;
