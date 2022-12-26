import { Form, FormRegex } from './styles'
import { Button, TextInput, Text } from '@ignite-ui/react'
import { ArrowFatRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/router'

const getUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(12, 'Cannot exceed 12 characters')
    .regex(/^[a-zA-Z0-9]+$/i, 'Letters and numbers only')
    .transform((username) => username.toLowerCase()),
})
type getUsernameFormData = z.infer<typeof getUsernameFormSchema>

export function GetUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<getUsernameFormData>({
    resolver: zodResolver(getUsernameFormSchema),
  })

  const router = useRouter()
  async function handleGetUsernameForm(data: getUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleGetUsernameForm)}>
        <TextInput
          size="sm"
          placeholder="your-calendar-name"
          prefix="myslots.com/"
          {...register('username')}
        />
        <Button size="sm" type="submit" variant={'tertiary'}>
          Go
          <ArrowFatRight />
        </Button>
      </Form>
      <FormRegex>
        <Text size="sm">
          {errors.username
            ? errors.username.message
            : 'Choose a name for your sync-calendar link'}
        </Text>
      </FormRegex>
    </>
  )
}
