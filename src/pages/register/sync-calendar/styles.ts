import {Box, Button, styled} from "@ignite-ui/react";

export const SyncBox = styled(Box, {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',

  [`${Button}`]: {
    backgroundImage: 'linear-gradient(90deg, #FF008E 0%, #FFCD1E 100%)',
  },
})


export const SyncItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$2',
  padding: '$4 $6',

  border: '1px solid white',
  borderRadius: '$md',

  button: {
    backgroundImage: 'linear-gradient(90deg, #FF008E 0%, #FFCD1E 100%)',
    border: 'white',
    color: 'white',
  },
})