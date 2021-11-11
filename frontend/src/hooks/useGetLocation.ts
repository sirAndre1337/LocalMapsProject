import { useState,useEffect } from "react";

const defaultCoords = [-23.55052, -46.633308]

export default function useGetLocation() {
  const [coords, setCoorsds] = useState<number[] | null>(null);

    useEffect(()=>{

        function onSuccess (position: GeolocationPosition) {
            setCoorsds([position.coords.latitude , position.coords.longitude])
        }
        function onError() {
            console.log('error on get location')
            setCoorsds(defaultCoords)
        }

        try {
            navigator.geolocation.getCurrentPosition(onSuccess,onError)
        } catch (error) {
            setCoorsds(defaultCoords)
        }
    },[])

    return {coords}
}
