'use client'

import { useRender } from '@base-ui-components/react/use-render'
import {
  createFormHookContexts,
  createFormHook as createTanstackFormHook,
} from '@tanstack/react-form'
import { cn } from '@voluspalabs/lib/utils/cn'
import { type ComponentProps, createContext, useContext, useId } from 'react'
import { Label } from './label'

const { fieldContext, formContext, useFieldContext } = createFormHookContexts()

const useFormField = () => {
  const itemContext = useContext(FormItemContext)
  const fieldContext = useFieldContext()

  if (!fieldContext) {
    throw new Error('useFormField should be used within <field.Container>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldContext.state.meta,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function FormItem({ className, ...props }: ComponentProps<'div'>) {
  const id = useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn('grid gap-2', className)}
        data-slot="form-item"
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FieldLabel({ className, ...props }: ComponentProps<typeof Label>) {
  const { formItemId, isValid } = useFormField()

  return (
    <Label
      className={cn('data-[error=true]:text-destructive', className)}
      data-error={!isValid}
      data-slot="field-label"
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FieldControl({
  children = <div />,
}: {
  children?: useRender.RenderProp
}) {
  const { formItemId, isValid, formDescriptionId, formMessageId } =
    useFormField()

  return useRender({
    render: children,
    props: {
      'data-slot': 'field-control',
      id: formItemId,
      'aria-describedby': isValid
        ? `${formDescriptionId}`
        : `${formDescriptionId} ${formMessageId}`,
      'aria-invalid': !isValid,
    },
  })
}

function FieldDescription({ className, ...props }: ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      data-slot="field-description"
      id={formDescriptionId}
      {...props}
    />
  )
}

function FieldMessage({ className, ...props }: ComponentProps<'p'>) {
  const { formMessageId, isValid, errors } = useFormField()

  if (props.children) {
    return props.children
  }

  const body = isValid
    ? props.children
    : String(errors.map((error) => error.message).join(', ') ?? '')

  if (!body) {
    return null
  }

  return (
    <p
      className={cn('text-destructive text-sm', className)}
      data-slot="field-message"
      id={formMessageId}
      {...props}
    >
      {body}
    </p>
  )
}

const createFormHook = (
  args?: Parameters<typeof createTanstackFormHook>[0],
) => {
  const formHook = createTanstackFormHook({
    fieldComponents: {
      ...args?.fieldComponents,
      Label: FieldLabel,
      Control: FieldControl,
      Description: FieldDescription,
      Message: FieldMessage,
    },
    formComponents: { ...args?.formComponents, Item: FormItem },
    fieldContext,
    formContext,
  })

  return formHook
}

export { createFormHook }
