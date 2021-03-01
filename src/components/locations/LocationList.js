import React, {useContext, useEffect} from "react"
import {LocationContext} from "./LocationProvider"
import {Location} from "./Location"

export const LocationList = () =>{
const {locations, getLocations} = useContext(LocationContext)

useEffect(() => {
  getLocations()
}, [])

return (
  <>
  <h2>Locations</h2>
  <div className="locations">
    {locations.map(locationObj =>{
      return <Location key={locationObj.id} location = {locationObj}/>
    })}
  </div>
  </>
)

}