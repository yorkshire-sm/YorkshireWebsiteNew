import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, query, orderBy, onSnapshot, DocumentData } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5w6XXMQm9_TmOW7PDbxlqpx_BbFNW_0E",
  authDomain: "annoucement-73e9e.firebaseapp.com",
  projectId: "annoucement-73e9e",
  storageBucket: "annoucement-73e9e.firebasestorage.app",
  messagingSenderId: "1003758421576",
  appId: "1:1003758421576:web:076e44f861823b780afa7d"
};

// Initialize or reuse app
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app);

export interface GatheringItem {
  id?: string;
  city: string;
  venue: string;
  address: string;
  timeDisplay: string;
  language?: string;
  badgeColor?: string;
}

// Fallback seed data in case offline or initial load
export const FALLBACK_BROTHERS_GATHERINGS: GatheringItem[] = [
  {
    city: 'Bradford',
    venue: 'Faizan-e-Madina (Central)',
    address: 'Maudsley Street, Bradford, BD3 9LE',
    timeDisplay: 'Every Thursday 7:30 PM',
    language: 'Urdu & English',
    badgeColor: 'thursday'
  },
  {
    city: 'Bradford',
    venue: 'Faizan-e-Makkah',
    address: 'Lilycroft Rd, Bradford, BD9 5AB',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Dewsbury',
    venue: 'Faizan-e-Madinah Education Centre',
    address: 'John St, Ravensthorpe, Dewsbury, WF13 3LE',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Sheffield',
    venue: 'Faizan-e-Madinah',
    address: 'Old Firth Park Library, Firth Park Road, S5 6WS',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Rotherham',
    venue: 'Faizan-e-Madinah',
    address: 'The Ladder, 1 Maltkiln Street, S60 2HY',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Huddersfield',
    venue: 'Faizan-e-Madina',
    address: '75 New North Road, Huddersfield, HD1 5ND',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Halifax',
    venue: 'Faizan-e-Madina',
    address: 'Queens Road Mills, Gibbet St, HX1 4JX',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  },
  {
    city: 'Keighley',
    venue: 'Faizan-e-Raza',
    address: '29 Highfield Ln, Keighley, BD21 2DJ',
    timeDisplay: 'Every Thursday 7:30 PM',
    badgeColor: 'thursday'
  }
];

export const FALLBACK_SISTERS_GATHERINGS: GatheringItem[] = [
  {
    city: 'Bradford',
    venue: 'Faizan-e-Madina (Sisters Hall)',
    address: 'Maudsley Street, Bradford, BD3 9LE',
    timeDisplay: 'Every Sunday 2:00 PM',
    language: 'English & Urdu',
    badgeColor: 'sunday'
  },
  {
    city: 'Sheffield',
    venue: 'Madrassa Tul Madinah (Firth Park)',
    address: '237 Firth Park Road, Sheffield, S5 6WS',
    timeDisplay: 'Every Saturday 2:00 PM',
    badgeColor: 'saturday'
  },
  {
    city: 'Sheffield',
    venue: 'Darnall Sisters Hall',
    address: 'Darnall, Sheffield, S9',
    timeDisplay: 'Every Sunday 2:30 PM',
    badgeColor: 'sunday'
  },
  {
    city: 'Sheffield',
    venue: 'Netheredge Community Centre',
    address: 'Netheredge, Sheffield, S7',
    timeDisplay: 'Every Thursday 11:00 AM',
    badgeColor: 'thursday'
  },
  {
    city: 'Rotherham',
    venue: 'Faizan-e-Madina Sisters Hall',
    address: '1 Maltkiln Street, Rotherham, S60 2HY',
    timeDisplay: 'Every Sunday 2:00 PM',
    badgeColor: 'sunday'
  },
  {
    city: 'Dewsbury',
    venue: 'Faizan-e-Madinah Education Centre',
    address: 'John St, Ravensthorpe, Dewsbury, WF13 3LE',
    timeDisplay: 'Every Sunday 2:00 PM',
    badgeColor: 'sunday'
  },
  {
    city: 'Huddersfield',
    venue: 'Faizan-e-Madina',
    address: '75 New North Road, HD1 5ND',
    timeDisplay: 'Every Sunday 2:00 PM',
    badgeColor: 'sunday'
  }
];
