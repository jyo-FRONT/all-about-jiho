export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-sqld",
    name: "SQLD",
    issuer: "한국데이터진흥원",
    date: "2022.04",
  },
  {
    id: "cert-adsp",
    name: "ADSP",
    issuer: "한국데이터진흥원",
    date: "2022.03",
  },
  {
    id: "cert-info-processing",
    name: "정보처리기사",
    issuer: "한국산업인력공단",
    date: "2021.06",
  },
];
