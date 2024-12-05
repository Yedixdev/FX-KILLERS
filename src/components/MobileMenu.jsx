import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaDiscord } from 'react-icons/fa'; 

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
            className="bg-yellow-600 text-gray-100 px-8 py-1 rounded-full font-medium hover:bg-black transition duration-300 shadow-md shadow-gray-800 hover:shadow-black"
          >
            Contactanos
         </Link>
         <div className='flex gap-10 justify-center items-center'>
            <a
               href="https://www.youtube.com/@babyivanfx"
               target="_blank"
               rel="noopener noreferrer"
               className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
               >
               <FaYoutube/>
            </a>
            <a
               href="https://www.instagram.com/babyivanfx/"
               target="_blank"
               rel="noopener noreferrer"
               className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
               >
               <FaInstagram/> 
            </a>
            <a
               href="#"
               target="_blank"
               rel="noopener noreferrer"
               className="text-green1 hover:text-yellow-600 text-3xl transition duration-300 transform hover:scale-150"
               >
               <FaDiscord/>
            </a>
            
          
         </div>
         
         
         
      </nav>
   )
}

export default MobileMenu