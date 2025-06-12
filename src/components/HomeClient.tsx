"use client";

import { useState } from "react";
import MainCover from "@/components/sections/01_MainCover";
import Introduction from "@/components/sections/02_Introduction";
import Calendar from "@/components/sections/03_Calendar";
import Gallery from "@/components/sections/04_Gallery";
import Location from "@/components/sections/05_Location";
import FooterSection from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import LoadingScreen from "@/components/effect/LoadingScreen";
import Account from "./sections/06_Account";
import RSVP from "./sections/07_RSVP";
import Ending from "./sections/08_Ending";
import FadeInSection from "./effect/FadeInSection";
import { main, footer, accounts } from "@/utils/data";

export default function HomeClient() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      {!isLoaded && <LoadingScreen onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <main className="relative flex flex-col max-w-md w-full mx-auto bg-background items-center">
          <MainCover info={main} />
          {/* <Introduction intro={intro} info={main} />
          <FadeInSection>
            <Calendar cal={calendar} info={main} />
          </FadeInSection>
          <FadeInSection>
            <Gallery gal={gallery} />
          </FadeInSection>
          <FadeInSection>
            <Location />
          </FadeInSection> */}
          <FadeInSection>
            <Account acc={accounts} />
          </FadeInSection>
          <FadeInSection>
            <RSVP info={main} />
          </FadeInSection>
          <FadeInSection>
            <Ending info={main} />
          </FadeInSection>

          {/* 
// Optional
신랑 신부 소개 - Groom and bride
부모님 소개 - Our parents
타임라인 – 두 사람의 이야기 (만남연애프러포즈 등) - Timeline
우리의 이야기 - Our story
인터뷰 - Interview
방명록 – 축하 메시지 남기는 공간 - Guest book
*/}
          <FooterSection footer={footer} />

          <FloatingButtons />
        </main>
      )}
    </>
  );
}
