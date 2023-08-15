function FAQ() {

    return (
        <section className="mt-64">
            <h2 className="text-[#85B5F8] text-[36px] font-ibm text-center mb-5 max-[800px]:text-[30px]">Frequently asked questions</h2>
            <p className="text-[#CCCCCC] text-center text-[20px] max-[800px]:text-[18px] max-[800px]:px-5 font-source">Everything you need to know about  Chaincrib .</p>

            <div className="grid grid-cols-2">
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" checked="checked" /> 
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
            </div>
            <div className="collapse-content"> 
                <p>hello</p>
            </div>
            </div>
            </div>

        </section>
    )
}

export default FAQ;