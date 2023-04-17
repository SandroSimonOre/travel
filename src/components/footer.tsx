export const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black p-6 mt-8 mb-24 space-y-2 lg:px-14" id="nosotros">
            <p className="text-lg">Acerca de</p>
            {
                [
                    'Inversionistas',
                    'Empleos',
                    'Política de Privacidad',
                    'Terminos y Condiciones',
                    'Platzi Travel,Inc',
                    'Síguenos'
                ].map((item, index) => (
                    <p key={index} className="text-sm text-gray-300">{item}</p>        
                ))
            }
            
		</footer>
    )
}