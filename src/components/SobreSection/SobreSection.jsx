import aboutImg from '../../assets/about-img.png'
import aboutBg from '../../assets/about background.png'

function SobreSection() {
    return (
        <section id='sobre' className='bg-azul  pt-5 relative overflow-hidden'>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className='container max-w-5xl mx-auto flex flex-col-reverse md:flex-row justify-center  items-center gap-12 md:gap-4 lg:gap-8 '>
                <div className="img-area relative w-[400px]    h-[500px] overflow-hidden">
                    <div
                        className="absolute w-full h-full md:w-[400px]   bg-cover bg-center bg-no-repeat opacity-20  "
                        style={{ backgroundImage: `url(${aboutBg})` }}
                        draggable="false"
                    ></div> 
                    <img
                        src={aboutImg}
                        alt="about-img"
                        className="absolute w-[400px]   h-[500px] object-cover left-5 md:right-10  z-10 drop-shadow-2xl select-none overflow-hidden"
                        draggable="false"
                    />
                </div>

                <div className="content-area text-white flex flex-col gap-5 w-[360px] md:w-[300px]  lg:w-[400px] z-10">
                    <h2 className='text-4xl font-bold text-center'>Quem somos? </h2>
                    <span className=' block  '>Somos apaixonados por sustentabilidade e inovação. Com experiência no mercado de energia solar, ajudamos famílias e empresas a transformar suas vidas com energia limpa e eficiente.</span>
                    <ul className="list-disc pl-4 pt-2">
                        <li className='pb-4'>Trabalhamos com produtos homologados e com garantia de qualidade.</li>
                        <li className='pb-4'>Profissionais treinados para atender você com excelência.</li>
                        <li>Priorizamos a sua satisfação e a entrega de resultados reais.</li>
                    </ul>
                </div>
            </div>

        </section>
    );
}

export default SobreSection;