import logo from '../images/logo.png';

function Footer() {
    return (
        <section className='mb-5 max-[800px]:mb-10 border-t pt-20'>
            <div className="flex max-[800px]:flex-col max-[800px]:w-full justify-between text-white ">
                <div className='max-[800px]:hidden -mt-5'>
                    <div className="flex gap-2 items-center">
                        <img src={logo} alt="" className='h-10' />
                        <h1 className='logo'>Chaincrib</h1>
                    </div>
                    <span className='text-white italic font-sans leading-10 text-xs ml-10'>Real Estate Investment, Simplified.</span>
                </div>
                <div className='flex gap-32 max-[800px]:flex max-[800px]:gap-20 -mt-10 max-[800px]:text-[16px] font-source font-[600]'>
                    <div>
                        <h3 className='text-lg text-[#CCCCCC] mb-5'>Resources</h3>
                        <ul className='max-[800px]:flex max-[800px]:flex-col flex flex-col gap-2 text-[#EAECF0]'>
                            <li>
                                <a href="/">Deck</a>
                            </li>
                            <li>
                                <a href="https://docs.chaincrib.com/terms-and-conditions" target='_blank' rel='noreferrer'>Terms & Conditions</a>
                            </li>
                            {/* <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">EULA</a>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg text-[#CCCCCC] mb-5 '>Social</h3>
                        <ul className='max-[800px]:flex max-[800px]:flex-col flex flex-col gap-2 text-[#EAECF0]'>
                            <li>
                                <a href="https://x.com/chaincrib/" target='_blank' rel='noreferrer'>Twitter</a>
                            </li>
                            <li>
                                <a href="http://www.linkedin.com/company/chaincrib/" target='_blank' rel='noreferrer'>Linkedin</a>
                            </li>
                            {/* <li>
                                <a href="/" target='_blank' rel='noreferrer'>Discord</a>
                            </li> */}
                            {/* <li>
                                <a href="https://t.me/chaincrib" target='_blank' rel='noreferrer'>Telegram</a>
                            </li> */}
                            {/* <li>
                                <a href="https://www.instagram.com/chaincrib/" target='_blank' rel='noreferrer'>Instagram</a>
                            </li> */}
                            <li>
                                <a href="https://chaincrib.medium.com/" target='_blank' rel='noreferrer'>Medium</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='-mt-10 max-[800px]:mt-10'>
                    <h3 className='text-lg mb-5 font-source text-[14px] font-[600]'>Contact Us</h3>
                    <p>ChainCrib Technologies DAO LLC</p>
                    {/* <p>Zug, Switzerland</p> */}
                    <p>Email: <a href="mailto:info@chaincrib.com" className='underline-offset-1'>info@chaincrib.com</a></p>
                    
                </div>
                <div className='hidden max-[800px]:block max-[800px]:mt-10 max-[800px]:border-t max-[800px]:pt-5'>
                    <div className="flex gap-2 items-center">
                        <img src={logo} alt="" className='h-10' />
                        <h1 className='logo text-[40px] max-[800px]:text-[24px] font-[900]'>Chaincrib</h1>
                    </div>
                    <span className='text-[#FFFFFF] font-source italic leading-10 text-xs ml-10 text-[16px] max-[800px]:text-[12px]'>Real Estate Investment, Simplified.</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;