import{s as l,P as d,j as e,d as r,x as o,r as C,aG as B,cq as A,cs as S,bT as R,ct as j,A as G,F as T,B as L,T as n,aF as u,aK as P}from"./index-CUb6G_Bt.js";import{F as a}from"./FuseExample-DEz02mvt.js";import{D as W}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{G as t}from"./Grid2-DyRK2COv.js";import{H as F}from"./HighlightedCode-yZJVy4ru.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";const f=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function O(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,children:[e(t,{xs:8,children:e(f,{children:"xs=8"})}),e(t,{xs:4,children:e(f,{children:"xs=4"})}),e(t,{xs:4,children:e(f,{children:"xs=4"})}),e(t,{xs:8,children:e(f,{children:"xs=8"})})]})})}const z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`,g=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function _(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,children:[e(t,{xs:6,md:8,children:e(g,{children:"xs=6 md=8"})}),e(t,{xs:6,md:4,children:e(g,{children:"xs=6 md=4"})}),e(t,{xs:6,md:4,children:e(g,{children:"xs=6 md=4"})}),e(t,{xs:6,md:8,children:e(g,{children:"xs=6 md=8"})})]})})}const U=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid xs={6} md={8}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`;function E(){const[i,c]=C.useState(2),h=m=>{c(Number(m.target.value))},x=`
<Grid container spacing={${i}}>
`;return r(o,{sx:{flexGrow:1,display:"flex",flexDirection:"column",gap:2,pt:2,"&& pre":{margin:0}},children:[e(t,{container:!0,justifyContent:"center",spacing:i,children:[0,1,2].map(m=>e(t,{children:e(d,{sx:{height:140,width:100,backgroundColor:N=>N.palette.mode==="dark"?"#1A2027":"#fff"}})},m))}),e(d,{sx:{p:2},children:r(B,{component:"fieldset",children:[e(A,{component:"legend",children:"spacing"}),e(S,{name:"spacing","aria-label":"spacing",value:i.toString(),onChange:h,row:!0,children:[0,.5,1,2,3,4,8,12].map(m=>e(R,{value:m.toString(),control:e(j,{}),label:m.toString()},m))})]})}),e(F,{code:x,language:"jsx"})]})}const H=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import HighlightedCode from '../../utils/HighlightedCode';

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSpacing(Number((event.target as HTMLInputElement).value));
  };

  const jsx = \`
<Grid container spacing={\${spacing}}>
\`;

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        pt: 2,
        '&& pre': { margin: 0 },
      }}
    >
      <Grid container justifyContent="center" spacing={spacing}>
        {[0, 1, 2].map((value) => (
          <Grid key={value}>
            <Paper
              sx={{
                height: 140,
                width: 100,
                backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
              }}
            />
          </Grid>
        ))}
      </Grid>
      <Paper sx={{ p: 2 }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">spacing</FormLabel>
          <RadioGroup
            name="spacing"
            aria-label="spacing"
            value={spacing.toString()}
            onChange={handleChange}
            row
          >
            {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Paper>
      <HighlightedCode code={jsx} language="jsx" />
    </Box>
  );
}
`,b=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function D(){return e(o,{sx:{width:"100%"},children:r(t,{container:!0,rowSpacing:1,columnSpacing:{xs:1,sm:2,md:3},children:[e(t,{xs:6,children:e(b,{children:"1"})}),e(t,{xs:6,children:e(b,{children:"2"})}),e(t,{xs:6,children:e(b,{children:"3"})}),e(t,{xs:6,children:e(b,{children:"4"})})]})})}const $=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`,q=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(2),textAlign:"center",color:i.palette.text.secondary}));function M(){return e(o,{sx:{flexGrow:1},children:e(t,{container:!0,spacing:{xs:2,md:3},columns:{xs:4,sm:8,md:12},children:Array.from(Array(6)).map((i,c)=>e(t,{xs:2,sm:4,md:4,children:e(q,{children:"xs=2"})},c))})})}const V=`import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
`,v=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function Y(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:3,children:[e(t,{xs:!0,children:e(v,{children:"xs"})}),e(t,{xs:6,children:e(v,{children:"xs=6"})}),e(t,{xs:!0,children:e(v,{children:"xs"})})]})})}const K=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`,w=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function X(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:3,children:[e(t,{xs:"auto",children:e(w,{children:"variable width content"})}),e(t,{xs:6,children:e(w,{children:"xs=6"})}),e(t,{xs:!0,children:e(w,{children:"xs"})})]})})}const J=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function VariableWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs="auto">
          <Item>variable width content</Item>
        </Grid>
        <Grid xs={6}>
          <Item>xs=6</Item>
        </Grid>
        <Grid xs>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`,s=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function Q(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,children:[e(t,{xs:12,md:5,lg:4,children:e(s,{children:"Email subscribe section"})}),r(t,{container:!0,xs:12,md:7,lg:8,spacing:4,children:[e(t,{xs:6,lg:3,children:r(s,{children:[e(o,{id:"category-a",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category A"}),r(o,{component:"ul","aria-labelledby":"category-a",sx:{pl:2},children:[e("li",{children:"Link 1.1"}),e("li",{children:"Link 1.2"}),e("li",{children:"Link 1.3"})]})]})}),e(t,{xs:6,lg:3,children:r(s,{children:[e(o,{id:"category-b",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category B"}),r(o,{component:"ul","aria-labelledby":"category-b",sx:{pl:2},children:[e("li",{children:"Link 2.1"}),e("li",{children:"Link 2.2"}),e("li",{children:"Link 2.3"})]})]})}),e(t,{xs:6,lg:3,children:r(s,{children:[e(o,{id:"category-c",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category C"}),r(o,{component:"ul","aria-labelledby":"category-c",sx:{pl:2},children:[e("li",{children:"Link 3.1"}),e("li",{children:"Link 3.2"}),e("li",{children:"Link 3.3"})]})]})}),e(t,{xs:6,lg:3,children:r(s,{children:[e(o,{id:"category-d",sx:{fontSize:"12px",textTransform:"uppercase"},children:"Category D"}),r(o,{component:"ul","aria-labelledby":"category-d",sx:{pl:2},children:[e("li",{children:"Link 4.1"}),e("li",{children:"Link 4.2"}),e("li",{children:"Link 4.3"})]})]})})]}),r(t,{xs:12,container:!0,justifyContent:"space-between",alignItems:"center",flexDirection:{xs:"column",sm:"row"},sx:{fontSize:"12px"},children:[e(t,{sx:{order:{xs:2,sm:1}},children:e(s,{children:"© Copyright"})}),r(t,{container:!0,columnSpacing:1,sx:{order:{xs:1,sm:2}},children:[e(t,{children:e(s,{children:"Link A"})}),e(t,{children:e(s,{children:"Link B"})}),e(t,{children:e(s,{children:"Link C"})})]})]})]})})}const Z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={5} lg={4}>
          <Item>Email subscribe section</Item>
        </Grid>
        <Grid container xs={12} md={7} lg={8} spacing={4}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-a"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category A
              </Box>
              <Box component="ul" aria-labelledby="category-a" sx={{ pl: 2 }}>
                <li>Link 1.1</li>
                <li>Link 1.2</li>
                <li>Link 1.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-b"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category B
              </Box>
              <Box component="ul" aria-labelledby="category-b" sx={{ pl: 2 }}>
                <li>Link 2.1</li>
                <li>Link 2.2</li>
                <li>Link 2.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-c"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category C
              </Box>
              <Box component="ul" aria-labelledby="category-c" sx={{ pl: 2 }}>
                <li>Link 3.1</li>
                <li>Link 3.2</li>
                <li>Link 3.3</li>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                id="category-d"
                sx={{ fontSize: '12px', textTransform: 'uppercase' }}
              >
                Category D
              </Box>
              <Box component="ul" aria-labelledby="category-d" sx={{ pl: 2 }}>
                <li>Link 4.1</li>
                <li>Link 4.2</li>
                <li>Link 4.3</li>
              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid
          xs={12}
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } }}>
            <Item>© Copyright</Item>
          </Grid>
          <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 2 } }}>
            <Grid>
              <Item>Link A</Item>
            </Grid>
            <Grid>
              <Item>Link B</Item>
            </Grid>
            <Grid>
              <Item>Link C</Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
`,p=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function ee(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,columns:24,children:[e(t,{xs:8,children:e(p,{children:"xs=8/24"})}),r(t,{container:!0,xs:16,children:[e(t,{xs:12,children:e(p,{children:"nested xs=12/24"})}),e(t,{xs:12,children:e(p,{children:"nested xs=12/24"})})]}),e(t,{xs:8,children:e(p,{children:"xs=8/24"})}),r(t,{container:!0,xs:16,columns:12,children:[e(t,{xs:6,children:e(p,{children:"nested xs=6/12"})}),e(t,{xs:6,children:e(p,{children:"nested xs=6/12"})})]})]})})}const ne=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGridColumns() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={24}>
        <Grid xs={8}>
          <Item>xs=8/24</Item>
        </Grid>
        <Grid container xs={16}>
          <Grid xs={12}>
            <Item>nested xs=12/24</Item>
          </Grid>
          <Grid xs={12}>
            <Item>nested xs=12/24</Item>
          </Grid>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8/24</Item>
        </Grid>
        <Grid container xs={16} columns={12}>
          <Grid xs={6}>
            <Item>nested xs=6/12</Item>
          </Grid>
          <Grid xs={6}>
            <Item>nested xs=6/12</Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
