import{r as R,d as m,j as t,T as c,x as B,B as k,aC as Ve,s as Z,bS as Ze,P as ve,z as ee,bu as et,cy as tt,cu as te,F as nt,aF as rt,aK as ot}from"./index-CUb6G_Bt.js";import{F as O}from"./FuseExample-DEz02mvt.js";import{D as at}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{S as $,a as j,b as W,c as it,d as Ue,s as T,e as st,M as ne,r as lt,f as pt,g as ct,h as dt,i as ut,j as mt,k as ht,l as ft}from"./objectWithoutProperties-CSzsEwsV.js";import{d as vt}from"./Check-KFrNyYY4.js";import{d as St}from"./Settings-x14d565h.js";import{i as He}from"./interopRequireDefault-BuJbqelY.js";import{r as Ge}from"./createSvgIcon-DVT4_uAo.js";import{d as z,a as E}from"./KeyboardArrowRight-F8IBYGVc.js";import{r as Se,S as bt}from"./index-gLFKn8EB.js";import{a as gt}from"./index-C5PMoHYO.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";import"./LinearProgress-By1xQnan.js";const oe=["Select campaign settings","Create an ad group","Create an ad"];function xt(){const[e,n]=R.useState(0),[r,o]=R.useState(new Set),i=S=>S===1,l=S=>r.has(S),f=()=>{let S=r;l(e)&&(S=new Set(S.values()),S.delete(e)),n(A=>A+1),o(S)},x=()=>{n(S=>S-1)},C=()=>{if(!i(e))throw new Error("You can't skip a step that isn't optional.");n(S=>S+1),o(S=>{const A=new Set(S.values());return A.add(e),A})},N=()=>{n(0)};return m(B,{sx:{width:"100%"},children:[t(W,{activeStep:e,children:oe.map((S,A)=>{const L={},g={};return i(A)&&(g.optional=t(c,{variant:"caption",children:"Optional"})),l(A)&&(L.completed=!1),t($,{...L,children:t(j,{...g,children:S})},S)})}),e===oe.length?m(R.Fragment,{children:[t(c,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),m(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t(B,{sx:{flex:"1 1 auto"}}),t(k,{onClick:N,children:"Reset"})]})]}):m(R.Fragment,{children:[m(c,{sx:{mt:2,mb:1},children:["Step ",e+1]}),m(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t(k,{color:"inherit",disabled:e===0,onClick:x,sx:{mr:1},children:"Back"}),t(B,{sx:{flex:"1 1 auto"}}),i(e)&&t(k,{color:"inherit",onClick:C,sx:{mr:1},children:"Skip"}),t(k,{onClick:f,children:e===oe.length-1?"Finish":"Next"})]})]})]})}const yt=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
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
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
`,U=["Select campaign settings","Create an ad group","Create an ad"];function wt(){const[e,n]=R.useState(0),[r,o]=R.useState({}),i=()=>U.length,l=()=>Object.keys(r).length,f=()=>e===i()-1,x=()=>l()===i(),C=()=>{const g=f()&&!x()?U.findIndex((_,I)=>!(I in r)):e+1;n(g)},N=()=>{n(g=>g-1)},S=g=>()=>{n(g)},A=()=>{const g=r;g[e]=!0,o(g),C()},L=()=>{n(0),o({})};return m(B,{sx:{width:"100%"},children:[t(W,{nonLinear:!0,activeStep:e,children:U.map((g,_)=>t($,{completed:r[_],children:t(it,{color:"inherit",onClick:S(_),children:g})},g))}),t("div",{children:x()?m(R.Fragment,{children:[t(c,{sx:{mt:2,mb:1},children:"All steps completed - you're finished"}),m(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t(B,{sx:{flex:"1 1 auto"}}),t(k,{onClick:L,children:"Reset"})]})]}):m(R.Fragment,{children:[m(c,{sx:{mt:2,mb:1,py:1},children:["Step ",e+1]}),m(B,{sx:{display:"flex",flexDirection:"row",pt:2},children:[t(k,{color:"inherit",disabled:e===0,onClick:N,sx:{mr:1},children:"Back"}),t(B,{sx:{flex:"1 1 auto"}}),t(k,{onClick:C,sx:{mr:1},children:"Next"}),e!==U.length&&(r[e]?m(c,{variant:"caption",sx:{display:"inline-block"},children:["Step ",e+1," already completed"]}):t(k,{onClick:A,children:l()===i()-1?"Finish":"Complete Step"}))]})]})})]})}const Ct=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
`,kt=["Select master blaster campaign settings","Create an ad group","Create an ad"];function Bt(){return t(B,{sx:{width:"100%"},children:t(W,{activeStep:1,alternativeLabel:!0,children:kt.map(e=>t($,{children:t(j,{children:e})},e))})})}const At=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
`,Rt=["Select campaign settings","Create an ad group","Create an ad"];function _t(){const e=n=>n===1;return t(B,{sx:{width:"100%"},children:t(W,{activeStep:1,children:Rt.map((n,r)=>{const o={};return e(r)&&(o.optional=t(c,{variant:"caption",color:"error",children:"Alert message"}),o.error=!0),t($,{children:t(j,{...o,children:n})},n)})})})}const It=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalStepperWithError() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => {
          const labelProps: {
            optional?: React.ReactNode;
            error?: boolean;
          } = {};
          if (isStepFailed(index)) {
            labelProps.optional = (
              <Typography variant="caption" color="error">
                Alert message
              </Typography>
            );
            labelProps.error = true;
          }

          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
`;var be={},Pt=He;Object.defineProperty(be,"__esModule",{value:!0});var Qe=be.default=void 0,Nt=Pt(Ge()),Lt=Ve;Qe=be.default=(0,Nt.default)((0,Lt.jsx)("path",{d:"M22 9V7h-2v2h-2v2h2v2h2v-2h2V9zM8 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 1c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m4.51-8.95C13.43 5.11 14 6.49 14 8s-.57 2.89-1.49 3.95C14.47 11.7 16 10.04 16 8s-1.53-3.7-3.49-3.95m4.02 9.78C17.42 14.66 18 15.7 18 17v3h2v-3c0-1.45-1.59-2.51-3.47-3.17"}),"GroupAdd");var ge={},Tt=He;Object.defineProperty(ge,"__esModule",{value:!0});var Ye=ge.default=void 0,Ot=Tt(Ge()),qt=Ve;Ye=ge.default=(0,Ot.default)((0,qt.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 13H3V5h18z"}),"VideoLabel");const zt=Z(Ue)(({theme:e})=>({[`&.${T.alternativeLabel}`]:{top:10,left:"calc(-50% + 16px)",right:"calc(50% + 16px)"},[`&.${T.active}`]:{[`& .${T.line}`]:{borderColor:"#784af4"}},[`&.${T.completed}`]:{[`& .${T.line}`]:{borderColor:"#784af4"}},[`& .${T.line}`]:{borderColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderTopWidth:3,borderRadius:1}})),Et=Z("div")(({theme:e,ownerState:n})=>({color:e.palette.mode==="dark"?e.palette.grey[700]:"#eaeaf0",display:"flex",height:22,alignItems:"center",...n.active&&{color:"#784af4"},"& .QontoStepIcon-completedIcon":{color:"#784af4",zIndex:1,fontSize:18},"& .QontoStepIcon-circle":{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}}));function $t(e){const{active:n,completed:r,className:o}=e;return t(Et,{ownerState:{active:n},className:o,children:r?t(vt,{className:"QontoStepIcon-completedIcon"}):t("div",{className:"QontoStepIcon-circle"})})}const Wt=Z(Ue)(({theme:e})=>({[`&.${T.alternativeLabel}`]:{top:22},[`&.${T.active}`]:{[`& .${T.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`&.${T.completed}`]:{[`& .${T.line}`]:{backgroundImage:"linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)"}},[`& .${T.line}`]:{height:3,border:0,backgroundColor:e.palette.mode==="dark"?e.palette.grey[800]:"#eaeaf0",borderRadius:1}})),Mt=Z("div")(({theme:e,ownerState:n})=>({backgroundColor:e.palette.mode==="dark"?e.palette.grey[700]:"#ccc",zIndex:1,color:"#fff",width:50,height:50,display:"flex",borderRadius:"50%",justifyContent:"center",alignItems:"center",...n.active&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)",boxShadow:"0 4px 10px 0 rgba(0,0,0,.25)"},...n.completed&&{backgroundImage:"linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)"}}));function jt(e){const{active:n,completed:r,className:o}=e;return t(Mt,{ownerState:{completed:r,active:n},className:o,children:{1:t(St,{}),2:t(Qe,{}),3:t(Ye,{})}[String(e.icon)]})}const _e=["Select campaign settings","Create an ad group","Create an ad"];function Kt(){return m(Ze,{sx:{width:"100%"},spacing:4,children:[t(W,{alternativeLabel:!0,activeStep:1,connector:t(zt,{}),children:_e.map(e=>t($,{children:t(j,{StepIconComponent:$t,children:e})},e))}),t(W,{alternativeLabel:!0,activeStep:1,connector:t(Wt,{}),children:_e.map(e=>t($,{children:t(j,{StepIconComponent:jt,children:e})},e))})]})}const Ft=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import VideoLabelIcon from '@mui/icons-material/VideoLabel';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [\`&.\${stepConnectorClasses.active}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      borderColor: '#784af4',
    },
  },
  [\`&.\${stepConnectorClasses.completed}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      borderColor: '#784af4',
    },
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
  ({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
      color: '#784af4',
    }),
    '& .QontoStepIcon-completedIcon': {
      color: '#784af4',
      zIndex: 1,
      fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: 'currentColor',
    },
  }),
);

function QontoStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [\`&.\${stepConnectorClasses.alternativeLabel}\`]: {
    top: 22,
  },
  [\`&.\${stepConnectorClasses.active}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [\`&.\${stepConnectorClasses.completed}\`]: {
    [\`& .\${stepConnectorClasses.line}\`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [\`& .\${stepConnectorClasses.line}\`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <SettingsIcon />,
    2: <GroupAddIcon />,
    3: <VideoLabelIcon />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function CustomizedSteppers() {
  return (
    <Stack sx={{ width: '100%' }} spacing={4}>
      <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Stepper alternativeLabel activeStep={1} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
`,ae=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function Dt(){const[e,n]=R.useState(0),r=()=>{n(l=>l+1)},o=()=>{n(l=>l-1)},i=()=>{n(0)};return m(B,{sx:{maxWidth:400},children:[t(W,{activeStep:e,orientation:"vertical",children:ae.map((l,f)=>m($,{children:[t(j,{optional:f===2?t(c,{variant:"caption",children:"Last step"}):null,children:l.label}),m(st,{children:[t(c,{children:l.description}),t(B,{sx:{mb:2},children:m("div",{children:[t(k,{variant:"contained",onClick:r,sx:{mt:1,mr:1},children:f===ae.length-1?"Finish":"Continue"}),t(k,{disabled:f===0,onClick:o,sx:{mt:1,mr:1},children:"Back"})]})})]})]},l.label))}),e===ae.length&&m(ve,{square:!0,elevation:0,sx:{p:3},children:[t(c,{children:"All steps completed - you're finished"}),t(k,{onClick:i,sx:{mt:1,mr:1},children:"Reset"})]})]})}const Vt=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Select campaign settings',
    description: \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`,
  },
];

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
`,ie=[{label:"Select campaign settings",description:`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`},{label:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{label:"Create an ad",description:`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`}];function Ut(){const e=ee(),[n,r]=R.useState(0),o=ie.length,i=()=>{r(f=>f+1)},l=()=>{r(f=>f-1)};return m(B,{sx:{maxWidth:400,flexGrow:1},children:[t(ve,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t(c,{children:ie[n].label})}),t(B,{sx:{height:255,maxWidth:400,width:"100%",p:2},children:ie[n].description}),t(ne,{variant:"text",steps:o,position:"static",activeStep:n,nextButton:m(k,{size:"small",onClick:i,disabled:n===o-1,children:["Next",e.direction==="rtl"?t(z,{}):t(E,{})]}),backButton:m(k,{size:"small",onClick:l,disabled:n===0,children:[e.direction==="rtl"?t(E,{}):t(z,{}),"Back"]})})]})}const Ht=`import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const steps = [
  {
    label: 'Select campaign settings',
    description: \`For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.\`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: \`Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.\`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}
`;var Je={};function Gt(e){return e&&e.__esModule?e:{default:e}}var re=Gt,H={},G,Ie;function xe(){if(Ie)return G;Ie=1;function e(){return G=e=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])}return n},e.apply(this,arguments)}return G=e,G}var se,Pe;function Qt(){if(Pe)return se;Pe=1;function e(n,r){if(n==null)return{};var o={},i=Object.keys(n),l,f;for(f=0;f<i.length;f++)l=i[f],!(r.indexOf(l)>=0)&&(o[l]=n[l]);return o}return se=e,se}var le,Ne;function ye(){if(Ne)return le;Ne=1;var e=Qt();function n(r,o){if(r==null)return{};var i=e(r,o),l,f;if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(r);for(f=0;f<x.length;f++)l=x[f],!(o.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(r,l)&&(i[l]=r[l])}return i}return le=n,le}var pe,Le;function we(){if(Le)return pe;Le=1;function e(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}return pe=e,pe}var ce,Te;function Ce(){if(Te)return ce;Te=1;function e(r,o){for(var i=0;i<o.length;i++){var l=o[i];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(r,l.key,l)}}function n(r,o,i){return o&&e(r.prototype,o),i&&e(r,i),r}return ce=n,ce}var F,Oe;function Yt(){if(Oe)return F;Oe=1;function e(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?e=function(i){return typeof i}:e=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},e(r)}function n(r){return typeof Symbol=="function"&&e(Symbol.iterator)==="symbol"?F=n=function(i){return e(i)}:F=n=function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":e(i)},n(r)}return F=n,F}var de,qe;function Jt(){if(qe)return de;qe=1;function e(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}return de=e,de}var ue,ze;function ke(){if(ze)return ue;ze=1;var e=Yt(),n=Jt();function r(o,i){return i&&(e(i)==="object"||typeof i=="function")?i:n(o)}return ue=r,ue}var Q,Ee;function Be(){if(Ee)return Q;Ee=1;function e(n){return Q=e=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},e(n)}return Q=e,Q}var Y,$e;function Xt(){if($e)return Y;$e=1;function e(n,r){return Y=e=Object.setPrototypeOf||function(i,l){return i.__proto__=l,i},e(n,r)}return Y=e,Y}var me,We;function Ae(){if(We)return me;We=1;var e=Xt();function n(r,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(o&&o.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),o&&e(r,o)}return me=n,me}function Zt(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=Object.keys(e),o=Object.keys(n),i=r.length;if(o.length!==i)return!1;for(var l=0;l<i;l++){var f=r[l];if(e[f]!==n[f]||!Object.prototype.hasOwnProperty.call(n,f))return!1}return!0}function en(e,n){if(e===n)return!0;if(!e||!n)return!1;var r=e.length;if(n.length!==r)return!1;for(var o=0;o<r;o++)if(e[o]!==n[o])return!1;return!0}const tn=Object.freeze(Object.defineProperty({__proto__:null,shallowEqualArrays:en,shallowEqualObjects:Zt},Symbol.toStringTag,{value:"Module"})),nn=et(tn);var D={},Me;function Xe(){if(Me)return D;Me=1,Object.defineProperty(D,"__esModule",{value:!0});function e(s){return s&&typeof s=="object"&&"default"in s?s.default:s}var n=e(lt()),r=e(pt()),o=e(ct()),i=e(dt()),l=e(ut()),f=e(mt()),x=e(ht()),C=e(ft),N=e(R);e(te),e(tt());function S(s,u,v){return Object.defineProperty(s,u,v)}var A=function(){var s=null;return function(){if(s!==null)return s;var u=!1;try{window.addEventListener("test",null,S({},"passive",{get:function(){u=!0}}))}catch{}return s=u,u}()}(),L={capture:!1,passive:!1};function g(s){return C({},L,s)}function _(s,u,v){var h=[s,u];return h.push(A?v:v.capture),h}function I(s,u,v,h){s.addEventListener.apply(s,_(u,v,h))}function y(s,u,v,h){s.removeEventListener.apply(s,_(u,v,h))}function p(s,u){s.children,s.target;var v=x(s,["children","target"]);Object.keys(v).forEach(function(h){if(h.substring(0,2)==="on"){var w=v[h],b=f(w),P=b==="object",V=b==="function";if(!(!P&&!V)){var K=h.substr(-7).toLowerCase()==="capture",q=h.substring(2).toLowerCase();q=K?q.substring(0,q.length-7):q,P?u(q,w.handler,w.options):u(q,w,g({capture:K}))}}})}function a(s,u){return{handler:s,options:g(u)}}var d=function(s){l(u,s);function u(){return n(this,u),o(this,i(u).apply(this,arguments))}return r(u,[{key:"componentDidMount",value:function(){this.applyListeners(I)}},{key:"componentDidUpdate",value:function(h){this.applyListeners(y,h),this.applyListeners(I)}},{key:"componentWillUnmount",value:function(){this.applyListeners(y)}},{key:"applyListeners",value:function(h){var w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.props,b=w.target;if(b){var P=b;typeof b=="string"&&(P=window[b]),p(w,h.bind(null,P))}}},{key:"render",value:function(){return this.props.children||null}}]),u}(N.PureComponent);return d.propTypes={},D.withOptions=a,D.default=d,D}var je;function rn(){if(je)return H;je=1;var e=re;Object.defineProperty(H,"__esModule",{value:!0}),H.default=L;var n=e(xe()),r=e(ye()),o=e(we()),i=e(Ce()),l=e(ke()),f=e(Be()),x=e(Ae()),C=e(R);e(te);var N=nn,S=e(Xe()),A=Se();function L(g){var _=function(I){(0,x.default)(y,I);function y(p){var a;return(0,o.default)(this,y),a=(0,l.default)(this,(0,f.default)(y).call(this,p)),a.timer=null,a.state={},a.handleInterval=function(){var d=a.props,s=d.children,u=d.direction,v=d.onChangeIndex,h=d.slideCount,w=a.state.index,b=w;u==="incremental"?b+=1:b-=1,(h||s)&&(b=(0,A.mod)(b,h||C.default.Children.count(s))),a.props.index===void 0&&a.setState({index:b}),v&&v(b,w)},a.handleChangeIndex=function(d,s,u){a.props.index===void 0&&a.setState({index:d}),a.props.onChangeIndex&&a.props.onChangeIndex(d,s,u)},a.handleSwitching=function(d,s){a.timer?(clearInterval(a.timer),a.timer=null):s==="end"&&a.startInterval(),a.props.onSwitching&&a.props.onSwitching(d,s)},a.handleVisibilityChange=function(d){d.target.hidden?clearInterval(a.timer):a.startInterval()},a.state.index=p.index||0,a}return(0,i.default)(y,[{key:"componentDidMount",value:function(){this.startInterval()}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var d=a.index;typeof d=="number"&&d!==this.props.index&&this.setState({index:d})}},{key:"componentDidUpdate",value:function(a){var d=!(0,N.shallowEqualObjects)({index:a.index,interval:a.interval,autoplay:a.autoplay},{index:this.props.index,interval:this.props.interval,autoplay:this.props.autoplay});d&&this.startInterval()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"startInterval",value:function(){var a=this.props,d=a.autoplay,s=a.interval;clearInterval(this.timer),d&&(this.timer=setInterval(this.handleInterval,s))}},{key:"render",value:function(){var a=this.props,d=a.autoplay;a.direction,a.index,a.interval;var s=a.onChangeIndex,u=(0,r.default)(a,["autoplay","direction","index","interval","onChangeIndex"]),v=this.state.index;return d?C.default.createElement(S.default,{target:"document",onVisibilityChange:this.handleVisibilityChange},C.default.createElement(g,(0,n.default)({index:v,onChangeIndex:this.handleChangeIndex,onSwitching:this.handleSwitching},u))):C.default.createElement(g,(0,n.default)({index:v,onChangeIndex:s},u))}}]),y}(C.default.Component);return _.propTypes={},_.defaultProps={autoplay:!0,direction:"incremental",interval:3e3},_}return H}var J={},Ke;function on(){if(Ke)return J;Ke=1;var e=re;Object.defineProperty(J,"__esModule",{value:!0}),J.default=L;var n=e(xe()),r=e(ye()),o=e(we()),i=e(Ce()),l=e(ke()),f=e(Be()),x=e(Ae()),C=e(R);e(te);var N=e(gt),S=e(Xe()),A=Se();function L(g){var _=function(I){(0,x.default)(y,I);function y(){var p,a;(0,o.default)(this,y);for(var d=arguments.length,s=new Array(d),u=0;u<d;u++)s[u]=arguments[u];return a=(0,l.default)(this,(p=(0,f.default)(y)).call.apply(p,[this].concat(s))),a.state={},a.handleKeyDown=function(v){var h,w=a.props,b=w.axis,P=b===void 0?"x":b,V=w.children,K=w.onChangeIndex,q=w.slideCount;switch((0,N.default)(v)){case"page down":case"down":P==="y"?h="decrease":P==="y-reverse"&&(h="increase");break;case"left":P==="x"?h="decrease":P==="x-reverse"&&(h="increase");break;case"page up":case"up":P==="y"?h="increase":P==="y-reverse"&&(h="decrease");break;case"right":P==="x"?h="increase":P==="x-reverse"&&(h="decrease");break}if(h){var Re=a.state.index,M=Re;h==="increase"?M+=1:M-=1,(q||V)&&(M=(0,A.mod)(M,q||C.default.Children.count(V))),a.props.index===void 0&&a.setState({index:M}),K&&K(M,Re)}},a.handleChangeIndex=function(v,h,w){a.props.index===void 0&&a.setState({index:v}),a.props.onChangeIndex&&a.props.onChangeIndex(v,h,w)},a}return(0,i.default)(y,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({index:this.props.index||0})}},{key:"UNSAFE_componentWillReceiveProps",value:function(a){var d=a.index;typeof d=="number"&&d!==this.props.index&&this.setState({index:d})}},{key:"render",value:function(){var a=this.props;a.index,a.onChangeIndex;var d=(0,r.default)(a,["index","onChangeIndex"]),s=this.state.index;return C.default.createElement(S.default,{target:"window",onKeyDown:this.handleKeyDown},C.default.createElement(g,(0,n.default)({index:s,onChangeIndex:this.handleChangeIndex},d)))}}]),y}(C.default.Component);return _.propTypes={},_}return J}var X={},he,Fe;function an(){if(Fe)return he;Fe=1;function e(n){if(n&&n.__esModule)return n;var r={};if(n!=null){for(var o in n)if(Object.prototype.hasOwnProperty.call(n,o)){var i=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(n,o):{};i.get||i.set?Object.defineProperty(r,o,i):r[o]=n[o]}}return r.default=n,r}return he=e,he}var De;function sn(){if(De)return X;De=1;var e=an(),n=re;Object.defineProperty(X,"__esModule",{value:!0}),X.default=A;var r=n(xe()),o=n(ye()),i=n(we()),l=n(Ce()),f=n(ke()),x=n(Be()),C=n(Ae()),N=e(R);n(te);var S=Se();function A(L){var g=function(_){(0,C.default)(I,_);function I(y){var p;return(0,i.default)(this,I),p=(0,f.default)(this,(0,x.default)(I).call(this,y)),p.timer=null,p.state={},p.handleChangeIndex=function(a,d,s){var u=p.props,v=u.slideCount,h=u.onChangeIndex,w=a-d,b=p.state.index+w;v&&(b=(0,S.mod)(b,v)),p.props.index===void 0&&p.setIndex(b,a,w),h&&h(b,p.state.index,s)},p.handleTransitionEnd=function(){p.timer=setTimeout(function(){p.setWindow()},0),p.props.onTransitionEnd&&p.props.onTransitionEnd()},p.state.index=y.index||0,p}return(0,l.default)(I,[{key:"UNSAFE_componentWillMount",value:function(){this.setWindow(this.state.index)}},{key:"UNSAFE_componentWillReceiveProps",value:function(p){var a=p.index;if(typeof a=="number"&&a!==this.props.index){var d=a-this.props.index;this.setIndex(a,this.state.indexContainer+d,d)}}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer)}},{key:"setIndex",value:function(p,a,d){var s={index:p,indexContainer:a,indexStart:this.state.indexStart,indexStop:this.state.indexStop};d>0&&(!this.props.slideCount||s.indexStop<this.props.slideCount-1)&&(s.indexStop+=1),p>s.indexStop&&(s.indexStop=p);var u=s.indexStart-p;u>0&&(s.indexContainer+=u,s.indexStart-=u),this.setState(s)}},{key:"setWindow",value:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.state.index,a=this.props.slideCount,d=this.props.overscanSlideBefore,s=this.props.overscanSlideAfter;a&&(d>p&&(d=p),s+p>a-1&&(s=a-p-1)),this.setState({indexContainer:d,indexStart:p-d,indexStop:p+s})}},{key:"render",value:function(){var p=this.props;p.children,p.index,p.onChangeIndex,p.onTransitionEnd,p.overscanSlideAfter,p.overscanSlideBefore,p.slideCount;for(var a=p.slideRenderer,d=(0,o.default)(p,["children","index","onChangeIndex","onTransitionEnd","overscanSlideAfter","overscanSlideBefore","slideCount","slideRenderer"]),s=this.state,u=s.indexContainer,v=s.indexStart,h=s.indexStop,w=[],b=v;b<=h;b+=1)w.push(a({index:b,key:b}));return N.default.createElement(L,(0,r.default)({index:u,onChangeIndex:this.handleChangeIndex,onTransitionEnd:this.handleTransitionEnd},d),w)}}]),I}(N.PureComponent);return g.propTypes={},g.defaultProps={overscanSlideAfter:2,overscanSlideBefore:3},g}return X}(function(e){var n=re;Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"autoPlay",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(e,"bindKeyboard",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(e,"virtualize",{enumerable:!0,get:function(){return i.default}});var r=n(rn()),o=n(on()),i=n(sn())})(Je);const ln=Je.autoPlay(bt),fe=[{label:"San Francisco – Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250"},{label:"Goč, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}];function pn(){const e=ee(),[n,r]=R.useState(0),o=fe.length,i=()=>{r(x=>x+1)},l=()=>{r(x=>x-1)},f=x=>{r(x)};return m(B,{sx:{maxWidth:400,flexGrow:1},children:[t(ve,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"},children:t(c,{children:fe[n].label})}),t(ln,{axis:e.direction==="rtl"?"x-reverse":"x",index:n,onChangeIndex:f,enableMouseEvents:!0,children:fe.map((x,C)=>t("div",{children:Math.abs(n-C)<=2?t(B,{component:"img",sx:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},src:x.imgPath,alt:x.label}):null},x.label))}),t(ne,{steps:o,position:"static",activeStep:n,nextButton:m(k,{size:"small",onClick:i,disabled:n===o-1,children:["Next",e.direction==="rtl"?t(z,{}):t(E,{})]}),backButton:m(k,{size:"small",onClick:l,disabled:n===0,children:[e.direction==="rtl"?t(E,{}):t(z,{}),"Back"]})})]})}const cn=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
`;function dn(){const e=ee(),[n,r]=R.useState(0),o=()=>{r(l=>l+1)},i=()=>{r(l=>l-1)};return t(ne,{variant:"dots",steps:6,position:"static",activeStep:n,sx:{maxWidth:400,flexGrow:1},nextButton:m(k,{size:"small",onClick:o,disabled:n===5,children:["Next",e.direction==="rtl"?t(z,{}):t(E,{})]}),backButton:m(k,{size:"small",onClick:i,disabled:n===0,children:[e.direction==="rtl"?t(E,{}):t(z,{}),"Back"]})})}const un=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function DotsMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
`;function mn(){const e=ee(),[n,r]=R.useState(0),o=()=>{r(l=>l+1)},i=()=>{r(l=>l-1)};return t(ne,{variant:"progress",steps:6,position:"static",activeStep:n,sx:{maxWidth:400,flexGrow:1},nextButton:m(k,{size:"small",onClick:o,disabled:n===5,children:["Next",e.direction==="rtl"?t(z,{}):t(E,{})]}),backButton:m(k,{size:"small",onClick:i,disabled:n===0,children:[e.direction==="rtl"?t(E,{}):t(z,{}),"Back"]})})}const hn=`import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
`;function In(e){return m(ot,{children:[m("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(at,{}),t(k,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/steppers",target:"_blank",role:"button",size:"small",startIcon:t(nt,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(c,{className:"text-32 my-16 font-700",component:"h1",children:"Stepper"}),t(c,{className:"description",children:"Steppers convey progress through numbered steps. It provides a wizard-like workflow."}),t(c,{className:"text-14 mb-32",component:"div",children:"Steppers display progress through a sequence of logical and numbered steps. They may also be used for navigation. Steppers may display a transient feedback message after a step is saved."}),m("ul",{className:"space-y-16",children:[m("li",{children:[t("strong",{children:"Types of Steps"}),": Editable, Non-editable, Mobile, Optional"]}),m("li",{children:[t("strong",{children:"Types of Steppers"}),": Horizontal, Vertical, Linear, Non-linear"]})]}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:m(c,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",t("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),t(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Horizontal stepper"}),t(c,{className:"text-14 mb-32",component:"div",children:"Horizontal steppers are ideal when the contents of one step depend on an earlier step."}),t(c,{className:"text-14 mb-32",component:"div",children:"Avoid using long step names in horizontal steppers."}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Linear"}),t(c,{className:"text-14 mb-32",component:"div",children:"A linear stepper allows the user to complete the steps in sequence."}),m(c,{className:"text-14 mb-32",component:"div",children:["The ",t("code",{children:"Stepper"})," can be controlled by passing the current step index (zero-based) as the ",t("code",{children:"activeStep"})," prop. ",t("code",{children:"Stepper"})," orientation is set using the ",t("code",{children:"orientation"})," prop."]}),m(c,{className:"text-14 mb-32",component:"div",children:["This example also shows the use of an optional step by placing the ",t("code",{children:"optional"})," prop on the second ",t("code",{children:"Step"})," component. Note that it's up to you to manage when an optional step is skipped. Once you've determined this for a particular step you must set ",t("code",{children:"completed={false}"})," to signify that even though the active step index has gone beyond the optional step, it's not actually complete."]}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"HorizontalLinearStepper.js",className:"my-16",iframe:!1,component:xt,raw:yt})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Non-linear"}),t(c,{className:"text-14 mb-32",component:"div",children:"Non-linear steppers allow the user to enter a multi-step flow at any point."}),m(c,{className:"text-14 mb-32",component:"div",children:["This example is similar to the regular horizontal stepper, except steps are no longer automatically set to ",t("code",{children:"disabled={true}"})," based on the ",t("code",{children:"activeStep"})," prop."]}),m(c,{className:"text-14 mb-32",component:"div",children:["The use of the ",t("code",{children:"StepButton"})," here demonstrates clickable step labels, as well as setting the ",t("code",{children:"completed"}),"flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed)."]}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"HorizontalNonLinearStepper.js",className:"my-16",iframe:!1,component:wt,raw:Ct})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Alternative label"}),m(c,{className:"text-14 mb-32",component:"div",children:["Labels can be placed below the step icon by setting the ",t("code",{children:"alternativeLabel"})," prop on the ",t("code",{children:"Stepper"})," component."]}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"HorizontalLinearAlternativeLabelStepper.js",className:"my-16",iframe:!1,component:Bt,raw:At})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Error step"}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"HorizontalStepperWithError.js",className:"my-16",iframe:!1,component:_t,raw:It})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Customized horizontal stepper"}),m(c,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",t("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"CustomizedSteppers.js",className:"my-16",iframe:!1,component:Kt,raw:Ft})}),t(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical stepper"}),t(c,{className:"text-14 mb-32",component:"div",children:"Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented."}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"VerticalLinearStepper.js",className:"my-16",iframe:!1,component:Dt,raw:Vt})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Performance"}),t(c,{className:"text-14 mb-32",component:"div",children:"The content of a step is unmounted when closed. If you need to make the content available to search engines or render expensive component trees inside your modal while optimizing for interaction responsiveness it might be a good idea to keep the step mounted with:"}),t(rt,{component:"pre",className:"language-jsx",children:` 
<StepContent TransitionProps={{ unmountOnExit: false }} />
`}),t(c,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Mobile stepper"}),m(c,{className:"text-14 mb-32",component:"div",children:["This component implements a compact stepper suitable for a mobile device. It has more limited functionality than the vertical stepper. See ",t("a",{href:"https://m1.material.io/components/steppers.html#steppers-types-of-steps",children:"mobile steps"})," for its inspiration."]}),t(c,{className:"text-14 mb-32",component:"div",children:"The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress."}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text"}),t(c,{className:"text-14 mb-32",component:"div",children:"The current step and total number of steps are displayed as text."}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"TextMobileStepper.js",className:"my-16",iframe:!1,component:Ut,raw:Ht})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Text with carousel effect"}),m(c,{className:"text-14 mb-32",component:"div",children:["This demo uses",t("a",{href:"https://github.com/oliviertassinari/react-swipeable-views",children:"react-swipeable-views"})," to create a carousel."]}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"SwipeableTextMobileStepper.js",className:"my-16",iframe:!1,component:pn,raw:cn})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Dots"}),t(c,{className:"text-14 mb-32",component:"div",children:"Use dots when the number of steps is small."}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"DotsMobileStepper.js",className:"my-16",iframe:!1,component:dn,raw:un})}),t(c,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Progress"}),t(c,{className:"text-14 mb-32",component:"div",children:"Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps)."}),t(c,{className:"text-14 mb-32",component:"div",children:t(O,{name:"ProgressMobileStepper.js",className:"my-16",iframe:!1,component:mn,raw:hn})})]})}export{In as default};
