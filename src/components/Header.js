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
        menu.classList.add('transition-transform', 'absolute', 'top-5', 'bg-white', 'flex', 'flex-col', 'w-[320px]', 'gap-x-0', 'gap-y-5', 'p-10', 'text-black', 'text-center', 'rounded');
    }
}

function Header() {
    return (
        <div className="w-full bg-navy-blue flex items-center justify-around max-[800px]:justify-between max-[800px]:px-6 mb-10 backdrop-blur-xl pt-10 max-[800px]:pt-0">
            <div>
                <a href="/" className='flex gap-5 items-center'>
                    <img src={logo} alt="logo" className='w-10 h-10' />
                    <h1 className='logo text-[20px] font-[900] max-[800px]:text-[24px]'>Chaincrib</h1>
                </a>
            </div>
            <div id='menu' className="text-white flex gap-x-8 max-[800px]:hidden">
                <a href="/" target='_blank' className="px-[24px] py-[8px] h-10 border rounded-full border-[#85B5F8]">About</a>
                <a href="/" target='_blank' className="px-[24px] py-[8px] h-10 border rounded-full border-[#85B5F8]">How It Works</a>
                <a href="/" target='_blank' className="px-[24px] py-[8px] h-10 border rounded-full border-[#85B5F8]">Team</a>
                <a href="/" target='_blank' className="px-[24px] py-[8px] h-10 border rounded-full border-[#85B5F8]">FAQ</a>
            </div>
            <div className='max-[800px]:hidden'>
                <a href="/" className="px-[18px] py-[8px] rounded-full text-white bg-[#1656B9] border border-[#2074F5] flex gap-x-2 items-center">
                    <span className='text-lg'>Join Discord</span>
                    <img src={discord} alt="discord" className='w-6 h-5' />
                </a>
            </div>
            <div className='hidden max-[800px]:block'>
                <img src={menuButton} alt="" onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;