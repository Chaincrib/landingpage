import heroImgLeft from '../images/hero-img-left.png';
import heroImgRight from '../images/hero-img-right.png';

function Hero() {
    return (
        <section className='max-[800px]:pt-0 max-[800px]:mt-0 mt-40 hero'>
            <div className="w-full mb-10 max-[800px]:px-2 flex flex-col items-center justify-center text-white text-center max-[800px]:text-start">
                <h1 className="text-[60px] max-[800px]:text-4xl font-bold mb-4 font-ibm">Invest In Prime Rental Properties</h1>
                <p className="text-[20px] px-52 max-[800px]:px-0 text-[#CCCCCC] font-source">Unlock global high-return locations, invest fractionally in real estate with ChainCrib, and earn rental income in just 45 days.</p>
            </div>
            <div className="flex items-center justify-center gap-x-2 max-[800px]:gap-y-5 max-[800px]:flex-col-reverse">
                <a href="/" className="bg-white px-8 py-5 max-[800px]:py-3 rounded-lg font-medium max-[800px]:w-full max-[800px]:text-center">Learn More</a>

                <a href="/" className="flex gap-x-2 bg-[#1656B9] px-8 py-5 max-[800px]:py-3 text-white rounded-lg font-medium max-[800px]:w-full max-[800px]:justify-center">Join Our Community 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            <div className="flex max-[800px]:flex-col justify-center gap-x-5 max-[800px]:gap-y-10 mt-20 max-[800px]:mt-16">
                <img src={heroImgLeft} alt="" />
                <img src={heroImgRight} alt="" />
            </div>
        </section>
    ) 
}

export default Hero;