import { Squash as Hamburger } from 'hamburger-react';
import { useEffect, useState } from 'react';

function NavBar() {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    const LinkClick = () => {
        setOpen(false);
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpen(false); // Fecha o menu caso seja um menu hambúrguer
        }
    };

    return (
        <nav className="navbar flex justify-between items-center px-4 py-2 bg-azul text-white relative">
            
            <ul
                className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 fixed md:static top-0 left-0 w-full h-full md:w-auto md:h-auto bg-azul md:bg-transparent transition-transform duration-300 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
                    }`}
            >
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#inicio" className="text-white">Inicio</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#beneficios" className="text-white">Benefícios</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#pacotes" className="text-white">Pacotes</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#sobre" className="text-white">Sobre nós</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#depoimentos" className="text-white">Depoimentos</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
                <li className="nav-link relative group" onClick={LinkClick}>
                    <a href="#contato" className="text-white">Contato</a>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-[95%]"></span>
                </li>
            </ul>

            {/* Hamburger Menu */}
            <div className="md:hidden z-50">
                <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#FCF9F9" />
            </div>
        </nav>
    );
}

export default NavBar;
