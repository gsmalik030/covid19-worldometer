import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getDetailsData } from '../redux/details/detailsSlice'

const Details = () => {
  const location = useLocation();
  const { country, flag } = location.state;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsData(country));
  }, []);
  const countryDetials = useSelector((store)=> store.details)
  return (
    <div>
    <img src={flag} alt="flag" />
    <div>
      <p>
        Name :
        {country}
      </p>
      <p>
      Continent :
        { countryDetials.detailsData.continent }
      </p>
      <p>
        Population :
        { countryDetials.detailsData.population }
      </p>
      <p>
        Cases :
        { countryDetials.detailsData.cases }
      </p>
      <p>
        Tests :
        { countryDetials.detailsData.tests }
      </p>
      <p>
        Recovered :
        { countryDetials.detailsData.recovered }
      </p>
      <p>
        Critical:
        { countryDetials.detailsData.critical }
      </p>
      <p>
        CasePerPeople :
        { countryDetials.detailsData.oneCasePerPeople }
      </p>
      <p>
        DeathPerPeople :
        { countryDetials.detailsData.oneDeathPerPeople }
      </p>
      <p>
        TestPerPeople :
        { countryDetials.detailsData.oneTestPerPeople }
      </p>
    </div>
  </div>
  )
}

export default Details