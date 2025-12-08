import React, { useState } from 'react'

const ExtendingSlider = () => {

    const slides = [
        {
            title: "Photo 1",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 2",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 3",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 4",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 5",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 6",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 7",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 8",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 9",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
        {
            title: "Photo 10",
            image: "https://img.freepik.com/photos-gratuite/beau-paysage-riviere-entouree-verdure-dans-foret_181624-40482.jpg?w=1060&t=st=1660555488~exp=1660556088~hmac=17904c5639b112431c42911320184a1dc378acecbad6682e003e56d617fb077c",
        },
    ];

    const [active, setActive] = useState(0);

    const handleKey = (e, index) => {
        if (e.key === "Enter" || e.key === " ") {
            setActive(index);
        }
        if (e.key === "ArrowRight") {
            setActive((prev) => Math.min(prev + 1, slides.length - 1));
        }
        if (e.key == "ArrowLeft") {
            setActive((prev) => Math.max(prev - 1, 0));
        }
    };

    return (
        <div className=' h-[500px] w-full flex items-center justify-center '>
            <div className=' w-full h-full flex items-stretch '>
                {slides.map((s, i) => (
                    <button key={i} onClick={() => setActive(i)} onKeyDown={(e) => handleKey(e, i)} aria-pressed={active === i} className={`relative rounded-sm overflow-hidden transition-[flex] duration-500 ease-in-out shadow-lg focus:outline-none flex items-end cursor-pointer`} style={{ flex: active === i ? 2 : 0.1   , height: "100%", backgroundImage: `url(${s.image})`, backgroundSize: "cover", backgroundPosition: "center", margin: "5px", }}>
                        <div className="absolute inset-0 bg-black/25 transition-opacity duration-300" />
                        <div
                            className={`relative p-6 z-10 transform transition-opacity duration-300 ${active === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                        >
                            <h3 className="text-white text-3xl font-semibold">{s.title}</h3>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default ExtendingSlider