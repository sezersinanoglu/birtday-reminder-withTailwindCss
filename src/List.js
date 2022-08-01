import React from 'react';

const List = ({people}) => {
  return (
    <>
     {people.map((person) => {
      const {id,name,age,image} = person;
      return <article key={id} className="flex flex-row justify-start items-center mb-2">
        <img className='h-16 w-16 items-center rounded-full m-3 shadow-sm' src={image} alt={name} />
        <div className='text-left'>
          <h4 className='font-bold text-lg'>{name}</h4>
          <p className='text-gray-400'>{age} years</p>
        </div>
      </article>
    })}
    </>
  );
};

export default List;
