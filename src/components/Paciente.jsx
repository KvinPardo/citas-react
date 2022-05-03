import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente;

    // const handleEliminar = () => {
    //   const respuesta = confirm('¿Dedeas Eliminar este Paciente?');

    //   if(respuesta) {
    //     eliminarPaciente(id);
    //   }
    // }

    const handleEliminar = () => {
      Swal.fire({
        title: '¿Estás seguro de eliminar este Paciente?',
        text: "No se puede revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, elimínalo!'

    }).then((result) => {
        if (result.isConfirmed) {
            eliminarPaciente(id);  //llamar el prop y enviar el id
            Swal.fire(
            'Eliminado!',
            'Se ha eliminado el Paciente',
            'success'
            )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire(
            'Cancelado',
            '',
            'error'
          )
        }

      })
    }
    
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
          <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
          <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
          <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha: {''}
          <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Consulta: {''}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
          <button type="button" 
                  className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg" 
                  onClick= { () => setPaciente(paciente)}
                  >Editar</button>
          <button type="button" 
                  className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                  onClick={handleEliminar}
                  >Eliminar</button>
        </div>
      </div>
  )
}
