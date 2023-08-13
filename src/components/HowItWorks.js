import howItWorks1 from '../images/how-it-works-1.png';
import howItWorks2 from '../images/about-icon-1.png';
import howItWorks3 from '../images/how-it-works-3.png';

function HowItWorks() {
    return (
        <section>
            <div className="text-center max-[800px]:text-start">
                <h2 className="text-[#85B5F8] text-3xl font-semibold leading-loose">How ChainCrib Works</h2>
                <p className="text-white font-medium text-xl py-2">Imagine earning rental income from prime global properties without owning them outright.</p>
                <p className="text-white">ChainCrib makes this dream a reality through the power of NFTs on the Cardano blockchain.</p>
            </div>
            <div className="flex max-[800px]:flex-col justify-center gap-x-5 max-[800px]:gap-x-0 max-[800px]:gap-y-10 my-20">
                <div className="w-[417px] max-[800px]:w-full h-[433px] rounded-xl bg-white">
                    <div className="w-full h-32 bg-indigo-500 rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks1} alt="" className='mx-auto w-16 h-18' />
                    </div>
                    <h2 className='text-2xl font-medium my-10 text-center'>Browse</h2>
                    <p className='text-center px-16'>Browse our curated property listings</p>
                </div>
                <div className="w-[417px] max-[800px]:w-full h-[433px] rounded-xl bg-white">
                    <div className="w-full h-32 bg-blue-600 rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks2} alt="" className='mx-auto w-[100px]' />
                    </div>
                    <h2 className='text-2xl font-medium my-10 text-center'>Choose</h2>
                    <p className='text-center px-16'>Choose an investment property, connect your Cardano-compatible wallet, and mint fractional ownership as a Cardano NFT.</p>
                </div>
                <div className="w-[417px] max-[800px]:w-full h-[433px] rounded-xl bg-white">
                    <div className="w-full h-32 bg-black rounded-t-xl flex justify-center items-center">
                        <img src={howItWorks3} alt="" className='mx-auto w-24 h-18' />
                    </div>
                    <h2 className='text-2xl font-medium my-10 text-center'>Watch</h2>
                    <p className='text-center px-16'>Sit back and watch your investments grow as you Earn monthly rental payouts or sell your NFTs whenever you wish on platforms like Jpg.store.</p>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks;