import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SplashPage } from './components/splash/SplashPage';
import { PillarTemplate } from './components/pillar/PillarTemplate';
import FourPillarsMenu from './components/pillar/FourPillarsMenu';
import { TopNavBar } from './components/layout/TopNavBar';
import { Footer } from './components/layout/Footer';
import { BurgerMenu } from './components/layout/BurgerMenu';
import workIntro from "./assets/work/spirit_work.jpg";
import workFixedDesks from "./assets/work/fixed_desks.png";
import workHotDesks from "./assets/work/hot_desks.jpg";
import workPrivateBooths from "./assets/work/private_booth.jpg";
import workMeetingRooms from "./assets/work/meeting_rooms.png";
import playRooftopPool from "./assets/play/rooftop_pool.png";
import playGamesArea from "./assets/play/games_area.jpg";
import playEventsRoom from "./assets/play/events_room.jpg";
import createSpirit from "./assets/create/spirit_create.jpg";
import createDJBooth from "./assets/create/dj_booth.jpg";
import createRecordingStudio from "./assets/create/recording_studio.jpg";
import createContentCreation from "./assets/create/content_creation.jpg";
import connectRestoSpace from "./assets/connect/resto_space.png";
import connectDraftBeer from "./assets/connect/draft_beer.jpg";
import connectRooftopBar from "./assets/connect/rooftop_bar.png";
import connectBarLounge from "./assets/connect/bar_lounge.png";



// ----------------------------------------------------
// PILLAR CONSTANTS
// Derived strictly from authoritative brief
// ----------------------------------------------------

const workPillarProps = {
  pillarName: "Work",
  title: "Focus",
  heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  excerpt: "Vibrant, high spec, focused, elegant, productive, light filled.",
  introText: "Work must not feel corporate. It should feel like a beautifully designed environment for serious creative focus.",
  introImage: workIntro,
  spaces: [
    { title: "Fixed Desks", text: "Dedicated workstations constructed with premium natural materials for uninterrupted flow.", image: workFixedDesks },
    { title: "Hot Desks", text: "Flexible, light-filled environments designed for dynamic daily work routines.", image: workHotDesks },
    { title: "Private Booths", text: "Acoustically treated quiet zones for deep work and confidential calls.", image: workPrivateBooths },
    { title: "Meeting Rooms", text: "High-spec boardrooms integrated with seamless presentation technology.", image: workMeetingRooms }
  ],
  facilities: [
    "High speed WiFi", "Ethernet", "AI creative tools", "USB C docking stations", "Ergonomic chairs", "Printers"
  ],
  use: "For creators who need to collaborate, focus deeply, host meetings, or work independently in a refined environment with excellent light and reliable technology.",
  synergy: { title: "From Focus to Creation", text: "When the planning is done, it's time to bring concepts to life. Seamlessly transition your focused ideas into tangible art.", cta: "Explore Create", link: "/create" }
};

const playPillarProps = {
  pillarName: "Play",
  title: "Leisure",
  heroImage: "https://images.unsplash.com/photo-1534008897995-27a23e859048?auto=format&fit=crop&q=80&w=2000",
  excerpt: "Sunlit, chilled, social, energising, refined, fun led.",
  introText: "Play should feel elevated and tasteful, never childish. It is a vital frequency for the modern soul.",
  introImage: "https://images.unsplash.com/photo-1506509653182-1c2ce1d6541f?auto=format&fit=crop&q=80&w=1000",
  spaces: [
    { title: "Rooftop Pool", text: "An architectural mirage suspended between the sky and the sea. Heated saltwater retreats.", image: playRooftopPool },
    { title: "Games Area", text: "Tactile, low-lit space where competition meets craftsmanship.", image: playGamesArea },
    { title: "Events Room", text: "Immersive sensory experiences in a sound-proofed vault.", image: playEventsRoom }
  ],
  facilities: [
    "30 m² rooftop pool", "Pool table", "Ping pong table", "4K projector", "Hi fi music events room"
  ],
  use: "For members to relax, recharge, play, and enjoy the lighter side of the club before, after, or instead of work.",
  synergy: { title: "Where Play Meets Connection", text: "Leisure is the catalyst for genuine community. The casual atmosphere naturally bridges into shared social evenings.", cta: "Explore Connect", link: "/connect" }
};

