import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Home = () => {
    const [values, setValues] = useState([])
    useEffect(() => {
        axios.get('https://api.restful-api.dev/objects').then((res) => setValues(res.data)).catch((err) => console.log(err))
    },[])
    return (
        <div>
            {values.map((values) => {
                return (
                    <div key={values.id}>
                        {values.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Home