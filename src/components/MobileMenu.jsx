import { Link } from 'react-router-dom';

const MobileMenu = () => { 

   return (
      <nav className='lg:hidden flex p-10 flex-col items-center gap-4 font-poppins text-lg text-green1 font-semibold bg-white bg-opacity-55 shadow-md absolute w-full top-[65px] left-0 z-40'>
         
         <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" to="/">
            Inicio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
         </Link>
         <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" to="/comunidad-premium">
         Comunidad Premium
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
         </Link>
         <Link className="relative group transition duration-300 ease-in-out hover:text-yellow-600" to="/preguntas-frecuentes">
         Preguntas Frecuentes
         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"/>
         </Link>
         <Link
            to="/contacto"
            className="bg-black text-gray-100 px-8 py-1 rounded-full font-medium hover:bg-yellow-600 hover:text-black transition duration-300 shadow-lg shadow-gray-800 hover:shadow-black transform hover:scale-110"
          >
            Contactanos
         </Link>
      </nav>
   )
}

export default MobileMenu