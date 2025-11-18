import{aC as g,r as m,d as l,j as e,bS as N,s as O,D as J,P as U,F as Q,B as W,T as o,aF as Y,aK as K}from"./index-CUb6G_Bt.js";import{F as h}from"./FuseExample-DEz02mvt.js";import{D as X}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{d as b,a as T,b as B,c as $,e as G}from"./FormatItalic-DlMsallW.js";import{i as d}from"./interopRequireDefault-BuJbqelY.js";import{r as v}from"./createSvgIcon-DVT4_uAo.js";import{T as t,a as u,t as f}from"./ToggleButtonGroup-DuxM-NwQ.js";import{d as V}from"./ArrowDropDown-B_44rQUq.js";import{d as Z}from"./Check-KFrNyYY4.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";var F={},ee=d;Object.defineProperty(F,"__esModule",{value:!0});var x=F.default=void 0,te=ee(v()),oe=g;x=F.default=(0,te.default)((0,oe.jsx)("path",{d:"M3 21h18v-2H3zm0-4h18v-2H3zm0-4h18v-2H3zm0-4h18V7H3zm0-6v2h18V3z"}),"FormatAlignJustify");function le(){const[a,n]=m.useState("left");return l(u,{value:a,exclusive:!0,onChange:(r,i)=>{n(i)},"aria-label":"text alignment",children:[e(t,{value:"left","aria-label":"left aligned",children:e(b,{})}),e(t,{value:"center","aria-label":"centered",children:e(T,{})}),e(t,{value:"right","aria-label":"right aligned",children:e(B,{})}),e(t,{value:"justify","aria-label":"justified",disabled:!0,children:e(x,{})})]})}const ae=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <FormatAlignCenterIcon />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <FormatAlignRightIcon />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <FormatAlignJustifyIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var A={},ne=d;Object.defineProperty(A,"__esModule",{value:!0});var w=A.default=void 0,ie=ne(v()),re=g;w=A.default=(0,ie.default)((0,re.jsx)("path",{d:"M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6m-7 2v2h14v-2z"}),"FormatUnderlined");var I={},ue=d;Object.defineProperty(I,"__esModule",{value:!0});var y=I.default=void 0,me=ue(v()),ce=g;y=I.default=(0,me.default)((0,ce.jsx)("path",{d:"M16.56 8.94 7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12M5.21 10 10 5.21 14.79 10zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5M2 20h20v4H2z"}),"FormatColorFill");function se(){const[a,n]=m.useState(()=>["bold","italic"]);return l(u,{value:a,onChange:(r,i)=>{n(i)},"aria-label":"text formatting",children:[e(t,{value:"bold","aria-label":"bold",children:e($,{})}),e(t,{value:"italic","aria-label":"italic",children:e(G,{})}),e(t,{value:"underlined","aria-label":"underlined",children:e(w,{})}),l(t,{value:"color","aria-label":"color",disabled:!0,children:[e(y,{}),e(V,{})]})]})}const ge=`import * as React from 'react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled>
        <FormatColorFillIcon />
        <ArrowDropDownIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;function de(){const[a,n]=m.useState("left"),c=(j,p)=>{n(p)},r=[e(t,{value:"left",children:e(b,{})},"left"),e(t,{value:"center",children:e(T,{})},"center"),e(t,{value:"right",children:e(B,{})},"right"),e(t,{value:"justify",children:e(x,{})},"justify")],i={value:a,onChange:c,exclusive:!0};return l(N,{spacing:2,alignItems:"center",children:[e(u,{size:"small",...i,"aria-label":"Small sizes",children:r}),e(u,{...i,"aria-label":"Medium sizes",children:r}),e(u,{size:"large",...i,"aria-label":"Large sizes",children:r})]})}const ve=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </ToggleButton>,
    <ToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </ToggleButton>,
    <ToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </ToggleButton>,
    <ToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center">
      <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup {...control} aria-label="Medium sizes">
        {children}
      </ToggleButtonGroup>
      <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
`;function he(){const[a,n]=m.useState("web");return l(u,{color:"primary",value:a,exclusive:!0,onChange:(r,i)=>{n(i)},"aria-label":"Platform",children:[e(t,{value:"web",children:"Web"}),e(t,{value:"android",children:"Android"}),e(t,{value:"ios",children:"iOS"})]})}const pe=`import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="web">Web</ToggleButton>
      <ToggleButton value="android">Android</ToggleButton>
      <ToggleButton value="ios">iOS</ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var C={},fe=d;Object.defineProperty(C,"__esModule",{value:!0});var H=C.default=void 0,be=fe(v()),Te=g;H=C.default=(0,be.default)((0,Te.jsx)("path",{d:"M3 14h4v-4H3zm0 5h4v-4H3zM3 9h4V5H3zm5 5h13v-4H8zm0 5h13v-4H8zM8 5v4h13V5z"}),"ViewList");var R={},Be=d;Object.defineProperty(R,"__esModule",{value:!0});var L=R.default=void 0,xe=Be(v()),Fe=g;L=R.default=(0,xe.default)((0,Fe.jsx)("path",{d:"M14.67 5v6.5H9.33V5zm1 6.5H21V5h-5.33zm-1 7.5v-6.5H9.33V19zm1-6.5V19H21v-6.5zm-7.34 0H3V19h5.33zm0-1V5H3v6.5z"}),"ViewModule");var S={},Ae=d;Object.defineProperty(S,"__esModule",{value:!0});var E=S.default=void 0,we=Ae(v()),Ie=g;E=S.default=(0,we.default)((0,Ie.jsx)("path",{d:"M21 5v6.5H9.33V5zm-6.33 14v-6.5H9.33V19zm1-6.5V19H21v-6.5zM8.33 19V5H3v14z"}),"ViewQuilt");function ye(){const[a,n]=m.useState("list");return l(u,{orientation:"vertical",value:a,exclusive:!0,onChange:(r,i)=>{n(i)},children:[e(t,{value:"list","aria-label":"list",children:e(H,{})}),e(t,{value:"module","aria-label":"module",children:e(L,{})}),e(t,{value:"quilt","aria-label":"quilt",children:e(E,{})})]})}const Ce=`import * as React from 'react';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value="list" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="module" aria-label="module">
        <ViewModuleIcon />
      </ToggleButton>
      <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuiltIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
