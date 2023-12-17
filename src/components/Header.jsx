export default function Header(){

    const navigationButtons = [
        {
            text: "Home",
            url: "/home"
        },
        {
            text: "Services",
            url: "/services"
        },
        {
            text: "portfolios",
            url: "/portfolio"
        },
        {
            text: "Testimonials",
            url: "/testimonials"
        }
    ];

    return (
        <div className="flex justify-between items-center px-12 py-4">
            <div>
                {/* logo */}
                <span className="text-4xl font-bold">Qu.</span>
            </div>
            <div className="flex gap-3">
                {/* menu buttons */}
                {
                    navigationButtons.map((menuItem, idx) => {
                        return (
                            <a key={idx} href={menuItem.url} className="cursor-pointer">
                                {menuItem.text}
                            </a>
                        );
                    })
                }
            </div>
            <div>
                {/* CTA */}
                <button className="bg-[#f9db4b] font-semibold py-2 px-8 rounded-full">Let's Talk.</button>
            </div>
        </div>
    );
}