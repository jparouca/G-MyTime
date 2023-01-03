import { Container, Header } from '../styles'
import { Button, Heading, MultiStep, Text } from '@ignite-ui/react'
import { AuthErr, SyncBox, SyncItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Check } from 'phosphor-react'


export default function SyncCalendar() {
  const router = useRouter()
  const session = useSession()
  const hasAuthErr = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Sync your calendar.</Heading>
          <Text>
            Sign in to sync your calendar and check your hours for users to see
            and check in on your free slots.
          </Text>
          <MultiStep size={4} currentStep={2} />
        </Header>

        <SyncBox>
          <SyncItem>
            <Text>Google Calendar</Text>

            {isSignedIn ? (
              <Button>
                <Check />
              </Button>
            ) : (
              <Button
                variant={'secondary'}
                size="sm"
                onClick={() => signIn('google')}
              >
                Sync
              </Button>
            )}
          </SyncItem>

          {hasAuthErr && (
            <AuthErr size="sm">
              Failed to sync. Verify if you allowed Google Calendar permissions.
            </AuthErr>
          )}

          <Button type="submit" disabled={!isSignedIn}>
            Next
          </Button>
        </SyncBox>
      </Container>
    </>
  )
}
