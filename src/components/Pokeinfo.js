import React from "react";

const Pokeinfo = ({ data, onClose }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className=" bg-none backdrop-blur-sm ">
          <div className="bg-yellow-300 p-2 rounded-md">
          <div className=" flex mb-4 justify-between  ">
            <h1 className=" font-bold font-serif text-center text-3xl mr-11">{data.name.toUpperCase()}</h1>
            <button className="close-btn ml-20" onClick={onClose}>
              <img className=" w-8" src="./images/cancel.png" />
            </button>
          </div>
          <div className=" flex flex-wrap">
            <div className=" m-8">
              <img className=" ml-auto mr-auto w-72 "
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                alt="image"
              />
            </div>
            <div>
              <div className="abilities">
                {data.abilities.map((poke) => {
                  return (
                    <div className="group" key={poke.ability.name}>
                      <h2 className=" text-lg font-mono font-semibold mb-2">Ability : {poke.ability.name}</h2>
                    </div>
                  );
                })}
              </div>
              <div className="base-stat">
                {data.stats.map((poke) => {
                  return (
                    <h3 className="text-lg font-mono font-semibold mb-2" key={poke.stat.name}>
                      {poke.stat.name} : {poke.base_stat}
                    </h3>
                  );
                })}
              </div>
              
            </div>
          </div>

          </div>

        </div>
      )}
    </>
  );
};

export default Pokeinfo;
