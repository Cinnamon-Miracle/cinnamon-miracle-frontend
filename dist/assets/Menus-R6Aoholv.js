import{r as m,d as n,j as e,B as b,bV as f,aJ as i,aC as M,h,g as p,T as t,D as C,cn as y,P as L,bX as X,L as U,bc as Q,c7 as J,ba as Z,bS as ee,x as te,v as H,A as T,w as ne,s as oe,au as ie,aw as ae,F as re,aK as le}from"./index-CUb6G_Bt.js";import{F as u}from"./FuseExample-DEz02mvt.js";import{D as ce}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{i as v}from"./interopRequireDefault-BuJbqelY.js";import{r as I}from"./createSvgIcon-DVT4_uAo.js";import{d as se}from"./Check-KFrNyYY4.js";import{d as me}from"./Settings-x14d565h.js";import{d as ue}from"./Edit-DGVJ8a_C.js";import{d as de}from"./Archive-DmwtG0se.js";import{d as pe}from"./KeyboardArrowDown-C0Ijz-Ot.js";import{d as he}from"./MoreVert-BAhkFTZn.js";import{d as fe}from"./Drafts-XRmkYeSP.js";import{d as Me}from"./Send-DEG0tQNL.js";import{b as ve,a as Ie,P as xe}from"./index-BVafuL68.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function be(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n("div",{children:[e(b,{id:"basic-button","aria-controls":r?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:c,children:"Dashboard"}),n(f,{id:"basic-menu",anchorEl:o,open:r,onClose:a,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(i,{onClick:a,children:"Profile"}),e(i,{onClick:a,children:"My account"}),e(i,{onClick:a,children:"Logout"})]})]})}const ge=`import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;var P={},Ce=v;Object.defineProperty(P,"__esModule",{value:!0});var j=P.default=void 0,ye=Ce(I()),Le=M;j=P.default=(0,ye.default)((0,Le.jsx)("path",{d:"M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2m6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5M19 3l-6 6 2 2 7-7V3z"}),"ContentCut");var E={},ke=v;Object.defineProperty(E,"__esModule",{value:!0});var O=E.default=void 0,Te=ke(I()),Pe=M;O=E.default=(0,Te.default)((0,Pe.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var w={},Ee=v;Object.defineProperty(w,"__esModule",{value:!0});var $=w.default=void 0,we=Ee(I()),Se=M;$=w.default=(0,we.default)((0,Se.jsx)("path",{d:"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m7 18H5V4h2v3h10V4h2z"}),"ContentPaste");var S={},Re=v;Object.defineProperty(S,"__esModule",{value:!0});var F=S.default=void 0,Ae=Re(I()),ze=M;F=S.default=(0,Ae.default)((0,ze.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96"}),"Cloud");function Ne(){return e(L,{sx:{width:320,maxWidth:"100%"},children:n(y,{children:[n(i,{children:[e(h,{children:e(j,{fontSize:"small"})}),e(p,{children:"Cut"}),e(t,{variant:"body2",color:"text.secondary",children:"⌘X"})]}),n(i,{children:[e(h,{children:e(O,{fontSize:"small"})}),e(p,{children:"Copy"}),e(t,{variant:"body2",color:"text.secondary",children:"⌘C"})]}),n(i,{children:[e(h,{children:e($,{fontSize:"small"})}),e(p,{children:"Paste"}),e(t,{variant:"body2",color:"text.secondary",children:"⌘V"})]}),e(C,{}),n(i,{children:[e(h,{children:e(F,{fontSize:"small"})}),e(p,{children:"Web Clipboard"})]})]})})}const De=`import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

export default function IconMenu() {
  return (
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <ListItemText>Cut</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <ListItemText>Copy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText>Paste</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <ListItemText>Web Clipboard</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;function Be(){return e(L,{sx:{width:320},children:n(y,{dense:!0,children:[e(i,{children:e(p,{inset:!0,children:"Single"})}),e(i,{children:e(p,{inset:!0,children:"1.15"})}),e(i,{children:e(p,{inset:!0,children:"Double"})}),n(i,{children:[e(h,{children:e(se,{})}),"Custom: 1.2"]}),e(C,{}),e(i,{children:e(p,{children:"Add space before paragraph"})}),e(i,{children:e(p,{children:"Add space after paragraph"})}),e(C,{}),e(i,{children:e(p,{children:"Custom spacing..."})})]})})}const _e=`import * as React from 'react';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';

