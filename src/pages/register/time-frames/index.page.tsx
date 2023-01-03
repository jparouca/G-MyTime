import { Container, Header } from '../styles'
import { Checkbox, Heading, MultiStep, Text, TextInput, Button } from '@ignite-ui/react';
import { FrameBox, FrameContainer, FrameDay, FrameInputs, FrameItem } from './styles';
import { ArrowFatRight } from 'phosphor-react';

export default function TimeFrames() {
  return (
    <>
      <Container>
        <Header>
          <Heading as="strong">Almost there!</Heading>
          <Text>
            "Set your weekly schedule by assigning available time frames for each day of the week."
          </Text>
          <MultiStep size={4} currentStep={3} />
        </Header>

        <FrameBox as="form">
          <FrameContainer>

            <FrameItem>
              <FrameDay>
                  <Checkbox></Checkbox>
                  <Text>Monday</Text>
                <FrameInputs>
                  <TextInput size="sm" type="time" step={60}></TextInput>
                  <TextInput size="sm" type="time" step={60}></TextInput>
                </FrameInputs>
              </FrameDay>
            </FrameItem>

          </FrameContainer>

          <Button type="submit">Next Step <ArrowFatRight/></Button>

        </FrameBox>

      </Container>
    </>
  )
}
