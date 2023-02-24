import Image from 'next/image'
const Portifolio = () =>{
    return(
        <div className="max-w-[1224px] mx-auto py-16 text-center">
            <h2 className="font-bold text-2xl py-4">Travel Photos</h2>
            <div>
                <div>
                    <Image src="/images/nature.PNG" height={440} width={680} alt="/" className=''/>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Portifolio;