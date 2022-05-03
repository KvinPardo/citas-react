import { Paciente } from "./Paciente";
// rafce -> atajo
// Hooks => useState - useEffect - useContext
// useEffect -> siempre es un callback, que se ejecuta cuando un state cambia o cuando el componente está listo

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

// Iterar -> .map es el mejor , itera y crea un nuevo arreglo
// .length para saber cuánto mide un arreglo


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      { pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className="text-indigo-600 font-bold ">Pacientes y Citas</span>
          </p>
    
          { pacientes.map( paciente => (                              
              <Paciente 
                  key={ paciente.id }
                  paciente={ paciente }
                  setPaciente={ setPaciente }   
                  eliminarPaciente={ eliminarPaciente}              
              />
          ))}
        </>


      ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
              <p className="text-xl mt-5 mb-10 text-center">
              Agrega Pacientes y aparecerán {''}
            <span className="text-indigo-600 font-bold ">aquí</span>
            </p>
          
          </>

      )}
    </div>
    
  )
}

export default ListadoPacientes