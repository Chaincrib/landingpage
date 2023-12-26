import heroImgLeft from '../images/hero-1.jpeg';
import heroImgRight from '../images/hero-2.jpeg';

function Hero() {
    return (
        <section className='max-[800px]:pt-0 mt-40' id='home'>
            <div className="w-full mb-10 max-[800px]:px-2 flex flex-col items-center justify-center text-white text-center max-[800px]:text-start">
                <h1 className="text-[60px] max-[800px]:text-4xl font-bold mb-4 font-ibm">Reinventing Real Estate Ownership</h1>
                <p className="text-[20px] px-52 max-[800px]:px-0 text-[#CCCCCC] font-source max-[800px]:my-5">Unlock the benefits of real world assets (RWA) with Chaincrib, as you can buy into the real estate market through fractional, tokenized ownership, powered by the Cardano blockchain.</p>
            </div>
            <div className="flex items-center justify-center gap-x-2 max-[800px]:gap-y-5 max-[800px]:flex-col">
                <a href="https://chaincrib.medium.com/revolutionizing-real-estate-investments-introducing-chaincrib-feae1c14b4ca" target='_blank' rel='noreferrer' className="bg-white px-8 py-5 max-[800px]:py-3 rounded-lg font-medium max-[800px]:w-full max-[800px]:text-center">Learn More</a>

                <a href="https://twitter.com/chaincrib" target='_blank' rel='noreferrer' className="flex gap-x-2 bg-[#1656B9] px-8 py-5 max-[800px]:py-3 text-white rounded-lg font-medium max-[800px]:w-full max-[800px]:justify-center">Follow On Twitter
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            <div className="flex max-[800px]:flex-col justify-center gap-x-10 max-[800px]:gap-y-10 mt-20 max-[800px]:mt-16">
                <img src={heroImgLeft} alt="" className='w-[50%] max-[800px]:w-full' />
                <img src={heroImgRight} alt="" className='w-[50%] max-[800px]:w-full' />
            </div>
        </section>
    )
}

export default Hero;