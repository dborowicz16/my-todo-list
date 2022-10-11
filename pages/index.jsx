import React, { useState } from 'react';
import { Grid, Button, TextField, Box, Card } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


function Todo() {

  const [currentValue, setCurrentValue] = useState('');

  const [first, setFirst] = useState([]);

  const [render, setRender] = useState(0)

  function onSubmit() {
    setFirst([...first, currentValue])
    setCurrentValue('')
  }

  return (
    <Box style={{ width: '100vw', height: '100vh' }}>
      <Grid container item direction={'column'} xs={12} alignContent={'center'} justifyContent={'center'} alignItems={'center'} height={'100%'} gap={2}>
        <h1>To Do List</h1>
        <TextField id="input" label="Note" variant="outlined" value={currentValue} onChange={(e) => { setCurrentValue(e.target.value) }} style={{ width: '75%', maxWidth: '450px', whiteSpace: 'nowrap' }} />
        <Button variant="contained" onMouseDown={onSubmit} style={{ width: '75%', maxWidth: '450px' }}>Save Note</Button>

        {
          first.map(
            (item) =>
              <div key={item} style={{ width: '75%', maxWidth: '750px' }}>
                <Card xs={12} position={'relative'} style={{ backgroundColor: '#fafafa', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                  <Grid item flexDirection={'row'} justifyContent={'center'} display={'flex'} xs={12}>
                    <div style={{ width: '100%', display: 'flex', overflowX: 'auto', paddingLeft: '10px', paddingRight: '10px' }}>{item}</div>

                    <div style={{ display: 'flex', width: '75px' }}>
                      <EditIcon className="editDeleteIcon" onMouseDown={() => first[first.indexOf(item)] = currentValue} onMouseUp={() => setCurrentValue('')} />
                      <DeleteIcon className="editDeleteIcon" onMouseDown={() => first.splice(first.indexOf(item), 1)} onMouseUp={() => setRender(render + 1)} />
                    </div>

                  </Grid>
                </Card>
              </div>
          )
        }

      </Grid>
    </Box>
  )
}

export default Todo
