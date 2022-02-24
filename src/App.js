import { ProyectCard } from "./components/ProyectCard";

function App() {
  const valores = [{
    titulo: 'Prueba',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'react_logo.png',
      'angular_logo.png'
    ]
  },
  {
    titulo: 'Prueba 1',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'react_logo.png',
      'tailwind_logo.png'
    ]
  },
  {
    titulo: 'Prueba 2',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'dart_logo.png',
      'tailwind_logo.png'
    ]
  },
  {
    titulo: 'Prueba 3',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'dart_logo.png',
      'tailwind_logo.png'
    ]
  },
  {
    titulo: 'Prueba 4',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'dart_logo.png',
      'tailwind_logo.png'
    ]
  },
  {
    titulo: 'Prueba 5',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'react_logo.png',
      'tailwind_logo.png'
    ]
  },
  {
    titulo: 'Prueba 6',
    descripcion: 'Culpa labore velit pariatur duis veniam exercitation qui eiusmod veniam magna voluptate non excepteur sit. Do culpa esse fugiat fugiat. Elit ut proident officia mollit sunt eu voluptate. Eu proident officia excepteur tempor aute nulla Lorem eiusmod est in ea commodo in.',
    tecnologias: [
      'react_logo.png',
      'angular_logo.png'
    ]
  }]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 justify-evenly">
        {
          valores.map((value, i) => (
            <ProyectCard
              key = { i.toString() }
              titulo = { value.titulo }
              descripcion = { value.descripcion }
              tecnologias = { value.tecnologias }
            />
          ))
        }
      </div>
    </>
  );
}

export default App;
