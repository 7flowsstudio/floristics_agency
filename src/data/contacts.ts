import { LocationIcon } from '@/components/ui/icons/LocationIcon';
import { PhoneIcon } from '@/components/ui/icons/PhoneIcon';
import { InstagramIcon } from '@/components/ui/icons/InstagramIcon';

export const contacts = [
  {
    href: 'https://share.google/faGeLbExwfKK6bzBl',
    label: ['Софіївська Борщагівка,', 'просп. Мартинова 2'],
    icon: LocationIcon,
    multiline: true
  },
  {
    href: 'tel:+380932451284',
    label: ['093 245 1284'],
    icon: PhoneIcon,
  },
  {
    href: 'https://www.instagram.com/with_tasty_k/',
    label: ['with_tasty_k'],
    icon: InstagramIcon,
  },
] as const;
