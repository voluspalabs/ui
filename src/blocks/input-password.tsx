'use client'

import { cn } from '@voluspalabs/lib/utils/cn'
import { Eye, EyeClosed } from 'lucide-react'
import {
  type ComponentProps,
  type ComponentPropsWithRef,
  useCallback,
  useState,
} from 'react'
import { Button } from '../button'
import { Input } from '../input'

export type InputProps = ComponentPropsWithRef<'input'>

const PasswordInput = ({
  className,
  size,
  ...props
}: Omit<ComponentProps<'input'>, 'size'> & ComponentProps<typeof Input>) => {
  const [showPassword, setShowPassword] = useState(false)
  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev)
  }, [])
  const isEmpty =
    props.value === '' || props.value === undefined || props.value === null
  const disabled = props.disabled || isEmpty

  return (
    <div className="relative" data-slot="password-input-container">
      <Input
        className={cn('hide-password-toggle pr-10', className)}
        data-slot="password-input"
        size={size}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <Button
        aria-label={showPassword ? 'Hide password' : 'Show password'}
        className={cn(
          'absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent',
        )}
        data-slot="password-toggle"
        disabled={disabled}
        onClick={togglePassword}
        size="sm"
        type="button"
        variant="ghost"
      >
        {showPassword && !disabled ? (
          <Eye aria-hidden="true" className="size-4" />
        ) : (
          <EyeClosed aria-hidden="true" className="size-4" />
        )}
        <span className="sr-only">
          {showPassword ? 'Hide password' : 'Show password'}
        </span>
      </Button>

      {/* hides browsers password toggles */}
      <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
    </div>
  )
}

PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
