import { useEffect, useState } from "react"


const Search = () => {
    const [villain, setVillain] = useState({});
    const [inputText, setInputText] = useState('');

    useEffect (() => {
        fetch(`https://myheroacademiaapi.com/api/character/${inputText}`)
        .then((res) => {
            return res.json()
        })
        .then((villain) => {
            setVillain(villain);
            console.log(villain);
        });
    }, [inputText])

    return (
        <div>
            <input value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <div>
                {villain?.name}
            </div>
            <div>
                {villain?.quirk}
            </div>
            <div>
                <img src={villain?.images?.[1]} />
            </div>
        </div>
    )
}

export default Search;