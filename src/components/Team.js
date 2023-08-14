import polygon from '../images/polygon.png';
import star from '../images/star.png';
import ceo from '../images/ceo.png';
import leadDev from '../images/lead-dev.png';
import marketer from '../images/marketer.png';

function Team() {
    return (
        <section className='-mt-10'>
            <h2 className="text-[#85B5F8] text-center text-[40px] font-semibold mb-12">Meet The Team</h2>
            <div className="flex max-[800px]:flex-col justify-between gap-10 max-[800px]:gap-y-40 max-[800px]:w-full">
                <div className="w-[410px] max-[800px]:w-full h-[400px] relative">
                    <div className=''>
                        <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={ceo} alt="ceo" className='w-[270px] h-[270px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-2' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white'>Irene</h2>
                        <p className='text-[#CCCCCC] text-[20px]'>Co-Founder / CEO</p>
                    </div>
                </div>
                <div className="w-[410px] max-[800px]:w-full h-[400px] relative">
                    <div className=''>
                        <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={leadDev} alt="ceo" className='w-[270px] h-[270px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-2' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white'>Miguel</h2>
                        <p className='text-[#CCCCCC] text-[20px] p-0'>Lead Developer: Blockchain expert, pushing the boundaries of tech and real estate fusion.</p>
                    </div>
                </div>
                <div className="w-[410px] max-[800px]:w-full h-[400px] relative">
                    <div className=''>
                        <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={marketer} alt="ceo" className='w-[270px] h-[270px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16 absolute top-10 right-0' />
                    </div>
                    <img src={star} alt="" className='w-[50px] h-[50px] absolute bottom-2' />
                    <div className='text-center mt-10'>
                        <h2 className='text-[32px] text-white'>Jagatjit</h2>
                        <p className='text-[#CCCCCC] text-[20px]'>Marketing Lead: Spearheading ChainCrib's global presence and community engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Team;