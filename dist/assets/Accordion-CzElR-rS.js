import{d as n,j as e,B as g,aC as v,T as o,r as x,aw as N,s as f,F as C,aF as p,aK as M}from"./index-CUb6G_Bt.js";import{F as s}from"./FuseExample-DEz02mvt.js";import{D as L}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{d as c}from"./ExpandMore-aLR6GnVI.js";import{A as i,a as r,b as t}from"./AccordionSummary-CerUURdk.js";import{A as R}from"./AccordionActions-BU2lPCUL.js";import{i as D}from"./interopRequireDefault-BuJbqelY.js";import{r as T}from"./createSvgIcon-DVT4_uAo.js";import{d as j}from"./ArrowDropDown-B_44rQUq.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function F(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel1-content",id:"panel1-header",children:"Accordion 1"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel2-content",id:"panel2-header",children:"Accordion 2"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),n(i,{defaultExpanded:!0,children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel3-content",id:"panel3-header",children:"Accordion Actions"}),e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."}),n(R,{children:[e(g,{children:"Cancel"}),e(g,{children:"Agree"})]})]})]})}const k=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
        <AccordionActions>
          <Button>Cancel</Button>
          <Button>Agree</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
`;var b={},P=D;Object.defineProperty(b,"__esModule",{value:!0});var I=b.default=void 0,q=P(T()),_=v;I=b.default=(0,q.default)((0,_.jsx)("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"}),"ArrowDownward");function B(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(I,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Accordion 1"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(j,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Accordion 2"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const U=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;function z(){return n("div",{children:[n(i,{defaultExpanded:!0,children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Expanded by default"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Header"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const $=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpandDefault() {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Expanded by default</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Header</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;function G(){const[a,l]=x.useState(!1);return n("div",{children:[n(i,{expanded:a,onChange:()=>{l(m=>!m)},slots:{transition:N},slotProps:{transition:{timeout:400}},sx:{"& .MuiAccordion-region":{height:a?"auto":0},"& .MuiAccordionDetails-root":{display:a?"block":"none"}},children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Custom transition using Fade"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Default transition using Collapse"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const O=`import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function AccordionTransition() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Default transition using Collapse</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;function H(){return n("div",{children:[n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel1-content",id:"panel1-header",children:e(o,{children:"Accordion 1"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(i,{children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel2-content",id:"panel2-header",children:e(o,{children:"Accordion 2"})}),e(t,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),e(i,{disabled:!0,children:e(r,{expandIcon:e(c,{}),"aria-controls":"panel3-content",id:"panel3-header",children:e(o,{children:"Disabled Accordion"})})})]})}const W=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DisabledAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
`;function Y(){const[a,l]=x.useState(!1),d=m=>(E,u)=>{l(u?m:!1)};return n("div",{children:[n(i,{expanded:a==="panel1",onChange:d("panel1"),children:[n(r,{expandIcon:e(c,{}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"General settings"}),e(o,{sx:{color:"text.secondary"},children:"I am an accordion"})]}),e(t,{children:e(o,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."})})]}),n(i,{expanded:a==="panel2",onChange:d("panel2"),children:[n(r,{expandIcon:e(c,{}),"aria-controls":"panel2bh-content",id:"panel2bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"Users"}),e(o,{sx:{color:"text.secondary"},children:"You are currently not an owner"})]}),e(t,{children:e(o,{children:"Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."})})]}),n(i,{expanded:a==="panel3",onChange:d("panel3"),children:[n(r,{expandIcon:e(c,{}),"aria-controls":"panel3bh-content",id:"panel3bh-header",children:[e(o,{sx:{width:"33%",flexShrink:0},children:"Advanced settings"}),e(o,{sx:{color:"text.secondary"},children:"Filtering has been entirely disabled for whole web server"})]}),e(t,{children:e(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]}),n(i,{expanded:a==="panel4",onChange:d("panel4"),children:[e(r,{expandIcon:e(c,{}),"aria-controls":"panel4bh-content",id:"panel4bh-header",children:e(o,{sx:{width:"33%",flexShrink:0},children:"Personal data"})}),e(t,{children:e(o,{children:"Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel est augue."})})]})]})}const K=`import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
            laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Advanced settings
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
            amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;var S={},V=D;Object.defineProperty(S,"__esModule",{value:!0});var w=S.default=void 0,J=V(T()),Q=v;w=S.default=(0,J.default)((0,Q.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIosSharp");const h=f(a=>e(i,{disableGutters:!0,elevation:0,square:!0,...a}))(({theme:a})=>({border:`1px solid ${a.palette.divider}`,"&:not(:last-child)":{borderBottom:0},"&::before":{display:"none"}})),A=f(a=>e(r,{expandIcon:e(w,{sx:{fontSize:"0.9rem"}}),...a}))(({theme:a})=>({backgroundColor:a.palette.mode==="dark"?"rgba(255, 255, 255, .05)":"rgba(0, 0, 0, .03)",flexDirection:"row-reverse","& .MuiAccordionSummary-expandIconWrapper.Mui-expanded":{transform:"rotate(90deg)"},"& .MuiAccordionSummary-content":{marginLeft:a.spacing(1)}})),y=f(t)(({theme:a})=>({padding:a.spacing(2),borderTop:"1px solid rgba(0, 0, 0, .125)"}));function X(){const[a,l]=x.useState("panel1"),d=m=>(E,u)=>{l(u?m:!1)};return n("div",{children:[n(h,{expanded:a==="panel1",onChange:d("panel1"),children:[e(A,{"aria-controls":"panel1d-content",id:"panel1d-header",children:e(o,{children:"Collapsible Group Item #1"})}),e(y,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(h,{expanded:a==="panel2",onChange:d("panel2"),children:[e(A,{"aria-controls":"panel2d-content",id:"panel2d-header",children:e(o,{children:"Collapsible Group Item #2"})}),e(y,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]}),n(h,{expanded:a==="panel3",onChange:d("panel3"),children:[e(A,{"aria-controls":"panel3d-content",id:"panel3d-header",children:e(o,{children:"Collapsible Group Item #3"})}),e(y,{children:e(o,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})})]})]})}const Z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: \`1px solid \${theme.palette.divider}\`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
`;function me(a){return n(M,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(L,{}),e(g,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/accordion",target:"_blank",role:"button",size:"small",startIcon:e(C,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Accordion"}),e(o,{className:"description",children:"The Accordion component lets users show and hide sections of related content on a page."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Introduction"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Material UI Accordion component includes several complementary utility components to handle various use cases:"}),n("ul",{className:"space-y-16",children:[e("li",{children:"Accordion: the wrapper for grouping related components."}),e("li",{children:"Accordion Summary: the wrapper for the Accordion header, which expands or collapses the content when clicked."}),e("li",{children:"Accordion Details: the wrapper for the Accordion content."}),e("li",{children:"Accordion Actions: an optional wrapper that groups a set of buttons."})]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"AccordionUsage.js",className:"my-16",iframe:!1,component:F,raw:k})}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:n(o,{className:"text-14 mb-32",component:"div",children:["This component is no longer documented in the ",e("a",{href:"https://m2.material.io/",children:"Material Design guidelines"}),", but Material UI will continue to support it."]})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basics"}),e(p,{component:"pre",className:"language-jsx",children:` 
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
`}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Expand icon"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"expandIcon"})," prop on the Accordion Summary component to change the expand indicator icon. The component handles the turning upside-down transition automatically."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"AccordionExpandIcon.js",className:"my-16",iframe:!1,component:B,raw:U})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Expanded by default"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"defaultExpanded"})," prop on the Accordion component to have it opened by default."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"AccordionExpandDefault.js",className:"my-16",iframe:!1,component:z,raw:$})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Transition"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"slots.transition"})," and ",e("code",{children:"slotProps.transition"})," props to change the Accordion's default transition."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"AccordionTransition.js",className:"my-16",iframe:!1,component:G,raw:O})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Disabled item"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"disabled"})," prop on the Accordion component to disable interaction and focus."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"DisabledAccordion.js",className:"my-16",iframe:!1,component:H,raw:W})}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Controlled Accordion"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Accordion component can be controlled or uncontrolled."}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"ControlledAccordions.js",className:"my-16",iframe:!1,component:Y,raw:K})}),n("div",{className:"border border-1 p-16 rounded-16 my-12",children:[n("ul",{className:"space-y-16",children:[n("li",{children:["A component is ",e("strong",{children:"controlled"})," when it's managed by its parent using props."]}),n("li",{children:["A component is ",e("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),n(o,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",e("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Only one expanded at a time"}),n(o,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"expanded"})," prop with React's ",e("code",{children:"useState"})," hook to allow only one Accordion item to be expanded at a time. The demo below also shows a bit of visual customziation."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(s,{name:"CustomizedAccordions.js",className:"my-16",iframe:!1,component:X,raw:Z})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),e(o,{className:"text-14 mb-32",component:"div",children:"The Accordion content is mounted by default even if it's not expanded. This default behavior has server-side rendering and SEO in mind."}),n(o,{className:"text-14 mb-32",component:"div",children:["If you render the Accordion Details with a big component tree nested inside, or if you have many Accordions, you may want to change this behavior by setting ",e("code",{children:"unmountOnExit"})," to ",e("code",{children:"true"})," inside the ",e("code",{children:"slotProps.transition"})," prop to improve performance:"]}),e(p,{component:"pre",className:"language-jsx",children:` 
<Accordion slotProps={{ transition: { unmountOnExit: true } }} />
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),n(o,{className:"text-14 mb-32",component:"div",children:["The ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/accordion/",children:"WAI-ARIA guidelines for accordions"})," recommend setting an ",e("code",{children:"id"})," and ",e("code",{children:"aria-controls"}),", which in this case would apply to the Accordion Summary component. The Accordion component then derives the necessary ",e("code",{children:"aria-labelledby"})," and ",e("code",{children:"id"})," from its content."]}),e(p,{component:"pre",className:"language-jsx",children:` 
<Accordion>
  <AccordionSummary id="panel-header" aria-controls="panel-content">
    Header
  </AccordionSummary>
  <AccordionDetails>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </AccordionDetails>
</Accordion>
`}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Anatomy"}),n(o,{className:"text-14 mb-32",component:"div",children:["The Accordion component is composed of a root ",e("code",{children:"<div>"})," that houses interior elements like the Accordion Summary and other optional components (such as buttons or decorators)."]}),e(p,{component:"pre",className:"language-jsx",children:` 
<div className="MuiAccordion-root">
  <div className="MuiButtonBase-root MuiAccordionSummary-root" role="button" aria-expanded="">
      <!-- Accordion header button goes here -->
  </div>
  <div className="MuiAccordion-region" role="region">
    <div className="MuiAccordionDetails-root">
      <!-- Accordion content goes here -->
    </div>
  </div>
</div>
`})]})}export{me as default};
