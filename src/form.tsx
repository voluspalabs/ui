import { Slot } from '@radix-ui/react-slot'
import {
  createFormHook,
  createFormHookContexts,
  useStore,
} from '@tanstack/react-form'
import { cn } from '@voluspalabs/lib/utils/cn'
import { type ComponentProps, createContext, useContext, useId } from 'react'
import { Label } from './label'

const {
  fieldContext,
  formContext,
  useFieldContext: _useFieldContext,
  useFormContext,
} = createFormHookContexts()

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormItem,
  },
  formComponents: {},
})

type FormItemContextValue = {
  id: string
} | null

const FormItemContext = createContext<FormItemContextValue>(null)

const useFormItemContext = () => {
  const context = useContext(FormItemContext)
  if (!context) {
    throw new Error('useFormItemContext must be used within FormItem')
  }
  return context
}

function FormItem({ className, ...props }: ComponentProps<'div'>) {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

const useFieldContext = () => {
  const { id } = useFormItemContext()
  const fieldContext = _useFieldContext()

  if (!fieldContext) {
    throw new Error(
      'useFieldContext must be used within a form field component',
    )
  }

  const errors = useStore(fieldContext.store, (state) => state.meta.errors)

  return {
    id,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    errors,
    ...fieldContext,
  }
}

type FormLabelProps = ComponentProps<typeof Label> & {
  /**
   * Whether to show the required indicator
   */
  showRequiredIndicator?: boolean
}

function FormLabel({
  className,
  children,
  showRequiredIndicator,
  ...props
}: FormLabelProps) {
  const { formItemId, errors } = useFieldContext()

  return (
    <Label
      data-slot="form-label"
      data-error={!!errors.length}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    >
      {children}
      {showRequiredIndicator && (
        <span className="ml-0.5 text-destructive">*</span>
      )}
    </Label>
  )
}

type FormControlProps = ComponentProps<typeof Slot> & {
  /**
   * Custom error message to override field validation errors
   */
  error?: string
}

function FormControl({ error, className, ...props }: FormControlProps) {
  const { errors, formItemId, formDescriptionId, formMessageId } =
    useFieldContext()
  const displayErrors = error ? [{ message: error }] : errors

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !displayErrors.length
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!displayErrors.length}
      className={cn('w-full', className)}
      {...props}
    />
  )
}

type FormDescriptionProps = ComponentProps<'p'> & {
  /**
   * Whether to force show the description even when there are errors
   */
  forceShow?: boolean
}

function FormDescription({
  className,
  forceShow,
  ...props
}: FormDescriptionProps) {
  const { formDescriptionId, errors } = useFieldContext()

  if (errors.length && !forceShow) return null

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

type FormMessageProps = ComponentProps<'p'> & {
  /**
   * Custom error message to override field validation errors
   */
  error?: string
}

function FormMessage({ className, error, ...props }: FormMessageProps) {
  const { errors, formMessageId } = useFieldContext()
  const displayErrors = error ? [{ message: error }] : errors
  const body = displayErrors.length
    ? String(displayErrors[0]?.message ?? '')
    : props.children

  if (!body) return null

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useAppForm as useForm,
  useFormContext,
  useFieldContext,
  useFormItemContext,
  withForm,
  type FormItemContextValue,
}
