import contatoImg from '../../assets/contact-img.png'
import contatoBg from '../../assets/contact-background.jpg' 
import ContactForm from '../ContatcForm/ContatcForm';



function ContatoSection() {

   

    return (
        <section id='contato' className='  bg-cover bg-center bg-no-repeat relative overflow-hidden '
            style={{ backgroundImage: `url(${contatoBg})` }}>
            <div className="absolute inset-0 bg-azul  bg-opacity-95  "></div>

            <div className="container max-w-5xl relative mx-auto flex flex-col-reverse md:flex-row /* lg:flex-row */     justify-center items-end   pt-10">
                <div className="img-area ">
                    <img src={contatoImg} alt="contato-Img" className='w-[500px] md:w-400px lg:w-[500px] h-full   object-cover drop-shadow-2xl select-none' draggable="false"/>
                </div>

                <div className="form-area flex flex-col gap-3 justify-center items-center sm:items-start mb-3 md:mb-8">
                    <h2 className="text-4xl text-center w-full md:text-start text-white font-bold mb-2">Pronto para economizar?</h2>
                    <span className=" w-80 md:w-[300px] lg:w-[450px]  text-white">Entre em contato com nossa equipe e comece hoje mesmo a sua jornada rumo à economia e sustentabilidade.</span>

                    <ContactForm/>

                </div>

            </div>

        </section>
    );
}

export default ContatoSection;