`;var _={},Re=d;Object.defineProperty(_,"__esModule",{value:!0});var k=_.default=void 0,Se=Re(v()),_e=g;k=_.default=(0,Se.default)((0,_e.jsx)("path",{d:"M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2zM4 6h16v10H4z"}),"Laptop");var z={},ze=d;Object.defineProperty(z,"__esModule",{value:!0});var P=z.default=void 0,Me=ze(v()),je=g;P=z.default=(0,Me.default)((0,je.jsx)("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2m0 14H3V5h18z"}),"Tv");var M={},De=d;Object.defineProperty(M,"__esModule",{value:!0});var q=M.default=void 0,Ne=De(v()),$e=g;q=M.default=(0,Ne.default)((0,$e.jsx)("path",{d:"M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3m-2 20h-4v-1h4zm3.25-3H6.75V4h10.5z"}),"PhoneAndroid");function Ge(){const[a,n]=m.useState("left"),[c,r]=m.useState(()=>["phone"]);return l(N,{direction:"row",spacing:4,children:[l(u,{value:a,exclusive:!0,onChange:(p,s)=>{s!==null&&n(s)},"aria-label":"text alignment",children:[e(t,{value:"left","aria-label":"left aligned",children:e(b,{})}),e(t,{value:"center","aria-label":"centered",children:e(T,{})}),e(t,{value:"right","aria-label":"right aligned",children:e(B,{})})]}),l(u,{value:c,onChange:(p,s)=>{s.length&&r(s)},"aria-label":"device",children:[e(t,{value:"laptop","aria-label":"laptop",children:e(k,{})}),e(t,{value:"tv","aria-label":"tv",children:e(P,{})}),e(t,{value:"phone","aria-label":"phone",children:e(q,{})})]})]})}const Ve=`import * as React from 'react';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonNotEmpty() {
  const [alignment, setAlignment] = React.useState('left');
  const [devices, setDevices] = React.useState(() => ['phone']);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleDevices = (
    event: React.MouseEvent<HTMLElement>,
    newDevices: string[],
  ) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={devices}
        onChange={handleDevices}
        aria-label="device"
      >
        <ToggleButton value="laptop" aria-label="laptop">
          <LaptopIcon />
        </ToggleButton>
        <ToggleButton value="tv" aria-label="tv">
          <TvIcon />
        </ToggleButton>
        <ToggleButton value="phone" aria-label="phone">
          <PhoneAndroidIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}
