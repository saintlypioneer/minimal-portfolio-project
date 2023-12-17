// icons
import { FaGoogle } from "react-icons/fa";

export default function Footer(){

    const socials = [
        {
            icon: <FaGoogle color="#222222" />,
            text: "https://google.plus.com/..."
        },
        {
            icon: <FaGoogle color="#222222" />,
            text: "https://google.plus.com/..."
        },
        {
            icon: <FaGoogle color="#222222" />,
            text: "https://google.plus.com/..."
        },
        {
            icon: <FaGoogle color="#222222" />,
            text: "https://google.plus.com/..."
        }
    ];
    
    return (
        <div className="mt-12 p-12 bg-[#222222] text-white flex justify-center gap-32 items-center">
            <span className="text-8xl font-bold">Qu.</span>
            <div className="grid grid-cols-2 gap-8">
                {/* socials */}

                {
                    socials.map((social, idx) => {
                        return (
                            <div className="flex items-center gap-4">
                                <span className="bg-white text-xl p-2 rounded-full">{social.icon}</span>
                                <span>{social.text}</span>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}