import polygon from '../images/polygon.png';
import star from '../images/star.png';
import ceo from '../images/ceo.png';
import leadDev from '../images/lead-dev.png';
import marketer from '../images/marketer.png';

function Team() {
    return (
        <section>
            <h2 className="text-[#85B5F8] text-center text-3xl font-semibold mb-20">Meet The Team</h2>
            <div className="flex max-[800px]:flex-col justify-center gap-20 max-[800px]:gap-y-40 max-[800px]:w-full">
                <div className="w-[350px] max-[800px]:w-full h-[350px]">
                    <div className='flex gap-0'>
                        <div className="w-[300px] h-[280px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={ceo} alt="ceo" className='w-[220px] h-[220px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16' />
                    </div>
                    <img src={star} alt="" className='w-16 h-16' />
                    <div className='text-center'>
                        <h2 className='text-xl text-white'>Irene</h2>
                        <p className='text-white'>Co-Founder / CEO</p>
                    </div>
                </div>
                <div className="w-[350px] max-[800px]:w-full h-[350px]">
                    <div className='flex gap-0'>
                        <div className="w-[300px] h-[280px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={leadDev} alt="ceo" className='w-[220px] h-[220px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16' />
                    </div>
                    <img src={star} alt="" className='w-16 h-16' />
                    <div className='text-center'>
                        <h2 className='text-xl text-white'>Miguel</h2>
                        <p className='text-white'>Lead Developer: Blockchain expert, pushing the boundaries of tech and real estate fusion.</p>
                    </div>
                </div>
                <div className="w-[350px] max-[800px]:w-full h-[350px]">
                    <div className='flex gap-0'>
                        <div className="w-[300px] h-[280px] rounded-full bg-gradient-to-br from-[#85B5F8] to-[#8174FF] flex justify-center items-center">
                            <img src={marketer} alt="ceo" className='w-[220px] h-[220px]' />
                        </div>
                        <img src={polygon} alt="" className='w-16 h-16' />
                    </div>
                    <img src={star} alt="" className='w-16 h-16' />
                    <div className='text-center'>
                        <h2 className='text-xl text-white'>Jagatjit</h2>
                        <p className='text-white'>Marketing Lead: Spearheading ChainCrib's global presence and community engagement.</p>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Team;