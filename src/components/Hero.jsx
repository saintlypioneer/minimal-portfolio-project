// icons
import { RiStarSFill } from "react-icons/ri";


export default function Hero(){
    return (
        <div className="mt-12 flex items-center justify-center px-12 py-4">
            <div className="flex flex-col gap-8">
                {/* left */}
                <h1 className="uppercase text-4xl font-semibold max-w-xl">Hey There, I'm Ankit from QuickUI. Let's create something beautiful</h1>
                <div className="flex gap-4 text-lg font-medium">
                    {/* taglines */}
                    <div className="flex items-center"><RiStarSFill color="#f9db4b" /><span>Designer</span></div>
                    <div className="flex items-center"><RiStarSFill color="#f9db4b" /><span>Figma</span></div>
                    <div className="flex items-center"><RiStarSFill color="#f9db4b" /><span>Developer</span></div>
                </div>
                <div className="flex gap-4">
                    {/* buttons */}
                    <button className="bg-transparent border-2 border-[#222222] font-semibold py-2 px-8 rounded-full">Want to discuss?</button>
                    <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">Let's Talk.</button>
                </div>
            </div>
            <div>
                {/* right image section */}
                <img className="w-80 object-contain rounded-full" src="/user-avatar.jpg" />
            </div>
        </div>
    );
}