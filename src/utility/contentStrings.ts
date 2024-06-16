interface Content {
    header: string;
    subtitle: string | null;
    content: string;
}

export const contentStrings: {[key: string]: { [lng: string]: Content }} = {
    home: {
        de: {
            header: '',
            subtitle: null,
            content: '',
        },
        en: {
            header: '',
            subtitle: null,
            content: '',
        }
    },
    video: {
        de: {
            header: 'Quabla - With You',
            subtitle: null,
            content: '',
        },
        en: {
            header: 'Quabla - With You',
            subtitle: null,
            content: '',
        }
    },
    gigs: {
        de: {
            header: 'Sternstunden Festival an der Sternwarte in Bergedorf',
            subtitle: 'Datum: 20. Juli 2024 <br /> Zeit: 12.30 Uhr',
            content: `<a
                href="https://www.sternstundenfestival.de/tickets"
                target="_blank"
                style="color: {color}; font-weight: bold" }}
                >
                Tickets</a>`,
        },
        en: {
            header: 'Sternstunden Festival at the Observatory in Bergedorf',
            subtitle: 'Date: July 20, 2024 <br /> Time: 12.30 PM',
            content: `<a
                href="https://www.sternstundenfestival.de/tickets"
                target="_blank"
                style="color: {color}; font-weight: bold" }}
                >
                Tickets</a>`,
        }
    },
    recordings: {
        de: {
            header: '',
            subtitle: null,
            content: '',
        },
        en: {
            header: '',
            subtitle: null,
            content: '',
        }
    },
    aboutUs: {
        de: {
            header: 'Unsere Band',
            subtitle: null,
            content: `
            Quabla schafft eine einzigartige Mischung aus sanften Jazzharmonien mit der Intensität 
            und Energie des Rock, ergänzt durch atmosphärische und manchmal psychedelische Elemente.
            <br />
            Von introspektiv und ruhig bis hin zu lebhaft und rhythmisch ist ihre Musik genreübergreifend, 
            sodass ein frisches und überzeugendes Hörerlebnis geschaffen wird.
            <br />
            <br />
            Wenn du Musik magst, die Grenzen überschreitet und gerne auch mal unkonventionell daherkommt, 
            freuen wir uns auf dich als Zuhörer/-in!
        `,
        },
        en: {
            header: 'Introducing Our Band',
            subtitle: null,
            content: `Quabla creates a unique blend of gentle jazz harmonies with the intensity and energy of 
            rock, complemented by atmospheric and sometimes psychedelic elements.
            <br />
            Ranging from introspective and calm to lively and rhythmic, their music transcends 
            genres, creating a fresh and compelling listening experience.
            <br />
            <br />
            If you enjoy music that pushes boundaries and embraces unconventionality, we look 
            forward to having you as a listener!`,
        }
    },
    contact: {
        de: {
            header: 'So erreichst du uns',
            subtitle: null,
            content: `
            Schreib' uns gerne eine Mail, falls du Fragen hast oder uns buchen möchtest:
            <br />
            <br />
            E-Mail: <a
            href="mailto:contact@quabla-band.com"
            style="color: {color};" }}
            >
            contact@quabla-band.com
            </a>
            <br />
            <br />
            Wir freuen uns über deine Nachricht und werden uns so 
            schnell wie möglich bei dir melden.
            `,
        },
        en: {
            header: 'How to Reach Us',
            subtitle: null,
            content: `Feel free to send us an email if you have any questions or would like to book us:
            <br />
            <br />
            Email: <a
            href="mailto:contact@quabla-band.com"
            style="color: {color};" }}
            >
            contact@quabla-band.com
            </a>
            <br />
            <br />
            We look forward to your message and will get back to you as soon as possible.`,
        }
    },
};

export const header = {
    home: 'Home',
    video: 'Video',
    gigs: "Auftritte",
    recordings: "Audio",
    aboutUs: 'Über Uns',
    contact: 'Kontakt',
};

export const ariaLabels = {
    navBar: "Main navigation bar",
    facebook: "Facebook",
    spotify: "Spotify",
    bandcamp: "Bandcamp",
    appleMusic: "AppleMusic",
    instagram: "Instagram",
    iconYoutube: "YouTube",
    title: "Title image section with carousel",
    scrollRecordings: "Scroll to recordings section",
    scrollVideo: "Scroll to video section",
    carousel: "Image carousel",
    carouselImage: "Carousel image",
    recordings: "Play recordings on Spotify",
    footer: "Footer",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
    youtube: "YouTube video section",
    video: "YouTube video player",
    videoDescription: "YouTube video description",
    videoLink: "Watch on YouTube",
    cookieTitle: "cookie-consent-dialog-title",
    cookieDescription: "cookie-consent-dialog-description",
    cookieDecline: "Decline cookies",
    cookieAccept: "Accept cookies",
};