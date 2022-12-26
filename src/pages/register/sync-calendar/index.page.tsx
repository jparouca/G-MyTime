import { Container, Header} from '../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import {SyncBox, SyncItem} from "./styles";

export default function Register() {

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Sync your calendar.</Heading>
          <Text>
            Sign in to sync your calendar and check your hours for users to see and check in on your free slots.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <SyncBox>
          <SyncItem>
            <Text>Google Calendar</Text>
            <Button variant={"secondary"} size="sm">Sync</Button>
          </SyncItem>
          <Button type="submit">Next</Button>
        </SyncBox>

      </Container>
    </>
  )
}
