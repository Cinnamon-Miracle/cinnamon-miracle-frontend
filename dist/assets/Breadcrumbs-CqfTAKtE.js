import{j as e,d as t,cl as i,T as r,bO as n,aC as m,bS as C,s as B,ay as I,cm as b,F as L,B as N,aK as w}from"./index-CUb6G_Bt.js";import{F as o}from"./FuseExample-DEz02mvt.js";import{D as M}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{i as s}from"./interopRequireDefault-BuJbqelY.js";import{r as d}from"./createSvgIcon-DVT4_uAo.js";import{d as k}from"./Home-CCnZdcXh.js";import{d as S}from"./ExpandMore-aLR6GnVI.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function R(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function T(){return e("div",{role:"presentation",onClick:R,children:t(n,{"aria-label":"breadcrumb",children:[e(i,{underline:"hover",color:"inherit",href:"/",children:"MUI"}),e(i,{underline:"hover",color:"inherit",href:"/material-ui/getting-started/installation/",children:"Core"}),e(r,{color:"text.primary",children:"Breadcrumbs"})]})})}const z=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
    </div>
  );
}
`;function D(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function E(){return e("div",{role:"presentation",onClick:D,children:t(n,{"aria-label":"breadcrumb",children:[e(i,{underline:"hover",color:"inherit",href:"/",children:"MUI"}),e(i,{underline:"hover",color:"inherit",href:"/material-ui/getting-started/installation/",children:"Core"}),e(i,{underline:"hover",color:"text.primary",href:"/material-ui/react-breadcrumbs/","aria-current":"page",children:"Breadcrumbs"})]})})}const j=`import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function ActiveLastBreadcrumb() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/material-ui/react-breadcrumbs/"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    </div>
  );
}
`;var u={},A=s;Object.defineProperty(u,"__esModule",{value:!0});var g=u.default=void 0,_=A(d()),H=m;g=u.default=(0,_.default)((0,H.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");function f(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function $(){const a=[e(i,{underline:"hover",color:"inherit",href:"/",onClick:f,children:"MUI"},"1"),e(i,{underline:"hover",color:"inherit",href:"/material-ui/getting-started/installation/",onClick:f,children:"Core"},"2"),e(r,{color:"text.primary",children:"Breadcrumb"},"3")];return t(C,{spacing:2,children:[e(n,{separator:"›","aria-label":"breadcrumb",children:a}),e(n,{separator:"-","aria-label":"breadcrumb",children:a}),e(n,{separator:e(g,{fontSize:"small"}),"aria-label":"breadcrumb",children:a})]})}const Y=`import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator() {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
      MUI
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Core
    </Link>,
    <Typography key="3" color="text.primary">
      Breadcrumb
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
`;var h={},W=s;Object.defineProperty(h,"__esModule",{value:!0});var y=h.default=void 0,U=W(d()),G=m;y=h.default=(0,U.default)((0,G.jsx)("path",{d:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67M11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8"}),"Whatshot");var p={},q=s;Object.defineProperty(p,"__esModule",{value:!0});var x=p.default=void 0,F=q(d()),O=m;x=p.default=(0,F.default)((0,O.jsx)("path",{d:"M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2M6 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12-8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m-4 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"Grain");function P(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function K(){return e("div",{role:"presentation",onClick:P,children:t(n,{"aria-label":"breadcrumb",children:[t(i,{underline:"hover",sx:{display:"flex",alignItems:"center"},color:"inherit",href:"/",children:[e(k,{sx:{mr:.5},fontSize:"inherit"}),"MUI"]}),t(i,{underline:"hover",sx:{display:"flex",alignItems:"center"},color:"inherit",href:"/material-ui/getting-started/installation/",children:[e(y,{sx:{mr:.5},fontSize:"inherit"}),"Core"]}),t(r,{sx:{display:"flex",alignItems:"center"},color:"text.primary",children:[e(x,{sx:{mr:.5},fontSize:"inherit"}),"Breadcrumb"]})]})})}const V=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}
`;function J(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function Q(){return e("div",{role:"presentation",onClick:J,children:t(n,{maxItems:2,"aria-label":"breadcrumb",children:[e(i,{underline:"hover",color:"inherit",href:"#",children:"Home"}),e(i,{underline:"hover",color:"inherit",href:"#",children:"Catalog"}),e(i,{underline:"hover",color:"inherit",href:"#",children:"Accessories"}),e(i,{underline:"hover",color:"inherit",href:"#",children:"New Collection"}),e(r,{color:"text.primary",children:"Belts"})]})})}const X=`/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CollapsedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs maxItems={2} aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Catalog
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Accessories
        </Link>
        <Link underline="hover" color="inherit" href="#">
          New Collection
        </Link>
        <Typography color="text.primary">Belts</Typography>
      </Breadcrumbs>
    </div>
  );
}
`,l=B(I)(({theme:a})=>{const c=a.palette.mode==="light"?a.palette.grey[100]:a.palette.grey[800];return{backgroundColor:c,height:a.spacing(3),color:a.palette.text.primary,fontWeight:a.typography.fontWeightRegular,"&:hover, &:focus":{backgroundColor:b(c,.06)},"&:active":{boxShadow:a.shadows[1],backgroundColor:b(c,.12)}}});function v(a){a.preventDefault(),console.info("You clicked a breadcrumb.")}function Z(){return e("div",{role:"presentation",onClick:v,children:t(n,{"aria-label":"breadcrumb",children:[e(l,{component:"a",href:"#",label:"Home",icon:e(k,{fontSize:"small"})}),e(l,{component:"a",href:"#",label:"Catalog"}),e(l,{label:"Accessories",deleteIcon:e(S,{}),onDelete:v})]})})}const ee=`import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip; // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event: React.MouseEvent<Element, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <StyledBreadcrumb
          component="a"
          href="#"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
        <StyledBreadcrumb component="a" href="#" label="Catalog" />
        <StyledBreadcrumb
          label="Accessories"
          deleteIcon={<ExpandMoreIcon />}
          onDelete={handleClick}
        />
      </Breadcrumbs>
    </div>
  );
}
`;function se(a){return t(w,{children:[t("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(M,{}),e(N,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/breadcrumbs",target:"_blank",role:"button",size:"small",startIcon:e(L,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(r,{className:"text-32 my-16 font-700",component:"h1",children:"Breadcrumbs"}),e(r,{className:"description",children:"A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors."}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic breadcrumbs"}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"BasicBreadcrumbs.js",className:"my-16",iframe:!1,component:T,raw:z})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Active last breadcrumb"}),e(r,{className:"text-14 mb-32",component:"div",children:"Keep the last breadcrumb interactive."}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"ActiveLastBreadcrumb.js",className:"my-16",iframe:!1,component:E,raw:j})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom separator"}),e(r,{className:"text-14 mb-32",component:"div",children:"In the following examples, we are using two string separators and an SVG icon."}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"CustomSeparator.js",className:"my-16",iframe:!1,component:$,raw:Y})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Breadcrumbs with icons"}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"IconBreadcrumbs.js",className:"my-16",iframe:!1,component:K,raw:V})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Collapsed breadcrumbs"}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"CollapsedBreadcrumbs.js",className:"my-16",iframe:!1,component:Q,raw:X})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),t(r,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(r,{className:"text-14 mb-32",component:"div",children:e(o,{name:"CustomizedBreadcrumbs.js",className:"my-16",iframe:!1,component:Z,raw:ee})}),e(r,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),t(r,{className:"text-14 mb-32",component:"div",children:["(WAI-ARIA: ",e("a",{href:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/",children:"https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/"}),")"]}),t(r,{className:"text-14 mb-32",component:"div",children:["Be sure to add a ",e("code",{children:"aria-label"})," description on the ",e("code",{children:"Breadcrumbs"})," component."]}),e(r,{className:"text-14 mb-32",component:"div",children:"The accessibility of this component relies on:"}),t("ul",{className:"space-y-16",children:[t("li",{children:["The set of links is structured using an ordered list (",e("code",{children:"<ol>"})," element)."]}),t("li",{children:["To prevent screen reader announcement of the visual separators between links, they are hidden with ",e("code",{children:"aria-hidden"}),"."]}),t("li",{children:["A nav element labeled with ",e("code",{children:"aria-label"})," identifies the structure as a breadcrumb trail and makes it a navigation landmark so that it is easy to locate."]})]})]})}export{se as default};
