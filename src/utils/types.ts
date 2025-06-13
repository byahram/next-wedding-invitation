// 1. 메인 정보
export type MainInfo = {
  groom: {
    nameKo: string;
    nameEn: string;
    groomFather: string;
    groomMother: string;
  };
  bride: {
    nameKo: string;
    nameEn: string;
    brideFather: string;
    brideMother: string;
  };
  images: {
    mainImage: string;
    subImage_1: string;
    subImage_2: string;
  };
  weddingDate: string;
  weddingDay: string;
  weddingTime: string;
  weddingTxt: string;
  weddingLoc: string;
  weddingAddress: string;
  calBlank: string;
};

export interface IMainInfo {
  info: MainInfo;
}

// 2. 연락처
export type Contact = {
  role: string;
  name: string;
  phone: string;
};

// 3. 캘린더
export type CalendarInfo = {
  monthDay: string;
  weekdays: string[];
  month: string;
  day: string;
  blank: string;
};

// 4. 갤러리
export type Gallery = string[];

// 5. 계좌번호
export type Account = {
  type: string;
  name: string;
  account: string;
};

export interface IAccount {
  acc: Account[];
}

// 6. 문구
export type Quote = {
  quote: string;
};

// 7. 푸터
export type FooterInfo = {
  footerText: string;
};
