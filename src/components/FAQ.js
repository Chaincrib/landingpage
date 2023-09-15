function FAQ() {
    return (
        <section className="mt-64 -mb-32">
            <h2 className="text-[#85B5F8] text-[36px] font-ibm text-center mb-2 max-[800px]:text-[30px]">Frequently asked questions</h2>
            <p className="text-[#CCCCCC] text-center text-[20px] max-[800px]:text-[18px] max-[800px]:px-5 font-source">Everything you need to know about  Chaincrib .</p>

            <div className="-mt-16">
                <div className="w-2/3 max-[800px]:w-full mx-auto">
                <div className="w-full flex items-center justify-center h-screen ">
                    <div className="w-full px-8 mx-auto mt-2 space-y-1 ">
                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">What is ChainCrib?</summary>

                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                ChainCrib is a pioneering web3 real estate platform allowing users to invest in high-return rental properties without full ownership.
                                </p>
                            </div>
                        </details>

                        <hr className="hr" />

                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">How do I earn from owning a property fraction?</summary>
                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                Own a property fraction, and you're set to earn rental yields. Once occupied, rental income is distributed monthly to your Cardano wallet.
                                </p>
                            </div>
                        </details>

                        <hr className="hr" />

                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">How do we determine property prices?</summary>
                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                We base our prices on real-time market appraisals, factoring in insurance, documentation, and furnishings.
                                </p>
                            </div>
                        </details>

                        <hr className="hr" />

                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">Can anyone globally invest in ChainCrib?</summary>
                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                Absolutely! If you have a Cardano wallet, you can buy ChainCrib property fractions using ADA.
                                </p>
                            </div>
                        </details>

                        <hr className="hr" />

                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">Am I crowdfunding or truly owning a property fraction with the NFTs?</summary>
                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                With ChainCrib, you genuinely own a fraction of the property through the NFT you purchase.
                                </p>
                            </div>
                        </details>

                        <hr className="hr" />

                        <details className="rounded-lg py-5">
                            <summary className="px-4 py-2 text-[18px] cursor-pointer text-[#FFFFFF] font-source font-[600]">Who handles property maintenance?</summary>
                            <div className="">
                                <p className="leading-6 px-3 py-2 text-[#CCCCCC] font-source text-[16px] font-[400]">
                                We've partnered with top-tier property management companies. They maintain properties and provide regular detailed reports.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
                </div>
            </div>

        </section>
    )
}

export default FAQ;