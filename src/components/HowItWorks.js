import howItWorks1 from '../images/how-it-works-1.png';
import howItWorks2 from '../images/about-icon-1.png';
import howItWorks3 from '../images/how-it-works-3.png';

function HowItWorks() {
    return (
        <section className='-mt-12'>
            <div className="text-center">
                <h2 className="text-[#85B5F8] text-[40px] leading-loose max-[800px]:text-[30px] font-ibm max-[800px]:font-[600]">How ChainCrib Works</h2>
                <p className="text-white text-[28px] max-[800px]:text-[18px] py-5 font-source">Imagine earning rental income from prime global properties without owning them outright.</p>
                <p className="text-white text-[20px] max-[800px]:text-[16px] font-source">ChainCrib makes this dream a reality through the power of NFTs on the Cardano blockchain.</p>
            </div>
            <div className="flex max-[800px]:flex-col justify-center gap-x-5 max-[800px]:gap-x-0 max-[800px]:gap-y-10 my-12">
                <div className="w-[417px] max-[800px]:w-full h-[433px] max-[800px]:h-[297px] rounded-xl bg-white">
                    <div className="w-full h-[148px] max-[800px]:h-[87px] bg-indigo-500 rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks1} alt="" className='mx-auto w-16 h-18 max-[800px]:w-10 max-[800px]:h-12' />
                    </div>
                    <h2 className='text-[30px] font-medium mt-10 text-center font-ibm max-[800px]:text-[20px]'>Browse</h2>
                    <p className='text-center px-4 text-[20px] max-[800px]:text-[18px]'>Browse our curated property listings</p>
                </div>
                <div className="w-[417px] max-[800px]:w-full h-[433px] max-[800px]:h-[297px] rounded-xl bg-white">
                    <div className="w-full h-[148px] max-[800px]:h-[87px] bg-blue-600 rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks2} alt="" className='mx-auto w-[100px] max-[800px]:w-10 max-[800px]:h-12' />
                    </div>
                    <h2 className='text-[30px] font-medium mt-10 text-center font-ibm max-[800px]:text-[20px]'>Choose</h2>
                    <p className='text-center px-5 text-[20px] max-[800px]:text-[18px]'>Choose an investment property, connect your Cardano-compatible wallet, and mint fractional ownership as a Cardano NFT.</p>
                </div>
                <div className="w-[417px] max-[800px]:w-full h-[433px] max-[800px]:h-[297px] rounded-xl bg-white">
                    <div className="w-full h-[148px] max-[800px]:h-[87px] bg-black rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks3} alt="" className='mx-auto w-24 h-18 max-[800px]:w-10 max-[800px]:h-12' />
                    </div>
                    <h2 className='text-[30px] font-medium mt-10 text-center font-ibm max-[800px]:text-[20px]'>Watch</h2>
                    <p className='text-center px-4 text-[20px] max-[800px]:text-[18px]'>Sit back and watch your investments grow as you Earn monthly rental payouts or sell your NFTs whenever you wish on platforms like Jpg.store.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;