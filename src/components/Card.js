import React from "react";
import Spinner from "./Spinner";
const Card = ({ pokemon, loading, infoPokemon }) => {
    // console.log(pokemon);
    return (
        <>
            {
                loading ? <h1><Spinner/></h1> :
                    pokemon.map((item) => {
                        return (
                            <div className=" w-72 flex flex-wrap rounded hover:shadow-2xl shadow-lg m-6" key={item.id} onClick={() => infoPokemon(item)}>
                                <img className="w-full" src={item.sprites.front_default} alt="Mountain" />
                                <div className="px-6 py-4">
                                    <div className="text-gray-700 text-base" style={{fontFamily:'Ubuntu',}} >{item.id}</div>
                                    <p className="font-bold text-xl mb-2">
                                        {item.name.toUpperCase()}
                                    </p>
                                </div>
                            </div>
                        )
                    })
            }

        </>
    )
}
export default Card;