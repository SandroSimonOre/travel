import { TbWorldWww } from 'react-icons/tb'
import { SiLinkedin } from 'react-icons/si'
import { GoMarkGithub } from 'react-icons/go'

export const Footer = () => {
    return (
        <footer className="w-full h-auto bg-black p-6 mt-8 mb-24 space-y-2 lg:px-14 " id="nosotros">
            
            <div className='flex flex-col py-12 lg:flex-row lg:justify-around'>
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
            </div>
            

            <div className='flex w-full justify-center items-center gap-6 pb-12'>
                <a href="https://www.linkedin.com/in/sandrosimonore/" target="_blank" rel="noopener noreferrer">
                    <SiLinkedin size={40}/>
                </a>
                <a href="https://github.com/SandroSimonOre" target="_blank" rel="noopener noreferrer">
                    <GoMarkGithub size={40} />
                </a>
                <a href="https://sandrosimon.com" target="_blank" rel="noopener noreferrer">
                    <TbWorldWww size={50} />    
                </a>
            </div>
            
		</footer>
    )
}