import MyForm from "../components/Contacto"
import HomeSection from "../components/Home-section"

const Home= () => {
   return (
      <div className="pt-16">
         <div className="w-full">
            <HomeSection/>
            <MyForm/>
         </div>
      </div>
   )
}

export default Home
