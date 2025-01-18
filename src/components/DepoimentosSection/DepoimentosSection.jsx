import dpBgImg from '../../assets/dep-background.jpg'
import dpImg from '../../assets/dep-img.png'

function DepoimentosSection() {
    return (
        <section id='depoimentos' className=' bg-cover bg-no-repeat overflow-hidden'
            style={{ backgroundImage: `url(${dpBgImg})` }}>

            <div className='container max-w-5xl mx-auto pt-6 flex justify-center  '>

                <div className="content-area flex flex-col gap-8 justify-center items-center mb-10 w-full px-5 sm:pe-0">
                    <h3 className='text-azul font-bold w-72 md:w-full md:ps-10 lg:w-full   text-center md:text-left '>Varias famílias e empresas já optaram por energia solar conosco. <br /> Veja o que eles estão dizendo:</h3>

                    <div className="deps-area text-white flex flex-col  w-full md:w-[400px] lg:w-[650px]  gap-5">
                        <div className="deps-item bg-verde w-72 md:w-80 lg:w-96 p-3 rounded-lg">
                            <span>"Minha conta caiu de R$ 500 para R$ 20, Melhor investimento que já fiz!"</span>
                        </div>

                        <div className="deps-item bg-verde w-72 md:w-80 lg:w-96  p-3 rounded-lg self-end">
                            <span>"A instalação foi rápida e eficiente. Agora, me sinto contribuindo com o futuro do planeta."</span>
                        </div>

                        <div className="deps-item bg-verde w-72 md:w-80 lg:w-96 p-3 rounded-lg">
                            <span>"Um atendimento impecável e uma economia que é perceptível no bolso!"</span>
                        </div>


                    </div>
                </div>

                <div className="img-area flex items-end ">
                    <img src={dpImg} alt="dep-img" className='w-[400px] md:h-full  object-cover hidden sm:block  select-none' draggable="false"/>
                </div>

            </div>

        </section>
    );
}

export default DepoimentosSection;