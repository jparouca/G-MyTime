import { Heading, Text } from '@ignite-ui/react'
import { Container, Preview, Hero } from './style'
import Image from 'next/image'
import previewImg from '../../assets/preview.png'
import { GetUsernameForm } from '../../components/usernameForm'
export default function Home() {
  return (
    <>
      <Container>
        <Hero>
          <Heading as="h1">My Free Slots</Heading>
          <Text size="xl">
            TimeSlotFinder is a tool that helps you find and share your
            available time with others. Schedule meetings, calls, and other
            events, or just to let your friends know when you're free.
          </Text>

          <GetUsernameForm />
        </Hero>

        <Preview>
          <Image src={previewImg} height={400} quality={100} priority alt="" />
        </Preview>
      </Container>
    </>
  )
}
