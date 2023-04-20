const featured = [
    {
        bg: 'bg-chicago',
        title: 'Chicago', 
        description: '4 habitaciones, 3 baños, cocina y piscina privada.',
        span: 'lg:col-span-3 lg:row-span-1',
    },
    {
        bg: 'bg-los_angeles', 
        title: 'Los Angeles', 
        description: 'Gran ciudad, explora ahora!',
        span: 'lg:col-span-1 lg:row-span-2',
    },
    {
        bg: 'bg-miami', 
        title: 'Miami', 
        description: '3 habitaciones, 2 baños, cocina y excelente vista al mar.',
        span: 'lg:col-span-2 lg:row-span-1',
    },
    {
        bg: 'bg-bali', 
        title: 'Bali', 
        description: '2 habitaciones, baño y cocina',
        span: 'lg:col-span-2 lg:row-span-1',
    },
  ]

export const Featured = () => {
    return (
        <div className="px-6 h-auto lg:h-auto" id="rentas_destacadas">
            <p className="text-3xl font-semibold text-principal pb-6 dark:text-white">Estancias destacadas</p>
            <div className="w-full h-auto flex flex-col items-center justify-center lg:grid lg:grid-cols-3 lg:grid-rows-[repeat(3,_24rem)] lg:gap-6">
                {
                    featured.map(item => (
                        <div key={item.bg} className={`w-full h-48 ${item.bg} bg-cover rounded-2xl mb-8 ${item.span} lg:bg-center lg:h-full`}>
                            <p className="text-3xl px-8 pt-8 pb-1 font-semibold text-white">{item.title}</p>
                            <p className="text-md pl-8 text-white mr-24">{item.description}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}