const recomendadosInfo = [
    {bg: 'bg-yosemite', title: 'Yosemite', description: 'Un respiro del mundo' },
    {bg: 'bg-new_york', title: 'New York', description: 'Gran ciudad, explora ahora!' },
    {bg: 'bg-norway', title: 'Norway', description: 'Conoce nuevos lugares' },
    {bg: 'bg-seattle', title: 'Seattle', description: 'Una ciudad para disfrutar al máximo' },
    {bg: 'bg-switzerland', title: 'Switzerland', description: 'El mejor chocolate caliente que probarás' },
    {bg: 'bg-sidney', title: 'Sidney', description: 'Conoce la famosísima Opera' },
    {bg: 'bg-europe', title: 'Edinburgh', description: 'Castillos y tiempos medievales' },  
  ]

export const Recommended = () => {
    return (
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
    )
}