import React from 'react'
import {Button} from 'react-bootstrap'
export default function Tag(props) {
  return (
    <>
    <Button variant="outline btn-sm m-1 btn-outline-secondary" size='small' style={{color:"#D3D3D3",borderColor:'#D3D3D3',borderRadius:'30px'}}>{props.value}</Button>
    </>
  )
}
