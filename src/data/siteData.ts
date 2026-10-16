export interface MosqueLocation {
  id: string;
  name: string;
  region: string;
  address: string;
  postcode: string;
  jummahTimings: { label: string; time: string }[];
  image: string;
  mapEmbedUrl: string;
  directionsUrl: string;
  statusBadge?: string;
  description?: string;
}

export const MOSQUE_LOCATIONS: MosqueLocation[] = [
  {
    id: 'bradford-central',
    name: 'Faizan E Madina',
    region: 'Bradford Central',
    address: 'Maudsley Street, Bradford',
    postcode: 'BD3 9LE',
    jummahTimings: [{ label: "Main Jamā'at", time: '2:00 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-1.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madina+Masjid+BD3+|+Dawat-e-Islami+UK,+Maudsley+Street,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.app.goo.gl/ztv9mfJHpDrBPsh5A',
  },
  {
    id: 'bradford-west',
    name: 'Faizan E Makkah',
    region: 'Bradford West',
    address: 'Lilycroft Rd, Bradford',
    postcode: 'BD9 5AB',
    jummahTimings: [
      { label: "1st Jamā'at", time: '1:30 PM' },
      { label: "2nd Jamā'at", time: '2:00 PM' },
    ],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/Faizan-E-Makkah-1.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+e+Makkah+Masjid+(Dawateislami),+Lilycroft+Road,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=Lilycroft+Rd,+Bradford+BD9+5AB',
  },
  {
    id: 'bradford-east',
    name: 'Faizan E Attar',
    region: 'Bradford East',
    address: '70-72 Harris St, Bradford',
    postcode: 'BD1 5JD',
    jummahTimings: [{ label: "Main Jamā'at", time: '1:30 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/ezgif.com-webp-to-jpg-2.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Attar+Masjid+BD1+|+Madrassah-tul-Madina+|+Dawat-e-Islami+UK,+Harris+Street,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=70-72+Harris+St,+Bradford+BD1+5JD',
  },
  {
    id: 'bradford-south',
    name: 'Faizan e Raza Masjid',
    region: 'Bradford South (Wibsey)',
    address: '71 Beacon Rd, Bradford',
    postcode: 'BD6 3ET',
    jummahTimings: [
      { label: "1st Jamā'at", time: '1:30 PM' },
      { label: "2nd Jamā'at", time: '2:00 PM' },
    ],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/Faizan-E-Raza-1.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Raza+Masjid+BD6+|+Dawat-e-Islami+UK,+Beacon+Road,+Bradford,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=71+Beacon+Rd,+Bradford+BD6+3ET',
  },
  {
    id: 'dewsbury-ravensthorpe',
    name: 'Faizan E Madinah',
    region: 'Dewsbury / Ravensthorpe',
    address: 'Faizan-e-Madinah Education Centre, John St, Ravensthorpe',
    postcode: 'WF13 3LE',
    jummahTimings: [{ label: "Main Jamā'at", time: '1:30 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/01/Fm-Ravy-New.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madinah+Education+Centre+(Dewsbury),+John+Street,+Ravensthorpe,+Dewsbury,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=John+St,+Ravensthorpe,+Dewsbury+WF13+3LE',
  },
  {
    id: 'halifax-central',
    name: 'Faizan E Madina',
    region: 'Halifax Central',
    address: 'Queens Road Mills, Gibbet St, Halifax',
    postcode: 'HX1 4JX',
    jummahTimings: [
      { label: "1st Jamā'at", time: '1:30 PM' },
      { label: "2nd Jamā'at", time: '2:30 PM' },
    ],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Halifax-1.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan-e-Madina+Mosque+Halifax,+Gibbet+Street,+Halifax,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=Gibbet+St,+Halifax+HX1+4JX',
  },
  {
    id: 'huddersfield-central',
    name: 'Faizan E Madina',
    region: 'Huddersfield Central',
    address: '75 New N Rd, Huddersfield',
    postcode: 'HD1 5ND',
    jummahTimings: [{ label: "Main Jamā'at", time: '1:30 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Huddersfield-1.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=FAIZAN+E+MADINA,+New+North+Road,+Huddersfield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=75+New+N+Rd,+Huddersfield+HD1+5ND',
  },
  {
    id: 'keighley-central',
    name: 'Faizan E Raza',
    region: 'Keighley Central',
    address: '29 Highfield Ln, Keighley',
    postcode: 'BD21 2DJ',
    jummahTimings: [{ label: "Main Jamā'at", time: '1:30 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Keighley-1.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=29+Highfield+Lane,+Keighley+BD21+2DJ,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=29+Highfield+Ln,+Keighley+BD21+2DJ',
    description: 'Serving the Keighley community with 5 daily prayers, Tajweed classes, and community events.',
  },
  {
    id: 'leeds-central',
    name: 'Faizan E Madina',
    region: 'Leeds Central',
    address: '58-62 Francis St, Leeds',
    postcode: 'LS7 4BU',
    jummahTimings: [{ label: "Status", time: 'Project In Progress' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Leeds-1.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+e+Madina+Leeds,+Francis+Street,+Leeds,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=58-62+Francis+St,+Leeds+LS7+4BU',
    statusBadge: 'Project in Progress (Fundraising Ongoing)',
    description: 'Our Leeds center is undergoing major development to establish a vital community hub.',
  },
  {
    id: 'rotherham-central',
    name: 'Faizan E Madinah',
    region: 'Rotherham Central',
    address: 'The Ladder, 1 Maltkiln Street, Rotherham',
    postcode: 'S60 2HY',
    jummahTimings: [{ label: "Main Jamā'at", time: '1:30 PM' }],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/2156-Faizan-E-Madinah-Rotherham-1.jpg',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Faizan+E+Madinah+Rotherham,+Maltkiln+Street,+Rotherham,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=1+Maltkiln+Street,+Rotherham+S60+2HY',
  },
  {
    id: 'sheffield-central',
    name: 'Faizan E Madinah',
    region: 'Sheffield Central',
    address: 'Old Firth Park Library, Firth Park Road, Sheffield',
    postcode: 'S5 6WS',
    jummahTimings: [
      { label: "1st Jamā'at", time: '1:30 PM' },
      { label: "2nd Jamā'at", time: '4:00 PM' },
    ],
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2023/12/FM-Sheffield-1.png',
    mapEmbedUrl: 'https://www.google.com/maps/embed/v1/place?q=Madrassa+Tul+Madinah+Sheffield,+Firth+Park+Road,+Sheffield,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    directionsUrl: 'https://maps.google.com/?q=Firth+Park+Road,+Sheffield+S5+6WS',
  },
];

export const PREACHERS = [
  {
    name: 'Mawlana Ilyas Qadri',
    title: 'Founder & Spiritual Guide',
    honorific: 'دامت برکاتھم العالیہ',
    role: 'Ameer-e-Ahlesunnat, Founder of Dawat-e-Islami',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/channels4_profile-2-1.jpg',
    description: 'Renowned 21st century Islamic scholar and spiritual guide who founded Dawat-e-Islami in 1981.',
  },
  {
    name: 'Mawlana Imran Attari',
    title: 'Head of Central Executive Committee',
    role: 'Markazi Majlis-e-Shura',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/channels4_profile-1.jpg',
    description: 'Overseeing global developmental, social, and spiritual departments across the worldwide movement.',
  },
  {
    name: 'Haji Khalid Attari',
    title: 'Member of Central Executive Committee',
    role: 'Markazi Majlis-e-Shura',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/Haji-Khalid-Attari.jpg',
    description: 'Senior member guiding international affairs, outreach programs, and community integration.',
  },
  {
    name: 'Hafiz Rafaqat Attari',
    title: 'Head of Yorkshire Region',
    role: 'Regional Executive Director',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/hq720.jpg',
    description: 'Leading all educational institutes, mosques, funeral services, and community work across Yorkshire.',
  },
  {
    name: 'Zaheer Attari',
    title: 'Head of UK Youth Department',
    role: 'National Youth Director',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2025/08/zaheerattariofficial-14-08-2025-0001-4.jpg',
    description: 'Empowering British youth with constructive leadership skills, mentorship, and Sunnah guidance.',
  },
];

export const SPIRITUAL_CURES_CENTRES = [
  {
    city: 'Bradford',
    masjid: 'Faizan e Madina',
    address: 'Maudsley Street, Bradford BD3 9LE',
    schedule: 'Monday – Sunday: 10:00 AM – 10:00 PM',
  },
  {
    city: 'Bradford',
    masjid: 'Jamia Masjid Shan e Islam',
    address: '80 Beamsley Road, Bradford BD18 2DR',
    schedule: 'Every Wednesday: After Ijtima',
  },
  {
    city: 'Leeds',
    masjid: 'Ghausia Masjid',
    address: 'Armley, Leeds LS12 2BX',
    schedule: 'Every Thursday: After Ijtima',
  },
  {
    city: 'Huddersfield',
    masjid: 'Faizan e Madina',
    address: '75 New North Road, Huddersfield HD1 5ND',
    schedule: 'Monday – Sunday: 7:00 PM – 9:00 PM',
  },
  {
    city: 'Sheffield',
    masjid: 'Madrassa Tul Madinah',
    address: '237 Firth Park Road, Sheffield S5 6WS',
    schedule: 'Sunday – Friday: 11:00 AM – 12:00 PM · Thursday: After Ijtima',
  },
  {
    city: 'Rotherham',
    masjid: 'Faizan e Madina',
    address: 'Maltkiln Street, Rotherham S60 2HY',
    schedule: 'Thursday: After Ijtima · Friday: 2:00 PM – 3:00 PM · Saturday: 1:45 PM – 2:45 PM',
  },
  {
    city: 'Dewsbury',
    masjid: 'Ghausia Masjid',
    address: '21-27 Warren Street, Savile Town, Dewsbury WF12 9LU',
    schedule: 'Every Thursday: After Ijtima',
  },
  {
    city: 'Halifax',
    masjid: 'Faizan e Madina',
    address: '275 Gibbet Street, Halifax HX1 4JX',
    schedule: 'Mon – Wed: 2:00 PM · Thursday: 9:30 PM · Friday: 1:45 PM',
  },
];

export const EVENTS_DATA = [
  {
    id: 'brothers-ijtima',
    title: 'Weekly Gathering For Brothers',
    subtitle: 'Zikr, Naat & Inspiring Islamic Lectures',
    time: 'Every Thursday at 7:30 PM (Dinner / Tabarruk served)',
    location: 'All Faizan e Madinah centres across Yorkshire',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Brothers.jpg',
    category: 'Brothers',
  },
  {
    id: 'sisters-ijtima',
    title: 'Weekly Gathering For Sisters',
    subtitle: 'Spiritual Growth, Fiqh & Tarbiyyah in a Private Environment',
    time: 'Every Sunday at 2:00 PM',
    location: 'Dedicated Sisters halls in Bradford, Sheffield, Rotherham & Dewsbury',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/02/Weekly-Ijtima-Region-Sisters.jpg',
    category: 'Sisters',
  },
  {
    id: 'muzakara',
    title: 'Madani Muzakara Live',
    subtitle: 'Direct Q&A and spiritual discourse with Ameer-e-Ahlesunnat',
    time: 'Every Saturday evening (UK Time)',
    location: 'Broadcasted live on Madani Channel across all centres',
    image: 'https://dawateislamiyorkshire.co.uk/wp-content/uploads/2024/06/Muzakra-Rotherham.jpg',
    category: 'Family & Community',
  },
];

export const FUNERAL_TESTIMONIALS = [
  {
    quote: 'When my father passed away suddenly, FSF took care of everything. They handled the repatriation to Pakistan with such professionalism and compassion. We could not have managed without their support.',
    author: 'Ahmed Hassan',
    location: 'Bradford',
  },
  {
    quote: "The volunteers were incredibly respectful and knowledgeable about Islamic burial rites. They guided us through every step and made sure everything was done according to Sunnah.",
    author: 'Fatima Ali',
    location: 'Yorkshire',
  },
  {
    quote: "FSF's 24/7 support was an absolute blessing. They responded immediately to our call and took care of all the arrangements. The family could focus on grieving and supporting each other.",
    author: 'Mohammad Khan',
    location: 'Dewsbury',
  },
];

export const FAQS = [
  {
    q: 'How quickly do you respond to community messages?',
    a: 'We typically respond to all online inquiries within 24 to 48 hours. For emergency bereavement or funeral support, our telephone hotlines are manned 24 hours a day, 7 days a week (01274 442663 / 07936 883621).',
  },
  {
    q: 'Can I visit the regional offices in person?',
    a: 'Yes, our central regional office at Faizan-e-Madinah, Maudsley St, Bradford BD3 9LE is open Monday to Friday, 9:00 AM – 3:00 PM. We recommend calling ahead to book appointments for specific department heads.',
  },
  {
    q: 'Is there any fee or charge for Spiritual Cures (Rohani Ilaj) and Istikhara?',
    a: 'No, absolutely not. All Spiritual Cures, Istikhara, and Rohani Taweezat provided by Dawat-e-Islami are 100% free of charge and always have been. We strictly do not charge any money.',
  },
  {
    q: 'Do you offer support in multiple languages?',
    a: 'Yes, our scholars and staff provide guidance in English, Urdu, Punjabi, Mirpuri, and Arabic.',
  },
  {
    q: 'Are Funeral Services available to non-registered families?',
    a: 'Yes. No membership or prior registration is required to receive funeral care. Our services are available to every Muslim across the region.',
  },
];
