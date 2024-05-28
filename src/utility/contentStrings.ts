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
        content: `Unsere Band wird live auf dem Festival auftreten! Kommt und genießt 
        eine unvergessliche Nacht voller Musik und guter Stimmung. Wir freuen uns 
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
        Wir sind eine leidenschaftliche Band aus [Stadt], die sich der
        Musik verschrieben hat. Unsere Reise begann im Jahr [Jahr], und
        seitdem haben wir zahlreiche Auftritte und Alben veröffentlicht.
        <br />
        <br />
        Unser Stil ist vielseitig und reicht von [Genre 1] bis [Genre 2].
        Jedes Bandmitglied bringt seine einzigartige Erfahrung und
        Leidenschaft in die Gruppe ein, was unsere Musik so besonders
        macht.
        <br />
        <br />
        Wir freuen uns darauf, euch bei unseren kommenden Auftritten zu
        sehen und mit euch unvergessliche Momente zu teilen.
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
        href="mailto:tonesforjoansbones@gmail.com"
        style="color: {color};" }}
        >
        tonesforjoansbones@gmail.com
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