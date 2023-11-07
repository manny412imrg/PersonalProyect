import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    console.log()
    const careers = useLoaderData()
  return (
    <div>
        <p>Hola Mundo desde careers</p>
        {careers.map(career => (
            <p key={career.id} to="/">
                <Link>{career.equipment}</Link>
                <p>Made for {career.brand}</p>
            </p>
        ))}
    </div>
  )
}

export const careersLoader = async () => {
    const res = await fetch('https://random-data-api.com/api/appliance/random_appliance?size=7')
    return res.json()
}

