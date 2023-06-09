import Image from "next/image"

export const Hero = () => {
    
    return (
        
        <div className="w-full h-3/4" id="home">

            <div className=" w-full h-full flex flex-col items-center py-4 space-y-96 lg:space-y-0 lg:items-start lg:justify-start lg:pt-56 absolute">
                <input
                    className="lg:hidden p-3 outline-none transition duration-300 rounded-full shadow-lg focus-within:shadow-sm focus:outline-none focus:ring-2  focus:w-11/12 "
                    type="search" name="Searchbar" placeholder="Search a city" id=""
                />
                <div className="hidden h-auto lg:w-2/5 lg:flex pb-6 ">
                    <p className=" lg:flex text-4xl ml-16 font-bold">Encuentra más ubicaciones como esta</p>
                    </div>
                <button className="bg-white w-48 h-auto p-3 lg:ml-16 rounded-full shadow-md font-semibold text-principal transition duration-500 ease-in-out hover:bg-principal hover:text-white transform hover:-translate-y-1 hover:scale-110" id='explore-more'>
                    Explorar
                </button>
            </div>

            <div className="w-full h-full bg-cover lg:bg-cover lg:bg-sanFranciscoDesktop lg:bg-center">
                <Image 
                    className="w-full h-full lg:hidden" 
                    src="/img/sanFrancisco.jpg" 
                    width={100}
                    height={100}
                    alt=""
                />
            </div>
		  
        </div>
        
    )
}