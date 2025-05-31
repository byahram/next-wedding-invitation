import MainCover01 from "../components/01_Main/01";
import { weddingInfo, footer } from "@/utils/data";
import FooterSection from "../components/Layout/Footer";
import PreparePopup from "@/components/Popup/PreparePopup";

export default function Home() {
  return (
    <main className="relative flex flex-col max-w-lg w-full mx-auto bg-background items-center">
      <PreparePopup />

      <MainCover01 info={weddingInfo} />
      {/* <hr className="border-4 w-full" />
      <FadeInSection repeat={false}>
        <Invitation01 contacts={familyContacts} />
      </FadeInSection>
      <hr className="border-4 w-full" />
      <FadeInSection repeat={true}>
        <Schedule01 info={weddingInfo} />
      </FadeInSection>
      <hr className="border-4 w-full" /> */}
      <FooterSection footer={footer} />
    </main>
  );
}
