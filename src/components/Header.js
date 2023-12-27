// import discord from '../images/discord.png';
import menuButton from '../images/menu.png';
import logo from '../images/logo.png';
import { useEffect } from 'react';

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
    useEffect(() => {
        const handleDocumentClick = (event) => {
          const menu = document.getElementById('menu');
          const menuButton = document.getElementById('menu-button');
          const clickedElement = event.target;
    
          if (
            menu.classList.contains('max-[800px]:flex', 'absolute') &&
            !menu.contains(clickedElement) &&
            !menuButton.contains(clickedElement)
          ) {
            // Check if the menu is open and the click is outside the menu or the menu button
            toggleMenu();
          }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, []); // Empty dependency array to ensure the effect runs once on mount
    

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
        <div className='w-full p-10 max-[800px]:absolute max-[800px]:top-0 max-[800px]:left-0 flex justify-between items-center'>
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
            <div id='menu' className={`hidden max-[800px]:flex-col w-full mobile-menu-bg gap-y-8 font-bold top-0 p-5 z-50`}>
                <div className="flex">
                    <button id='close-btn' className='text-3xl ml-auto text-white hidden max-[800px]:block bg-black w-5' onClick={toggleMenu}>X</button>
                </div>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='about'>About</button>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='how'>How It Works</button>
                <button className='text-white rounded-full bg-[#1656B9] border-[#2074F5] py-3' onClick={(e) => scrollToContent(e)} target='faq'>FAQ</button>
            </div>
            <div className='hidden max-[800px]:block'>
               <img id='menu-button' src={menuButton} className='h-5' alt="" onClick={toggleMenu} />
            </div>
        </div>
    )
}

export default Header;