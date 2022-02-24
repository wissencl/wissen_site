import React from 'react';

export const ProyectCard = ({ titulo, descripcion, tecnologias }) => {
  return (
    <>
      <div className="max-w-sm lg:w-72 sm:w-72 m-10 lg:max-w-full cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" data-modal-toggle="defaultModal">
          <div className="border-r border-b border-l border-t border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-4">{ titulo }</div>
            <p className="text-gray-700 text-justify">{ descripcion }</p>
          </div>
          <div className="flex items-center">
              {
                tecnologias.map( (value, i) => (
                  <img key = { i.toString() } className="w-10 h-10 rounded-full mr-4 object-contain" src={ `/assets/images/${ value }`} />
                ))
              }
              <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">Aug 18</p>
              </div>
          </div>
          </div>
      </div>
    </>
  );
};
