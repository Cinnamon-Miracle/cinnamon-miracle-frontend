import{s,P as r,j as e,x as m,d as a,T as t,F as l,B as d,aK as p}from"./index-CUb6G_Bt.js";import{F as i}from"./FuseExample-DEz02mvt.js";import{D as h}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{M as c}from"./Masonry-Dsk3rjvq.js";import{d as g}from"./ExpandMore-aLR6GnVI.js";import{A as u,a as f,b as y}from"./AccordionSummary-CerUURdk.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";import"./interopRequireDefault-BuJbqelY.js";import"./createSvgIcon-DVT4_uAo.js";const x=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],b=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function M(){return e(m,{sx:{width:500,minHeight:393},children:e(c,{columns:4,spacing:2,children:x.map((n,o)=>e(b,{sx:{height:n},children:o+1},o))})})}const w=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,B=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary,borderBottomLeftRadius:0,borderBottomRightRadius:0}));function k(){return e(m,{sx:{width:500,minHeight:829},children:e(c,{columns:3,spacing:2,children:A.map((n,o)=>a("div",{children:[e(B,{children:o+1}),e("img",{srcSet:`${n.img}?w=162&auto=format&dpr=2 2x`,src:`${n.img}?w=162&auto=format`,alt:n.title,loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4,display:"block",width:"100%"}})]},o))})})}const A=[{img:"https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",title:"Fern"},{img:"https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",title:"Snacks"},{img:"https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",title:"Mushrooms"},{img:"https://images.unsplash.com/photo-1529655683826-aba9b3e77383",title:"Tower"},{img:"https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",title:"Sea star"},{img:"https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",title:"Honey"},{img:"https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",title:"Basketball"},{img:"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",title:"Breakfast"},{img:"https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d",title:"Tree"},{img:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d",title:"Burger"},{img:"https://images.unsplash.com/photo-1522770179533-24471fcdba45",title:"Camera"},{img:"https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",title:"Coffee"},{img:"https://images.unsplash.com/photo-1627000086207-76eabf23aa2e",title:"Camping Car"},{img:"https://images.unsplash.com/photo-1533827432537-70133748f5c8",title:"Hats"},{img:"https://images.unsplash.com/photo-1567306301408-9b74779a11af",title:"Tomato basil"},{img:"https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7",title:"Mountain"},{img:"https://images.unsplash.com/photo-1589118949245-7d38baf380d6",title:"Bike"}],v=`import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 829 }}>
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <Label>{index + 1}</Label>
            <img
              srcSet={\`\${item.img}?w=162&auto=format&dpr=2 2x\`}
              src={\`\${item.img}?w=162&auto=format\`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
    title: 'Snacks',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
    title: 'Tower',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
    title: 'Tree',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
    title: 'Camping Car',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
    title: 'Mountain',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];
`,I=[150,30,90,70,90,100,150,30,50,80],R=s(u)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",color:n.palette.text.secondary}));function C(){return e(m,{sx:{width:500,minHeight:377},children:e(c,{columns:3,spacing:2,children:I.map((n,o)=>e(r,{children:a(R,{sx:{minHeight:n},children:[e(f,{expandIcon:e(g,{}),children:a(t,{children:["Accordion ",o+1]})}),e(y,{children:"Contents"})]})},o))})})}const N=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Masonry from '@mui/lab/Masonry';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function MasonryWithVariableHeightItems() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={2}>
        {heights.map((height, index) => (
          <Paper key={index}>
            <StyledAccordion sx={{ minHeight: height }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Accordion {index + 1}</Typography>
              </AccordionSummary>
              <AccordionDetails>Contents</AccordionDetails>
            </StyledAccordion>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
}
`,S=[150,30,90,70,90,100,150,30,50,80],H=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function P(){return e(m,{sx:{width:500,minHeight:253},children:e(c,{columns:4,spacing:2,children:S.map((n,o)=>e(H,{sx:{height:n},children:o+1},o))})})}const T=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedColumns() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={4} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,F=[150,30,90,70,90,100,150,30,50,80],$=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function j(){return e(m,{sx:{width:500,minHeight:253},children:e(c,{columns:{xs:3,sm:4},spacing:2,children:F.map((n,o)=>e($,{sx:{height:n},children:o+1},o))})})}const D=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveColumns() {
  return (
    <Box sx={{ width: 500, minHeight: 253 }}>
      <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,L=[150,30,90,70,90,100,150,30,50,80],z=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function E(){return e(m,{sx:{width:500,minHeight:377},children:e(c,{columns:3,spacing:3,children:L.map((n,o)=>e(z,{sx:{height:n},children:o+1},o))})})}const V=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FixedSpacing() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={3}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,W=[150,30,90,70,90,100,150,30,50,80],_=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function K(){return e(m,{sx:{width:500,minHeight:377},children:e(c,{columns:3,spacing:{xs:1,sm:2,md:3},children:W.map((n,o)=>e(_,{sx:{height:n},children:o+1},o))})})}const q=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveSpacing() {
  return (
    <Box sx={{ width: 500, minHeight: 377 }}>
      <Masonry columns={3} spacing={{ xs: 1, sm: 2, md: 3 }}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`,G=[150,30,90,70,110,150,130,80,50,90,100,150,30,50,80],J=s(r)(({theme:n})=>({backgroundColor:n.palette.mode==="dark"?"#1A2027":"#fff",...n.typography.body2,padding:n.spacing(.5),textAlign:"center",color:n.palette.text.secondary}));function O(){return e(m,{sx:{width:500,minHeight:393},children:e(c,{columns:4,spacing:2,defaultHeight:450,defaultColumns:4,defaultSpacing:1,children:G.map((n,o)=>e(J,{sx:{height:n},children:o+1},o))})})}const Q=`import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function SSRMasonry() {
  return (
    <Box sx={{ width: 500, minHeight: 393 }}>
      <Masonry
        columns={4}
        spacing={2}
        defaultHeight={450}
        defaultColumns={4}
        defaultSpacing={1}
      >
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}
`;function se(n){return a(p,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(h,{}),e(d,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/masonry",target:"_blank",role:"button",size:"small",startIcon:e(l,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Masonry"}),e(t,{className:"description",children:"Masonry lays out contents of varying dimensions as blocks of the same width and different height with configurable gaps."}),e(t,{className:"text-14 mb-32",component:"div",children:"Masonry maintains a list of content blocks with a consistent width but different height. The contents are ordered by row. If a row is already filled with the specified number of columns, the next item starts another row, and it is added to the shortest column in order to optimize the use of space."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic masonry"}),a(t,{className:"text-14 mb-32",component:"div",children:["A simple example of a ",e("code",{children:"Masonry"}),". ",e("code",{children:"Masonry"})," is a container for one or more items. It can receive any element including ",e("code",{children:"<div />"})," and ",e("code",{children:"<img //>"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"BasicMasonry.js",className:"my-16",iframe:!1,component:M,raw:w})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Image masonry"}),a(t,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",e("code",{children:"Masonry"})," for images. ",e("code",{children:"Masonry"})," orders its children by row. If you'd like to order images by column, check out ",e("a",{href:"/material-ui/react-image-list/#masonry-image-list",children:"ImageList"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"ImageMasonry.js",className:"my-16",iframe:!1,component:k,raw:v})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Items with variable height"}),a(t,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of ",e("code",{children:"Masonry"})," for items with variable height. Items can move to other columns in order to abide by the rule that items are always added to the shortest column and hence optimize the use of space."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"MasonryWithVariableHeightItems.js",className:"my-16",iframe:!1,component:C,raw:N})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Columns"}),a(t,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",e("code",{children:"columns"})," to configure the number of columns of a ",e("code",{children:"Masonry"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"FixedColumns.js",className:"my-16",iframe:!1,component:P,raw:T})}),a(t,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"columns"})," accepts responsive values:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"ResponsiveColumns.js",className:"my-16",iframe:!1,component:j,raw:D})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Spacing"}),a(t,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",e("code",{children:"spacing"})," to configure the spacing between items. It is important to note that the value provided to the ",e("code",{children:"spacing"})," prop is multiplied by the theme's spacing field."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"FixedSpacing.js",className:"my-16",iframe:!1,component:E,raw:V})}),a(t,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"spacing"})," accepts responsive values:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"ResponsiveSpacing.js",className:"my-16",iframe:!1,component:K,raw:q})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Server-side rendering"}),a(t,{className:"text-14 mb-32",component:"div",children:["This example demonstrates the use of the ",e("code",{children:"defaultHeight"}),", ",e("code",{children:"defaultColumns"})," and ",e("code",{children:"defaultSpacing"}),", which are used to support server-side rendering."]}),e("div",{className:"border border-1 p-16 rounded-16 my-12",children:a(t,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"defaultHeight"})," should be large enough to render all rows. Also, it is worth mentioning that items are not added to the shortest column in case of server-side rendering."]})}),e(t,{className:"text-14 mb-32",component:"div",children:e(i,{name:"SSRMasonry.js",className:"my-16",iframe:!1,component:O,raw:Q})})]})}export{se as default};
