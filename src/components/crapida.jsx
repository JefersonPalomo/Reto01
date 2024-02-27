
const callouts = [
    {
        name: 'El corral',
        description: 'Comida Rápida',
        imageSrc: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6635844642821.581923d7ce2f8.png',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: 'https://www.google.com/maps/place/El+Corral+Hacienda/@4.6883138,-74.0395079,15z/data=!4m10!1m2!2m1!1sel+corral!3m6!1s0x8e3f9b4ea0435741:0xc1518e05aa451248!8m2!3d4.6934701!4d-74.033147!15sCgllbCBjb3JyYWwiA4gBAVoLIgllbCBjb3JyYWySAQpyZXN0YXVyYW504AEA!16s%2Fg%2F11fd4gh9s2?entry=ttu',
    },
    {
        name: 'McDonalds',
        description: 'Comida Rápida',
        imageSrc: 'https://seeklogo.com/images/M/mcdonald-s-logo-255A7B5646-seeklogo.com.png',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: "https://www.google.com/maps/place/McDonald's/@4.6883138,-74.0395079,15z/data=!4m10!1m2!2m1!1sMcDonald's!3m6!1s0x8e3f9aa7d9b348a9:0x505422dad1ec8591!8m2!3d4.695349!4d-74.0321122!15sCgpNY0RvbmFsZCdzIgOIAQFaDCIKbWNkb25hbGQnc5IBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA!16s%2Fg%2F1tcvcyt4?entry=ttu",
    },
    {
        name: 'Dogger',
        description: 'Comida Rápida',
        imageSrc: 'https://scontent-bog2-1.xx.fbcdn.net/v/t39.30808-6/420658717_773346034838546_3998910466327157685_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=hrSM_Cq5qWEAX95Ajdj&_nc_ht=scontent-bog2-1.xx&oh=00_AfCC3qcRZPbUikfJlS71w21CtkGGFlprOlCgoPhJgZeASw&oe=65E30806',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: "https://www.google.com/maps/place/Dogger+Calle+85+%2315/@4.6699687,-74.0904714,13z/data=!4m10!1m2!2m1!1sdogger!3m6!1s0x8e3f9b9dbc11a347:0xce3c3df0c53ae331!8m2!3d4.6699687!4d-74.0554525!15sCgZkb2dnZXJaCCIGZG9nZ2VykgENZ3JvY2VyeV9zdG9yZeABAA!16s%2Fg%2F11s8wgfqlc?entry=ttu",
    },
    {
        name: 'Presto',
        description: 'Comida Rápida',
        imageSrc: 'https://play-lh.googleusercontent.com/J--OZXzjNBjOLlVlMJqyLQ4p9Dr0vU4CF118cHZ4E9yHLMyDCt7omkzh0uLEp0cNPFiY=w240-h480-rw',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Presto/@4.6699687,-74.0904714,13z/data=!4m10!1m2!2m1!1spresto!3m6!1s0x8e3f855b9127a045:0x4f7b0d71d0f7f303!8m2!3d4.7198225!4d-74.0379634!15sCgZwcmVzdG9aCCIGcHJlc3RvkgEUaGFtYnVyZ2VyX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F1pt_gmw37?entry=ttu',
    },
    {
        name: 'Pizza Hut',
        description: 'Comida Rápida',
        imageSrc: 'https://logowik.com/content/uploads/images/pizza-hut-new6371.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Pizza+Hut+Pepe+Sierra/@4.6699687,-74.0904714,13z/data=!4m10!1m2!2m1!1spizza+hut!3m6!1s0x8e3f9ab728e2c549:0x5140b2940fe213da!8m2!3d4.6984786!4d-74.0481422!15sCglwaXp6YSBodXQiA4gBAVoLIglwaXp6YSBodXSSARBwaXp6YV9yZXN0YXVyYW504AEA!16s%2Fg%2F1vd3wvt8?entry=ttu',
    },
    {
        name: 'Little Caesars',
        description: 'Comida Rápida',
        imageSrc: 'https://ofertu.s3.amazonaws.com/hho38e5juzc4t9n87gc7nnip4i09',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'https://www.google.com/maps/place/Little+Caesars+Calle+134/@4.6699687,-74.0904714,13z/data=!4m10!1m2!2m1!1sLittle+Caesars!3m6!1s0x8e3f85e4e626a8c7:0x3e8dcaae055fc72!8m2!3d4.7212054!4d-74.0609954!15sCg5MaXR0bGUgQ2Flc2FycyIDiAEBWhAiDmxpdHRsZSBjYWVzYXJzkgEQcGl6emFfcmVzdGF1cmFudOABAA!16s%2Fg%2F11hh56nntz?entry=ttu',
    }
]

export default function CrRapida() {
    return (
        <div className="select-none bg-gray-100">
            <div className="max-w-7x7 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3x6 py-16 sm:py-24 lg:max-w-none lg:py-5">
                    <h2 className="text-4xl font-bold text-gray-900 text-center">Fast Food</h2>

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
                                <p className="text-base pb-5 font-semibold text-gray-900 max-w-full">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}