import discord from '../images/discord.png';
import menuButton from '../images/menu.png';
import logo from '../images/logo.png';

function toggleMenu() {
    const menu = document.getElementById('menu');

    if ((menu.classList).contains('absolute')) {
        menu.classList.remove('transition-transform', 'absolute', 'top-5', 'bg-white', 'flex', 'flex-col', 'w-[320px]', 'gap-x-0', 'gap-y-5', 'p-10', 'text-black', 'text-center', 'rounded');
        menu.classList.add('flex', 'max-[800px]:hidden', 'text-white');
    } else {
        menu.classList.remove('flex', 'max-[800px]:hidden', 'text-white');
        menu.classList.add('absolute', 'top-5', 'left-2', 'bg-white', 'flex', 'flex-col', 'w-[97%]', 'gap-x-0', 'gap-y-5', 'p-5', 'py-10', 'pt-0', 'text-black', 'text-center', 'rounded', 'duration-5000');
    }
}

function Header() {

    const scrollToContent = (e) => {
        const btn = e.target;
        const section = btn.getAttribute('target');
        const target = document.getElementById(section);
        target.scrollIntoView({behavior: 'smooth'});

        if (window.innerWidth < 800) {
            toggleMenu();
        }
    }

    return (
        <div className="w-full bg-navy-blue flex items-center justify-around max-[800px]:justify-between max-[800px]:px-8 mb-10 backdrop-blur-xl pt-10 max-[800px]:pt-5">
            <div>
                <a href='/' className='flex gap-2 items-center'>
                    <img src={logo} alt="logo" className='w-10 h-10' />
                    <h1 className='logo text-[20px] font-[900] max-[800px]:text-[24px]'>Chaincrib</h1>
                </a>
            </div>
            <div id='menu' className="text-white flex gap-x-8 max-[800px]:hidden mobile-menu-bg">
                <button className='text-3xl text-right text-white hidden max-[800px]:block mr-3' onClick={toggleMenu}>X</button>
                <button onClick={(e) => scrollToContent(e)} target='about' className="font-semibold max-[800px]:rounded-full max-[800px]:bg-[#1656B9] max-[800px]:border max-[800px]:border-[#2074F5] max-[800px]:px-[24px] max-[800px]:py-[8px] max-[800px]:text-white">About</button>
                <button onClick={(e) => scrollToContent(e)} target='how' className="font-semibold max-[800px]:rounded-full max-[800px]:bg-[#1656B9] max-[800px]:border max-[800px]:border-[#2074F5] max-[800px]:px-[24px] max-[800px]:py-[8px] max-[800px]:text-white">How It Works</button>
                {/* <button onClick={(e) => scrollToContent(e)} target='team' className="font-semibold max-[800px]:rounded-full max-[800px]:bg-[#1656B9] max-[800px]:border max-[800px]:border-[#2074F5] max-[800px]:px-[24px] max-[800px]:py-[8px] max-[800px]:text-white">Team</button> */}
                <button onClick={(e) => scrollToContent(e)} target='faq' className="font-semibold max-[800px]:rounded-full max-[800px]:bg-[#1656B9] max-[800px]:border max-[800px]:border-[#2074F5] max-[800px]:px-[24px] max-[800px]:py-[8px] max-[800px]:text-white">FAQ</button>
                <a href='/' className="hidden px-[24px] py-[8px] h-10 rounded-full text-white bg-[#1656B9] border border-[#2074F5] max-[800px]:flex gap-x-2 items-center justify-center">
                    <span className='text-lg'>Join Discord</span>
                    <img src={discord} alt="discord" className='w-6 h-5' />
                </a>
            </div>
            <div className='max-[800px]:hidden'>
                {/* <a href="/" className="px-[24px] py-[8px] h-10 rounded-full text-white bg-[#1656B9] border border-[#2074F5] flex gap-x-2 items-center">
                    <span className='text-lg'>Join Discord</span>
                    <img src={discord} alt="discord" className='w-6 h-5' />
                </a> */}
            </div>
            <div className='hidden max-[800px]:block'>
                <img src={menuButton} className='h-5' alt="" onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;