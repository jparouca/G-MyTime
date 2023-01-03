import { Box, styled, Text } from "@ignite-ui/react"

export const FrameBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  
  'button[type="submit"]': {
    backgroundImage: 'linear-gradient(90deg, #FF008E 0%, #FFCD1E 100%)',
    border: 'white',
    color: 'white',
  },
})


export const FrameContainer = styled('div', {
  border: '1px solid white',
  borderRadius: '3px',
  marginBottom: '$4',
})

export const FrameItem = styled('h3', {
  display : 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$3 $4',
  '& + &': {
    borderTop: '1px solid white',
  },
})

export const FrameDay = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const FrameInputs = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  'input::-webkit-calendar-picker-indicator': {
    filter: 'invert(1) brightness(0.7)',
  }
})

export const FormError = styled(Text, {
  color: '#cc241d',
  marginBottom: '$2',
})