import Image from 'next/image';


const Portifolio = () =>{
    return(
        <div className="max-w-[1240px] mx-auto py-16 text-center">
            <h2 className="font-bold text-2xl py-4">Travel Photos</h2>
            <div className="grid grid-rows-none md:grid-cols-5 gap-4 p-4">
                <div className="col-span-2 md:col-span-3 row-span-2 w-full h-full">
                    <Image src="/images/nature.PNG" height={440} width={680} alt="/" className='rounded-sm'/>
                </div>
                <div className="w-full h-full">
                    <Image src='/images/pusione.png' alt="pusi" height={217} width={215} className="rounded-sm"/>
                    <Image src='/images/pusi.png' alt="pusi" height={217} width={215} className="rounded-sm"/>
                    <Image src='/images/pusitwo.png' alt="pusi" height={217} width={215} className="rounded-sm"/>
                    <Image src='/images/nature.png' alt="pusi" height={217} width={215} className="rounded-sm"/>
                </div>
            </div>
        </div>
    )
}

export default Portifolio;