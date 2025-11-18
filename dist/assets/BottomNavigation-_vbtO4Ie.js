import{aC as w,r as n,j as t,d as a,x as B,bX as I,A as R,g as L,L as A,P as F,F as j,B as M,T as e,aK as k}from"./index-CUb6G_Bt.js";import{F as p}from"./FuseExample-DEz02mvt.js";import{D as C}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{i as S}from"./interopRequireDefault-BuJbqelY.js";import{r as E}from"./createSvgIcon-DVT4_uAo.js";import{d as h}from"./Favorite-DrdI2XGU.js";import{d as x}from"./LocationOn-Ow7u6bOn.js";import{B as o,a as v}from"./BottomNavigationAction-BpzCKwwd.js";import{d as T}from"./Folder-B6YUU54n.js";import{d as V}from"./Archive-DmwtG0se.js";import{C as D}from"./CssBaseline-DbXu6k-B.js";import{L as P}from"./ListItemAvatar-DUOBSJJw.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";var d={},_=S;Object.defineProperty(d,"__esModule",{value:!0});var l=d.default=void 0,O=_(E()),H=w;l=d.default=(0,O.default)((0,H.jsx)("path",{d:"M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9m-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8z"}),"Restore");function z(){const[i,r]=n.useState(0);return t(B,{sx:{width:500},children:a(v,{showLabels:!0,value:i,onChange:(s,m)=>{r(m)},children:[t(o,{label:"Recents",icon:t(l,{})}),t(o,{label:"Favorites",icon:t(h,{})}),t(o,{label:"Nearby",icon:t(x,{})})]})})}const q=`import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}
`;function Q(){const[i,r]=n.useState("recents");return a(v,{sx:{width:500},value:i,onChange:(m,c)=>{r(c)},children:[t(o,{label:"Recents",value:"recents",icon:t(l,{})}),t(o,{label:"Favorites",value:"favorites",icon:t(h,{})}),t(o,{label:"Nearby",value:"nearby",icon:t(x,{})}),t(o,{label:"Folder",value:"folder",icon:t(T,{})})]})}const W=`import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
`;function b(){const i=r=>Math.floor(Math.random()*Math.floor(r));return Array.from(new Array(50)).map(()=>y[i(y.length)])}function $(){const[i,r]=n.useState(0),s=n.useRef(null),[m,c]=n.useState(()=>b());return n.useEffect(()=>{s.current.ownerDocument.body.scrollTop=0,c(b())},[i,c]),a(B,{sx:{pb:7},ref:s,children:[t(D,{}),t(A,{children:m.map(({primary:g,secondary:u,person:f},N)=>a(I,{children:[t(P,{children:t(R,{alt:"Profile Picture",src:f})}),t(L,{primary:g,secondary:u})]},N+f))}),t(F,{sx:{position:"fixed",bottom:0,left:0,right:0},elevation:3,children:a(v,{showLabels:!0,value:i,onChange:(g,u)=>{r(u)},children:[t(o,{label:"Recents",icon:t(l,{})}),t(o,{label:"Favorites",icon:t(h,{})}),t(o,{label:"Archive",icon:t(V,{})})]})})]})}const y=[{primary:"Brunch this week?",secondary:"I'll be in the neighbourhood this week. Let's grab a bite to eat",person:"/material-ui-static/images/avatar/5.jpg"},{primary:"Birthday Gift",secondary:`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,person:"/material-ui-static/images/avatar/1.jpg"},{primary:"Recipe to try",secondary:"I am try out this new BBQ recipe, I think this might be amazing",person:"/material-ui-static/images/avatar/2.jpg"},{primary:"Yes!",secondary:"I have the tickets to the ReactConf for this year.",person:"/material-ui-static/images/avatar/3.jpg"},{primary:"Doctor's Appointment",secondary:"My appointment for the doctor was rescheduled for next Saturday.",person:"/material-ui-static/images/avatar/4.jpg"},{primary:"Discussion",secondary:`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,person:"/material-ui-static/images/avatar/5.jpg"},{primary:"Summer BBQ",secondary:`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,person:"/material-ui-static/images/avatar/1.jpg"}],G=`import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function refreshMessages(): MessageExample[] {
  const getRandomInt = (max: number) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      <List>
        {messages.map(({ primary, secondary, person }, index) => (
          <ListItemButton key={index + person}>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={person} />
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary} />
          </ListItemButton>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

interface MessageExample {
  primary: string;
  secondary: string;
  person: string;
}

const messageExamples: readonly MessageExample[] = [
  {
    primary: 'Brunch this week?',
    secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'Birthday Gift',
    secondary: \`Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
  {
    primary: 'Recipe to try',
    secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
    person: '/material-ui-static/images/avatar/2.jpg',
  },
  {
    primary: 'Yes!',
    secondary: 'I have the tickets to the ReactConf for this year.',
    person: '/material-ui-static/images/avatar/3.jpg',
  },
  {
    primary: "Doctor's Appointment",
    secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
    person: '/material-ui-static/images/avatar/4.jpg',
  },
  {
    primary: 'Discussion',
    secondary: \`Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.\`,
    person: '/material-ui-static/images/avatar/5.jpg',
  },
  {
    primary: 'Summer BBQ',
    secondary: \`Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.\`,
    person: '/material-ui-static/images/avatar/1.jpg',
  },
];
`;function mt(i){return a(k,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[t(C,{}),t(M,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/bottom-navigation",target:"_blank",role:"button",size:"small",startIcon:t(j,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),t(e,{className:"text-32 my-16 font-700",component:"h1",children:"Bottom Navigation"}),t(e,{className:"description",children:"The Bottom Navigation bar allows movement between primary destinations in an app."}),t(e,{className:"text-14 mb-32",component:"div",children:"Bottom navigation bars display three to five destinations at the bottom of a screen. Each destination is represented by an icon and an optional text label. When a bottom navigation icon is tapped, the user is taken to the top-level navigation destination associated with that icon."}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Bottom navigation"}),a(e,{className:"text-14 mb-32",component:"div",children:["When there are only ",t("strong",{children:"three"})," actions, display both icons and text labels at all times."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(p,{name:"SimpleBottomNavigation.js",className:"my-16",iframe:!1,component:z,raw:q})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Bottom navigation with no label"}),a(e,{className:"text-14 mb-32",component:"div",children:["If there are ",t("strong",{children:"four"})," or ",t("strong",{children:"five"})," actions, display inactive views as icons only."]}),t(e,{className:"text-14 mb-32",component:"div",children:t(p,{name:"LabelBottomNavigation.js",className:"my-16",iframe:!1,component:Q,raw:W})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Fixed positioning"}),t(e,{className:"text-14 mb-32",component:"div",children:"This demo keeps bottom navigation fixed to the bottom, no matter the amount of content on-screen."}),t(e,{className:"text-14 mb-32",component:"div",children:t(p,{name:"FixedBottomNavigation.js",className:"my-16",iframe:!0,component:$,raw:G})}),t(e,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Third-party routing library"}),a(e,{className:"text-14 mb-32",component:"div",children:["One frequent use case is to perform navigation on the client only, without an HTTP round-trip to the server. The ",t("code",{children:"BottomNavigationAction"})," component provides the ",t("code",{children:"component"})," prop to handle this use case. Here is a ",t("a",{href:"/material-ui/guides/routing/",children:"more detailed guide"}),"."]})]})}export{mt as default};
