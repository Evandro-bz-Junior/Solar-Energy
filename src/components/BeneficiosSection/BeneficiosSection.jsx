import beneficiosBgImg from '../../assets/benef-background.jpeg'
import itemImg1 from '../../assets/benef1.png'
import itemImg2 from '../../assets/benef2.png'
import itemImg3 from '../../assets/benef3.png'
import itemImg4 from '../../assets/benef4.png'

function BeneficiosSection() {
  return (
    <section id='beneficios' style={{ backgroundImage: `url(${beneficiosBgImg})` }}
      className=' py-8 bg-cover bg-center bg-no-repeat relative '>

      <div className="absolute inset-0 bg-azul  bg-opacity-80  "></div>

      <div className="container max-w-5xl relative mx-auto flex flex-col gap-y-6 items-center">

        <h1 className='text-2xl	sm:text-3xl md:text-4xl font-bold text-white  '>Por que escolher energia solar?</h1>
        <span className='  text-white w-80 md:w-[480px] text-center  	'>Energia solar é mais do que economizar, é uma escolha inteligente para o futuro do planeta e o seu bolso.</span>

        <div className="itens-area grid grid-cols-2 lg:flex gap-2 md:gap-4 lg:gap-2 justify-center">

          <div className="item w-44 lg:w-[250px] h-64 py-3 px-3 bg-white hover:bg-verde text-verde hover:text-white transition-all duration-300  flex flex-col gap-y-2  items-center rounded-md">
            <div className="item-icon">
              <img src={itemImg1} className=' w-16 lg:w-[80px]   ' />
            </div>
            <div className="item-info  text-center flex flex-col gap-y-2">
              <h6 className='text-lg h-[32px] font-bold'  >Economia</h6>
              <span  >Reduza até 95% da sua conta de luz. Mais energia para você e menos custos no final do mês.</span>
            </div>
          </div>

          <div className="item w-44 lg:w-[250px] h-64 py-3 px-3 bg-white hover:bg-verde text-verde hover:text-white transition-all duration-300 flex flex-col gap-y-2  items-center rounded-md">
            <div className="item-icon">
              <img src={itemImg2} className='w-16 lg:w-[80px] ' />
            </div>
            <div className="item-info   text-center flex flex-col gap-y-2">
              <h6 className='text-lg h-[32px] font-bold'  >Sustentabilidade</h6>
              <span  >Contribua para um futuro mais limpo com energia 100% renovável.</span>
            </div>
          </div>

          <div className="item w-44 lg:w-[250px] h-64 py-3 px-3 bg-white hover:bg-verde text-verde hover:text-white transition-all duration-300 flex flex-col gap-y-2  items-center rounded-md">
            <div className="item-icon">
              <img src={itemImg3} className='w-16 lg:w-[80px] ' />
            </div>
            <div className="item-info   text-center flex flex-col gap-y-2">
              <h6 className='text-lg h-[48px] md:h-[32px] font-bold '  >Valorização</h6>
              <span  >Imóveis com energia solar se destacam e valorizam no mercado imobiliário.</span>
            </div>
          </div>

          <div className="item w-44 lg:w-[250px] h-64 py-3 px-3 bg-white hover:bg-verde text-verde hover:text-white transition-all duration-300 flex flex-col gap-y-2  items-center rounded-md">
            <div className="item-icon">
              <img src={itemImg4} className='w-16 lg:w-[80px] ' />
            </div>
            <div className="item-info   text-center flex flex-col gap-y-2  ">
              <h6 className='text-lg h-[48px] md:h-[32px] font-bold'  >Independência Energética</h6>
              <span  >Diga adeus às oscilações da conta de luz e produza sua própria energia.</span>
            </div>
          </div>


        </div>

      </div>


    </section>
  );
}

export default BeneficiosSection;