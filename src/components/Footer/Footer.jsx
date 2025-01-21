import logoImg from '../../assets/logo.png'

function Footer() {
    return (
        <footer id="footer" className='bg-amarelo text-azul px-4 pb-8 md:py-6 text-center  text-xs'>
            <div className="container mx-auto flex flex-col md:flex-row justify-around md:justify-evenly  gap-3 md:gap-0 lg:gap-5   text-start">

                <div className='flex  items-center sm:block'>
                    <img src={logoImg} alt="logoImg" className='h-20 select-none' draggable="false"/>
                    <p className='w-60 md:w-48 lg:w-60  text-start font-bold'>Transformamos a luz do sol em economia e sustentabilidade para você.</p>
                </div>

                <div className='flex flex-col gap-2  '>
                    <h2 className='text-xl font-bold'>
                        Links Rápidos
                    </h2>
                    <ul className='grid grid-cols-2	gap-2 sm:gap-1 w-52'>
                        <li className=""><a className='' href="#inicio">Inicio</a></li>
                        <li className=""><a className='' href="#beneficios">Benefícios</a></li>
                        <li className=""><a className='' href="#pacotes">Pacotes</a></li>
                        <li className=""><a className='' href="#sobre">Sobre nós</a></li>
                        <li className=""><a className='' href="#depoimentos">Depoimentos</a></li>
                        <li className=""><a className='' href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-xl font-bold'>Contato e Redes sociais</h4>
                    <div className='flex flex-col gap-2'>
                        <p>Endereço: Rua Solar, 123 - Sustentabilidade, SP</p>
                        <p>Telefone: (11) 1234-5678</p>
                        <p>Email: <a href="mailto:contato@solaresustentavel.com">contato@solaresustentavel.com</a></p>
                    </div>
                    <div className='flex   gap-4'>
                        <span >WhatsApp: <a className='font-bold' href="#">Clique aqui para conversar</a></span>
                        <a className='font-bold' href="#">Siga-nos no instagram</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;