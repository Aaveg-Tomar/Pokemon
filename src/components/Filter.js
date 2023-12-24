import { Listbox, Transition } from '@headlessui/react';
import { useState } from 'react';

const Filter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("none");

  const handleFilterSelect = (value) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  const filterOptions = [
    {label: "All" , value:"all"},
    { label: "Poison", value: "poison" },
    { label: "Grass", value: "grass" },
    { label: "Fire", value: "fire" },
    { label: "Normal", value: "normal" },
    
  ];

  return (
    <div className='my-4'>
      <Listbox value={selectedFilter} onChange={handleFilterSelect}>
        <div className="relative mt-1">
          <Listbox.Button className="relative p-2 font-medium text-amber-600 bg-amber-100 hover:bg-amber-200 rounded-lg shadow-lg cursor-pointer">
            <span className='flex items-center px-2'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
              </svg>
            </span>
          </Listbox.Button>

          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-48 py-1 mt-1 text-base bg-white rounded-md shadow-lg max-h-60">
              {filterOptions.map((option) => (
                <Listbox.Option
                  key={option.value}
                  value={option.value}
                  className={({ active }) => `${active ? 'bg-amber-300' : 'hover:bg-amber-300'} px-2 mt-1`}
                >
                  {option.label}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default Filter;