const createPillarProps = {
  pillarName: "Create",
  title: "Studio",
  heroImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000",
  excerpt: "Expressive, artistic, cultural, energetic, high spec.",
  introText: "Create is where the hi tech edge is most visible, but it must remain within the same warm, tactile, architectural world.",
  introImage: createSpirit,
  spaces: [
    { title: "DJ Booth", text: "A dedicated sonic playground equipped for live mixing and experimentation.", image: createDJBooth },
    { title: "Recording Studio", text: "Acoustically isolated tracking space for premium audio capture.", image: createRecordingStudio },
    { title: "Content Creation", text: "Visually curated backdrops equipped with professional lighting and camera mounts.", image: createContentCreation }
  ],
  facilities: [
    "Pioneer DJ controller", "Shure microphones", "Technics turntables", "Studio monitors", "4K displays", "M3 Studio Max", "Pro sound system in each room"
  ],
  use: "For members exploring digital and analogue creation across music production, DJ practice, podcasting, visual production, and creative experimentation.",
  synergy: { title: "Fueled by Focus", text: "True creation requires rigorous attention. Prepare your mindset in an environment crafted exclusively for deep work.", cta: "Explore Work", link: "/work" }
};

const connectPillarProps = {
  pillarName: "Connect",
  title: "Forum",
  heroImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000",
  excerpt: "Warm, social, vibrant, hospitality driven, design led.",
  introText: "Connect should feel like the social soul of Casa Kala. It is not just food and drink. It is creative chemistry.",
  introImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000",
  spaces: [
    { title: "Resto Space", text: "A communal table setting serving an evolving menu of seasonal vitality.", image: connectRestoSpace },
    { title: "Self Service Draft beer", text: "Frictionless hospitality. Pour perfectly chilled local craft at your convenience.", image: connectDraftBeer },
    { title: "Rooftop Bar", text: "Open-air socialising framed by cityscapes and curated playlists.", image: connectRooftopBar },
    { title: "Bar Lounge", text: "Low-slung seating designed for intimate conversation and chance encounters.", image: connectBarLounge }
  ],
  facilities: [
    "Fresh food prepared daily", "Automated tap on draft beer", "Hospitality led social spaces", "Areas for conversation, showcasing work, and events"
  ],
  use: "For members to wind down, meet like minded people, exchange ideas, showcase what they are making, and enjoy top quality food and drinks in a beautiful setting.",
  synergy: { title: "Extend the Energy", text: "Take the conversation beyond the table. From cocktails to late night games, see where the evening takes you.", cta: "Explore Play", link: "/play" }
};

// ----------------------------------------------------
// LAYOUT WRAPPERS
// ----------------------------------------------------

const MainLayout = ({ children }) => (
  <div className="bg-background min-h-screen text-on-surface">
    <BurgerMenu />
    {children}
    <Footer />
  </div>
);

const MenuLayout = ({ children }) => (
  <div className="bg-background min-h-screen text-on-surface flex flex-col justify-center">
    <TopNavBar />
    {children}
  </div>
);

// ----------------------------------------------------
// APP ROUTING
// ----------------------------------------------------

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashPage />} />

        <Route path="/menu" element={
          <MenuLayout>
            <FourPillarsMenu />
          </MenuLayout>
        } />

        <Route path="/work" element={
          <MainLayout>
            <PillarTemplate {...workPillarProps} />
          </MainLayout>
        } />

        <Route path="/play" element={
          <MainLayout>
            <PillarTemplate {...playPillarProps} />
          </MainLayout>
        } />

        <Route path="/create" element={
          <MainLayout>
            <PillarTemplate {...createPillarProps} />
          </MainLayout>
        } />

        <Route path="/connect" element={
          <MainLayout>
            <PillarTemplate {...connectPillarProps} />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}
