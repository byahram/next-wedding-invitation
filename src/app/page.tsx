import AccountSection from "./components/AccountSection";
import AttendPopup from "./components/AttendPopup";
import BottomNavigation from "./components/BottomNavigation";
import CountdownTimer from "./components/CountdownTimer";
import CoupleInfo from "./components/CoupleInfo";
import FadeInSection from "./components/FadeInSection";
import FlowerEffect from "./components/FlowerEffect";
import FooterSection from "./components/FooterSection";
import GallerySection from "./components/GallerySection";
import GuestbookSection from "./components/GuestbookSection";
import InvitationMessage from "./components/InvitationMessage";
import MapSection from "./components/MapSection";
import WeddingCover from "./components/WeddingCover";
import WeddingInfo from "./components/WeddingInfo";

export default function Home() {
  return (
    <main className="flex flex-col max-w-xl w-full mx-auto border-l-2 border-r-2 bg-white items-center">
      <AttendPopup />
      <FlowerEffect />
      <WeddingCover
        groomName="LEE SUNG HUN"
        brideName="KIM CHE YEON"
        weddingDate="November 16, 2025"
        mainMessage="Always be with you"
        imageUrl="/your-image.jpg"
      />
      <FadeInSection>
        <InvitationMessage />
      </FadeInSection>
      <FadeInSection>
        <CoupleInfo />
      </FadeInSection>
      <FadeInSection>
        <WeddingInfo />
      </FadeInSection>
      <FadeInSection>
        <MapSection />
      </FadeInSection>
      <FadeInSection>
        <GallerySection />
      </FadeInSection>
      <FadeInSection>
        <AccountSection />
      </FadeInSection>
      <FadeInSection>
        <GuestbookSection />
      </FadeInSection>
      <FadeInSection>
        <CountdownTimer
          targetDate="2025-11-16T13:00:00"
          groomName="성훈"
          brideName="채연"
        />
      </FadeInSection>
      <FadeInSection>
        <FooterSection />
      </FadeInSection>
      <BottomNavigation />
    </main>
  );
}