`,k=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function re(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,columns:16,children:[e(t,{xs:8,children:e(k,{children:"xs=8"})}),e(t,{xs:8,children:e(k,{children:"xs=8"})})]})})}const te=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ColumnsGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
`,y=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function ie(){return r(t,{container:!0,spacing:3,sx:{flexGrow:1},children:[e(t,{xs:6,xsOffset:3,md:2,mdOffset:0,children:e(y,{children:"1"})}),e(t,{xs:4,md:2,mdOffset:"auto",children:e(y,{children:"2"})}),e(t,{xs:4,xsOffset:4,md:2,mdOffset:0,children:e(y,{children:"3"})}),e(t,{xs:!0,md:6,mdOffset:2,children:e(y,{children:"4"})})]})}const oe=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OffsetGrid() {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid xs={6} xsOffset={3} md={2} mdOffset={0}>
        <Item>1</Item>
      </Grid>
      <Grid xs={4} md={2} mdOffset="auto">
        <Item>2</Item>
      </Grid>
      <Grid xs={4} xsOffset={4} md={2} mdOffset={0}>
        <Item>3</Item>
      </Grid>
      <Grid xs md={6} mdOffset={2}>
        <Item>4</Item>
      </Grid>
    </Grid>
  );
}
`,I=l(d)(({theme:i})=>({backgroundColor:i.palette.mode==="dark"?"#1A2027":"#fff",...i.typography.body2,padding:i.spacing(1),textAlign:"center",color:i.palette.text.secondary}));function ae(){return r(o,{sx:i=>({display:"flex",flexDirection:"column",gap:3,width:200,"& > div":{overflow:"auto hidden","&::-webkit-scrollbar":{height:10,WebkitAppearance:"none"},"&::-webkit-scrollbar-thumb":{borderRadius:8,border:"2px solid",borderColor:i.palette.mode==="dark"?"":"#E7EBF0",backgroundColor:"rgba(0 0 0 / 0.5)"}}}),children:[e("div",{children:e(t,{container:!0,spacing:3,children:e(t,{xs:12,children:e(I,{children:"Scroll bar appears"})})})}),e("div",{children:e(t,{container:!0,spacing:3,disableEqualOverflow:!0,children:e(t,{xs:12,children:e(I,{children:"`disableEqualOverflow` prevents scrollbar"})})})})]})}const de=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function OverflowGrid() {
  return (
    <Box
      sx={(theme) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        width: 200,
        '& > div': {
          overflow: 'auto hidden',
          '&::-webkit-scrollbar': { height: 10, WebkitAppearance: 'none' },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '2px solid',
            borderColor: theme.palette.mode === 'dark' ? '' : '#E7EBF0',
            backgroundColor: 'rgba(0 0 0 / 0.5)',
          },
        },
      })}
    >
      <div>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Item>Scroll bar appears</Item>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid container spacing={3} disableEqualOverflow>
          <Grid xs={12}>
            <Item>\`disableEqualOverflow\` prevents scrollbar</Item>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
`;function le(){return e(o,{sx:{flexGrow:1},children:r(t,{container:!0,spacing:2,minHeight:160,children:[e(t,{xs:!0,display:"flex",justifyContent:"center",alignItems:"center",children:e(G,{src:"/material-ui-static/images/avatar/1.jpg"})}),e(t,{display:"flex",justifyContent:"center",alignItems:"center",children:e(G,{src:"/material-ui-static/images/avatar/2.jpg"})}),e(t,{xs:!0,display:"flex",justifyContent:"center",alignItems:"center",children:e(G,{src:"/material-ui-static/images/avatar/3.jpg"})})]})})}const se=`import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function CenteredElementGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} minHeight={160}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/1.jpg" />
        </Grid>
        <Grid display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/2.jpg" />
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Avatar src="/material-ui-static/images/avatar/3.jpg" />
        </Grid>
      </Grid>
    </Box>
  );
}
`;function ce(){return e(o,{sx:{flexGrow:1,p:2},children:e(t,{container:!0,spacing:2,sx:{"--Grid-borderWidth":"1px",borderTop:"var(--Grid-borderWidth) solid",borderLeft:"var(--Grid-borderWidth) solid",borderColor:"divider","& > div":{borderRight:"var(--Grid-borderWidth) solid",borderBottom:"var(--Grid-borderWidth) solid",borderColor:"divider"}},children:[...Array(6)].map((i,c)=>e(t,{xs:12,sm:6,md:4,lg:3,minHeight:160},c))})})}const me=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function FullBorderedGrid() {
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderLeft: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
          },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <Grid key={index} {...{ xs: 12, sm: 6, md: 4, lg: 3 }} minHeight={160} />
        ))}
      </Grid>
    </Box>
  );
}
`;function pe(){const i={xs:12,sm:6,md:4,lg:3};return e(o,{sx:{flexGrow:1,p:2},children:e(t,{container:!0,spacing:2,sx:c=>({"--Grid-borderWidth":"1px",borderTop:"var(--Grid-borderWidth) solid",borderColor:"divider","& > div":{borderRight:"var(--Grid-borderWidth) solid",borderBottom:"var(--Grid-borderWidth) solid",borderColor:"divider",...Object.keys(i).reduce((h,x)=>({...h,[`&:nth-of-type(${12/i[x]}n)`]:{[c.breakpoints.only(x)]:{borderRight:"none"}}}),{})}}),children:[...Array(6)].map((c,h)=>e(t,{...i,minHeight:160},h))})})}const he=`import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

