const callouts = [
    {
        name: 'PADRE',
        description: 'Fusión, Mar, Colombiana, Trago y picadas.',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5e71018a7deac.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: 'https://www.google.com/maps/place/Padre+Cafe-Bar/@4.5983195,-74.0777439,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f99447200abc9:0x20aeb67c8a0d0e54!8m2!3d4.5983195!4d-74.0777439!16s%2Fg%2F11h30vy5vh?entry=ttu',
    },
    {
        name: 'Gaira',
        description: 'Mar, Colombiana',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5cd1e7d886bbf.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'https://www.google.com/maps/place/Cumbia+House+de+Gaira/@4.6752042,-74.0564771,14.44z/data=!4m10!1m2!2m1!1sgaira!3m6!1s0x8e3f9a915646447f:0x83ac12afc3ba4a02!8m2!3d4.6806899!4d-74.0475525!15sCgVnYWlyYVoHIgVnYWlyYZIBDmxpdmVfbXVzaWNfYmFymgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5LZFhORFMxZEJFQUXgAQA!16s%2Fg%2F1tdzxs9w?entry=ttu',
    },
    {
        name: 'Barra Chalaca',
        description: 'Peruana, Mar, Oficinero',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5bf58465ef8c5.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Barra+Chalaca/@4.6752042,-74.0564771,14.44z/data=!4m10!1m2!2m1!1sbarra+chalaca!3m6!1s0x8e3f9b56c17ee511:0xd51f75617d5ae9d8!8m2!3d4.69348!4d-74.046987!15sCg1iYXJyYSBjaGFsYWNhWg8iDWJhcnJhIGNoYWxhY2GSARNwZXJ1dmlhbl9yZXN0YXVyYW504AEA!16s%2Fg%2F11gmc0fv8f?entry=ttu',
    },
    {
        name: 'Exxus oyster bar',
        description: 'Mar, Buena Terraza',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5a5f7b368a5f9757650853.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Exxus+Oyster+Bar/@4.6992698,-74.0775434,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b29d34e448f:0x760800676769764d!8m2!3d4.6992698!4d-74.0775434!16s%2Fg%2F11b7q5w395?entry=ttu',
    },
    {
        name: 'La Mar',
        description: 'Peruana, Mar',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5e8369a3d9dfc.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/La+Mar+%E2%80%A2+Cebicher%C3%ADa+Peruana/@4.6958552,-74.0304139,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9aa803e4587f:0x453c6cc5bec2badd!8m2!3d4.6958552!4d-74.0304139!16s%2Fg%2F1thx0h47?entry=ttu',
    },
    {
        name: 'Pacific Seafood',
        description: 'Mar, Oficinero',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5b481cba8cfca539418094.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Pacific+Colina+Restaurante+Comida+de+mar/@4.7326742,-74.1015526,13z/data=!3m1!5s0x8e3f8519ee2ac855:0x940443449c217153!4m10!1m2!2m1!1sPacific+SeaFood+!3m6!1s0x8e3f8586a1ac4eed:0x29ca0861c3798a9f!8m2!3d4.7326742!4d-74.0665337!15sCg9QYWNpZmljIFNlYUZvb2QiA4gBAVoRIg9wYWNpZmljIHNlYWZvb2SSARJzZWFmb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11g1q7hdkn?entry=ttu',
    }
]

export default function DeMar() {
    return (
        <div className="bg-gray-100 w-full">
            <div className="max-w-7x7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3x6 py-16 sm:py-24 lg:max-w-none lg:py-5">
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Sea Food</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative max-w-full">
                                <div className="relative h-80 max-w-7xl overflow-hidden rounded-lg bg-white group-hover:opacity-75">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500 max-w-full">
                                    <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a>
                                </h3>
                                <p className="text-basec pb-5 font-semibold text-gray-900 max-w-full">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}