// import discord from '../images/discord.png';
import menuButton from '../images/menu.png';
import logo from '../images/logo.png';

function toggleMenu() {
    const menu = document.getElementById('menu');

    if ((menu.classList).contains('absolute')) {
        menu.classList.remove('max-[800px]:flex', 'absolute');
        menu.classList.add('hidden');
    } else {
        menu.classList.remove('hidden');
        menu.classList.add('max-[800px]:flex', 'absolute', 'left-0');
    }
}

function handleOrientationChange(mediaQueryList) {
    if (mediaQueryList.matches) {
      // Portrait orientation
    } else {
      // Landscape orientation
      const menu = document.getElementById('menu');
      if (menu !== null) {
        menu.classList.add('hidden');
      }
    }
  }

function Header() {
    // Create a media query for orientation
    const orientationMediaQuery = window.matchMedia('(orientation: portrait)');

    // Attach the event listener for changes in orientation
    orientationMediaQuery.addListener(handleOrientationChange);

    // Initial check on page load
    handleOrientationChange(orientationMediaQuery);

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
        <div className='w-full p-10 max-[800px]:absolute flex justify-between'>
            <div>
                <a href='/' className='flex gap-2 items-center'>
                <img src={logo} alt="logo" className='w-10 h-10' />
                  <h1 className='logo text-[20px] font-[900] max-[800px]:text-[24px]'>Chaincrib</h1>
                 </a>
            </div>
            <div className='flex gap-x-8 font-bold max-[800px]:hidden'>
                <button className='text-white' onClick={(e) => scrollToContent(e)} target='about'>About</button>
                <button className='text-white' onClick={(e) => scrollToContent(e)} target='how'>How It Works</button>
                <button className='text-white' onClick={(e) => scrollToContent(e)} target='faq'>FAQ</button>
            </div>
            <div id='menu' className={`hidden max-[800px]:flex-col w-full mobile-menu-bg gap-y-8 font-bold top-0 p-5`}>
                <button className='text-3xl text-right text-white hidden max-[800px]:block mr-3' onClick={toggleMenu}>X</button>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='about'>About</button>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='how'>How It Works</button>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='faq'>FAQ</button>
            </div>
            <div className='hidden max-[800px]:block'>
               <img src={menuButton} className='h-5' alt="" onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;