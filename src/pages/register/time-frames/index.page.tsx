import { Container, Header } from '../styles'
import { Checkbox, Heading, MultiStep, Text, TextInput, Button } from '@ignite-ui/react';
import { FormError, FrameBox, FrameContainer, FrameDay, FrameInputs, FrameItem } from './styles';
import { ArrowFatRight } from 'phosphor-react';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const timeFramesFormSchema = z.object({
  frames: z.array(z.object({
    weekday: z.number().min(0).max(6),
    enabled: z.boolean(),
    startTime: z.string(),
    endTime: z.string(),
  })).length(7).transform(frames => frames.filter(frames => frames.enabled))
  .refine(frames => frames.length > 0, {message: 'You must select at least one day'}),
});

type TimeFramesFormData = z.infer<typeof timeFramesFormSchema>;


export default function TimeFrames() {
  const {register, handleSubmit, control, watch, formState: {isSubmitting, errors}} = useForm({
    resolver: zodResolver(timeFramesFormSchema),
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
  });
  const weekDay = getWeekDays();
  const { fields } = useFieldArray({
    control,
    name: 'frames',
  });

  const frames = watch('frames');

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
                  <Controller name={`frames.${index}.enabled`} control={control} render={({field}) => {
                    return (
                      <Checkbox onCheckedChange={checked => {
                        field.onChange(checked === true)}} checked={field.value}
                      />
                    )
                  }} />
                    <Text>{weekDay[field.weekDay]}</Text>
                </FrameDay>
                <FrameInputs>
                    <TextInput
                      size="sm" type="time" step={60}
                      {...register(`frames.${index}.startTime`)}  disabled={frames[index].enabled === false} />
                    <TextInput
                      size="sm" type="time" step={60}
                      {...register(`frames.${index}.endTime`)}  disabled={frames[index].enabled === false}/>
                  </FrameInputs>
              </FrameItem>
              )
            })}
          </FrameContainer>

          {errors.frames && (
            <FormError size="sm">{errors.frames.message}</FormError>
          )}
          <Button type="submit" disabled={isSubmitting}>Next Step <ArrowFatRight/></Button>

        </FrameBox>

      </Container>
    </>
  )
  function getWeekDays() {
    const formatter = new Intl.DateTimeFormat('en', { weekday: 'long'});
    
    return Array.from(Array(7).keys())
    .map((day) => formatter.format(new Date(Date.UTC(2023, 1, day))))
  }
}