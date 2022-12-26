import {Box, Button, Heading, styled, Text} from '@ignite-ui/react'

export const Container = styled('main', {
  maxWidth: 600,
  margin: '$20 auto $4',
  padding: '0 $4',
})

export const Header = styled('div', {
  padding: '0 $6',

  [`> ${Heading}`]: {
    lineHeight: '$base',
  },

  [`> ${Text}`]: {
    color: '$gray200',
    marginBottom: '$6',
  },
})

export const Form = styled(Box, {
  display: 'flex',
  gap: '$4',
  flexDirection: 'column',
  marginTop: '$6',

  [`> ${Button}`]: {
    borderColor: 'white',
    backgroundImage: 'linear-gradient(90deg, #FF008E 0%, #FFCD1E 100%)',
    marginBottom: '$6',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$2',
  },
})

export const FormError = styled(Text, {
  color: '#cc241d',
})
