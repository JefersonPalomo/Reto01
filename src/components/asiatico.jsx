
const callouts = [
    {
        name: 'Amen Ramen',
        description: 'Asiática, Ramen, Clandestino',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5a0db38fa5d3e489429601.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: 'https://www.google.com/maps/place/Amen+Ramen/@4.6969532,-74.0887572,13z/data=!4m6!3m5!1s0x8e3f9a3bb2c8deb9:0xb6d77d478373fe89!8m2!3d4.6399333!4d-74.0623028!16s%2Fg%2F11cn9rz9pj?entry=ttu',
    },
    {
        name: 'Osaki',
        description: 'Asiática, Sushi, Ramen',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5e6fa4bf9a119.jpeg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'https://www.google.com/maps/place/Osaki+Calle+85/@4.6399333,-74.0623028,13z/data=!4m10!1m2!2m1!1sosaki!3m6!1s0x8e3f9b959f3f6d4d:0xf205c47b354845b1!8m2!3d4.6685809!4d-74.053101!15sCgVvc2FraSIDiAEBWgciBW9zYWtpkgEQYXNpYW5fcmVzdGF1cmFudOABAA!16s%2Fg%2F11t_j42ntn?entry=ttu',
    },
    {
        name: 'Kong',
        description: 'Asiática, Rápida, Oficinero',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5e838c8391bd9.png',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/KONG+Restaurante/@4.6969532,-74.0887572,13z/data=!4m10!1m2!2m1!1skong!3m6!1s0x8e3f9a422425d237:0x2234d84d04ec9034!8m2!3d4.653497!4d-74.0547636!15sCgRrb25nWgYiBGtvbmeSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F1thl_h8l?entry=ttu',
    },
    {
        name: 'Seiki',
        description: 'Asiática, Sushi',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/6495f99ddd7db837219383.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Seiki+Sushi/@4.6436761,-74.061005,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9a391ebf4d55:0x640c2076ef9b5640!8m2!3d4.6436761!4d-74.061005!16s%2Fg%2F11fy7gtzb7?entry=ttu',
    },
    {
        name: 'Tandoor',
        description: 'Asiática, No convencional',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/5afb113978257951396456.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Tandoor+Indian+Restaurant+%26+Bar/@4.6537324,-74.0598045,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9b1f1ed8ccd7:0xead7b7bf09bcbe00!8m2!3d4.6537324!4d-74.0598045!16s%2Fg%2F11h8ggpc4k?entry=ttu',
    },
    {
        name: 'Biwon',
        description: 'Asiática, Trago y picadas',
        imageSrc: 'https://api.bogotaeats.com/uploads/restaurantes/60141afa2058e117701364.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/BIWON+RESTAURANTE/@4.6883138,-74.0395079,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3f9a92dda63181:0xe34adc1c98feb917!8m2!3d4.6883138!4d-74.0395079!16s%2Fg%2F1pv2l34cx?entry=ttu',
    }
]

export default function Asiática() {
    return (
        <div className="select-none bg-gray-100">
            <div className="max-w-7x7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3x6 py-16 sm:py-24 lg:max-w-none lg:py-5">
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Asian Food</h2>

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
                                <p className="pb-5 text-base font-semibold text-gray-900 max-w-full">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}