import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

export default function Link(props: any) {
  const pathName = usePathname();

  return (
    <NextLink
      className={`${props.className} link ${
        pathName.startsWith(props.href)
          ? 'text-black dark:text-white'
          : 'text-gray-400'
      }`}
      href={props.href}
    >
      {props.children}
    </NextLink>
  );
}
