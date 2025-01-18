import planosBgImg from '../../assets/offer-background.jpg'
import equipImg from '../../assets/equip.jpg'
import ButtonCta from '../ButtonCta/ButtonCta';

function PlanosSection() {
    return (
        <section id='pacotes' className='py-8 bg-cover bg-center bg-no-repeat relative '
            style={{ backgroundImage: `url(${planosBgImg})` }}>
            <div className="absolute inset-0 bg-amarelo  bg-opacity-80  "></div>

            <div className="container max-w-5xl relative mx-auto flex flex-col gap-y-8 items-center">
                <div className='info-area flex flex-col gap-y-4 items-center text-azul font-bold'>
                    <h4 className=' text-2xl sm:text-3xl md:text-4xl text-center font-bold mt-4'>Encontre a solução perfeita para você!</h4>
                    <span className=' w-80  md:w-[700px] text-center'>Desde residências até grandes indústrias, temos o sistema ideal para sua necessidade.</span>
                    <span className=' w-80  md:w-[650px] text-center' >Ao escolher nossa solução de energia solar, você garante uma instalação 100% gratuita realizada por profissionais qualificados, com garantia de até 25 anos nos painéis solares. Acompanhe a performance do seu sistema em tempo real através do monitoramento remoto 24/7, garantindo eficiência e tranquilidade. Além disso, reduza até 95% da sua conta de luz enquanto investe em um futuro sustentável e valoriza o seu imóvel.</span>
                </div>

                <div className="offer-area grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 justify-center">

                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl ' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema: 3 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className=" md:hidden"/>  350 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de <br className=" md:hidden"/> R$ 199/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>

                    
                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema: 6 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className="md:hidden"/>  700 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de<br className="md:hidden"/>  R$ 349/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>
                    
                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema:10 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className="md:hidden"/>  1.200 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de<br className="md:hidden"/>  R$ 599/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>
                    
                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema: 15 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className="md:hidden"/>  1.800 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de <br className="md:hidden"/> R$ 899/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>
                    
                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema: 20 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className="md:hidden"/>  2.500 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de <br className="md:hidden"/> R$ 1.099/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>
                    
                    <div className="offer-item w-44 md:w-[270px] min-h-fit md:h-[280px]  py-3 px-2 bg-azul text-amarelo flex flex-col items-center rounded-xl  gap-3 ">
                        <img src={equipImg} alt='equipImg' className='w-[110px] rounded-xl' />
                        <div className="offer-content flex flex-col items-center gap-3 w-full">
                            <span className='w-36 md:w-fit text-center'>Potência do Sistema: 25 kWp</span>
                            <span className='w-36 md:w-fit text-center'>Geração Mensal:<br className="md:hidden"/>  3.200 kWh</span>
                            <span className='w-36 md:w-fit text-center'>A partir de <br className="md:hidden"/> R$ 1.399/mês.</span>
                            <ButtonCta className="w-full text-sm" buttonText="Solicite Aqui" />
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
}

export default PlanosSection;