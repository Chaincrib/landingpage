import polygon from '../images/polygon.png';
import star from '../images/star.png';
import ceo from '../images/ceo.png';
import leadDev from '../images/lead-dev.png';
import marketer from '../images/marketer.png';

function Team() {
    return (
        <section className='-mt-10'>
            <h2 className="text-[#85B5F8] text-center text-[40px] font-semibold mb-12">Meet The Team</h2>
            <div className="flex max-[800px]:flex-col justify-around gap-10 max-[800px]:gap-y-40 max-[800px]:w-full">
                <div className="w-[350px] max-[800px]:w-full h-[350px] relative">
                    <div className=''>
                        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={ceo} alt="ceo" className='w-[230px] h-[230px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0 max-[800px]:-right-2 max-[800px]:w-[50px] max-[800px]:h-[50px]' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-8 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white max-[800px]:text-[24px] font-ibm'>Irene</h2>
                        <p className='text-[#CCCCCC] text-[20px] max-[800px]:text-[18px] font-source'>Co-Founder / CEO</p>
                    </div>
                </div>
                <div className="w-[350px] max-[800px]:w-full h-[350px] relative">
                    <div className=''>
                        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={leadDev} alt="ceo" className='w-[230px] h-[230px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0 max-[800px]:-right-2 max-[800px]:w-[50px] max-[800px]:h-[50px]' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-8 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white max-[800px]:text-[24px] font-ibm'>Miguel</h2>
                        <p className='text-[#CCCCCC] text-[20px] p-0 max-[800px]:px-10 max-[800px]:text-[18px] font-source'>Lead Developer: Blockchain expert, pushing the boundaries of tech and real estate fusion.</p>
                    </div>
                </div>
                <div className="w-[350px] max-[800px]:w-full h-[350px] relative">
                    <div className=''>
                        <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={marketer} alt="ceo" className='w-[230px] h-[230px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0 max-[800px]:-right-2 max-[800px]:w-[50px] max-[800px]:h-[50px]' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-8 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white max-[800px]:text-[24px] font-ibm'>Jagatjit</h2>
                        <p className='text-[#CCCCCC] text-[20px] max-[800px]:px-10 max-[800px]:text-[18px] font-source'>Marketing Lead: Spearheading ChainCrib's global presence and community engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Team;