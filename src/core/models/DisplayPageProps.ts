import { SocialMediaItem } from './SocialMediaItem';

export interface DisplayPage {
  className?: string;
  name: string;
  subtitle?: string;
  info?: string;
  mediaListItems: SocialMediaItem[];
  children?: any
}