export const contentStrings: ContentStrings = {
    home: {
        header: '',
        subtitle: null,
        content: '',
    },
    video: {
            header: 'Quabla - With You',
            subtitle: null,
            content: `
            Unser Song "With You" live auf dem 48h Wilhelmsburg Festival in 2023.
              <br />
              <br />
              Du hättest dabei sein können. Aber es gibt bestimmt ein nächstes Mal.
              Schau doch mal bei unseren 
              <a
              style="color: {color}; cursor: pointer; text-decoration: underline;"
              onclick="document.getElementById('{section}')?.scrollIntoView({ behavior: 'smooth' }); return false;"
              >
                kommenden Auftritten</a>.
            `,
        },
    gigs: {
        header: 'Sternstunden Festival an der Sternwarte in Bergedorf',
        subtitle: 'Datum: 20. Juli 2024 <br /> Zeit: 12.30 Uhr',
        content: `Unsere Band wird live auf dem Sternstunden Festival auftreten! Kommt vorbei und bereitet euch auf 
        tolle Musik und gute Stimmung vor. Wir freuen uns 
        darauf, euch alle dort zu sehen! Tickets gibts 
        <a
        href="https://www.sternstundenfestival.de/tickets"
        target="_blank"
        style="color: {color}; font-weight: bold" }}
        >
        hier</a>.
        `,
    },
    recordings: {
        header: 'Bogisland',
        subtitle: null,
        content: `
        Check unser erstes Album aus. Hier noch unter einem anderen Namen,
        aber die selbe Mukke.
        <br />
        <br />
        Jetzt auf Spotify verfügbar!
        `,
    },
    aboutUs: {
        header: 'Unsere Band',
        subtitle: null,
        content: `
        Quabla ist eine Band aus Hamburg, die eine einzigartige Mischung aus Jazz-Einflüssen, 
        Rock und experimenteller Musik schafft. Der Stil ist geprägt von einer Fusion aus sanften 
        Jazzharmonien mit der Intensität und Energie des Rock, ergänzt durch atmosphärische und manchmal 
        psychedelische Elemente. 
        <br />
        Von introspektiv und ruhig bis hin zu lebhaft und rhythmisch werden verschiedene 
        Genres nahtlos miteinander verbunden, sodass ein frisches und überzeugendes Hörerlebnis geschaffen wird. 
        <br />
        <br />
        Wenn du Musik magst, die Grenzen überschreitet und gerne auch mal unkonventionell daherkommt, freuen wir 
        uns auf dich als Zuhörer/-in!
        `,
    },
    contact: {
        header: 'So erreichst du uns',
        subtitle: null,
        content: `
        Schreib uns doch gerne eine Mail, falls du uns buchen oder einfach
        auch mal nur quatschen möchtest:
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
        Wir freuen uns über deine Nachricht und werden uns so schnell wie
        möglich bei dir melden.
        `,
    },
};

interface Content {
    header: string;
    subtitle: string | null;
    content: string;
  }
  
  interface ContentStrings {
    [key: string]: Content;
  }