`;function He(){const[a,n]=m.useState(!1);return e(t,{value:"check",selected:a,onChange:()=>{n(!a)},children:e(Z,{})})}const Le=`import * as React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import ToggleButton from '@mui/material/ToggleButton';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}
    >
      <CheckIcon />
    </ToggleButton>
  );
}
`,D=O(u)(({theme:a})=>({[`& .${f.grouped}`]:{margin:a.spacing(.5),border:0,borderRadius:a.shape.borderRadius,[`&.${f.disabled}`]:{border:0}},[`& .${f.middleButton},& .${f.lastButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent"}}));function Ee(){const[a,n]=m.useState("left"),[c,r]=m.useState(()=>["italic"]);return e("div",{children:l(U,{elevation:0,sx:{display:"flex",border:p=>`1px solid ${p.palette.divider}`,flexWrap:"wrap"},children:[l(D,{size:"small",value:a,exclusive:!0,onChange:(p,s)=>{n(s)},"aria-label":"text alignment",children:[e(t,{value:"left","aria-label":"left aligned",children:e(b,{})}),e(t,{value:"center","aria-label":"centered",children:e(T,{})}),e(t,{value:"right","aria-label":"right aligned",children:e(B,{})}),e(t,{value:"justify","aria-label":"justified",disabled:!0,children:e(x,{})})]}),e(J,{flexItem:!0,orientation:"vertical",sx:{mx:.5,my:1}}),l(D,{size:"small",value:c,onChange:(p,s)=>{r(s)},"aria-label":"text formatting",children:[e(t,{value:"bold","aria-label":"bold",children:e($,{})}),e(t,{value:"italic","aria-label":"italic",children:e(G,{})}),e(t,{value:"underlined","aria-label":"underlined",children:e(w,{})}),l(t,{value:"color","aria-label":"color",disabled:!0,children:[e(y,{}),e(V,{})]})]})]})})}const ke=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup, {
  toggleButtonGroupClasses,
} from '@mui/material/ToggleButtonGroup';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  [\`& .\${toggleButtonGroupClasses.grouped}\`]: {
    margin: theme.spacing(0.5),
    border: 0,
    borderRadius: theme.shape.borderRadius,
    [\`&.\${toggleButtonGroupClasses.disabled}\`]: {
      border: 0,
    },
  },
  [\`& .\${toggleButtonGroupClasses.middleButton},& .\${toggleButtonGroupClasses.lastButton}\`]:
    {
      marginLeft: -1,
      borderLeft: '1px solid transparent',
    },
}));

export default function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['italic']);

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string[],
  ) => {
    setFormats(newFormats);
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          border: (theme) => \`1px solid \${theme.palette.divider}\`,
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified" disabled>
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
          <ToggleButton value="color" aria-label="color" disabled>
            <FormatColorFillIcon />
            <ArrowDropDownIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
      </Paper>
    </div>
  );
}
`;function et(a){return l(K,{children:[l("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(X,{}),e(W,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/toggle-button",target:"_blank",role:"button",size:"small",startIcon:e(Q,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Toggle Button"}),e(o,{className:"description",children:"A Toggle Button can be used to group related options."}),l(o,{className:"text-14 mb-32",component:"div",children:["To emphasize groups of related Toggle buttons, a group should share a common container. The ",e("code",{children:"ToggleButtonGroup"})," controls the selected state of its child buttons when given its own ",e("code",{children:"value"})," prop."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Exclusive selection"}),e(o,{className:"text-14 mb-32",component:"div",children:"With exclusive selection, selecting one option deselects any other."}),e(o,{className:"text-14 mb-32",component:"div",children:"In this example, text justification toggle buttons present options for left, center, right, and fully justified text (disabled), with only one item available for selection at a time."}),l(o,{className:"text-14 mb-32",component:"div",children:[e("strong",{children:"Note"}),": Exclusive selection does not enforce that a button must be active. For that effect see ",e("a",{href:"#enforce-value-set",children:"enforce value set"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ToggleButtons.js",className:"my-16",iframe:!1,component:le,raw:ae})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiple selection"}),e(o,{className:"text-14 mb-32",component:"div",children:"Multiple selection allows for logically-grouped options, like bold, italic, and underline, to have multiple options selected."}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ToggleButtonsMultiple.js",className:"my-16",iframe:!1,component:se,raw:ge})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Size"}),l(o,{className:"text-14 mb-32",component:"div",children:["For larger or smaller buttons, use the ",e("code",{children:"size"})," prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ToggleButtonSizes.js",className:"my-16",iframe:!1,component:de,raw:ve})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ColorToggleButton.js",className:"my-16",iframe:!1,component:he,raw:pe})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Vertical buttons"}),l(o,{className:"text-14 mb-32",component:"div",children:["The buttons can be stacked vertically with the ",e("code",{children:"orientation"}),' prop set to "vertical".']}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"VerticalToggleButtons.js",className:"my-16",iframe:!1,component:ye,raw:Ce})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Enforce value set"}),e(o,{className:"text-14 mb-32",component:"div",children:"If you want to enforce that at least one button must be active, you can adapt your handleChange function."}),e(Y,{component:"pre",className:"language-jsx",children:` 
const handleAlignment = (event, newAlignment) => {
  if (newAlignment !== null) {
    setAlignment(newAlignment);
  }
};

const handleDevices = (event, newDevices) => {
  if (newDevices.length) {
    setDevices(newDevices);
  }
};
`}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"ToggleButtonNotEmpty.js",className:"my-16",iframe:!1,component:Ge,raw:Ve})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Standalone toggle button"}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"StandaloneToggleButton.js",className:"my-16",iframe:!1,component:He,raw:Le})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),l(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(h,{name:"CustomizedDividers.js",className:"my-16",iframe:!1,component:Ee,raw:ke})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),l("ul",{className:"space-y-16",children:[l("li",{children:["ToggleButtonGroup has ",e("code",{children:'role="group"'}),". You should provide an accessible label with ",e("code",{children:'aria-label="label"'}),", ",e("code",{children:'aria-labelledby="id"'})," or ",e("code",{children:"<label>"}),"."]}),l("li",{children:["ToggleButton sets ",e("code",{children:'aria-pressed="<bool>"'})," according to the button state. You should label each button with ",e("code",{children:"aria-label"}),"."]})]}),e(o,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),e(o,{className:"text-14 mb-32",component:"div",children:"At present, toggle buttons are in DOM order. Navigate between them with the tab key. The button behavior follows standard keyboard semantics."})]})}export{et as default};
