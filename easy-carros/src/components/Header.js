import '../assets/Header.css';

function Header() {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-links'>
                    <img src="../assets/Easycarros.png" alt="" srcset=""></img>
                    <a href='/'>Home</a>
                    <a href='/'>Sobre</a>
                    <a href='/'>Alugue um carro</a>
                    <a href='/'>Lançamentos</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;