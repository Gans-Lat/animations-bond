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
    <div className={cn('relative', containerClassName)}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 180"
        className={cn(sizes[size], className)}
        {...props}
      >
        {/* Icon */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={8}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M75 25
            L125 105
            H25
            Z

            M25 105
            L45 140
            H105
            L125 105
          "
        />

        {/* A */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M180 135
            L215 45
            H245
            L280 135
            H255
            L247 112
            H213
            L205 135
            Z

            M220 92
            H240
            L230 62
            Z
          "
        />

        {/* n */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M295 135
            V70
            H318
            V80
            C327 72 338 68 350 68
            C370 68 382 82 382 105
            V135
            H359
            V108
            C359 96 354 89 345 89
            C335 89 318 96 318 110
            V135
            Z
          "
        />

        {/* i */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M400 70
            H423
            V135
            H400
            Z

            M400 45
            H423
            V60
            H400
            Z
          "
        />

        {/* m */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M440 135
            V70
            H463
            V80
            C471 72 481 68 492 68
            C504 68 514 73 520 83
            C528 73 539 68 552 68
            C572 68 584 82 584 104
            V135
            H561
            V107
            C561 95 556 89 547 89
            C537 89 528 96 528 109
            V135
            H505
            V107
            C505 95 500 89 491 89
            C481 89 463 97 463 110
            V135
            Z
          "
        />

        {/* a */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M610 72
            C620 69 630 68 641 68
            C671 68 688 82 688 108
            V135
            H666
            V125
            C658 133 648 138 635 138
            C617 138 603 128 603 113
            C603 96 618 87 642 87
            H665
            C663 79 656 75 644 75
            C633 75 623 78 614 82
            Z

            M642 101
            C631 101 625 105 625 112
            C625 118 630 121 638 121
            C650 121 658 115 665 108
            V101
            Z
          "
        />

        {/* t */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M720 48
            H744
            V70
            H770
            V90
            H744
            V110
            C744 120 749 124 759 124
            C763 124 767 123 770 122
            V137
            C764 139 758 140 751 140
            C731 140 720 130 720 110
            Z
          "
        />

        {/* i */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M790 70
            H813
            V135
            H790
            Z

            M790 45
            H813
            V60
            H790
            Z
          "
        />

        {/* o */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M860 68
            C835 68 820 82 820 103
            C820 125 835 138 860 138
            C885 138 900 125 900 103
            C900 82 885 68 860 68
            Z

            M860 88
            C872 88 878 94 878 103
            C878 113 872 118 860 118
            C848 118 842 113 842 103
            C842 94 848 88 860 88
            Z
          "
        />

        {/* n */}
        <motion.path
          variants={draw ? pathVariants : {}}
          initial={draw ? 'hidden' : false}
          animate={draw ? 'visible' : false}
          stroke="currentColor"
          strokeWidth={7}
          strokeLinejoin="round"
          fill="currentColor"
          className="text-neutral-900 dark:text-neutral-100"
          d="
            M920 135
            V70
            H943
            V80
            C952 72 963 68 975 68
            C995 68 1000 82 1000 105
            V135
            H977
            V108
            C977 96 972 89 963 89
            C953 89 943 96 943 110
            V135
            Z
          "
        />
      </motion.svg>

      <span className="sr-only"></span>
    </div>
  );
};
