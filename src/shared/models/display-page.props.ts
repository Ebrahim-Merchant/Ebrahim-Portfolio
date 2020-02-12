import { SocialMediaItem } from './social-media-element';

export interface DisplayPage {
  className?: string;
  isTransparent?: boolean;
    name: string;
    subtitle: string;
    info?: string;
    mediaListItems: SocialMediaItem[];
  }