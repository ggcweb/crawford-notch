import type { ReactNode, SVGProps } from 'react';

export type IconName =
  | 'tent'
  | 'rv'
  | 'cabin'
  | 'yurt'
  | 'mountain'
  | 'pine'
  | 'leaf'
  | 'paw'
  | 'boot'
  | 'bike'
  | 'water'
  | 'map'
  | 'road'
  | 'no-signal'
  | 'tag'
  | 'calendar'
  | 'shower'
  | 'store'
  | 'tap'
  | 'trash'
  | 'binoculars'
  | 'fish'
  | 'tube'
  | 'star'
  | 'train'
  | 'bag'
  | 'gondola'
  | 'bridge'
  | 'droplet'
  | 'fire'
  | 'firewood'
  | 'prohibited'
  | 'compass'
  | 'pin';

const paths: Record<IconName, ReactNode> = {
  tent: (
    <>
      <path d="M12 4 3.5 20h17L12 4Z" />
      <path d="M12 4v16" />
      <path d="m12 13-4 7M12 13l4 7" />
    </>
  ),
  rv: (
    <>
      <path d="M2 7h12v9H2z" />
      <path d="M14 9h3.5l3.5 3v4h-7" />
      <path d="M2 13h12" />
      <circle cx="6" cy="18.5" r="1.6" />
      <circle cx="17" cy="18.5" r="1.6" />
    </>
  ),
  cabin: (
    <>
      <path d="M4 11 12 4l8 7" />
      <path d="M5.5 10v10h13V10" />
      <path d="M10 20v-5h4v5" />
      <path d="M5.5 14h13" />
    </>
  ),
  yurt: (
    <>
      <path d="M3 11 12 5l9 6" />
      <path d="M4.5 11c0 5 2 9 7.5 9s7.5-4 7.5-9" />
      <path d="M12 5v15" />
    </>
  ),
  mountain: (
    <>
      <path d="M3 19 9 7l4 7 2.5-4L21 19H3Z" />
      <path d="m7.5 12 1.5-1 1.5 1.5" />
    </>
  ),
  pine: (
    <>
      <path d="M12 3 7.5 10H10L6 15.5h12L14 10h2.5L12 3Z" />
      <path d="M12 15.5V21" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c-1-8 5-14 14-14 1 8-5 14-14 14Z" />
      <path d="M8.5 15.5 16 8" />
    </>
  ),
  paw: (
    <>
      <ellipse cx="6.5" cy="11" rx="1.6" ry="2.1" />
      <ellipse cx="17.5" cy="11" rx="1.6" ry="2.1" />
      <ellipse cx="10" cy="7.5" rx="1.6" ry="2.1" />
      <ellipse cx="14" cy="7.5" rx="1.6" ry="2.1" />
      <path d="M12 12c-2.4 0-4.3 1.8-4.3 3.8 0 1.7 1.3 2.7 2.6 2.7.7 0 1.1-.3 1.7-.3s1 .3 1.7.3c1.3 0 2.6-1 2.6-2.7C16.3 13.8 14.4 12 12 12Z" />
    </>
  ),
  boot: (
    <>
      <path d="M8 3v9l-3.2 2.6A2.5 2.5 0 0 0 4 16.5V20h15.5a2.5 2.5 0 0 0 .5-4.9L14 14c-1.5-.3-2-1.3-2-2.6V3H8Z" />
      <path d="M8 12h4" />
      <path d="M4 18h16" />
    </>
  ),
  bike: (
    <>
      <circle cx="6" cy="16.5" r="3.5" />
      <circle cx="18" cy="16.5" r="3.5" />
      <path d="M6 16.5 10 8h5l2.5 8.5" />
      <path d="M10 8h-2M10 8l4 5h-7.5" />
      <path d="M14.5 8h2.5" />
    </>
  ),
  water: (
    <>
      <path d="M3 8c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" />
      <path d="M3 13c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" />
      <path d="M3 18c2-1.6 4-1.6 6 0s4 1.6 6 0 4-1.6 6 0" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6.2v14L9 18l6 2.2 6-2.2V4l-6 2.2L9 4Z" />
      <path d="M9 4v14M15 6.2v14" />
    </>
  ),
  road: (
    <>
      <path d="M8.5 21 10.5 3M15.5 21 13.5 3" />
      <path d="M12 5.5v2.5M12 11v2.5M12 16.5V19" />
    </>
  ),
  'no-signal': (
    <>
      <path d="M4 20h2.5v-4H4zM9.5 20H12v-7H9.5zM15 20h2.5v-9H15z" />
      <path d="M3.5 21 21 3.5" />
    </>
  ),
  tag: (
    <>
      <path d="M4 4h7.5l8 8-7.5 7.5-8-8V4Z" />
      <circle cx="8" cy="8" r="1.4" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="1.5" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
      <path d="M7.5 13h2M11 13h2M14.5 13h2M7.5 16.5h2M11 16.5h2" />
    </>
  ),
  shower: (
    <>
      <path d="M12 3v3" />
      <path d="M6 12a6 6 0 0 1 12 0H6Z" />
      <path d="M9 16v2M12 16.5v2.5M15 16v2" />
    </>
  ),
  store: (
    <>
      <path d="M4 9.5 5.5 5h13L20 9.5" />
      <path d="M4 9.5c0 1.4 1.1 2.5 2.5 2.5S9 10.9 9 9.5c0 1.4 1.1 2.5 2.5 2.5S14 10.9 14 9.5c0 1.4 1.1 2.5 2.5 2.5S19 10.9 19 9.5" />
      <path d="M5 12v8h14v-8" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  tap: (
    <>
      <path d="M4 8h6v2H4z" />
      <path d="M10 9h5a3 3 0 0 1 3 3v1" />
      <path d="M7 10v4" />
      <path d="M18 16c1.2 0 2 .9 2 2s-.8 2-2 2-2-.9-2-2 2-4 2-4" transform="translate(-0.5 0)" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16" />
      <path d="M6 7v12.5A1.5 1.5 0 0 0 7.5 21h9a1.5 1.5 0 0 0 1.5-1.5V7" />
      <path d="M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7" />
      <path d="M10 11v6M14 11v6" />
    </>
  ),
  binoculars: (
    <>
      <circle cx="6.5" cy="14.5" r="3.5" />
      <circle cx="17.5" cy="14.5" r="3.5" />
      <path d="M5 11 7 5h3v6M19 11 17 5h-3v6" />
      <path d="M10 13h4" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c4-5.5 11-5.5 15 0-4 5.5-11 5.5-15 0Z" />
      <path d="M18 12c1.5 0 3-1.2 3-3v6c0-1.8-1.5-3-3-3Z" />
      <circle cx="8" cy="11" r="0.9" />
    </>
  ),
  tube: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  star: <path d="m12 3 2.6 5.5 6 .8-4.4 4.1 1.1 5.9L12 16.6 6.7 19.4l1.1-5.9L3.4 9.3l6-.8L12 3Z" />,
  train: (
    <>
      <rect x="5" y="4" width="14" height="13" rx="3" />
      <path d="M5 11h14M10 4v7" />
      <path d="M8 20l-2 1M16 20l2 1" />
      <circle cx="8.5" cy="14" r="0.5" />
      <circle cx="15.5" cy="14" r="0.5" />
    </>
  ),
  bag: (
    <>
      <path d="M5.5 8h13l-1 12H6.5l-1-12Z" />
      <path d="M9 8a3 3 0 0 1 6 0" />
    </>
  ),
  gondola: (
    <>
      <path d="M3 5.5 21 9" />
      <path d="M12 7.2V11" />
      <path d="M7 11h10l-1 6.5a1.5 1.5 0 0 1-1.5 1.3h-5A1.5 1.5 0 0 1 8 17.5L7 11Z" />
      <path d="M7.5 14.5h9" />
    </>
  ),
  bridge: (
    <>
      <path d="M3 9c6-3 12-3 18 0" />
      <path d="M3 13h18" />
      <path d="M3 13v6M21 13v6M9 13v6M15 13v6" />
      <path d="M5 13a4 4 0 0 1 4 0M15 13a4 4 0 0 1 4 0" transform="translate(0 0)" />
    </>
  ),
  droplet: (
    <>
      <path d="M12 3c0 0-6.5 7.3-6.5 11.5a6.5 6.5 0 0 0 13 0C18.5 10.3 12 3 12 3Z" />
    </>
  ),
  fire: (
    <>
      <path d="M12 3c.6 3 2.2 4.2 3.6 6 1.2 1.5 1.9 3 1.9 4.8a5.5 5.5 0 0 1-11 0c0-1.5.6-2.7 1.6-3.6.2 1.3.9 2 1.7 2.3-.7-2.6.5-4.8 2.2-9.5Z" />
    </>
  ),
  firewood: (
    <>
      <path d="M3 15.5c0-1 .9-1.5 2.5-1.5h8c1.6 0 2.5.5 2.5 1.5v3c0 1-.9 1.5-2.5 1.5h-8C3.9 20 3 19.5 3 18.5v-3Z" />
      <path d="M13.5 14c0 1 .9 1.5 2.5 1.5s2.5-.5 2.5-1.5-.9-1.5-2.5-1.5" />
      <path d="M16 12.5l3-5M11 7l3.5 6" />
      <path d="M6.5 14V8" />
    </>
  ),
  prohibited: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M5.6 5.6 18.4 18.4" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
}

export function Icon({ name, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
