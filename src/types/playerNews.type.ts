export interface PlayerNews {
  id: string;
  imageUrl: string;
  title: string;
  gmtTime: Date;
  sourceStr: SourceStr;
  lead: string;
  sourceIconUrl: string;
  page: Page;
  language: Language;
}

export type Language = "en";

export interface Page {
  url: string;
}

export type SourceStr = "FotMob";
