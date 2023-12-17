// icons
import { MdOutlineMenuBook } from "react-icons/md";

export default function Services(){

    const services = [
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        },
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        },
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        },
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        },
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        },
        {
            icon: <MdOutlineMenuBook />,
            text: "UI / UX Designing"
        }
    ];

    return (
        <div className="mb-12 mt-12 px-12 py-4">
            <h2 className="text-4xl font-semibold text-center">Services.</h2>
            <h3 className="text-xl font-medium text-center">Here are the services we are providing to you.</h3>

            <div className="grid grid-cols-3 gap-4 mt-12">
                {/* services list */}
                {
                    services.map((service, idx) => {
                        return (
                            <div className="flex items-center gap-4 text-xl font-medium bg-[#d9d9d9] p-4 rounded-md">
                                {service.icon}
                                <span>{service.text}</span>
                            </div>
                        );
                    })
                }
            </div>

            <div className="mt-12 text-center">
                <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">View All</button>
            </div>
            
        </div>
    );
}