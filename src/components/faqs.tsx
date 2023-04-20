const data = [
    {
        id: 1, 
        title: 'Política de Cancelación',
        content:'Para estancias menores a una semana es importante avisar con 3 días de anticipación, de caso contario será sancionado'
    },
    {
        id: 2,
        title: 'Métodos de pago',
        content: 'Aceptamos distintos métodos de pago: VISA, MasterCard, American Express, Paypal y Binance'
    },
    {
        id: 3,
        title: 'Mascotas',
        content: 'El tema de las mascotas dependerá directamente del anfitrión'
    },
    {
        id: 4,
        title: 'Información de Seguridad',
        content: 'Todas nuestras estancias cuentan con seguro en caso de accidentes'
    },
    {
        id: 5,
        title: 'Estancias Largas',
        content: 'Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un monto del 50% del valor de la renta'
    }
]

export const Faqs = () => {
    return (
        <div className="w-full h-auto lg:px-6" id="faqs">
				<div className="w-full h-auto px-6 flex flex-col space-y-4 lg:px-0">
					<p className="text-3xl font-semibold text-principal lg:text-5xl lg:pb-4 dark:text-white">FAQS</p>
					{
                        data.map(item => (
                            <div key={item.id}>
						        <p className="text-xl font-medium text-principal dark:text-white">{item.title}</p>
						        <p className="text-md pt-2 dark:text-white">{item.content}</p>
					        </div>        
                        ))
                    }
                </div>
			</div>
    )   
}