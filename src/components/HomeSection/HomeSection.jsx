import homeBackground from '../../assets/home-background.jpg';
import homeImg from '../../assets/home img.png' 
import ButtonCta from '../ButtonCta/ButtonCta';
import wave1 from '../../assets/wave 1.png'
import wave2 from '../../assets/wave 2.png'

function HomeSection() {
    return (
        <section  className=" h-[450px] bg-cover bg-center bg-no-repeat relative overflow-hidden"
            style={{ backgroundImage: `url(${homeBackground})` }}>
            <img src={wave1} alt="onda" className='absolute h-[150px] sm:h-[200px] bottom-0 right-0 transform rotate-270 select-none   object-cover overflow-hidden z-20' draggable="false" />
            <img src={wave2} alt="onda" className='absolute h-[110px] sm:h-[220px]   top-0 sm:-top-7 left-0  object-cover overflow-hidden z-20 select-none opacity-70'  draggable="false" />
            
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <div className="container max-w-5xl mx-auto  flex flex-col sm:flex-row  justify-between h-full relative  ">

                <div className='text-white flex flex-col gap-4 justify-center ms-5 md:ms-10 mt-16 md:mt-10  z-20'>
                    <h1 className='text-2xl	 md:text-4xl font-bold md:w-[400px] lg:w-[500px]	'>Sua Independência Energética</h1>
                    <span className='text-sm sm:text-base md:text-lg font-bold w-full sm:w-[400px]'>Transforme a luz do sol em economia para sua casa ou empresa. Invista no futuro hoje mesmo!</span>
                    <ButtonCta />
                </div>

                <div className="flex justify-center">
                     
                    <img src={homeImg} alt="home-image" className=' w-[400px] md:w-[600px] object-cover  select-none absolute   bottom-0 right-0  md:-right-20 lg:-right-20 z-20 drop-shadow' draggable="false"/>
                </div>

            </div>
            
        </section>
    );
}

export default HomeSection;