import icon1 from '../images/about-icon-1.png';
import icon2 from '../images/about-icon-2.png';
import icon3 from '../images/about-icon-3.png';

function About() {
    return (
        <section className='-mt-10'>
            <div className="text-center">
                <h2 className="text-[#85B5F8] text-[40px] font-semibold leading-loose">About ChainCrib</h2>
                <p className="text-white text-[24px] letter_2">Redefining Real Estate Investment</p>
            </div>
            <div className="flex max-[800px]:flex-col max-[800px]:gap-10 justify-center mt-20">
                <div className="w-[415px] max-[800px]:w-full h-[482px] max-[800px]:h-[450px] bg-gradient-to-br from-[#85B5F8] via-[#8BB6F7] to-[#1656B9] rounded-2xl -z-50 text-center">
                    <img src={icon1} alt="" className='mx-auto py-20' />
                    <p className='text-white text-[20px] px-1'>Harness the power of the Cardano blockchain with ChainCrib. Our platform revolutionizes real estate investment, offering a unique blend of simplicity and opportunity.</p>
                </div>
                <div className="w-[470px] h-[525px] bg-gradient-to-br from-[#3969C9] via-[#97ACFC] to-[#7474E4] -mt-6 z-50 max-[800px]:z-0 rounded-2xl flex justify-center items-center max-[800px]:w-full  max-[800px]:h-[482px]">
                    <div className="w-[435px] max-[800px]:w-full h-[500px] max-[800px]:h-[482px] bg-gradient-to-br from-[#1656B9] via-[#7F95F8] to-[#8174FF] rounded text-center">
                        <img src={icon2} alt="" className='mx-auto py-20' />
                        <p className='text-white text-[20px] px-3'>Here, you don't just invest — you own tokenized properties, reaping the rewards of rental income with the ease of trading NFTs.</p>
                    </div>
                </div>
                <div className="w-[415px] h-[482px] bg-gradient-to-br from-[#8174FF] via-[#9EA9F7] to-[#88B6F7] rounded-2xl -z-50 text-center max-[800px]:w-full">
                    <img src={icon3} alt="" className='mx-auto py-20' />
                    <p className='text-white text-[20px] px-2'>Whether you're familiar with NMKR, Jpg.store, or new to the scene, ChainCrib makes your real estate journey as simple as minting an NFT.</p>
                </div>
            </div>
        </section>
    )
}

export default About;