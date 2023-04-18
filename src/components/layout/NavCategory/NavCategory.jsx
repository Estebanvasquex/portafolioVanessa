import { Box, Button } from '@mui/material'
import React from 'react'

const NavCategory = () => {
  return (
    <div style={{marging: "50px"}}>
    <Box
      sx={{ display: "flex", justifyContent: "flex-end", pading: "80px"}}
    >
      <Button sx={{marginTop: "30px"}}>Logos</Button>
      <Button sx={{marginTop: "30px"}}>Corporativo</Button>
      <Button sx={{marginTop: "30px"}}>Social Media</Button>
      <Button sx={{marginTop: "30px"}}>Videos</Button>
    </Box>
  </div>
  )
}

export default NavCategory