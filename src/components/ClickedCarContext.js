import { createContext, useState } from "react";

const ClickedCarContext = createContext()

export function ClickedCarProvider({children}){
  const [clickedVehicle, setClickedVehicle] = useState({})

    return(<ClickedCarContext.Provider value={clickedCar}>
        {children}
    </ClickedCarContext.Provider>)
}

export default ClickedCarContext;