export default function HalfBorderedGrid() {
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } as const;
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={(theme) => ({
          '--Grid-borderWidth': '1px',
          borderTop: 'var(--Grid-borderWidth) solid',
          borderColor: 'divider',
          '& > div': {
            borderRight: 'var(--Grid-borderWidth) solid',
            borderBottom: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
              (result, key) => ({
                ...result,
                [\`&:nth-of-type(\${12 / colWidth[key]}n)\`]: {
                  [theme.breakpoints.only(key)]: {
                    borderRight: 'none',
                  },
                },
              }),
              {},
            ),
          },
        })}
      >
        {[...Array(6)].map((_, index) => (
          <Grid key={index} {...colWidth} minHeight={160} />
        ))}
      </Grid>
    </Box>
  );
}
`;function ve(i){return r(P,{children:[r("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(W,{}),e(L,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/grid2",target:"_blank",role:"button",size:"small",startIcon:e(T,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(n,{className:"text-32 my-16 font-700",component:"h1",children:"Grid version 2"}),e(n,{className:"description",children:"The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts."}),r(n,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Grid"})," component works well for a layout with a known number of columns. The columns can be configured with multiple breakpoints to specify the column span of each child."]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"What's changed"}),r(n,{className:"text-14 mb-32",component:"div",children:["We built the ",e("code",{children:"Grid"})," component from scratch in order to:"]}),r("ul",{className:"space-y-16",children:[r("li",{children:["Fix ",e("a",{href:"https://github.com/mui/material-ui/pull/32746",children:"known issues"})," introduced in Material UI v5."]}),r("li",{children:["Simplify the logic with CSS variables, removing the unnecessary ",e("code",{children:"item"})," prop and reducing CSS specificity."]}),r("li",{children:["Introduce a proper fix for ",e("a",{href:"#prevent-scrollbar",children:"preventing a scrollbar"})," by switching between negative margin approaches."]}),e("li",{children:"Set negative margins of equal size on all sides of the grid container by default."})]}),r(n,{className:"text-14 mb-32",component:"div",children:["Since the new implementation is considered a breaking change, we introduced it as ",e("code",{children:"Unstable_Grid2"})," to gather feedbacks from the community before making it stable in the next major release of Material UI."]}),r(n,{className:"text-14 mb-32",component:"div",children:["We encourage everyone to try the new version of the ",e("code",{children:"Grid"})," by visiting the ",e("a",{href:"/material-ui/migration/migration-grid-v2/",children:"Grid v2 migration guide"}),"."]}),r("div",{className:"border border-1 p-16 rounded-16 my-12",children:[r(n,{className:"text-14 mb-32",component:"div",children:["From now on, the ",e("code",{children:"Grid"})," v1 and ",e("code",{children:"Grid"})," v2 refer to the import as:"]}),e(u,{component:"pre",className:"language-js",children:` 
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
`})]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"How it works"}),r(n,{className:"text-14 mb-32",component:"div",children:["The grid system is implemented with the ",e("code",{children:"Grid"})," component:"]}),r("ul",{className:"space-y-16",children:[r("li",{children:["It uses ",e("a",{href:"https://www.w3.org/TR/css-flexbox-1/",children:"CSS Flexbox"})," (rather than CSS Grid) for high flexibility."]}),r("li",{children:["The grid is always a flex item. Use the ",e("code",{children:"container"})," prop to add a flex container."]}),e("li",{children:"Item widths are set in percentages, so they're always fluid and sized relative to their parent element."}),r("li",{children:["There are five default grid breakpoints: xs, sm, md, lg, and xl. If you need custom breakpoints, check out ",e("a",{href:"#custom-breakpoints",children:"custom breakpoints grid"}),"."]}),r("li",{children:["You can give integer values for each breakpoint, to indicate how many of the 12 available columns are occupied by the component when the viewport width satisfies the ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"breakpoint constraints"}),"."]}),r("li",{children:["It uses negative margins and padding to create gaps between children, which behave similarly to ",r("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/gap",children:["the ",e("code",{children:"gap"})," CSS property"]}),"."]}),r("li",{children:["It does ",e("em",{children:"not"})," support row spanning. Children elements cannot span multiple rows. We recommend using ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",children:"CSS Grid"})," if you need this functionality."]}),r("li",{children:["It does ",e("em",{children:"not"})," automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using ",e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Auto-placement_in_grid_layout",children:"CSS Grid"})," instead."]})]}),r(n,{className:"text-14 mb-32",component:"div",children:[":::warning The ",e("code",{children:"Grid"})," component is a ",e("em",{children:"layout"})," grid, not a ",e("em",{children:"data"})," grid. If you need a data grid, check out ",r("a",{href:"/x/react-data-grid/",children:["the MUI X ",e("code",{children:"DataGrid"})," component"]}),". :::"]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fluid grids"}),e(n,{className:"text-14 mb-32",component:"div",children:"Fluid grids use columns that scale and resize content. A fluid grid's layout can use breakpoints to determine if the layout needs to change dramatically."}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Basic grid"}),r(n,{className:"text-14 mb-32",component:"div",children:["In order to create a grid layout, you need a container. Use the ",e("code",{children:"container"})," prop to create a grid container that wraps the grid items (the ",e("code",{children:"Grid"})," is always an item)."]}),e(n,{className:"text-14 mb-32",component:"div",children:"Column widths are integer values between 1 and 12. They can be applied at any breakpoint to indicate how many columns are occupied by the component."}),r(n,{className:"text-14 mb-32",component:"div",children:["A value given to a breakpoint applies to all the other wider breakpoints unless overridden—see ",e("a",{href:"#multiple-breakpoints",children:"Multiple breakpoints"})," for details. For example, a component with ",e("code",{children:"xs={12}"})," occupies the whole viewport width regardless of its size."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"BasicGrid.js",className:"my-16",iframe:!1,component:O,raw:z})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Multiple breakpoints"}),e(n,{className:"text-14 mb-32",component:"div",children:"Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to larger breakpoints override those given to smaller breakpoints."}),r(n,{className:"text-14 mb-32",component:"div",children:["For example, a component with ",e("code",{children:"xs={12} sm={6}"})," occupies the entire viewport width when the viewport is ",e("a",{href:"/material-ui/customization/breakpoints/#default-breakpoints",children:"less than 600 pixels wide"}),". When the viewport grows beyond this size, the component occupies half of the total width—six columns rather than 12."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"FullWidthGrid.js",className:"my-16",iframe:!1,component:_,raw:U})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),r(n,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"spacing"})," prop to control the space between children. The spacing value can be any positive number (including decimals) or a string. The prop is converted into a CSS property using the ",e("a",{href:"/material-ui/customization/spacing/",children:e("code",{children:"theme.spacing()"})})," helper."]}),r(n,{className:"text-14 mb-32",component:"div",children:["The following demo illustrates the use of the ",e("code",{children:"spacing"})," prop:"]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"SpacingGrid.js",className:"my-16",iframe:!1,component:E,raw:H})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Row and column spacing"}),r(n,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"rowSpacing"})," and ",e("code",{children:"columnSpacing"})," props let you specify row and column gaps independently of one another. They behave similarly to the ",e("code",{children:"row-gap"})," and ",e("code",{children:"column-gap"})," properties of ",e("a",{href:"/system/grid/#row-gap-amp-column-gap",children:"CSS Grid"}),"."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"RowAndColumnSpacing.js",className:"my-16",iframe:!1,component:D,raw:$})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive values"}),r(n,{className:"text-14 mb-32",component:"div",children:["You can set prop values to change when a given breakpoint is active. For instance, we can implement Material Design's ",e("a",{href:"https://m2.material.io/design/layout/responsive-layout-grid.html",children:"recommended"})," responsive layout grid, as seen in the following demo:"]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"ResponsiveGrid.js",className:"my-16",iframe:!1,component:M,raw:V})}),e(n,{className:"text-14 mb-32",component:"div",children:"Responsive values are supported by:"}),r("ul",{className:"space-y-16",children:[e("li",{children:e("code",{children:"columns"})}),e("li",{children:e("code",{children:"columnSpacing"})}),e("li",{children:e("code",{children:"direction"})}),e("li",{children:e("code",{children:"rowSpacing"})}),e("li",{children:e("code",{children:"spacing"})}),r("li",{children:["all other ",e("a",{href:"#system-props",children:"MUI System props"})]})]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Auto-layout"}),e(n,{className:"text-14 mb-32",component:"div",children:"The auto-layout feature gives equal space to all items present. When you set the width of one item, the others will automatically resize to match it."}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"AutoGrid.js",className:"my-16",iframe:!1,component:Y,raw:K})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Variable width content"}),r(n,{className:"text-14 mb-32",component:"div",children:["When a breakpoint's value is given as ",e("code",{children:'"auto"'})," instead of ",e("code",{children:"true"})," or a number, then a column's size will automatically adjust to match the width of its content. The demo below shows how this works:"]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"VariableWidthGrid.js",className:"my-16",iframe:!1,component:X,raw:J})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Nested grid"}),r(n,{className:"text-14 mb-32",component:"div",children:["The grid container that renders as a ",e("strong",{children:"direct child"})," inside another grid container is a nested grid that inherits its ",e("a",{href:"#columns",children:e("code",{children:"columns"})})," and ",e("a",{href:"#spacing",children:e("code",{children:"spacing"})})," from the top level. It will also inherit the props of the top-level grid if it receives those props."]}),e(n,{className:"text-14 mb-32",component:"div",children:":::success"}),e(n,{className:"text-14 mb-32",component:"div",children:"Note that a nested grid container should be a direct child of another grid container. If there are non-grid elements in between, the grid container will start as the new root container."}),e(u,{component:"pre",className:"language-js",children:` 
<Grid container>
  <Grid container> // A nested grid container that inherits columns and spacing from above.
    <div>
      <Grid container> // A new root grid container with its own variables scope.
`}),e(n,{className:"text-14 mb-32",component:"div",children:":::"}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Inheriting spacing"}),r(n,{className:"text-14 mb-32",component:"div",children:["A nested grid container will inherits the row and column spacing from its parent unless the ",e("code",{children:"spacing"})," prop is specified to the instance."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"NestedGrid.js",className:"my-16",iframe:!1,component:Q,raw:Z})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Inheriting columns"}),r(n,{className:"text-14 mb-32",component:"div",children:["A nested grid container will inherits the columns from its parent unless the ",e("code",{children:"columns"})," prop is specified to the instance."]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"NestedGridColumns.js",className:"my-16",iframe:!1,component:ee,raw:ne})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),r(n,{className:"text-14 mb-32",component:"div",children:["Use the ",e("code",{children:"columns"})," prop to change the default number of columns (12) in the grid, as shown below:"]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"ColumnsGrid.js",className:"my-16",iframe:!1,component:re,raw:te})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Offset"}),r(n,{className:"text-14 mb-32",component:"div",children:["Offset props (such as ",e("code",{children:"smOffset"}),", ",e("code",{children:"mdOffset"}),") push an item to the right side of the grid. These props accept:"]}),r("ul",{className:"space-y-16",children:[r("li",{children:["numbers—for example, ",e("code",{children:"mdOffset={2}"})," pushes an item two columns to the right when the viewport size is equal to or greater than the ",e("code",{children:"md"})," breakpoint."]}),r("li",{children:[e("code",{children:'"auto"'}),"—this pushes the item to the far right side of the grid container."]})]}),e(n,{className:"text-14 mb-32",component:"div",children:"The demo below illustrates how to use the offset props:"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"OffsetGrid.js",className:"my-16",iframe:!1,component:ie,raw:oe})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom breakpoints"}),e(n,{className:"text-14 mb-32",component:"div",children:"If you specify custom breakpoints in the theme, you can use those names as grid item props in responsive values:"}),e(u,{component:"pre",className:"language-js",children:` 
import { ThemeProvider, createTheme } from '@mui/material/styles';

function Demo() {
  return (
    <ThemeProvider
      theme={createTheme({
        breakpoints: {
          values: {
            laptop: 1024,
            tablet: 640,
            mobile: 0,
            desktop: 1280,
          },
        },
      })}
    >
      <Grid container spacing={{ mobile: 1, tablet: 2, laptop: 3 }}>
        {Array.from(Array(4)).map((_, index) => (
          <Grid mobile={6} tablet={4} laptop={3} key={index}>
            <div>{index + 1}</div>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
`}),r("div",{className:"border border-1 p-16 rounded-16 my-12",children:[e(n,{className:"text-14 mb-32",component:"div",children:"Custom breakpoints affect both size and offset props:"}),e(u,{component:"pre",className:"language-diff",children:` 
- <Grid xs={6} xsOffset={2}>
+ <Grid mobile={6} mobileOffset={2}>
`})]}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"TypeScript"}),r(n,{className:"text-14 mb-32",component:"div",children:["You have to set module augmentation on the theme breakpoints interface. Properties set to ",e("code",{children:"true"})," will appear as ",e("code",{children:"{key}"}),"(size prop) and ",e("code",{children:"{key}Offset"}),"(offset prop)."]}),e(u,{component:"pre",className:"language-ts",children:` 
declare module '@mui/system' {
  interface BreakpointOverrides {
    // Your custom breakpoints
    laptop: true;
    tablet: true;
    mobile: true;
    desktop: true;
    // Remove default breakpoints
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
  }
}
`}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Disable the scrollbar"}),e(n,{className:"text-14 mb-32",component:"div",children:"If you use grid as a container in a small viewport, you might see a horizontal scrollbar because the negative margin is applied on all sides of the grid container."}),r(n,{className:"text-14 mb-32",component:"div",children:["To disable this scrollbar, set the ",e("code",{children:"disableEqualOverflow"})," prop to ",e("code",{children:"true"}),". This removes the negative margins from the bottom and right sides of the grid to prevent overflow."]}),e(n,{className:"text-14 mb-32",component:"div",children:"The demo below shows how this works:"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"OverflowGrid.js",className:"my-16",iframe:!1,component:ae,raw:de})}),r(n,{className:"text-14 mb-32",component:"div",children:[":::warning You should avoid adding borders and backgrounds to the grid when ",e("code",{children:"disableEqualOverflow"})," is ",e("code",{children:"true"})," because the negative margin (applied only at the top and left sides) causes the grid to be visually misaligned. :::"]}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Centered elements"}),r(n,{className:"text-14 mb-32",component:"div",children:["To center a grid item's content, specify ",e("code",{children:'display="flex"'})," directly on the item. Then use ",e("code",{children:"justifyContent"})," and/or ",e("code",{children:"alignItems"})," to adjust the position of the content, as shown below:"]}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"CenteredElementGrid.js",className:"my-16",iframe:!1,component:le,raw:se})}),r(n,{className:"text-14 mb-32",component:"div",children:[":::warning Using the ",e("code",{children:"container"})," prop does not work in this situation because the grid container is designed exclusively to wrap grid items. It cannot wrap other elements. :::"]}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Full border"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"FullBorderedGrid.js",className:"my-16",iframe:!1,component:ce,raw:me})}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Half border"}),e(n,{className:"text-14 mb-32",component:"div",children:e(a,{name:"HalfBorderedGrid.js",className:"my-16",iframe:!1,component:pe,raw:he})}),e(n,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),e(n,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Column direction and reversing"}),r(n,{className:"text-14 mb-32",component:"div",children:["The column width (",e("code",{children:"xs"}),", ..., ",e("code",{children:"xl"}),") and offset props are ",e("em",{children:"not"})," supported within containers that use ",e("code",{children:'direction="column"'})," or ",e("code",{children:'direction="column-reverse"'}),"."]}),r(n,{className:"text-14 mb-32",component:"div",children:["Size and offset props define the number of columns the component will use for a given breakpoint. They are intended to control the width using ",e("code",{children:"flex-basis"})," in ",e("code",{children:"row"})," containers, but they will impact the height in ",e("code",{children:"column"})," containers. If used, these props may have undesirable effects on the height of the ",e("code",{children:"Grid"})," item elements."]})]})}export{ve as default};
