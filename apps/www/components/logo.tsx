'use client';

import { cn } from '@workspace/ui/lib/utils';
import { motion, type SVGMotionProps } from 'motion/react';

const pathVariants = {
  hidden: {
    pathLength: 0,
    fillOpacity: 0,
  },
  visible: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
} as const;

const sizes = {
  xs: 'h-5.5',
  sm: 'h-7',
  md: 'h-8',
  lg: 'h-12',
  xl: 'h-14',
};

export const Logo = ({
  draw = false,
  size = 'sm',
  className,
  containerClassName,
  ...props
}: {
  containerClassName?: string;
  draw?: boolean;
  size?: keyof typeof sizes;
} & SVGMotionProps<SVGSVGElement>) => {
  return (
    <div className={cn('relative flex items-center', containerClassName)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 670 822.54"
        className={cn(sizes[size], className)}
        {...props}
      >
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={10}
          className="fill-neutral-900 dark:fill-neutral-100"
          d="M633 131.82c-20.81-35.55-50.62-64.69-86.19-84.28-33.43-18.41-71.43-28.14-109.9-28.14s-76.47 9.73-109.9 28.14c-35.57 19.59-65.38 48.73-86.19 84.28L48.13 460.89c-21.02 35.9-31.85 76.55-31.32 117.54.5 38.49 10.97 76.62 30.27 110.29s46.92 61.97 79.88 81.85c35.11 21.18 75.65 32.37 117.26 32.37h385.36c41.6 0 82.15-11.19 117.26-32.37 32.96-19.88 60.58-48.18 79.88-81.85s29.77-71.8 30.27-110.29c.54-41-10.29-81.64-31.31-117.54zm20.21 457.43c-3.58 6.25-10.59 13.69-23.63 13.69H244.22c-13.04 0-20.05-7.44-23.63-13.69s-6.46-16.05.13-27.31L413.4 232.87c6.52-11.14 16.38-13.47 23.5-13.47s16.98 2.34 23.5 13.47l192.68 329.07c6.59 11.25 3.71 21.06.12 27.31Z"
        ></motion.path>
      </motion.svg>

      <span className="sr-only">Animations</span>
    </div>
  );
};
