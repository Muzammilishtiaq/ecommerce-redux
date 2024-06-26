import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeliveryForm from '../Components/Forms/DeliveryForm';
import OrderSummery from '../Components/Forms/OrderSummery';
import { useLocation, useSearchParams } from 'react-router-dom';

const steps = ['Login', 'Delivery Address', 'Order Summery', 'Payment'];

export default function CheckOut() {
// const location = useLocation();
// const querySearch = new URLSearchParams(location.search);
// const stepParams = querySearch.get('steps');
// const [query,setQuery]=useSearchParams();
// const step = query.get('step')
    const [activeStep, setActiveStep] = React.useState(2);

    const handleNext = () => {

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="px-10 lg:px-20">
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        ); 
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                    </React.Fragment>
                ) : (
                    <React.Fragment>


                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}F
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                        <div className="mt-10">
                            {activeStep === 2 ? <DeliveryForm /> : <OrderSummery />}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}