export default function DenseMenu() {
  return (
    <Paper sx={{ width: 320 }}>
      <MenuList dense>
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`,B=["Show some love to MUI","Show all notification content","Hide sensitive notification content","Hide all notification content"];function He(){const[o,l]=m.useState(null),[r,c]=m.useState(1),a=!!o,s=x=>{l(x.currentTarget)},k=(x,g)=>{c(g),l(null)},d=()=>{l(null)};return n("div",{children:[e(U,{component:"nav","aria-label":"Device settings",sx:{bgcolor:"background.paper"},children:e(X,{id:"lock-button","aria-haspopup":"listbox","aria-controls":"lock-menu","aria-label":"when device is locked","aria-expanded":a?"true":void 0,onClick:s,children:e(p,{primary:"When device is locked",secondary:B[r]})})}),e(f,{id:"lock-menu",anchorEl:o,open:a,onClose:d,MenuListProps:{"aria-labelledby":"lock-button",role:"listbox"},children:B.map((x,g)=>e(i,{disabled:g===0,selected:g===r,onClick:K=>k(K,g),children:x},x))})]})}const je=`import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'Show some love to MUI',
  'Show all notification content',
  'Hide sensitive notification content',
  'Hide all notification content',
];

export default function SimpleListMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number,
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="When device is locked"
            secondary={options[selectedIndex]}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;function Oe(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n("div",{children:[e(b,{id:"demo-positioned-button","aria-controls":r?"demo-positioned-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:c,children:"Dashboard"}),n(f,{id:"demo-positioned-menu","aria-labelledby":"demo-positioned-button",anchorEl:o,open:r,onClose:a,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:[e(i,{onClick:a,children:"Profile"}),e(i,{onClick:a,children:"My account"}),e(i,{onClick:a,children:"Logout"})]})]})}const $e=`import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;function Fe(){const[o,l]=m.useState(!1),r=m.useRef(null),c=()=>{l(d=>!d)},a=d=>{r.current&&r.current.contains(d.target)||l(!1)};function s(d){d.key==="Tab"?(d.preventDefault(),l(!1)):d.key==="Escape"&&l(!1)}const k=m.useRef(o);return m.useEffect(()=>{k.current===!0&&o===!1&&r.current.focus(),k.current=o},[o]),n(ee,{direction:"row",spacing:2,children:[e(L,{children:n(y,{children:[e(i,{children:"Profile"}),e(i,{children:"My account"}),e(i,{children:"Logout"})]})}),n("div",{children:[e(b,{ref:r,id:"composition-button","aria-controls":o?"composition-menu":void 0,"aria-expanded":o?"true":void 0,"aria-haspopup":"true",onClick:c,children:"Dashboard"}),e(Z,{open:o,anchorEl:r.current,role:void 0,placement:"bottom-start",transition:!0,disablePortal:!0,children:({TransitionProps:d,placement:x})=>e(Q,{...d,style:{transformOrigin:x==="bottom-start"?"left top":"left bottom"},children:e(L,{children:e(J,{onClickAway:a,children:n(y,{autoFocusItem:o,id:"composition-menu","aria-labelledby":"composition-button",onKeyDown:s,children:[e(i,{onClick:a,children:"Profile"}),e(i,{onClick:a,children:"My account"}),e(i,{onClick:a,children:"Logout"})]})})})})})]})]})}const qe=`import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

export default function MenuListComposition() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Dashboard
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
`;var R={},We=v;Object.defineProperty(R,"__esModule",{value:!0});var q=R.default=void 0,Ve=We(I()),Ye=M;q=R.default=(0,Ve.default)((0,Ye.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"}),"PersonAdd");var A={},Ge=v;Object.defineProperty(A,"__esModule",{value:!0});var W=A.default=void 0,Ke=Ge(I()),Xe=M;W=A.default=(0,Ke.default)((0,Xe.jsx)("path",{d:"m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"}),"Logout");function Ue(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n(m.Fragment,{children:[n(te,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:[e(t,{sx:{minWidth:100},children:"Contact"}),e(t,{sx:{minWidth:100},children:"Profile"}),e(ne,{title:"Account settings",children:e(H,{onClick:c,size:"small",sx:{ml:2},"aria-controls":r?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,children:e(T,{sx:{width:32,height:32},children:"M"})})})]}),n(f,{anchorEl:o,id:"account-menu",open:r,onClose:a,onClick:a,PaperProps:{elevation:0,sx:{overflow:"visible",filter:"drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&::before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,bgcolor:"background.paper",transform:"translateY(-50%) rotate(45deg)",zIndex:0}}},transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"bottom"},children:[n(i,{onClick:a,children:[e(T,{})," Profile"]}),n(i,{onClick:a,children:[e(T,{})," My account"]}),e(C,{}),n(i,{onClick:a,children:[e(h,{children:e(q,{fontSize:"small"})}),"Add another account"]}),n(i,{onClick:a,children:[e(h,{children:e(me,{fontSize:"small"})}),"Settings"]}),n(i,{onClick:a,children:[e(h,{children:e(W,{fontSize:"small"})}),"Logout"]})]})]})}const Qe=`import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Typography sx={{ minWidth: 100 }}>Contact</Typography>
        <Typography sx={{ minWidth: 100 }}>Profile</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
`;var z={},Je=v;Object.defineProperty(z,"__esModule",{value:!0});var V=z.default=void 0,Ze=Je(I()),et=M;V=z.default=(0,Ze.default)((0,et.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm-1 4 6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2zm-1 7h5.5L14 6.5z"}),"FileCopy");var N={},tt=v;Object.defineProperty(N,"__esModule",{value:!0});var Y=N.default=void 0,nt=tt(I()),ot=M;Y=N.default=(0,nt.default)((0,ot.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreHoriz");const it=oe(o=>e(f,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...o}))(({theme:o})=>({"& .MuiPaper-root":{borderRadius:6,marginTop:o.spacing(1),minWidth:180,color:o.palette.mode==="light"?"rgb(55, 65, 81)":o.palette.grey[300],boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:o.palette.text.secondary,marginRight:o.spacing(1.5)},"&:active":{backgroundColor:ie(o.palette.primary.main,o.palette.action.selectedOpacity)}}}}));function at(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n("div",{children:[e(b,{id:"demo-customized-button","aria-controls":r?"demo-customized-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,variant:"contained",disableElevation:!0,onClick:c,endIcon:e(pe,{}),children:"Options"}),n(it,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"demo-customized-button"},anchorEl:o,open:r,onClose:a,children:[n(i,{onClick:a,disableRipple:!0,children:[e(ue,{}),"Edit"]}),n(i,{onClick:a,disableRipple:!0,children:[e(V,{}),"Duplicate"]}),e(C,{sx:{my:.5}}),n(i,{onClick:a,disableRipple:!0,children:[e(de,{}),"Archive"]}),n(i,{onClick:a,disableRipple:!0,children:[e(Y,{}),"More"]})]})]})}const rt=`import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <EditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <FileCopyIcon />
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ArchiveIcon />
          Archive
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          <MoreHorizIcon />
          More
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
`,lt=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"],ct=48;function st(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n("div",{children:[e(H,{"aria-label":"more",id:"long-button","aria-controls":r?"long-menu":void 0,"aria-expanded":r?"true":void 0,"aria-haspopup":"true",onClick:c,children:e(he,{})}),e(f,{id:"long-menu",MenuListProps:{"aria-labelledby":"long-button"},anchorEl:o,open:r,onClose:a,PaperProps:{style:{maxHeight:ct*4.5,width:"20ch"}},children:lt.map(s=>e(i,{selected:s==="Pyxis",onClick:a,children:s},s))})]})}const mt=`import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
`;var D={},ut=v;Object.defineProperty(D,"__esModule",{value:!0});var G=D.default=void 0,dt=ut(I()),_=M;G=D.default=(0,dt.default)([(0,_.jsx)("circle",{cx:"12",cy:"19",r:"2"},"0"),(0,_.jsx)("path",{d:"M10 3h4v12h-4z"},"1")],"PriorityHigh");function pt(){return e(L,{sx:{width:230},children:n(y,{children:[n(i,{children:[e(h,{children:e(Me,{fontSize:"small"})}),e(t,{variant:"inherit",children:"A short message"})]}),n(i,{children:[e(h,{children:e(G,{fontSize:"small"})}),e(t,{variant:"inherit",children:"A very long text that overflows"})]}),n(i,{children:[e(h,{children:e(fe,{fontSize:"small"})}),e(t,{variant:"inherit",noWrap:!0,children:"A very long text that overflows"})]})]})})}const ht=`import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function TypographyMenu() {
  return (
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A short message</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">A very long text that overflows</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            A very long text that overflows
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}
`;function ft(){const[o,l]=m.useState(null),r=!!o,c=s=>{l(s.currentTarget)},a=()=>{l(null)};return n("div",{children:[e(b,{id:"fade-button","aria-controls":r?"fade-menu":void 0,"aria-haspopup":"true","aria-expanded":r?"true":void 0,onClick:c,children:"Dashboard"}),n(f,{id:"fade-menu",MenuListProps:{"aria-labelledby":"fade-button"},anchorEl:o,open:r,onClose:a,TransitionComponent:ae,children:[e(i,{onClick:a,children:"Profile"}),e(i,{onClick:a,children:"My account"}),e(i,{onClick:a,children:"Logout"})]})]})}const Mt=`import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
`;function vt(){const[o,l]=m.useState(null),r=a=>{a.preventDefault(),l(o===null?{mouseX:a.clientX+2,mouseY:a.clientY-6}:null)},c=()=>{l(null)};return n("div",{onContextMenu:r,style:{cursor:"context-menu"},children:[e(t,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus, bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus consequat. Suspendisse lacinia tellus a libero volutpat maximus."}),n(f,{open:o!==null,onClose:c,anchorReference:"anchorPosition",anchorPosition:o!==null?{top:o.mouseY,left:o.mouseX}:void 0,children:[e(i,{onClick:c,children:"Copy"}),e(i,{onClick:c,children:"Print"}),e(i,{onClick:c,children:"Highlight"}),e(i,{onClick:c,children:"Email"})]})]})}const It=`import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

export default function ContextMenu() {
  const [contextMenu, setContextMenu] = React.useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);

  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null,
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ipsum purus,
        bibendum sit amet vulputate eget, porta semper ligula. Donec bibendum
        vulputate erat, ac fringilla mi finibus nec. Donec ac dolor sed dolor
        porttitor blandit vel vel purus. Fusce vel malesuada ligula. Nam quis
        vehicula ante, eu finibus est. Proin ullamcorper fermentum orci, quis finibus
        massa. Nunc lobortis, massa ut rutrum ultrices, metus metus finibus ex, sit
        amet facilisis neque enim sed neque. Quisque accumsan metus vel maximus
        consequat. Suspendisse lacinia tellus a libero volutpat maximus.
      </Typography>
      <Menu
        open={contextMenu !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          contextMenu !== null
            ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
            : undefined
        }
      >
        <MenuItem onClick={handleClose}>Copy</MenuItem>
        <MenuItem onClick={handleClose}>Print</MenuItem>
        <MenuItem onClick={handleClose}>Highlight</MenuItem>
        <MenuItem onClick={handleClose}>Email</MenuItem>
      </Menu>
    </div>
  );
}
`;function xt(){return e(xe,{variant:"popover",popupId:"demo-popup-menu",children:o=>n(m.Fragment,{children:[e(b,{variant:"contained",...ve(o),children:"Dashboard"}),n(f,{...Ie(o),children:[e(i,{onClick:o.close,children:"Profile"}),e(i,{onClick:o.close,children:"My account"}),e(i,{onClick:o.close,children:"Logout"})]})]})})}const bt=`import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState() {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            Dashboard
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={popupState.close}>Logout</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}
`;function _t(o){return n(le,{children:[n("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(ce,{}),e(b,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/menus",target:"_blank",role:"button",size:"small",startIcon:e(re,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Menu"}),e(t,{className:"description",children:"Menus display a list of choices on temporary surfaces."}),e(t,{className:"text-14 mb-32",component:"div",children:"A menu displays a list of choices on a temporary surface. It appears when the user interacts with a button, or other control."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic menu"}),n(t,{className:"text-14 mb-32",component:"div",children:["A basic menu opens over the anchor element by default (this option can be ",e("a",{href:"#menu-positioning",children:"changed"})," via props). When close to a screen edge, a basic menu vertically realigns to make sure that all menu items are completely visible."]}),e(t,{className:"text-14 mb-32",component:"div",children:"Choosing an option should immediately ideally commit the option and close the menu."}),n(t,{className:"text-14 mb-32",component:"div",children:[e("strong",{children:"Disambiguation"}),": In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user's current context."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"BasicMenu.js",className:"my-16",iframe:!1,component:be,raw:ge})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Icon menu"}),e(t,{className:"text-14 mb-32",component:"div",children:"In desktop viewport, padding is increased to give more space to the menu."}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"IconMenu.js",className:"my-16",iframe:!1,component:Ne,raw:De})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Dense menu"}),n(t,{className:"text-14 mb-32",component:"div",children:["For the menu that has long list and long text, you can use the ",e("code",{children:"dense"})," prop to reduce the padding and text size."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"DenseMenu.js",className:"my-16",iframe:!1,component:Be,raw:_e})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Selected menu"}),n(t,{className:"text-14 mb-32",component:"div",children:["If used for item selection, when opened, simple menus places the initial focus on the selected menu item. The currently selected menu item is set using the ",e("code",{children:"selected"})," prop (from ",e("a",{href:"/material-ui/api/list-item/",children:"ListItem"}),"). To use a selected menu item without impacting the initial focus, set the ",e("code",{children:"variant"}),' prop to "menu".']}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"SimpleListMenu.js",className:"my-16",iframe:!1,component:He,raw:je})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Positioned menu"}),n(t,{className:"text-14 mb-32",component:"div",children:["Because the ",e("code",{children:"Menu"})," component uses the ",e("code",{children:"Popover"})," component to position itself, you can use the same ",e("a",{href:"/material-ui/react-popover/#anchor-playground",children:"positioning props"})," to position it. For instance, you can display the menu on top of the anchor:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"PositionedMenu.js",className:"my-16",iframe:!1,component:Oe,raw:$e})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"MenuList composition"}),n(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"Menu"})," component uses the ",e("code",{children:"Popover"})," component internally. However, you might want to use a different positioning strategy, or not blocking the scroll. For answering those needs, we expose a ",e("code",{children:"MenuList"})," component that you can compose, with ",e("code",{children:"Popper"})," in this example."]}),n(t,{className:"text-14 mb-32",component:"div",children:["The primary responsibility of the ",e("code",{children:"MenuList"})," component is to handle the focus."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"MenuListComposition.js",className:"my-16",iframe:!1,component:Fe,raw:qe})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Account menu"}),n(t,{className:"text-14 mb-32",component:"div",children:[e("code",{children:"Menu"})," content can be mixed with other components like ",e("code",{children:"Avatar"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"AccountMenu.js",className:"my-16",iframe:!1,component:Ue,raw:Qe})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),n(t,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"CustomizedMenus.js",className:"my-16",iframe:!1,component:at,raw:rt})}),n(t,{className:"text-14 mb-32",component:"div",children:["The ",e("code",{children:"MenuItem"})," is a wrapper around ",e("code",{children:"ListItem"})," with some additional styles. You can use the same list composition features with the ",e("code",{children:"MenuItem"})," component:"]}),n(t,{className:"text-14 mb-32",component:"div",children:["🎨 If you are looking for inspiration, you can check ",e("a",{href:"https://mui-treasury.com/?path=/docs/menu-introduction--docs",children:"MUI Treasury's customization examples"}),"."]}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Max height menu"}),e(t,{className:"text-14 mb-32",component:"div",children:"If the height of a menu prevents all menu items from being displayed, the menu can scroll internally."}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"LongMenu.js",className:"my-16",iframe:!1,component:st,raw:mt})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),n(t,{className:"text-14 mb-32",component:"div",children:["There is ",e("a",{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=327437",children:"a flexbox bug"})," that prevents ",e("code",{children:"text-overflow: ellipsis"})," from working in a flexbox layout. You can use the ",e("code",{children:"Typography"})," component with ",e("code",{children:"noWrap"})," to workaround this issue:"]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"TypographyMenu.js",className:"my-16",iframe:!1,component:pt,raw:ht})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Change transition"}),e(t,{className:"text-14 mb-32",component:"div",children:"Use a different transition."}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"FadeMenu.js",className:"my-16",iframe:!1,component:ft,raw:Mt})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Context menu"}),e(t,{className:"text-14 mb-32",component:"div",children:"Here is an example of a context menu. (Right click to open.)"}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"ContextMenu.js",className:"my-16",iframe:!1,component:vt,raw:It})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),e(t,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases you might be able to take advantage of:"}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"material-ui-popup-state"}),n(t,{className:"text-14 mb-32",component:"div",children:[e("img",{src:"https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star",alt:"stars"}),e("img",{src:"https://img.shields.io/npm/dm/material-ui-popup-state.svg",alt:"npm downloads"})]}),n(t,{className:"text-14 mb-32",component:"div",children:["The package ",e("a",{href:"https://github.com/jcoreio/material-ui-popup-state",children:e("code",{children:"material-ui-popup-state"})})," that takes care of menu state for you in most cases."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(u,{name:"MenuPopupState.js",className:"my-16",iframe:!1,component:xt,raw:bt})})]})}export{_t as default};
