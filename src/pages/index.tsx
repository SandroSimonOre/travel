//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })
import Image from "next/image"

export default function Home() {

  const recomendadosInfo = [
    {bg: 'bg-yosemite', title: 'Yosemite', description: 'Un respiro del mundo' },
    {bg: 'bg-new_york', title: 'New York', description: 'Gran ciudad, explora ahora!' },
    {bg: 'bg-norway', title: 'Norway', description: 'Conoce nuevos lugares' },
    {bg: 'bg-seattle', title: 'Seattle', description: 'Una ciudad para disfrutar al máximo' },
    {bg: 'bg-switzerland', title: 'Switzerland', description: 'El mejor chocolate caliente que probarás' },
    {bg: 'bg-sidney', title: 'Sidney', description: 'Conoce la famosísima Opera' },
    {bg: 'bg-europe', title: 'Edinburgh', description: 'Castillos y tiempos medievales' },  
  ]

  const destacados = [
    {bg: 'bg-los_angeles', title: 'Los Angeles', description: '4 habitaciones, 3 baños, cocina y piscina privada.' },
    {bg: 'bg-bali', title: 'Bali', description: 'Gran ciudad, explora ahora!' },
    {bg: 'bg-miami', title: 'Miami', description: '3 habitaciones, 2 baños, cocina y excelente vista al mar.' },
    {bg: 'bg-chicago', title: 'Chicago', description: '2 habitaciones, baño y cocina' },
  ]

  return (
    <main className="">
      {/** Hero section */}
      <div className="w-full h-3/4" id="home">
        <div className=" w-full h-full flex flex-col items-center py-4 space-y-96 lg:space-y-0 lg:items-start lg:justify-start lg:pt-56 absolute">
          
          <input
            className="lg:hidden p-3 outline-none transition duration-300 rounded-full shadow-lg focus-within:shadow-sm focus:outline-none focus:ring-2  focus:w-11/12 "
            type="search" name="Searchbar" placeholder="San Francisco" id=""
          />
          <div className=" hidden h-auto lg:w-2/5 lg:flex pb-6 ">
            <p className=" lg:flex text-4xl ml-16 font-bold">Encuentra más ubicaciones como esta</p>
          </div>
          <button className="bg-white w-48 h-auto p-3 lg:ml-16 rounded-full shadow-md font-semibold text-principal transition duration-500 ease-in-out hover:bg-principal hover:text-white transform hover:-translate-y-1 hover:scale-110" id='explore-more'>
            Explorar
          </button>
        </div>

        <div className="w-full h-full bg-cover lg:bg-cover">
          <Image 
            className="w-full h-full lg:hidden" 
            src="/img/sanFrancisco.jpg" 
            width={100}
            height={100}
            alt=""
          />
        </div>
		  
      </div>

      {/** Recomendados Slide */}
      <div className="w-full h-auto lg:px-2">
        <div className="p-6" id="recomendados">
          <p className="text-3xl font-semibold text-principal  dark:text-white">Recomendados</p>
          <div className="w-auto h-80 lg:h-80 items-center mt-6 overflow-x-auto overscroll-x-contain flex space-x-4 lg:space-x-6 scrollbar">
            
            {
              recomendadosInfo.map(i => (
                <div key={i.bg} className="w-48 h-64 flex-none shadow-md rounded-lg transform transition-all hover:-translate-y-4 hover:shadow-xl">
                  <div id="image-container" className={`w-full h-3/5 rounded-t-lg ${i.bg} bg-center bg-cover`}></div>
                  <div className="bg-secondary h-2/5 rounded-b-lg dark:bg-gray-800 ">
                  <p className="text-xl px-4 py-2 font-semibold text-white dark:text-white">{i.title}</p>
                  <p className="text-sm px-4 overflow-ellipsis pr-2 text-white dark:text-white">{i.description}</p>
                  </div>
                </div>
              ))
            }
            
          </div>
        </div>
      </div>

      {/** Destacados */}
      <div className="px-6 h-full lg:px-14" id="rentas_destacadas">
      <p className="text-3xl font-semibold text-principal pb-6 dark:text-white">Estancias destacadas</p>
				<div className="w-full h-full flex flex-col items-center justify-center lg:flex-col">
					{
            destacados.map(item => (
              <div key={item.bg} className={`w-full h-96 ${item.bg} bg-cover rounded-2xl mb-8 lg:flex-none lg:bg-center`}>
							<p className="CardTitle lg:text-black">{item.title}</p>
							<p className="text-md pl-8 text-white mr-24 lg:text-black">{item.description}</p>
					</div>
            ))
          }
          

				</div>

      </div>
    </main>
  )
}
