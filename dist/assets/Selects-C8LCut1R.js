import{r as h,j as e,d as t,aH as c,aI as d,aJ as n,aG as s,x as S,cr as b,s as A,I as w,z as M,cR as I,c6 as F,g as L,ay as O,B as y,b7 as P,bE as W,b9 as k,bh as H,F as R,T as l,aF as f,aK as E}from"./index-CUb6G_Bt.js";import{F as p}from"./FuseExample-DEz02mvt.js";import{D}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{N as T}from"./NativeSelect-DLxVsyZE.js";import{L as x}from"./ListSubheader-D7NFcaYb.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function B(){const[a,m]=h.useState("");return e(S,{sx:{minWidth:120},children:t(s,{fullWidth:!0,children:[e(c,{id:"demo-simple-select-label",children:"Age"}),t(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a,label:"Age",onChange:i=>{m(i.target.value)},children:[e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]})})}const G=`import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
`;function V(){const[a,m]=h.useState(""),o=i=>{m(i.target.value)};return t("div",{children:[t(s,{variant:"standard",sx:{m:1,minWidth:120},children:[e(c,{id:"demo-simple-select-standard-label",children:"Age"}),t(d,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",value:a,onChange:o,label:"Age",children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]}),t(s,{variant:"filled",sx:{m:1,minWidth:120},children:[e(c,{id:"demo-simple-select-filled-label",children:"Age"}),t(d,{labelId:"demo-simple-select-filled-label",id:"demo-simple-select-filled",value:a,onChange:o,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]})]})}const _=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;function j(){const[a,m]=h.useState(""),o=i=>{m(i.target.value)};return t("div",{children:[t(s,{sx:{m:1,minWidth:120},children:[e(c,{id:"demo-simple-select-helper-label",children:"Age"}),t(d,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:a,label:"Age",onChange:o,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"With label + helper text"})]}),t(s,{sx:{m:1,minWidth:120},children:[t(d,{value:a,onChange:o,displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"Without label"})]})]})}const z=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
    </div>
  );
}
`;function $(){const[a,m]=h.useState("");return e("div",{children:t(s,{sx:{m:1,minWidth:80},children:[e(c,{id:"demo-simple-select-autowidth-label",children:"Age"}),t(d,{labelId:"demo-simple-select-autowidth-label",id:"demo-simple-select-autowidth",value:a,onChange:i=>{m(i.target.value)},autoWidth:!0,label:"Age",children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Twenty"}),e(n,{value:21,children:"Twenty one"}),e(n,{value:22,children:"Twenty one and a half"})]})]})})}const K=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;function q(){const[a,m]=h.useState("");return t(s,{sx:{m:1,minWidth:120},size:"small",children:[e(c,{id:"demo-select-small-label",children:"Age"}),t(d,{labelId:"demo-select-small-label",id:"demo-select-small",value:a,label:"Age",onChange:i=>{m(i.target.value)},children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]})}const U=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
`;function Y(){const[a,m]=h.useState(""),o=i=>{m(i.target.value)};return t("div",{children:[t(s,{sx:{m:1,minWidth:120},disabled:!0,children:[e(c,{id:"demo-simple-select-disabled-label",children:"Age"}),t(d,{labelId:"demo-simple-select-disabled-label",id:"demo-simple-select-disabled",value:a,label:"Age",onChange:o,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"Disabled"})]}),t(s,{sx:{m:1,minWidth:120},error:!0,children:[e(c,{id:"demo-simple-select-error-label",children:"Age"}),t(d,{labelId:"demo-simple-select-error-label",id:"demo-simple-select-error",value:a,label:"Age",onChange:o,renderValue:i=>`⚠️  - ${i}`,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"Error"})]}),t(s,{sx:{m:1,minWidth:120},children:[e(c,{id:"demo-simple-select-readonly-label",children:"Age"}),t(d,{labelId:"demo-simple-select-readonly-label",id:"demo-simple-select-readonly",value:a,label:"Age",onChange:o,inputProps:{readOnly:!0},children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"Read only"})]}),t(s,{required:!0,sx:{m:1,minWidth:120},children:[e(c,{id:"demo-simple-select-required-label",children:"Age"}),t(d,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:a,label:"Age *",onChange:o,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]}),e(b,{children:"Required"})]})]})}const J=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectOtherProps() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }} disabled>
        <InputLabel id="demo-simple-select-disabled-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-disabled-label"
          id="demo-simple-select-disabled"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Disabled</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-error-label"
          id="demo-simple-select-error"
          value={age}
          label="Age"
          onChange={handleChange}
          renderValue={(value) => \`⚠️  - \${value}\`}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Error</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-readonly-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-readonly-label"
          id="demo-simple-select-readonly"
          value={age}
          label="Age"
          onChange={handleChange}
          inputProps={{ readOnly: true }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Read only</FormHelperText>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={age}
          label="Age *"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
    </div>
  );
}
`;function Q(){return e(S,{sx:{minWidth:120},children:t(s,{fullWidth:!0,children:[e(c,{variant:"standard",htmlFor:"uncontrolled-native",children:"Age"}),t(T,{defaultValue:30,inputProps:{name:"age",id:"uncontrolled-native"},children:[e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]})})}const X=`import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function NativeSelectDemo() {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
          defaultValue={30}
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
`,C=A(w)(({theme:a})=>({"label + &":{marginTop:a.spacing(3)},"& .MuiInputBase-input":{borderRadius:4,position:"relative",backgroundColor:a.palette.background.paper,border:"1px solid #ced4da",fontSize:16,padding:"10px 26px 10px 12px",transition:a.transitions.create(["border-color","box-shadow"]),fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:focus":{borderRadius:4,borderColor:"#80bdff",boxShadow:"0 0 0 0.2rem rgba(0,123,255,.25)"}}}));function Z(){const[a,m]=h.useState(""),o=i=>{m(i.target.value)};return t("div",{children:[t(s,{sx:{m:1},variant:"standard",children:[e(c,{htmlFor:"demo-customized-textbox",children:"Age"}),e(C,{id:"demo-customized-textbox"})]}),t(s,{sx:{m:1},variant:"standard",children:[e(c,{id:"demo-customized-select-label",children:"Age"}),t(d,{labelId:"demo-customized-select-label",id:"demo-customized-select",value:a,onChange:o,input:e(C,{}),children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]}),t(s,{sx:{m:1},variant:"standard",children:[e(c,{htmlFor:"demo-customized-select-native",children:"Age"}),t(T,{id:"demo-customized-select-native",value:a,onChange:o,input:e(C,{}),children:[e("option",{"aria-label":"None",value:""}),e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]})]})}const ee=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

export default function CustomizedSelects() {
  const [age, setAge] = React.useState('');
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">Age</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel id="demo-customized-select-label">Age</InputLabel>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
}
`,te=48,ne=8,le={PaperProps:{style:{maxHeight:te*4.5+ne,width:250}}},ae=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function oe(a,m,o){return{fontWeight:m.indexOf(a)===-1?o.typography.fontWeightRegular:o.typography.fontWeightMedium}}function ie(){const a=M(),[m,o]=h.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(c,{id:"demo-multiple-name-label",children:"Name"}),e(d,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",multiple:!0,value:m,onChange:r=>{const{target:{value:u}}=r;o(typeof u=="string"?u.split(","):u)},input:e(I,{label:"Name"}),MenuProps:le,children:ae.map(r=>e(n,{value:r,style:oe(r,m,a),children:r},r))})]})})}const re=`import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`,me=48,se=8,ce={PaperProps:{style:{maxHeight:me*4.5+se,width:250}}},de=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function ue(){const[a,m]=h.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(c,{id:"demo-multiple-checkbox-label",children:"Tag"}),e(d,{labelId:"demo-multiple-checkbox-label",id:"demo-multiple-checkbox",multiple:!0,value:a,onChange:i=>{const{target:{value:r}}=i;m(typeof r=="string"?r.split(","):r)},input:e(I,{label:"Tag"}),renderValue:i=>i.join(", "),MenuProps:ce,children:de.map(i=>t(n,{value:i,children:[e(F,{checked:a.indexOf(i)>-1}),e(L,{primary:i})]},i))})]})})}const pe=`import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`,he=48,ge=8,ve={PaperProps:{style:{maxHeight:he*4.5+ge,width:250}}},be=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Ie(a,m,o){return{fontWeight:m.indexOf(a)===-1?o.typography.fontWeightRegular:o.typography.fontWeightMedium}}function fe(){const a=M(),[m,o]=h.useState([]);return e("div",{children:t(s,{sx:{m:1,width:300},children:[e(c,{id:"demo-multiple-chip-label",children:"Chip"}),e(d,{labelId:"demo-multiple-chip-label",id:"demo-multiple-chip",multiple:!0,value:m,onChange:r=>{const{target:{value:u}}=r;o(typeof u=="string"?u.split(","):u)},input:e(I,{id:"select-multiple-chip",label:"Chip"}),renderValue:r=>e(S,{sx:{display:"flex",flexWrap:"wrap",gap:.5},children:r.map(u=>e(O,{label:u},u))}),MenuProps:ve,children:be.map(r=>e(n,{value:r,style:Ie(r,m,a),children:r},r))})]})})}const ye=`import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`,Se=48,Ce=8,Me={PaperProps:{style:{maxHeight:Se*4.5+Ce,width:250}}},xe=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Te(a,m,o){return{fontWeight:m.indexOf(a)===-1?o.typography.fontWeightRegular:o.typography.fontWeightMedium}}function Ne(){const a=M(),[m,o]=h.useState([]);return e("div",{children:e(s,{sx:{m:1,width:300,mt:3},children:t(d,{multiple:!0,displayEmpty:!0,value:m,onChange:r=>{const{target:{value:u}}=r;o(typeof u=="string"?u.split(","):u)},input:e(I,{}),renderValue:r=>r.length===0?e("em",{children:"Placeholder"}):r.join(", "),MenuProps:Me,inputProps:{"aria-label":"Without label"},children:[e(n,{disabled:!0,value:"",children:e("em",{children:"Placeholder"})}),xe.map(r=>e(n,{value:r,style:Te(r,m,a),children:r},r))]})})})}const Ae=`import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Placeholder</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Placeholder</em>
          </MenuItem>
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`,we=["Oliver Hansen","Van Henry","April Tucker","Ralph Hubbard","Omar Alexander","Carlos Abbott","Miriam Wagner","Bradley Wilkerson","Virginia Andrews","Kelly Snyder"];function Fe(){const[a,m]=h.useState([]);return e("div",{children:t(s,{sx:{m:1,minWidth:120,maxWidth:300},children:[e(c,{shrink:!0,htmlFor:"select-multiple-native",children:"Native"}),e(d,{multiple:!0,native:!0,value:a,onChange:i=>{const{options:r}=i.target,u=[];for(let g=0,v=r.length;g<v;g+=1)r[g].selected&&u.push(r[g].value);m(u)},label:"Native",inputProps:{id:"select-multiple-native"},children:we.map(i=>e("option",{value:i,children:i},i))})]})})}const Le=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelectNative() {
  const [personName, setPersonName] = React.useState<string[]>([]);
  const handleChangeMultiple = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = event.target;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-ignore Typings are not considering \`native\`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{
            id: 'select-multiple-native',
          }}
        >
          {names.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
`;function Oe(){const[a,m]=h.useState(""),[o,i]=h.useState(!1),r=v=>{m(v.target.value)},u=()=>{i(!1)},g=()=>{i(!0)};return t("div",{children:[e(y,{sx:{display:"block",mt:2},onClick:g,children:"Open the select"}),t(s,{sx:{m:1,minWidth:120},children:[e(c,{id:"demo-controlled-open-select-label",children:"Age"}),t(d,{labelId:"demo-controlled-open-select-label",id:"demo-controlled-open-select",open:o,onClose:u,onOpen:g,value:a,label:"Age",onChange:r,children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]})]})}const Pe=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function ControlledOpenSelect() {
  const [age, setAge] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button sx={{ display: 'block', mt: 2 }} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;function We(){const[a,m]=h.useState(!1),[o,i]=h.useState(""),r=v=>{i(Number(v.target.value)||"")},u=()=>{m(!0)},g=(v,N)=>{N!=="backdropClick"&&m(!1)};return t("div",{children:[e(y,{onClick:u,children:"Open select dialog"}),t(P,{disableEscapeKeyDown:!0,open:a,onClose:g,children:[e(W,{children:"Fill the form"}),e(k,{children:t(S,{component:"form",sx:{display:"flex",flexWrap:"wrap"},children:[t(s,{sx:{m:1,minWidth:120},children:[e(c,{htmlFor:"demo-dialog-native",children:"Age"}),t(d,{native:!0,value:o,onChange:r,input:e(I,{label:"Age",id:"demo-dialog-native"}),children:[e("option",{"aria-label":"None",value:""}),e("option",{value:10,children:"Ten"}),e("option",{value:20,children:"Twenty"}),e("option",{value:30,children:"Thirty"})]})]}),t(s,{sx:{m:1,minWidth:120},children:[e(c,{id:"demo-dialog-select-label",children:"Age"}),t(d,{labelId:"demo-dialog-select-label",id:"demo-dialog-select",value:o,onChange:r,input:e(I,{label:"Age"}),children:[e(n,{value:"",children:e("em",{children:"None"})}),e(n,{value:10,children:"Ten"}),e(n,{value:20,children:"Twenty"}),e(n,{value:30,children:"Thirty"})]})]})]})}),t(H,{children:[e(y,{onClick:g,children:"Cancel"}),e(y,{onClick:g,children:"Ok"})]})]})]})}const ke=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState<number | string>('');

  const handleChange = (event: SelectChangeEvent<typeof age>) => {
    setAge(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.SyntheticEvent<unknown>, reason?: string) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Age</InputLabel>
              <Select
                native
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Age</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={age}
                onChange={handleChange}
                input={<OutlinedInput label="Age" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
`;function He(){return t("div",{children:[t(s,{sx:{m:1,minWidth:120},children:[e(c,{htmlFor:"grouped-native-select",children:"Grouping"}),t(d,{native:!0,defaultValue:"",id:"grouped-native-select",label:"Grouping",children:[e("option",{"aria-label":"None",value:""}),t("optgroup",{label:"Category 1",children:[e("option",{value:1,children:"Option 1"}),e("option",{value:2,children:"Option 2"})]}),t("optgroup",{label:"Category 2",children:[e("option",{value:3,children:"Option 3"}),e("option",{value:4,children:"Option 4"})]})]})]}),t(s,{sx:{m:1,minWidth:120},children:[e(c,{htmlFor:"grouped-select",children:"Grouping"}),t(d,{defaultValue:"",id:"grouped-select",label:"Grouping",children:[e(n,{value:"",children:e("em",{children:"None"})}),e(x,{children:"Category 1"}),e(n,{value:1,children:"Option 1"}),e(n,{value:2,children:"Option 2"}),e(x,{children:"Category 2"}),e(n,{value:3,children:"Option 3"}),e(n,{value:4,children:"Option 4"})]})]})]})}const Re=`import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function GroupedSelect() {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Grouping">
          <option aria-label="None" value="" />
          <optgroup label="Category 1">
            <option value={1}>Option 1</option>
            <option value={2}>Option 2</option>
          </optgroup>
          <optgroup label="Category 2">
            <option value={3}>Option 3</option>
            <option value={4}>Option 4</option>
          </optgroup>
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="grouped-select" label="Grouping">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
`;function ze(a){return t(E,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(D,{}),e(y,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/selects",target:"_blank",role:"button",size:"small",startIcon:e(R,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(l,{className:"text-32 my-16 font-700",component:"h1",children:"Select"}),e(l,{className:"description",children:"Select components are used for collecting user provided information from a list of options."}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic select"}),e(l,{className:"text-14 mb-32",component:"div",children:"Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport."}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"BasicSelect.js",className:"my-16",iframe:!1,component:B,raw:G})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Advanced features"}),t(l,{className:"text-14 mb-32",component:"div",children:["The Select component is meant to be interchangeable with a native ",e("code",{children:"<select>"})," element."]}),t(l,{className:"text-14 mb-32",component:"div",children:["If you are looking for more advanced features, like combobox, multiselect, autocomplete, async or creatable support, head to the ",t("a",{href:"/material-ui/react-autocomplete/",children:[e("code",{children:"Autocomplete"})," component"]}),`. It's meant to be an improved version of the "react-select" and "downshift" packages.`]}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Props"}),t(l,{className:"text-14 mb-32",component:"div",children:["The Select component is implemented as a custom ",e("code",{children:"<input>"})," element of the ",e("a",{href:"/material-ui/api/input-base/",children:"InputBase"}),". It extends the ",e("a",{href:"/material-ui/react-text-field/",children:"text field components"})," subcomponents, either the ",e("a",{href:"/material-ui/api/outlined-input/",children:"OutlinedInput"}),", ",e("a",{href:"/material-ui/api/input/",children:"Input"}),", or ",e("a",{href:"/material-ui/api/filled-input/",children:"FilledInput"}),", depending on the variant selected. It shares the same styles and many of the same props. Refer to the respective component's API page for details."]}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Filled and standard variants"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectVariants.js",className:"my-16",iframe:!1,component:V,raw:_})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Labels and helper text"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectLabels.js",className:"my-16",iframe:!1,component:j,raw:z})}),t(l,{className:"text-14 mb-32",component:"div",children:[":::warning Note that when using FormControl with the outlined variant of the Select, you need to provide a label in two places: in the InputLabel component and in the ",e("code",{children:"label"})," prop of the Select component (see the above demo). :::"]}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Auto width"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectAutoWidth.js",className:"my-16",iframe:!1,component:$,raw:K})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Small Size"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectSmall.js",className:"my-16",iframe:!1,component:q,raw:U})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Other props"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"SelectOtherProps.js",className:"my-16",iframe:!1,component:Y,raw:J})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Native select"}),e(l,{className:"text-14 mb-32",component:"div",children:"As the user experience can be improved on mobile using the native select of the platform, we allow such pattern."}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"NativeSelectDemo.js",className:"my-16",iframe:!1,component:Q,raw:X})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"TextField"}),t(l,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"TextField"})," wrapper component is a complete form control including a label, input and help text. You can find an example with the select mode ",e("a",{href:"/material-ui/react-text-field/#select",children:"in this section"}),"."]}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),t(l,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),t(l,{className:"text-14 mb-32",component:"div",children:["The first step is to style the ",e("code",{children:"InputBase"})," component. Once it's styled, you can either use it directly as a text field or provide it to the select ",e("code",{children:"input"})," prop to have a ",e("code",{children:"select"})," field. Notice that the ",e("code",{children:'"standard"'})," variant is easier to customize, since it does not wrap the contents in a ",e("code",{children:"fieldset"}),"/",e("code",{children:"legend"})," markup."]}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"CustomizedSelects.js",className:"my-16",iframe:!1,component:Z,raw:ee})}),t(l,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/select-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Multiple select"}),t(l,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Select"})," component can handle multiple selections. It's enabled with the ",e("code",{children:"multiple"})," prop."]}),t(l,{className:"text-14 mb-32",component:"div",children:["Like with the single selection, you can pull out the new value by accessing ",e("code",{children:"event.target.value"})," in the ",e("code",{children:"onChange"})," callback. It's always an array."]}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Default"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"MultipleSelect.js",className:"my-16",iframe:!1,component:ie,raw:re})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Checkmarks"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"MultipleSelectCheckmarks.js",className:"my-16",iframe:!1,component:ue,raw:pe})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Chip"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"MultipleSelectChip.js",className:"my-16",iframe:!1,component:fe,raw:ye})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Placeholder"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"MultipleSelectPlaceholder.js",className:"my-16",iframe:!1,component:Ne,raw:Ae})}),e(l,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Native"}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"MultipleSelectNative.js",className:"my-16",iframe:!1,component:Fe,raw:Le})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlling the open state"}),t(l,{className:"text-14 mb-32",component:"div",children:["You can control the open state of the select with the ",e("code",{children:"open"})," prop. Alternatively, it is also possible to set the initial (uncontrolled) open state of the component with the ",e("code",{children:"defaultOpen"})," prop."]}),t("div",{className:"border border-1 p-16 rounded-16 my-12",children:[t("ul",{className:"space-y-16",children:[t("li",{children:["A component is ",e("strong",{children:"controlled"})," when it's managed by its parent using props."]}),t("li",{children:["A component is ",e("strong",{children:"uncontrolled"})," when it's managed by its own local state."]})]}),t(l,{className:"text-14 mb-32",component:"div",children:["Learn more about controlled and uncontrolled components in the ",e("a",{href:"https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components",children:"React documentation"}),"."]})]}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"ControlledOpenSelect.js",className:"my-16",iframe:!1,component:Oe,raw:Pe})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"With a dialog"}),e(l,{className:"text-14 mb-32",component:"div",children:"While it's discouraged by the Material Design guidelines, you can use a select inside a dialog."}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"DialogSelect.js",className:"my-16",iframe:!1,component:We,raw:ke})}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Grouping"}),t(l,{className:"text-14 mb-32",component:"div",children:["Display categories with the ",e("code",{children:"ListSubheader"})," component or the native ",e("code",{children:"<optgroup>"})," element."]}),e(l,{className:"text-14 mb-32",component:"div",children:e(p,{name:"GroupedSelect.js",className:"my-16",iframe:!1,component:He,raw:Re})}),e(l,{className:"text-14 mb-32",component:"div",children:":::warning If you wish to wrap the ListSubheader in a custom component, you'll have to annotate it so Material UI can handle it properly when determining focusable elements."}),t(l,{className:"text-14 mb-32",component:"div",children:["You have two options for solving this: Option 1: Define a static boolean field called ",e("code",{children:"muiSkipListHighlight"})," on your component function, and set it to ",e("code",{children:"true"}),":"]}),e(f,{component:"pre",className:"language-tsx",children:` 
function MyListSubheader(props: ListSubheaderProps) {
  return <ListSubheader {...props} />;
}

MyListSubheader.muiSkipListHighlight = true;
export default MyListSubheader;

// elsewhere:

return (
  <Select>
    <MyListSubheader>Group 1</MyListSubheader>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MyListSubheader>Group 2</MyListSubheader>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
    {/* ... */}
  </Select>
`}),t(l,{className:"text-14 mb-32",component:"div",children:["Option 2: Place a ",e("code",{children:"muiSkipListHighlight"})," prop on each instance of your component. The prop doesn't have to be forwarded to the ListSubheader, nor present in the underlying DOM element. It just has to be placed on a component that's used as a subheader."]}),e(f,{component:"pre",className:"language-tsx",children:` 
export default function MyListSubheader(
  props: ListSubheaderProps & { muiSkipListHighlight: boolean },
) {
  const { muiSkipListHighlight, ...other } = props;
  return <ListSubheader {...other} />;
}

// elsewhere:

return (
  <Select>
    <MyListSubheader muiSkipListHighlight>Group 1</MyListSubheader>
    <MenuItem value={1}>Option 1</MenuItem>
    <MenuItem value={2}>Option 2</MenuItem>
    <MyListSubheader muiSkipListHighlight>Group 2</MyListSubheader>
    <MenuItem value={3}>Option 3</MenuItem>
    <MenuItem value={4}>Option 4</MenuItem>
    {/* ... */}
  </Select>
);
`}),e(l,{className:"text-14 mb-32",component:"div",children:"We recommend the first option as it doesn't require updating all the usage sites of the component."}),t(l,{className:"text-14 mb-32",component:"div",children:["Keep in mind this is ",e("strong",{children:"only necessary"})," if you wrap the ListSubheader in a custom component. If you use the ListSubheader directly, ",e("strong",{children:"no additional code is required"}),". :::"]}),e(l,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(l,{className:"text-14 mb-32",component:"div",children:["To properly label your ",e("code",{children:"Select"})," input you need an extra element with an ",e("code",{children:"id"})," that contains a label. That ",e("code",{children:"id"})," needs to match the ",e("code",{children:"labelId"})," of the ",e("code",{children:"Select"})," e.g."]}),e(f,{component:"pre",className:"language-jsx",children:` 
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
`}),t(l,{className:"text-14 mb-32",component:"div",children:["Alternatively a ",e("code",{children:"TextField"})," with an ",e("code",{children:"id"})," and ",e("code",{children:"label"})," creates the proper markup and ids for you:"]}),e(f,{component:"pre",className:"language-jsx",children:` 
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
`}),t(l,{className:"text-14 mb-32",component:"div",children:["For a ",e("a",{href:"#native-select",children:"native select"}),", you should mention a label by giving the value of the ",e("code",{children:"id"})," attribute of the select element to the ",e("code",{children:"InputLabel"}),"'s ",e("code",{children:"htmlFor"})," attribute:"]}),e(f,{component:"pre",className:"language-jsx",children:` 
<InputLabel htmlFor="select">Age</InputLabel>
<NativeSelect id="select">
  <option value="10">Ten</option>
  <option value="20">Twenty</option>
</NativeSelect>
`})]})}export{ze as default};
