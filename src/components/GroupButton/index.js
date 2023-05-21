import {
    ButtonGroup,
    Button,
    Divider,
 } from '@mui/material';
import React from 'react'
import './index.css';

export default function GroupButton({ButtonsData, onClick}) {
  return (
    <>
    <ButtonGroup variant="contained" style={{ borderColor: "#000000", borderRadius: 9 }} aria-label="outlined button group">
     {ButtonsData.map((item,index)=>(
      <Button onClick={()=> onClick(item)} style={{ backgroundColor: item.selected ? "grey" : '#D9D9D9', color: "#000000", borderColor: "#000000"}}>{item.title}</Button>
     ))
    }
    </ButtonGroup>
    </>
    // <div className='d-flex'>
      
    //  {ButtonsData.map((item,index)=>(
    //   <>
    //   <button style={{ backgroundColor: '#D9D9D9', color: "#000000", border: "none", paddingTop:7,paddingBottom:7, paddingLeft:20, paddingRight:20, 
    //   borderTopLeftRadius: item.borderTopLeftRadius,
    //   borderBottomLeftRadius: item.borderBottomLeftRadius,
    //   borderTopRightRadius: item.borderTopRightRadius,
    //   borderBottomRightRadius: item.borderBottomRightRadius
    // }}>{item.title}</button>
    // <Divider orientation="vertical" variant="middle" flexItem />
    // </>
    //  ))
    // }
    // </div>
  )
}
