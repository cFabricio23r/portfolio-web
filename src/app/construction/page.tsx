import Image from "next/image";

const Home = () => {

    return (
        <section className={'h-screen w-screen flex justify-center items-center'}>
            <div className="max-w-2xl text-center m-6 md:p-10">
                <a className="flex justify-center mx-auto text-ice-cold-200 text-6xl" href="#">
                    <h1>Fabricio Ramirez</h1>
                </a>

                <div className={ 'flex justify-center items-center' }>
                    <Image src={'/assets/images/under_construction.png'} alt={'under_construction'} width={350} height={350}/>
                </div>
                <h1 className="md:text-3xl text-2xl text-white">The website is currently under construction</h1>
                <p className="md:text-lg text-sm font-medium text-gray-500 mt-5">Our platform is under construction. We appreciate your patience and will be available soon.</p>
            </div>
        </section>
    )
};

export default Home;