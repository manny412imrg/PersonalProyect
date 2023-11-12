import { useParams } from "react-router-dom"

export default function CareerDetail() {
const { id } = useParams()
const carrer = useLoaderData()
  return (
    <div>
        <h2>carer Detail for {carrer.brand}</h2>
        <p>Starting {carrer.uid}</p>
    </div>
  )
}


// loader function with API GET

export const CareerDetailsLoader = async({params}) => {
    const {id} = params
    const res = await('https://random-data-api.com/api/appliance/random_appliance?size=' + id)
    return res.json()
}