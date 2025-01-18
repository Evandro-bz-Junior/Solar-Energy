import { FaWhatsapp } from "react-icons/fa";


function ButtonCta({ className, buttonText = "Solicite um Orçamento" }) {
    return (
        <div className='w-full'>
            
            <a href="#" className={`bg-amarelo text-azul font-bold   w-[200px] h-10   rounded-xl flex items-center justify-center cursor-pointer  hover:bg-verde hover:text-white transition duration-300 select-none ${className}`}>
            <FaWhatsapp className="me-1 font-bold"/> {buttonText}
            </a>
        </div>
    );
}

export default ButtonCta;