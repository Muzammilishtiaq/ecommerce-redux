import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps = ['Placed','Order Condirmed','Shipped','Out Of Delivery','Delived'];
export default function OrderTracking() {
    const [activeStep,setActiveStep]=React.useState(0)
  return (
    <div className='w-full'>
      <Stepper activeStep={activeStep} alternativeLabel>
{steps.map((label)=><Step><StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{label}</StepLabel></Step>)}
      </Stepper>
    </div>
  )
}
