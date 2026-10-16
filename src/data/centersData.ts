export interface CenterLocationItem {
  id: string;
  name: string;
  tag: string;
  address: string;
  postcode: string;
  image: string;
  jummahTimings: { label: string; time: string }[];
  mapEmbedUrl: string;
  directionsUrl: string;
  statusBadge?: string;
  description?: string;
}

export interface CenterEventItem {
  id: string;
  title: string;
  image: string;
  tag?: string;
  actionText?: string;
  actionCauseId?: string;
}

export interface CenterDetail {
  id: string;
  key: string;
  name: string;
  city: string;
  regionTag: string;
  subtitle: string;
  description: string;
  bannerImage: string;
  causeId: string;
  donationTitle: string;
  donationDesc: string;
  giveFormId?: string;
  locations: CenterLocationItem[];
  events: CenterEventItem[];
  schoolFeature?: {
    title: string;
    description: string;
    image: string;
    admissionsText: string;
    phone: string;
    email: string;
  };
}

export const CENTERS_DATA: Record<string, CenterDetail> = {
  bradford: {
    id: 'bradford',
    key: 'bradford',
    name: 'Faizan E Madinah & Bradford Centers',
    city: 'Bradford',
    regionTag: 'Bradford District · 4 Masajid',
    subtitle: 'Heart of Dawat-e-Islami in Yorkshire',
    description: 'Serving the Muslim community of Bradford across 4 dedicated Masajid and educational institutes: Faizan-e-Madina (BD3), Faizan-e-Makkah (BD9), Faizan-e-Attar (BD1), and Faizan-e-Raza (BD6).',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-1.jpg',
    causeId: 'bradford',
    donationTitle: 'Support Your Bradford Community',
    donationDesc: 'Your contributions help us maintain these 4 Bradford centers and continue serving the Bradford community with religious and social services.',
    giveFormId: '9783',
    locations: [
      {
        id: 'bradford-central',
        name: 'Faizan E Madina',
        tag: 'Bradford Central',
        address: 'Maudsley Street, Bradford, BD3 9LE',
        postcode: 'BD3 9LE',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-1.jpg',
        jummahTimings: [
          { label: "Main Jamā'at", time: '2:00 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madina+Masjid+BD3+|+Dawat-e-Islami+UK,+Maudsley+Street,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.app.goo.gl/ztv9mfJHpDrBPsh5A'
      },
      {
        id: 'bradford-west',
        name: 'Faizan E Makkah',
        tag: 'Bradford West',
        address: 'Lilycroft Rd, Bradford, BD9 5AB',
        postcode: 'BD9 5AB',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/Faizan-E-Makkah-1.png',
        jummahTimings: [
          { label: "1st Jamā'at", time: '1:30 PM' },
          { label: "2nd Jamā'at", time: '2:00 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+e+Makkah+Masjid+(Dawateislami),+Lilycroft+Road,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=Lilycroft+Rd,+Bradford+BD9+5AB'
      },
      {
        id: 'bradford-east',
        name: 'Faizan E Attar',
        tag: 'Bradford East',
        address: '70-72 Harris St, Bradford, BD1 5JD',
        postcode: 'BD1 5JD',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-2.jpg',
        jummahTimings: [
          { label: "Main Jamā'at", time: '1:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Attar+Masjid+BD1+|+Madrassah-tul-Madina+|+Dawat-e-Islami+UK,+Harris+Street,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=70-72+Harris+St,+Bradford+BD1+5JD'
      },
      {
        id: 'bradford-south',
        name: 'Faizan e Raza Masjid',
        tag: 'Bradford South (Wibsey)',
        address: '71 Beacon Rd, Bradford, BD6 3ET',
        postcode: 'BD6 3ET',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/Faizan-E-Raza-1.png',
        jummahTimings: [
          { label: "1st Jamā'at", time: '1:30 PM' },
          { label: "2nd Jamā'at", time: '2:00 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Raza+Masjid+BD6+|+Dawat-e-Islami+UK,+Beacon+Road,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=71+Beacon+Rd,+Bradford+BD6+3ET'
      }
    ],
    events: [
      {
        id: 'bradford-weekly-brothers',
        title: 'Weekly Gathering For Brothers',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-21-at-18.50.19_d64bbcf4.jpg',
        tag: 'Weekly Gathering'
      },
      {
        id: 'bradford-mawlid-ijtima',
        title: 'Ijtima e Zikr o Naat (Welcoming the Month of Mawlid)',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/Big-Ijtima.jpg',
        tag: 'Special Ijtima'
      }
    ]
  },

  dewsbury: {
    id: 'dewsbury',
    key: 'dewsbury',
    name: 'Faizan E Madinah',
    city: 'Dewsbury',
    regionTag: 'Ravensthorpe (Dewsbury)',
    subtitle: 'Education Centre & Community Masjid',
    description: 'Faizan-e-Madinah Ravensthorpe serves Dewsbury with regular prayers, adult Tajweed classes, sisters gatherings, and community educational services.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Fm-Ravy-New.jpg',
    causeId: 'dewsbury',
    donationTitle: 'Support Dewsbury Center',
    donationDesc: 'Your generous contributions help maintain the Ravensthorpe center and support our ongoing educational and community services.',
    giveFormId: '9781',
    locations: [
      {
        id: 'dewsbury-main',
        name: 'Faizan E Madinah',
        tag: 'Ravensthorpe (Dewsbury)',
        address: 'Faizan-e-Madinah Education Centre, John St, Ravensthorpe, Dewsbury, WF13 3LE',
        postcode: 'WF13 3LE',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Fm-Ravy-New.jpg',
        jummahTimings: [
          { label: "Main Jamā'at", time: '1:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madinah+Education+Centre+(Dewsbury),+John+Street,+Ravensthorpe,+Dewsbury,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=John+St,+Ravensthorpe,+Dewsbury+WF13+3LE'
      }
    ],
    events: [
      {
        id: 'dewsbury-brothers',
        title: 'Weekly Gathering For Brothers',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Gatherings-Brothers.jpg',
        tag: 'Brothers Ijtima'
      },
      {
        id: 'dewsbury-sisters',
        title: 'Weekly Gatherings For Sisters',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-22-at-07.21.26_0685220b.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'dewsbury-tajweed',
        title: 'Adult Tajweed Classes Dewsbury',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Adult-Tajweed-Classes-Dewsbury.jpg',
        tag: 'Quran Classes'
      }
    ]
  },

  halifax: {
    id: 'halifax',
    key: 'halifax',
    name: 'Faizan E Madina',
    city: 'Halifax',
    regionTag: 'Halifax Central',
    subtitle: 'Queens Road Mills Community Hub',
    description: 'Providing daily congregational prayers, dual Jummah schedules, youth Tarbiyyah, and Islamic educational initiatives for Halifax.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Halifax-1.jpg',
    causeId: 'halifax',
    donationTitle: 'Support Halifax Center',
    donationDesc: 'Your support helps us provide essential services and educational programs for the Halifax community. Every contribution makes a difference.',
    giveFormId: '9787',
    locations: [
      {
        id: 'halifax-main',
        name: 'Faizan E Madina',
        tag: 'Halifax Central',
        address: 'Queens Road Mills, Gibbet St, Halifax, HX1 4JX',
        postcode: 'HX1 4JX',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Halifax-1.jpg',
        jummahTimings: [
          { label: "1st Jamā'at", time: '1:30 PM' },
          { label: "2nd Jamā'at", time: '2:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madina+Mosque+Halifax,+Gibbet+Street,+Halifax,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=Gibbet+St,+Halifax+HX1+4JX'
      }
    ],
    events: [
      {
        id: 'halifax-weekly',
        title: 'Weekly Spiritual Gathering & Jamā\'at',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg',
        tag: 'Halifax Gathering'
      }
    ]
  },

  huddersfield: {
    id: 'huddersfield',
    key: 'huddersfield',
    name: 'Faizan E Madina',
    city: 'Huddersfield',
    regionTag: 'Huddersfield Central',
    subtitle: '75 New North Road Centre',
    description: 'Serving Huddersfield with regular congregational prayers, active weekly gatherings, and educational circles. Support our appeal to make the center debt-free.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Huddersfield-1.jpg',
    causeId: 'huddersfield',
    donationTitle: 'Support Huddersfield Center',
    donationDesc: 'Your support helps maintain the Huddersfield center and provides the resources needed for community engagement and local services.',
    giveFormId: '9785',
    locations: [
      {
        id: 'huddersfield-main',
        name: 'Faizan E Madina',
        tag: 'Huddersfield Central',
        address: '75 New N Rd, Huddersfield, HD1 5ND',
        postcode: 'HD1 5ND',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Huddersfield-1.jpg',
        jummahTimings: [
          { label: "Main Jamā'at", time: '1:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=FAIZAN+E+MADINA,+New+North+Road,+Huddersfield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=75+New+N+Rd,+Huddersfield+HD1+5ND'
      }
    ],
    events: [
      {
        id: 'huddersfield-brothers',
        title: 'Weekly Gathering For Brothers',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Gatherings-Brothers-Huddersfield.jpg',
        tag: 'Brothers Ijtima'
      },
      {
        id: 'huddersfield-sisters',
        title: 'Weekly Gatherings For Sisters',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-22-at-07.19.59_1ee1c3ca.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'huddersfield-debt-free',
        title: 'Help Us Make Faizan e Madinah Debt Free',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/03/huds-appeals.jpeg',
        tag: 'Masjid Appeal',
        actionText: 'Donate to Huddersfield Debt-Free Fund',
        actionCauseId: 'huddersfield'
      }
    ]
  },

  keighley: {
    id: 'keighley',
    key: 'keighley',
    name: 'Faizan E Raza',
    city: 'Keighley',
    regionTag: 'Keighley Central',
    subtitle: 'Highfield Lane Center',
    description: 'Welcome to the Keighley center. Join us for daily prayers and community events. For the latest timings and schedules, please view the map or visit us.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Keighley-1.png',
    causeId: 'keighley',
    donationTitle: 'Support Keighley Center',
    donationDesc: 'Your generous contributions help maintain the Keighley center and support our ongoing religious and community services.',
    giveFormId: '9789',
    locations: [
      {
        id: 'keighley-main',
        name: 'Faizan E Raza',
        tag: 'Keighley Central',
        address: '29 Highfield Ln, Keighley, BD21 2DJ',
        postcode: 'BD21 2DJ',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Keighley-1.png',
        jummahTimings: [
          { label: "Main Jamā'at", time: '1:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=29+Highfield+Lane,+Keighley+BD21+2DJ,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=29+Highfield+Ln,+Keighley+BD21+2DJ'
      }
    ],
    events: [
      {
        id: 'keighley-weekly',
        title: 'Weekly Community Gathering & Halaqah',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg',
        tag: 'Weekly Gathering'
      }
    ]
  },

  leeds: {
    id: 'leeds',
    key: 'leeds',
    name: 'Faizan E Madina',
    city: 'Leeds',
    regionTag: 'Leeds Central',
    subtitle: 'New Mosque Development Hub',
    description: 'Our Leeds center is currently undergoing development to better serve the local community. Stay tuned for updates on prayer times and services.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Leeds-1.png',
    causeId: 'leeds',
    donationTitle: 'Support Leeds Center Project',
    donationDesc: 'Help us complete this project. Your donations directly contribute to the construction and establishment of this vital community hub in Leeds.',
    giveFormId: '3078',
    locations: [
      {
        id: 'leeds-main',
        name: 'Faizan E Madina',
        tag: 'Leeds Central',
        address: '58-62 Francis St, Leeds, LS7 4BU',
        postcode: 'LS7 4BU',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Leeds-1.png',
        statusBadge: 'Project In Progress',
        description: 'Under active development to bring full congregational facilities, madrasah classrooms, and youth activity centers to Leeds.',
        jummahTimings: [
          { label: "Status", time: 'In Development' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+e+Madina+Leeds,+Francis+Street,+Leeds,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=58-62+Francis+St,+Leeds+LS7+4BU'
      }
    ],
    events: [
      {
        id: 'leeds-development',
        title: 'Leeds Masjid Construction & Fundraising Appeal',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Leeds-1.png',
        tag: 'Development Appeal',
        actionText: 'Donate to Leeds Mosque Build',
        actionCauseId: 'leeds'
      }
    ]
  },

  rotherham: {
    id: 'rotherham',
    key: 'rotherham',
    name: 'Faizan E Madinah',
    city: 'Rotherham',
    regionTag: 'Rotherham Central',
    subtitle: 'The Ladder, Maltkiln Street',
    description: 'Active hub in Rotherham delivering Friday prayers, brothers weekly gatherings, sisters halaqahs, and Muzakara educational sessions.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/2156-Faizan-E-Madinah-Rotherham-1.jpg',
    causeId: 'rotherham',
    donationTitle: 'Support Rotherham Center',
    donationDesc: 'Your generous contributions help maintain the Rotherham center and support our ongoing religious and community services.',
    giveFormId: '9698',
    locations: [
      {
        id: 'rotherham-main',
        name: 'Faizan E Madinah',
        tag: 'Rotherham Central',
        address: 'The Ladder, 1 Maltkiln Street, Rotherham, S60 2HY',
        postcode: 'S60 2HY',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/2156-Faizan-E-Madinah-Rotherham-1.jpg',
        jummahTimings: [
          { label: "Main Jamā'at", time: '1:30 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+E+Madinah+Rotherham,+Maltkiln+Street,+Rotherham,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=1+Maltkiln+Street,+Rotherham+S60+2HY'
      }
    ],
    events: [
      {
        id: 'rotherham-brothers',
        title: 'Weekly Gathering For Brothers',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/06/rotherham-ijtima.jpg',
        tag: 'Brothers Ijtima'
      },
      {
        id: 'rotherham-sisters',
        title: 'Weekly Gatherings For Sisters',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/03/Weekly-Gathering-Rotherham.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'rotherham-muzakra',
        title: 'Weekly Muzakara Gathering',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/06/Muzakra-Rotherham.jpg',
        tag: 'Knowledge Circle'
      }
    ]
  },

  sheffield: {
    id: 'sheffield',
    key: 'sheffield',
    name: 'Faizan E Madinah',
    city: 'Sheffield',
    regionTag: 'Sheffield Central',
    subtitle: 'Old Firth Park Library Community Hub',
    description: 'Prominent Islamic centre in Sheffield hosting dual Jummah congregations, Dar-ul-Madinah Islamic primary school, and multiple weekly community gatherings across Firth Park, Darnall, and Netheredge.',
    bannerImage: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Sheffield-1.png',
    causeId: 'sheffield',
    donationTitle: 'Support Sheffield Center',
    donationDesc: 'Your generous contributions help maintain the Sheffield center and support our ongoing religious, educational, and community services.',
    giveFormId: '9696',
    locations: [
      {
        id: 'sheffield-main',
        name: 'Faizan E Madinah',
        tag: 'Sheffield Central',
        address: 'Old Firth Park Library, Firth Park Road, Sheffield, S5 6WS',
        postcode: 'S5 6WS',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Sheffield-1.png',
        jummahTimings: [
          { label: "1st Jamā'at", time: '1:30 PM' },
          { label: "2nd Jamā'at", time: '4:00 PM' }
        ],
        mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Madrassa+Tul+Madinah+Sheffield,+Firth+Park+Road,+Sheffield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
        directionsUrl: 'https://maps.google.com/?q=Firth+Park+Road,+Sheffield+S5+6WS'
      }
    ],
    events: [
      {
        id: 'sheffield-brothers',
        title: 'Weekly Gathering For Brothers',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/sh4ffield-ijtima.jpg',
        tag: 'Brothers Ijtima'
      },
      {
        id: 'sheffield-sisters-firthpark',
        title: 'Sisters Gathering (Firth Park)',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Firth-Park-Rd-Sheffield.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'sheffield-sisters-darnall',
        title: 'Sisters Gathering (Darnall)',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Darnall-Sheffield.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'sheffield-sisters-netheredge',
        title: 'Sisters Gathering (Netheredge)',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Netheredge-Sheffield.jpg',
        tag: 'Sisters Ijtima'
      },
      {
        id: 'sheffield-sisters-firthpark-2',
        title: 'Sisters Gathering (Firth Park Special)',
        image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2026/04/l6PV1.jpg',
        tag: 'Special Gathering'
      }
    ],
    schoolFeature: {
      title: 'Dar-ul-Madinah Islamic School System, Sheffield',
      description: 'Dar-ul-Madinah Islamic School System functions under Dawat-e-Islami, providing OFSTED regulated Early Years Foundation Stage (EYFS) alongside an authentic Islamic curriculum for children aged 2, 3, and 4 years old.',
      image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/DM-Sheffield-New.jpg',
      admissionsText: 'Admissions are now open for children aged 2, 3 and 4 Years Old.',
      phone: '0114 327 1060',
      email: 'Sheffield@darulmadinah.co.uk'
    }
  }
};
