import React from "react";
import Spinner from "./Spinner";
const Card = ({ pokemon, loading, infoPokemon,}) => {
    // console.log(pokemon);
   

    return (
        <>
            {
                loading ? <h1><Spinner /></h1> :
                    pokemon.map((item) => {
                        const str = item.types[0].type.name;
                        const modstr = str[0].toUpperCase() + str.slice(1);
                        return (
                            <div className="rounded hover:shadow-2xl shadow-lg m-6">
                                <div className=" w-72 flex flex-wrap " key={item.id} >
                                    <img className="w-full" src={item.sprites.front_default} alt="Mountain" />
                                    <div className="px-6 py-1">
                                        <div className="text-gray-700 text-base" style={{ fontFamily: 'Ubuntu', }} >{item.id}</div>
                                        <p className="font-bold text-xl mb-2">
                                            {item.name.toUpperCase()}
                                        </p>
                                        <div className="text-gray-700 text-base" style={{ fontFamily: 'Ubuntu', }}>
                                            <p className="font-bold text-xl mb-2 ">Type : {modstr}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-center ">
                                    <button className=" bg-transparent my-2 hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white  border border-yellow-500 hover:border-transparent rounded" onClick={() => infoPokemon(item)}><p className=" text-lg px-3">Open</p></button>
                                </div>
                            </div>

                        )
                    })
            }

        </>
    )
}
export default Card;