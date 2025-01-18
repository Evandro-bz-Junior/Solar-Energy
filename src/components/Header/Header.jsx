import logoImg from '../../assets/logo.png'
import NavBar from '../NavBar/NavBar';

function Header() {
    return (
        <header className="bg-azul " id='inicio'>
            <div className="header w-full h-22 container mx-auto max-w-screen-lg flex justify-between items-center px-5	">
                <div className="logo">
                    <img src={logoImg} alt="img-logo" className='w-27 h-20 px-2 select-none'  draggable="false"/>
                </div>
                
                <NavBar/>

            </div>
        </header>
    );
}

export default Header;
