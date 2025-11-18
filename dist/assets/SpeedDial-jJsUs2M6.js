import{aC as y,j as e,x as m,s as C,r as v,d as a,k as I,bT as s,aG as F,cq as O,cs as w,ct as b,cj as R,F as P,B,T as o,aK as N}from"./index-CUb6G_Bt.js";import{F as d}from"./FuseExample-DEz02mvt.js";import{D as T}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{i as L}from"./interopRequireDefault-BuJbqelY.js";import{r as k}from"./createSvgIcon-DVT4_uAo.js";import{d as h}from"./Save-BZjAo12d.js";import{d as u}from"./Print-pyxi3syg.js";import{d as f}from"./Share-q3qHeiWT.js";import{S,a as x,b as D}from"./SpeedDialIcon-CTCfrXtk.js";import{d as A}from"./Edit-DGVJ8a_C.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";import"./Zoom-UfdlXz0U.js";var g={},G=L;Object.defineProperty(g,"__esModule",{value:!0});var p=g.default=void 0,j=G(k()),H=y;p=g.default=(0,j.default)((0,H.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4H8c-1.1 0-1.99.9-1.99 2L6 21c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V11zM8 21V7h6v5h5v9z"}),"FileCopyOutlined");const E=[{icon:e(p,{}),name:"Copy"},{icon:e(h,{}),name:"Save"},{icon:e(u,{}),name:"Print"},{icon:e(f,{}),name:"Share"}];function M(){return e(m,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(S,{ariaLabel:"SpeedDial basic example",sx:{position:"absolute",bottom:16,right:16},icon:e(x,{}),children:E.map(i=>e(D,{icon:i.icon,tooltipTitle:i.name},i.name))})})}const _=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
`,Z=C(S)(({theme:i})=>({position:"absolute","&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft":{bottom:i.spacing(2),right:i.spacing(2)},"&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight":{top:i.spacing(2),left:i.spacing(2)}})),$=[{icon:e(p,{}),name:"Copy"},{icon:e(h,{}),name:"Save"},{icon:e(u,{}),name:"Print"},{icon:e(f,{}),name:"Share"}];function q(){const[i,t]=v.useState("up"),[c,r]=v.useState(!1);return a(m,{sx:{transform:"translateZ(0px)",flexGrow:1},children:[e(s,{control:e(I,{checked:c,onChange:l=>{r(l.target.checked)},color:"primary"}),label:"Hidden"}),a(F,{component:"fieldset",sx:{mt:1,display:"flex"},children:[e(O,{component:"legend",children:"Direction"}),a(w,{"aria-label":"direction",name:"direction",value:i,onChange:l=>{t(l.target.value)},row:!0,children:[e(s,{value:"up",control:e(b,{}),label:"Up"}),e(s,{value:"right",control:e(b,{}),label:"Right"}),e(s,{value:"down",control:e(b,{}),label:"Down"}),e(s,{value:"left",control:e(b,{}),label:"Left"})]})]}),e(m,{sx:{position:"relative",mt:3,height:320},children:e(Z,{ariaLabel:"SpeedDial playground example",hidden:c,icon:e(x,{}),direction:i,children:$.map(l=>e(D,{icon:l.icon,tooltipTitle:l.name},l.name))})})]})}const z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function PlaygroundSpeedDial() {
  const [direction, setDirection] =
    React.useState<SpeedDialProps['direction']>('up');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction'],
    );
  };

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
      <FormControlLabel
        control={
          <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
        }
        label="Hidden"
      />
      <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl>
      <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}
`,U=[{icon:e(p,{}),name:"Copy"},{icon:e(h,{}),name:"Save"},{icon:e(u,{}),name:"Print"},{icon:e(f,{}),name:"Share"}];function V(){const[i,t]=v.useState(!1),c=()=>t(!0),r=()=>t(!1);return e(m,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(S,{ariaLabel:"SpeedDial controlled open example",sx:{position:"absolute",bottom:16,right:16},icon:e(x,{}),onClose:r,onOpen:c,open:i,children:U.map(n=>e(D,{icon:n.icon,tooltipTitle:n.name,onClick:r},n.name))})})}const Y=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial controlled open example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
`,K=[{icon:e(p,{}),name:"Copy"},{icon:e(h,{}),name:"Save"},{icon:e(u,{}),name:"Print"},{icon:e(f,{}),name:"Share"}];function W(){return e(m,{sx:{height:320,transform:"translateZ(0px)",flexGrow:1},children:e(S,{ariaLabel:"SpeedDial openIcon example",sx:{position:"absolute",bottom:16,right:16},icon:e(x,{openIcon:e(A,{})}),children:K.map(i=>e(D,{icon:i.icon,tooltipTitle:i.name},i.name))})})}const J=`import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
`,Q=[{icon:e(p,{}),name:"Copy"},{icon:e(h,{}),name:"Save"},{icon:e(u,{}),name:"Print"},{icon:e(f,{}),name:"Share"}];function X(){const[i,t]=v.useState(!1),c=()=>t(!0),r=()=>t(!1);return a(m,{sx:{height:330,transform:"translateZ(0px)",flexGrow:1},children:[e(R,{open:i}),e(S,{ariaLabel:"SpeedDial tooltip example",sx:{position:"absolute",bottom:16,right:16},icon:e(x,{}),onClose:r,onOpen:c,open:i,children:Q.map(n=>e(D,{icon:n.icon,tooltipTitle:n.name,tooltipOpen:!0,onClick:r},n.name))})]})}const ee=`import * as React from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function SpeedDialTooltipOpen() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
`;function fe(i){return a(N,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(T,{}),e(B,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/speed-dial",target:"_blank",role:"button",size:"small",startIcon:e(P,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Speed Dial"}),e(o,{className:"description",children:"When pressed, a floating action button can display three to six related actions in the form of a Speed Dial."}),e(o,{className:"text-14 mb-32",component:"div",children:"If more than six actions are needed, something other than a FAB should be used to present them."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic speed dial"}),e(o,{className:"text-14 mb-32",component:"div",children:"The floating action button can display related actions."}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"BasicSpeedDial.js",className:"my-16",iframe:!1,component:M,raw:_})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Playground"}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"PlaygroundSpeedDial.js",className:"my-16",iframe:!1,component:q,raw:z})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled speed dial"}),a(o,{className:"text-14 mb-32",component:"div",children:["The open state of the component can be controlled with the ",e("code",{children:"open"}),"/",e("code",{children:"onOpen"}),"/",e("code",{children:"onClose"})," props."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"ControlledOpenSpeedDial.js",className:"my-16",iframe:!1,component:V,raw:Y})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom close icon"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can provide an alternate icon for the closed and open states using the ",e("code",{children:"icon"})," and ",e("code",{children:"openIcon"})," props of the ",e("code",{children:"SpeedDialIcon"})," component."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"OpenIconSpeedDial.js",className:"my-16",iframe:!1,component:W,raw:J})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Persistent action tooltips"}),e(o,{className:"text-14 mb-32",component:"div",children:"The SpeedDialActions tooltips can be displayed persistently so that users don't have to long-press to see the tooltip on touch devices."}),a(o,{className:"text-14 mb-32",component:"div",children:["It is enabled here across all devices for demo purposes, but in production it could use the ",e("code",{children:"isTouch"})," logic to conditionally set the prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(d,{name:"SpeedDialTooltipOpen.js",className:"my-16",iframe:!1,component:X,raw:ee})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(o,{className:"text-14 mt-12 mb-10",component:"h4",children:"Required"}),a("ul",{className:"space-y-16",children:[a("li",{children:["You should provide an ",e("code",{children:"ariaLabel"})," for the speed dial component."]}),a("li",{children:["You should provide a ",e("code",{children:"tooltipTitle"})," for each speed dial action."]})]}),e(o,{className:"text-14 mt-12 mb-10",component:"h4",children:"Provided"}),a("ul",{className:"space-y-16",children:[a("li",{children:["The Fab has ",e("code",{children:"aria-haspopup"}),", ",e("code",{children:"aria-expanded"})," and ",e("code",{children:"aria-controls"})," attributes."]}),a("li",{children:["The speed dial actions container has ",e("code",{children:'role="menu"'})," and ",e("code",{children:"aria-orientation"})," set according to the direction."]}),a("li",{children:["The speed dial actions have ",e("code",{children:'role="menuitem"'}),", and an ",e("code",{children:"aria-describedby"})," attribute that references the associated tooltip."]})]}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),a("ul",{className:"space-y-16",children:[e("li",{children:"The speed dial opens on focus."}),e("li",{children:"The Space and Enter keys trigger the selected speed dial action, and toggle the speed dial open state."}),e("li",{children:"The cursor keys move focus to the next or previous speed dial action. (Note that any cursor direction can be used initially to open the speed dial. This enables the expected behavior for the actual or perceived orientation of the speed dial, for example for a screen reader user who perceives the speed dial as a drop-down menu.)"}),e("li",{children:"The Escape key closes the speed dial and, if a speed dial action was focused, returns focus to the Fab."})]})]})}export{fe as default};
