import { SocialMediaItem } from './social-media-element';

export interface DisplayPage {
  className?: string;
  name: string;
  subtitle?: string;
  info?: string;
  mediaListItems: SocialMediaItem[];
  children?: any
}