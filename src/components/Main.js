import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Main.css';
const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }
    useEffect(() => {
        pokeFun();
    }, [url])

    const handleClose = () => {
        setPokeDex(null);
    };

    return (


        <div className="block">
            <div>
                <img className=" mx-auto w-96" src="./images/pokemonLogo.svg"/>

            </div>
            <div className="flex flex-wrap justify-center">
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
            </div>

            <div className="flex justify-center">
                {prevUrl && <button className="bg-transparent m-5 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded" onClick={() => {
                    setPokeData([])
                    setUrl(prevUrl)
                }}>Previous</button>}

                {nextUrl && <button className="bg-transparent m-5 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yelloe-500 hover:border-transparent rounded" onClick={() => {
                    setPokeData([])
                    setUrl(nextUrl)
                }}>Next</button>}

            </div>
            {pokeDex && (
                <div className="info-container">
                    <div className="info">
                        <Pokeinfo data={pokeDex} onClose={handleClose} />
                    </div>
                </div>
            )}
        </div>



    )
}
export default Main;