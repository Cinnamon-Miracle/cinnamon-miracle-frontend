import{j as e,bY as t,d as a,bS as c,s as v,v as f,aC as y,r as g,ck as C,B as m,k as S,bT as w,x as l,F as I,T as o,aK as N}from"./index-CUb6G_Bt.js";import{F as r}from"./FuseExample-DEz02mvt.js";import{D as M}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{d as n}from"./Mail-BmYuWb6r.js";import{d as R}from"./ShoppingCart-BXRFz6pY.js";import{d as k}from"./Add-DG-wv3a1.js";import{i as j}from"./interopRequireDefault-BuJbqelY.js";import{r as z}from"./createSvgIcon-DVT4_uAo.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function D(){return e(t,{badgeContent:4,color:"primary",children:e(n,{color:"action"})})}const _=`import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function SimpleBadge() {
  return (
    <Badge badgeContent={4} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
`;function F(){return a(c,{spacing:2,direction:"row",children:[e(t,{badgeContent:4,color:"secondary",children:e(n,{color:"action"})}),e(t,{badgeContent:4,color:"success",children:e(n,{color:"action"})})]})}const A=`import * as React from 'react';
import Badge from '@mui/material/Badge';
import Stack from '@mui/material/Stack';
import MailIcon from '@mui/icons-material/Mail';

export default function ColorBadge() {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary">
        <MailIcon color="action" />
      </Badge>
      <Badge badgeContent={4} color="success">
        <MailIcon color="action" />
      </Badge>
    </Stack>
  );
}
`,T=v(t)(({theme:i})=>({"& .MuiBadge-badge":{right:-3,top:13,border:`2px solid ${i.palette.background.paper}`,padding:"0 4px"}}));function V(){return e(f,{"aria-label":"cart",children:e(T,{badgeContent:4,color:"secondary",children:e(R,{})})})}const Y=`import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: \`2px solid \${theme.palette.background.paper}\`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
`;var s={},L=j;Object.defineProperty(s,"__esModule",{value:!0});var B=s.default=void 0,Z=L(z()),O=y;B=s.default=(0,Z.default)((0,O.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");function $(){const[i,p]=g.useState(1),[d,x]=g.useState(!1);return a(l,{sx:{color:"action.active",display:"flex",flexDirection:"column","& > *":{marginBottom:2},"& .MuiBadge-root":{marginRight:4}},children:[a("div",{children:[e(t,{color:"secondary",badgeContent:i,children:e(n,{})}),a(C,{children:[e(m,{"aria-label":"reduce",onClick:()=>{p(Math.max(i-1,0))},children:e(B,{fontSize:"small"})}),e(m,{"aria-label":"increase",onClick:()=>{p(i+1)},children:e(k,{fontSize:"small"})})]})]}),a("div",{children:[e(t,{color:"secondary",variant:"dot",invisible:d,children:e(n,{})}),e(w,{sx:{color:"text.primary"},control:e(S,{checked:!d,onChange:()=>{x(!d)}}),label:"Show Badge"})]})]})}const E=`import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
          marginBottom: 2,
        },
        '& .MuiBadge-root': {
          marginRight: 4,
        },
      }}
    >
      <div>
        <Badge color="secondary" badgeContent={count}>
          <MailIcon />
        </Badge>
        <ButtonGroup>
          <Button
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <MailIcon />
        </Badge>
        <FormControlLabel
          sx={{ color: 'text.primary' }}
          control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
          label="Show Badge"
        />
      </div>
    </Box>
  );
}
`;function G(){return a(c,{spacing:4,direction:"row",sx:{color:"action.active"},children:[e(t,{color:"secondary",badgeContent:0,children:e(n,{})}),e(t,{color:"secondary",badgeContent:0,showZero:!0,children:e(n,{})})]})}const P=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function ShowZeroBadge() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={0}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={0} showZero>
        <MailIcon />
      </Badge>
    </Stack>
  );
}
`;function q(){return a(c,{spacing:4,direction:"row",sx:{color:"action.active"},children:[e(t,{color:"secondary",badgeContent:99,children:e(n,{})}),e(t,{color:"secondary",badgeContent:100,children:e(n,{})}),e(t,{color:"secondary",badgeContent:1e3,max:999,children:e(n,{})})]})}const H=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function BadgeMax() {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
    </Stack>
  );
}
`;function K(){return e(l,{sx:{color:"action.active"},children:e(t,{color:"secondary",variant:"dot",children:e(n,{})})})}const U=`import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function DotBadge() {
  return (
    <Box sx={{ color: 'action.active' }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}
`,b={bgcolor:"primary.main",width:40,height:40},J={borderRadius:"50%"},u=e(l,{component:"span",sx:b}),h=e(l,{component:"span",sx:{...b,...J}});function Q(){return a(c,{spacing:3,direction:"row",children:[e(t,{color:"secondary",badgeContent:" ",children:u}),e(t,{color:"secondary",badgeContent:" ",variant:"dot",children:u}),e(t,{color:"secondary",overlap:"circular",badgeContent:" ",children:h}),e(t,{color:"secondary",overlap:"circular",badgeContent:" ",variant:"dot",children:h})]})}const W=`import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';

const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

export default function BadgeOverlap() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
        {circle}
      </Badge>
    </Stack>
  );
}
`;function X(i){return"more than 99 notifications"}function ee(){return e(f,{"aria-label":X(),children:e(t,{badgeContent:100,color:"secondary",children:e(n,{})})})}const oe=`import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function notificationsLabel(count: number) {
  if (count === 0) {
    return 'no notifications';
  }
  if (count > 99) {
    return 'more than 99 notifications';
  }
  return \`\${count} notifications\`;
}

export default function AccessibleBadges() {
  return (
    <IconButton aria-label={notificationsLabel(100)}>
      <Badge badgeContent={100} color="secondary">
        <MailIcon />
      </Badge>
    </IconButton>
  );
}
`;function ge(i){return a(N,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(M,{}),e(m,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/badges",target:"_blank",role:"button",size:"small",startIcon:e(I,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(o,{className:"text-32 my-16 font-700",component:"h1",children:"Badge"}),e(o,{className:"description",children:"Badge generates a small badge to the top-right of its child(ren)."}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic badge"}),e(o,{className:"text-14 mb-32",component:"div",children:"Examples of badges containing text, using primary and secondary colors. The badge is applied to its children."}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"SimpleBadge.js",className:"my-16",iframe:!1,component:D,raw:_})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Color"}),a(o,{className:"text-14 mb-32",component:"div",children:["Use ",e("code",{children:"color"})," prop to apply theme palette to component."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"ColorBadge.js",className:"my-16",iframe:!1,component:F,raw:A})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),a(o,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"CustomizedBadges.js",className:"my-16",iframe:!1,component:V,raw:Y})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge visibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["The visibility of badges can be controlled using the ",e("code",{children:"invisible"})," prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"BadgeVisibility.js",className:"my-16",iframe:!1,component:$,raw:E})}),a(o,{className:"text-14 mb-32",component:"div",children:["The badge hides automatically when ",e("code",{children:"badgeContent"})," is zero. You can override this with the ",e("code",{children:"showZero"})," prop."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"ShowZeroBadge.js",className:"my-16",iframe:!1,component:G,raw:P})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Maximum value"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"max"})," prop to cap the value of the badge content."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"BadgeMax.js",className:"my-16",iframe:!1,component:q,raw:H})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Dot badge"}),a(o,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"dot"})," prop changes a badge into a small dot. This can be used as a notification that something has changed without giving a count."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"DotBadge.js",className:"my-16",iframe:!1,component:K,raw:U})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge overlap"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"overlap"})," prop to place the badge relative to the corner of the wrapped element."]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"BadgeOverlap.js",className:"my-16",iframe:!1,component:Q,raw:W})}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Badge alignment"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can use the ",e("code",{children:"anchorOrigin"})," prop to move the badge to any corner of the wrapped element."]}),e(o,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(o,{className:"text-14 mb-32",component:"div",children:["You can't rely on the content of the badge to be announced correctly. You should provide a full description, for instance, with ",e("code",{children:"aria-label"}),":"]}),e(o,{className:"text-14 mb-32",component:"div",children:e(r,{name:"AccessibleBadges.js",className:"my-16",iframe:!1,component:ee,raw:oe})})]})}export{ge as default};
