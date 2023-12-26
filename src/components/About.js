import icon1 from '../images/about-icon-1.png';
import icon2 from '../images/about-icon-2.png';
import icon3 from '../images/about-icon-3.png';

function About() {
    return (
        <section className='-mt-10' id='about'>
            <div className="text-center">
                <h2 className="text-[#85B5F8] text-[40px] font-semibold leading-loose max-[800px]:text-[30px] font-ibm">About ChainCrib</h2>
                <p className="text-white text-[24px] max-[800px]:text-[18px] font-source">Discover The Uniqueness Of Chaincrib</p>
            </div>
            <div className="flex max-[800px]:flex-col max-[800px]:gap-10 justify-center mt-20 max-[800px]:mt-10">
                <div className="w-[415px] max-[800px]:w-full h-[482px] max-[800px]:h-[400px] bg-gradient-to-br from-[#85B5F8] via-[#8BB6F7] to-[#1656B9] rounded-2xl -z-50 text-center">
                    <img src={icon1} alt="" className='mx-auto py-20 max-[800px]:py-10' />
                    <p className='text-white text-[20px] px-1'>Ownership of each Chaincrib property is split across a finite number of representative tokens minted on the Cardano blockchain.</p>
                </div>
                <div className="w-[470px] h-[525px] bg-gradient-to-br from-[#3969C9] via-[#97ACFC] to-[#7474E4] -mt-6 z-50 max-[800px]:z-0 rounded-2xl flex justify-center items-center max-[800px]:w-full  max-[800px]:h-[400px]">
                    <div className="w-[435px] max-[800px]:w-full h-[500px] max-[800px]:h-[400px] bg-gradient-to-br from-[#1656B9] via-[#7F95F8] to-[#8174FF] rounded-2xl text-center">
                        <img src={icon2} alt="" className='mx-auto py-20 max-[800px]:py-10' />
                        <p className='text-white text-[20px] px-3'>Here, you don't just own the tokenized properties as NFTs, Based on token share, owners can collect revenue from rent, and vote on property decisions.</p>
                    </div>
                </div>
                <div className="w-[415px] h-[482px] bg-gradient-to-br from-[#8174FF] via-[#9EA9F7] to-[#88B6F7] rounded-2xl -z-50 text-center max-[800px]:w-full max-[800px]:h-[400px]">
                    <img src={icon3} alt="" className='mx-auto py-20 max-[800px]:py-10' />
                    <p className='text-white text-[20px] px-2'>ChainCrib will offer an end to end real estate investment product that will make your real estate journey as simple as minting an NFT on Nmkr and trading it on <a href='https://jpg.store' target='_blank' rel='noreferrer'>Jpg.store</a></p>
                </div>
            </div>
        </section>
    )
}

export default About;