import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

import { mergeClasses } from '@/libs/utils';

interface LinkProps extends NextLinkProps {
  className?: string;
  children?: React.ReactNode;
  noCustomization?: boolean;
  externalLink?: boolean;
  withUnderline?: boolean;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      noCustomization,
      children = null,
      className = '',
      externalLink = false,
      withUnderline = false,
      ...props
    }: LinkProps,
    ref
  ) => {
    return (
      <NextLink
        {...props}
        target={externalLink ? '_blank' : '_self'}
        ref={ref}
        className={mergeClasses(
          noCustomization ??
            'text-base font-medium text-gray-50 transition-all hover:text-gray-600 active:text-gray-400',
          withUnderline
            ? 'underline underline-offset-4 transition-all hover:text-gray-600 active:text-gray-400'
            : '',
          className
        )}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = 'Link';

export default Link;