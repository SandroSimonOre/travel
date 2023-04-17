const destacados = [
    {bg: 'bg-los_angeles', title: 'Los Angeles', description: '4 habitaciones, 3 baños, cocina y piscina privada.' },
    {bg: 'bg-bali', title: 'Bali', description: 'Gran ciudad, explora ahora!' },
    {bg: 'bg-miami', title: 'Miami', description: '3 habitaciones, 2 baños, cocina y excelente vista al mar.' },
    {bg: 'bg-chicago', title: 'Chicago', description: '2 habitaciones, baño y cocina' },
  ]

export const Featured = () => {
    return (
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
    )
}

    

