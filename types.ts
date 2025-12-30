export enum ViewState {
  LANDING = 'LANDING',
  CASE_ANALYSIS = 'CASE_ANALYSIS',
  THREADS = 'THREADS',
  MEDICAL = 'MEDICAL',
  MEDIA = 'MEDIA'
}

export interface SectionProps {
  isActive: boolean;
}