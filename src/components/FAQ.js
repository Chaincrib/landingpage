import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  function Icon({ id, open }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={`${id !== open ? 'M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z' : 'M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'}`} />
        </svg>
      
    );
  }

function FAQ() {

    const [open, setOpen] = React.useState(0);
   
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="mt-64 max-[800px]:mt-32 max-[800px]:mb-64 max-[800px]:px-0" id="faq">
            <h2 className="text-[#85B5F8] text-[36px] font-ibm text-center mb-2 max-[800px]:text-[30px]">Frequently asked questions</h2>
            <p className="text-[#CCCCCC] text-center text-[20px] max-[800px]:text-[18px] max-[800px]:px-5 font-source mb-20">Everything you need to know about  Chaincrib .</p>

            <div className="w-2/3 mx-auto max-[800px]:w-full max-[800px]:px-5">
                <Accordion open={open === 1} animate={CUSTOM_ANIMATION} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(1)} className="text-white hover:text-white text-[18px]">What is ChainCrib?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                    ChainCrib is a web3 real estate investment platform allowing users to invest in high-return rental properties.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2} animate={CUSTOM_ANIMATION} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(2)} className="text-white hover:text-white text-[18px]">How do I earn from owning a property fraction?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                        Own a property fraction, and you're set to earn rental yields. Once occupied, rental income is distributed monthly to your Cardano wallet.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 3} animate={CUSTOM_ANIMATION} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(3)} className="text-white hover:text-white text-[18px]">How do we determine property prices?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                        We base our prices on real-time market appraisals, factoring in insurance, documentation, and furnishings.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 4} animate={CUSTOM_ANIMATION} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(4)} className="text-white hover:text-white text-[18px]">Can anyone globally invest in ChainCrib?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                        Absolutely! If you have a Cardano wallet, you can buy ChainCrib property fractions using ADA.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 5} animate={CUSTOM_ANIMATION} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(5)} className="text-white hover:text-white text-[18px]">Am I crowdfunding or truly owning a property fraction with the NFTs?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                        With ChainCrib, you genuinely own a fraction of the property through the NFT you purchase.
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 6} animate={CUSTOM_ANIMATION} icon={<Icon id={6} open={open} />}>
                    <AccordionHeader onClick={() => handleOpen(6)} className="text-white hover:text-white text-[18px]">Who handles property maintenance?</AccordionHeader>
                    <AccordionBody className='text-[#CCCCCC] text-[16px]'>
                        We've partnered with top-tier property management companies. They maintain properties and provide regular detailed reports.
                    </AccordionBody>
                </Accordion>
            </div>
        </section>
    )

}

export default FAQ;
