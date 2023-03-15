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
    <section className='details__box'>
    <img className='flag' src={flag} alt="flag" />
    <div>
      <p className='details_info even'>
        Name : {country}
      </p >
      <p className='details_info odd'>
      Continent :
        { countryDetials.detailsData.continent }
      </p>
      <p className='details_info even'>
        Population :
        { countryDetials.detailsData.population }
      </p>
      <p className='details_info odd'>
        Cases :
        { countryDetials.detailsData.cases }
      </p>
      <p className='details_info even'>
        Tests :
        { countryDetials.detailsData.tests }
      </p>
      <p className='details_info odd'>
        Recovered :
        { countryDetials.detailsData.recovered }
      </p>
      <p className='details_info even'>
        Critical:
        { countryDetials.detailsData.critical }
      </p>
      <p className='details_info odd'>
        CasePerPeople :
        { countryDetials.detailsData.oneCasePerPeople }
      </p>
      <p className='details_info even'>
        DeathPerPeople :
        { countryDetials.detailsData.oneDeathPerPeople }
      </p>
      <p className='details_info odd'>
        TestPerPeople :
        { countryDetials.detailsData.oneTestPerPeople }
      </p>
    </div>
  </section>
  )
}

export default Details