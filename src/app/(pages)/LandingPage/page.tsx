import LandingPageIcon from "../../../../public/asset/LandingPageIcon.png";
import NavbarLanding from "@/app/component/nabvar/NavbarLanding";

const LandingPage = () =>{
    return(
        <>
        <NavbarLanding/>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="grid grid-cols-2 grid-rows-1 gap-6">
                    <div className="flex justify-center flex-col">
                        <h1 className="font-bold text-[2rem]">Let's Find a Home</h1>
                        <h1 className="font-bold text-[2rem]">That's Perfect for you</h1>
                        <p className="font-light text-[1rem]">Discover the Perfect Place to Call Home Easy, Fast, and Hassle-Free!</p>
                        
                        <div className="grid grid-cols-3 grid-rows-1 gap-4 h-[10vh]">
                            <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                                <h1 className="text-sky-500 font-bold">7K+</h1>
                                <p className="font-light">Pengguna</p>
                            </div>
                            <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                                <h1 className="text-sky-500 font-bold">9K+</h1>
                                <p className="font-light">Properti</p>
                            </div>
                            <div className="border-2 rounded-md flex justify-center items-center flex-col bg-slate-200">
                                <h1 className="text-sky-500 font-bold">5K+</h1>
                                <p className="font-light">Ulasan</p>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <img src={LandingPageIcon.src} alt="LadingPage Icon" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;