import { Box, Button, Modal, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";

export default function ChatBot({ openChat, handleCloseChat }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you?' },
    { role: 'user', content: 'I need help creating a recipe for a chocolate cake.' }
  ]);
  const [message, setMessage] = useState('');

  return (
    <Modal
      open={openChat}
      onClose={handleCloseChat}
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <Box
        width='100vw'
        height='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} // Background color for the modal
      >
        <Stack
          direction='column'
          width='600px'
          height='700px'
          border='1px solid black'
          p={2}
          spacing={3}
          sx={{ backgroundColor: 'background.paper' }} // Background color for the chat container
        >
          <Box rx={{display: 'flex', justifyContent: 'flex-end'}}>
          <IoMdCloseCircle size={25} onClick={handleCloseChat}/>
          </Box>
          <Stack
            direction='column'
            spacing={2}
            flexGrow={1}
            overflow='auto'
            maxHeight='100%'
          >
            {messages.map((msg, i) => (
              <Box key={i} display='flex' justifyContent={msg.role === 'assistant' ? 'flex-start' : 'flex-end'}>
                <Box
                  bgcolor={msg.role === 'assistant' ? 'primary.main' : 'secondary.main'}
                  color='white'
                  borderRadius={2}
                  p={2}
                >
                  {msg.content}
                </Box>
              </Box>
            ))}
          </Stack>
          <Stack direction='row' spacing={2}>
            <TextField
              label='Message'
              fullWidth
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ backgroundColor: 'background.default' }} // Background color for the text field
            />
            <Button variant='contained'>
              Send
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
}
