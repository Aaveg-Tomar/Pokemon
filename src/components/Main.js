// Main.js

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import "./Main.css";

const Main = () => {
    const [originalData, setOriginalData] = useState([]);
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTypes, setSelectedTypes] = useState([]);

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    };

    const getPokemon = async (res) => {
        const newData = await Promise.all(
            res.map(async (item) => {
                const result = await axios.get(item.url);
                return result.data;
            })
        );

        setOriginalData((prevData) => [...prevData, ...newData]);
    };

    const handleFilterChange = (type) => {
        if (type === "all") {
            setSelectedTypes([]);
        } else {
            setSelectedTypes([type]);
        }
    };

    const handleClose = () => {
        setPokeDex(null);
    };

    useEffect(() => {
        pokeFun();
    }, [url]);

    useEffect(() => {
        if (!searchTerm) {
            setPokeData(originalData);
        } else {
            const filteredResults = originalData.filter((item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setPokeData(filteredResults);
        }
    }, [searchTerm, originalData]);

    useEffect(() => {
        if (selectedTypes.length > 0) {
            const filteredResults = originalData.filter((item) =>
                item.types.some((type) => selectedTypes.includes(type.type.name))
            );
            setPokeData(filteredResults);
        } else {
            setPokeData(originalData);
        }
    }, [selectedTypes, originalData]);


    const handlePageChange = async (newUrl) => {
        setOriginalData([]);
        setPokeData([]);
        setUrl(newUrl);
    };

    return (
        <div className="block">
            <div>
                <img className="mx-auto w-96" src="./images/pokemonLogo.svg" alt="Pokemon Logo" />
            </div>
            <div className="flex justify-center space-x-10">
                <div className="mx-2">
                    <SearchBar setSearchTerm={setSearchTerm} />
                </div>
                <div className="mr-8">
                    <Filter onFilterChange={handleFilterChange} />
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {pokeData.length > 0 ? (
                    <Card
                        pokemon={pokeData}
                        loading={loading}
                        infoPokemon={(poke) => setPokeDex(poke)}
                    />
                ) : (
                    <p>No Found</p>
                )}
            </div>
            {pokeDex && (
                <div className="info-container">
                    <div className="info">
                        <Pokeinfo data={pokeDex} onClose={handleClose} />
                    </div>
                </div>
            )}
            <div className="flex justify-center">
                {prevUrl && (
                    <button
                        className="bg-transparent m-5 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
                        onClick={() => {
                            handlePageChange(prevUrl)
                            setOriginalData([]);
                            setPokeData([]);
                            setUrl(prevUrl);
                        }}
                    >
                        Previous
                    </button>
                )}
                {nextUrl && (
                    <button
                        className="bg-transparent m-5 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yelloe-500 hover:border-transparent rounded"
                        onClick={() => {
                            handlePageChange(nextUrl)
                            setOriginalData([]);
                            setPokeData([]);
                            setUrl(nextUrl);
                        }}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    );
};

export default Main;
