import polygon from '../images/polygon.png';
import star from '../images/star.png';
import ceo from '../images/ceo.png';
import leadDev from '../images/lead-dev.png';
import marketer from '../images/marketer.png';

function Team() {
    return (
        <section className='-mt-10'>
            <h2 className="text-[#85B5F8] text-center text-[40px] font-semibold mb-12">Meet The Team</h2>
            <div className="flex max-[800px]:flex-col justify-center gap-x-10 max-[800px]:gap-y-10 max-[800px]:w-full">
                <div className="w-[300px] max-[800px]:w-2/3 max-[800px]:left-[25%] h-[300px] relative">
                    <div className=''>
                        <div className="w-[250px] max-[800px]:w-[200px] h-[250px] max-[800px]:h-[200px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={ceo} alt="ceo" className='w-[180px] max-[800px]:w-[150px] h-[180px] max-[800px]:h-[150px]' />
                        </div>
                        <img src={polygon} alt="" className='w-12 h-12 absolute top-8 right-4 max-[800px]:right-4 max-[800px]:w-8 max-[800px]:h-8' />
                    </div>
                    <img src={star} alt="" className='w-[25px] h-[25px] absolute bottom-12 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10 max-[800px]:mt-5 -ml-10 max-[800px]:-ml-8'>
                        <h2 className='text-[20px] text-white max-[800px]:text-[16px] font-ibm'>Irene</h2>
                        <p className='text-[#CCCCCC] text-[16px] max-[800px]:text-[14px] font-source'>Co-Founder / CEO</p>
                    </div>
                </div>
                <div className="w-[300px] max-[800px]:w-2/3 max-[800px]:left-[25%] h-[300px] relative">
                    <div className=''>
                        <div className="w-[250px] max-[800px]:w-[200px] h-[250px] max-[800px]:h-[200px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={leadDev} alt="ceo" className='w-[180px] max-[800px]:w-[150px] h-[180px] max-[800px]:h-[150px]' />
                        </div>
                        <img src={polygon} alt="" className='w-12 h-12 absolute top-8 right-4 max-[800px]:right-4 max-[800px]:w-8 max-[800px]:h-8' />
                    </div>
                    <img src={star} alt="" className='w-[25px] h-[25px] absolute bottom-12 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10 max-[800px]:mt-5 -ml-10 max-[800px]:-ml-8'>
                        <h2 className='text-[20px] text-white max-[800px]:text-[16px] font-ibm'>Miguel</h2>
                        <p className='text-[#CCCCCC] text-[16px] p-0 max-[800px]:px-0 max-[800px]:text-[14px] font-source'>Lead Developer: Blockchain expert, pushing the boundaries of tech and real estate fusion.</p>
                    </div>
                </div>
                <div className="w-[300px] max-[800px]:w-2/3 max-[800px]:left-[25%] h-[300px] relative">
                    <div className=''>
                        <div className="w-[250px] max-[800px]:w-[200px] h-[250px] max-[800px]:h-[200px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={marketer} alt="ceo" className='w-[180px] max-[800px]:w-[150px] h-[180px] max-[800px]:h-[150px]' />
                        </div>
                        <img src={polygon} alt="" className='w-12 h-12 absolute top-8 right-4 max-[800px]:right-4 max-[800px]:w-8 max-[800px]:h-8' />
                    </div>
                    <img src={star} alt="" className='w-[25px] h-[25px] absolute bottom-12 max-[800px]:bottom-20 max-[800px]:left-5 max-[800px]:w-[30px] max-[800px]:h-[30px]' />
                    <div className='text-center mt-10 max-[800px]:mt-5 -ml-10 max-[800px]:-ml-8'>
                        <h2 className='text-[20px] text-white max-[800px]:text-[16px] font-ibm'>Jagatjit</h2>
                        <p className='text-[#CCCCCC] text-[16px] max-[800px]:px-0 max-[800px]:text-[14px] font-source'>Marketing Lead: Spearheading ChainCrib's global presence and community engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Team;