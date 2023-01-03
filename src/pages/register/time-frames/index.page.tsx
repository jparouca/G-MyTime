import { Container, Header } from '../styles'
import { Checkbox, Heading, MultiStep, Text, TextInput, Button } from '@ignite-ui/react';
import { FrameBox, FrameContainer, FrameDay, FrameInputs, FrameItem } from './styles';
import { ArrowFatRight } from 'phosphor-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

export default function TimeFrames() {
  const weekDay = getWeekDays();
  const {register, handleSubmit, control, formState: {isSubmitting, errors}} = useForm({
    defaultValues: {
      frames: [
        {weekDay: 0, enabled: false, startTime: '08:00', endTime: '23:00'},
        {weekDay: 1, enabled: true, startTime: '08:00', endTime: '23:00'},
        {weekDay: 2, enabled: true, startTime: '08:00', endTime: '23:00'},
        {weekDay: 3, enabled: true, startTime: '08:00', endTime: '23:00'},
        {weekDay: 4, enabled: true, startTime: '08:00', endTime: '23:00'},
        {weekDay: 5, enabled: true, startTime: '08:00', endTime: '23:00'},
        {weekDay: 6, enabled: false, startTime: '08:00', endTime: '23:00'},
      ],
    },
  })
  const { fields } = useFieldArray({
    control,
    name: 'frames',
  })
  // const timeFramesFormSchema = z.object({});
  function getWeekDays() {
    const formatter = new Intl.DateTimeFormat('en', { weekday: 'long'});
    
    return Array.from(Array(7).keys())
      .map((day) => formatter.format(new Date(Date.UTC(2023, 1, day))))
  }
  async function handleSetTimeFrames() {}

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

        <FrameBox as="form" onSubmit={handleSubmit(handleSetTimeFrames)}>
          <FrameContainer>
            {fields.map((field, index) => {
              return (
                <FrameItem key={field.id}>
                <FrameDay>
                    <Checkbox></Checkbox>
                    <Text>{weekDay[field.weekDay]}</Text>
                </FrameDay>
                <FrameInputs>
                    <TextInput size="sm" type="time" step={60} {...register(`frames.${index}.startTime`)}></TextInput>
                    <TextInput size="sm" type="time" step={60} {...register(`frames.${index}.endTime`)}></TextInput>
                  </FrameInputs>
              </FrameItem>
              )
            })}
          </FrameContainer>

          <Button type="submit">Next Step <ArrowFatRight/></Button>

        </FrameBox>

      </Container>
    </>
  )
}