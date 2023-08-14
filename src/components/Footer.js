import logo from '../images/logo.png';

function Footer() {
    return (
        <section className='mb-20 max-[800px]:mb-10 border-t pt-[130px]'>
            <div className="flex max-[800px]:flex-col max-[800px]:w-full justify-between text-white ">
                <div className='max-[800px]:hidden -mt-5'>
                    <div className="flex gap-3">
                        <img src={logo} alt="" className='h-10' />
                        <h1 className='logo'>Chaincrib</h1>
                    </div>
                    <span className='text-white italic font-sans leading-10 text-xs ml-10'>Real Estate Investment, Simplified.</span>
                </div>
                <div className='flex gap-32 max-[800px]:flex max-[800px]:justify-between -mt-10'>
                    <div>
                        <h3 className='text-lg mb-5'>Resources</h3>
                        <ul className='max-[800px]:flex max-[800px]:flex-col flex flex-col gap-5'>
                            <li>
                                <a href="/">Deck</a>
                            </li>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/">EULA</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg mb-5'>Social</h3>
                        <ul className='max-[800px]:flex max-[800px]:flex-col flex flex-col gap-5'>
                            <li>
                                <a href="/">Twitter</a>
                            </li>
                            <li>
                                <a href="/">Linkedin</a>
                            </li>
                            <li>
                                <a href="/">Discord</a>
                            </li>
                            <li>
                                <a href="/">Telegram</a>
                            </li>
                            <li>
                                <a href="/">Instagram</a>
                            </li>
                            <li>
                                <a href="/">Medium</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className='text-lg mb-5'>Contact Us</h3>
                    <p>ChainCrib Holdings Limited</p>
                    <p>Zug, Switzerland</p>
                    <p>Email: <a href="mailto:info@chaincrib.com" className='underline-offset-1'>info@chaincrib.com</a></p>
                    <div className='mt-10'>
                        <a href="/" className='bg-white px-8 py-5 rounded-lg text-black font-medium'>Contact Form for immediate inquiries</a>
                    </div>
                </div>
                <div className='hidden max-[800px]:block max-[800px]:mt-10 max-[800px]:border-t max-[800px]:pt-5'>
                    <div className="flex gap-3">
                        <img src={logo} alt="" className='h-10' />
                        <h1 className='logo text-[40px] font-[900]'>Chaincrib</h1>
                    </div>
                    <span className='text-white italic font-sans leading-10 text-xs ml-10'>Real Estate Investment, Simplified.</span>
                </div>
            </div>
        </section>
    )
}

export default Footer;