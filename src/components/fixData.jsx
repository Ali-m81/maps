// import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getData } from '../service/getData'

//MY ICONS
import { GoChevronRight } from "react-icons/go";

import style from "../style/Fixdata.module.css"

function Fixdata({ city, setCity, setCoord }) {
    //MY STATE
    const [data, setData] = useState([])
    const [text, setText] = useState('')
    //MY FUNCTION
    const searchHandler = () => {

        setCity(text)
    }
    //MY EFFECTS
    useEffect(() => {
        const set = async () => {
            setData(await getData(city) || {})
        }
        set()

    }, [city])
    useEffect(() => {
        const coords = data?.res?.data?.coord || {}
        setCoord(coords)
    }, [data])
    return (

        <div className={style.main}>
            <p htmlFor="text">Type city </p>
            <form>
                <input type="text"
                    name='text'
                    value={text}
                    placeholder='search city'
                    onChange={(e) => setText(e.target.value)}
                />
                <button onClick={searchHandler} type='button'><GoChevronRight /> </button>
            </form>
        </div>
    )
}

export default Fixdata
