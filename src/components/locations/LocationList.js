import React, {useContext, useEffect} from "react"
import {LocationContext} from "./LocationProvider"
import {Location} from "./Location"
import { useHistory } from 'react-router-dom';

export const LocationList = () =>{
const {locations, getLocations} = useContext(LocationContext)

const history = useHistory();

useEffect(() => {
  getLocations()
}, [])

return (
  <>
  <h2>Locations</h2>
  <button onClick={() => {history.push("/location/create")}}>
      Add Location
    </button>
  <div className="locations">
    {locations.map(locationObj =>{
      return <Location key={locationObj.id} location = {locationObj}/>
    })}
  </div>
  </>
)

}