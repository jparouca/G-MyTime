import { Container, Header, Form, FormError } from './styes'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowFatLineRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {useRouter} from "next/router";
import {useEffect} from "react";

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, 'Must be at least 3 characters')
    .max(12, 'Cannot exceed 12 characters')
    .regex(/^[a-zA-Z0-9]+$/i, 'Letters and numbers only')
    .transform((username) => username.toLowerCase()),
  name: z.string().min(3, 'Name must be at least 3 characters'),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })
  const router = useRouter()
  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])


  async function handleRegister(data: RegisterFormData) {
    console.log(data)
  }

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">G-My Free Time Slots</Heading>
          <Text>
            Hang in there! We need some information before going on. You can
            edit it later.
          </Text>
          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Username</Text>
            <TextInput
              prefix="myslots.com/"
              placeholder="your-username"
              {...register('username')}
            />
            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </label>
          <label>
            <Text size="sm">Full name</Text>
            <TextInput
              prefix="myslots.com/"
              placeholder="your-name"
              {...register('name')}
            />
            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </label>
          <Button type="submit" disabled={isSubmitting}>
            Next
            <ArrowFatLineRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
