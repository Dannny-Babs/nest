import { Tick02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react-native';
import * as CheckboxPrimitive from '@rn-primitives/checkbox';
import * as React from 'react';
import { Platform } from 'react-native';
import { cn } from '../../lib/utils';

function Checkbox({
  className,
  ...props
}: CheckboxPrimitive.RootProps & {
  ref?: React.RefObject<CheckboxPrimitive.RootRef>;
}) {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        'web:peer h-4 w-4 native:h-[20] native:w-[20] shrink-0 rounded-xl native:rounded border border-slate-200 web:ring-offset-background web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        props.checked && 'bg-slate-900 rounded-xl',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className={cn('items-center justify-center h-full w-full')}>
        <HugeiconsIcon
          icon={Tick02Icon}
          size={14}
          strokeWidth={2}
          color={'#fff'}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };

