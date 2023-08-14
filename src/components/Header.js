import discord from '../images/discord.png';
import menuButton from '../images/menu.png';

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
        <div className="w-full h-[100px] bg-navy-blue flex items-center justify-around max-[800px]:justify-between max-[800px]:px-6 mb-10 backdrop-blur-xl pt-10 max-[800px]:pt-0">
            <div>
                {/* <img src={logo} alt="logo" /> */}
                <h1 className='logo text-[40px] font-[900]'>Chaincrib</h1>
            </div>
            <div id='menu' className="text-white flex gap-x-8 max-[800px]:hidden">
                <a href="/" target='_blank' className="px-[28px] py-[12px] h-12 border rounded-full border-[#85B5F8]">About</a>
                <a href="/" target='_blank' className="px-[28px] py-[12px] h-12 border rounded-full border-[#85B5F8]">How It Works</a>
                <a href="/" target='_blank' className="px-[28px] py-[12px] h-12 border rounded-full border-[#85B5F8]">Team</a>
                <a href="/" target='_blank' className="px-[28px] py-[12px] h-12 border rounded-full border-[#85B5F8]">FAQ</a>
            </div>
            <div className='max-[800px]:hidden'>
                <a href="/" className="px-[50px] py-[12px] rounded-full text-white bg-[#1656B9] border border-[#2074F5] flex gap-x-2 items-center">
                    <span className='text-xl'>Join Discord</span>
                    <img src={discord} alt="discord" className='w-7 h-6' />
                </a>
            </div>
            <div className='hidden max-[800px]:block'>
                <img src={menuButton} alt="" onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;