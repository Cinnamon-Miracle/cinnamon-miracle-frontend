import{r as v,d,T as m,j as n,B as b,bE as j,L as Be,bX as J,A as je,ao as Ge,g as Z,e as qe,b7 as L,b9 as $,bh as Y,b_ as Qe,am as Rt,s as _t,v as Re,H as Oe,G as Ke,D as It,x as _e,aG as Nt,aH as At,aI as Mt,aJ as ae,k as Ft,bT as Je,z as Lt,b1 as Et,cs as Wt,ct as jt,aw as Gt,P as Ze,bS as Ve,bd as qt,bu as Vt,cu as et,cv as tt,aE as Ut,F as $t,aF as Yt,aK as zt}from"./index-CUb6G_Bt.js";import{F as N}from"./FuseExample-DEz02mvt.js";import{D as Ht}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{d as Xt}from"./Person-BJgBmQoO.js";import{d as Qt}from"./Add-DG-wv3a1.js";import{L as Ue}from"./ListItemAvatar-DUOBSJJw.js";import{D as ee}from"./DialogContentText-DIq_aSyM.js";import{d as ot}from"./Close-D3fApOpp.js";import{d as Kt}from"./Menu-CmUpE7Eg.js";import{C as Jt}from"./CssBaseline-DbXu6k-B.js";import{C as Zt}from"./Container-C12kpSJu.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";import"./interopRequireDefault-BuJbqelY.js";import"./createSvgIcon-DVT4_uAo.js";const nt=["username@gmail.com","user02@gmail.com"];function eo(e){const{onClose:t,selectedValue:a,open:o}=e,i=()=>{t(a)},s=g=>{t(g)};return d(L,{onClose:i,open:o,children:[n(j,{children:"Set backup account"}),d(Be,{sx:{pt:0},children:[nt.map(g=>n(qe,{disableGutters:!0,children:d(J,{onClick:()=>s(g),children:[n(Ue,{children:n(je,{sx:{bgcolor:Ge[100],color:Ge[600]},children:n(Xt,{})})}),n(Z,{primary:g})]})},g)),n(qe,{disableGutters:!0,children:d(J,{autoFocus:!0,onClick:()=>s("addAccount"),children:[n(Ue,{children:n(je,{children:n(Qt,{})})}),n(Z,{primary:"Add account"})]})})]})]})}function to(){const[e,t]=v.useState(!1),[a,o]=v.useState(nt[1]);return d("div",{children:[d(m,{variant:"subtitle1",component:"div",children:["Selected: ",a]}),n("br",{}),n(b,{variant:"outlined",onClick:()=>{t(!0)},children:"Open simple dialog"}),n(eo,{selectedValue:a,open:e,onClose:g=>{t(!1),o(g)}})]})}const oo=`import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disableGutters>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
`;function no(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Open alert dialog"}),d(L,{open:e,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[n(j,{id:"alert-dialog-title",children:"Use Google's location service?"}),n($,{children:n(ee,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),d(Y,{children:[n(b,{onClick:o,children:"Disagree"}),n(b,{onClick:o,autoFocus:!0,children:"Agree"})]})]})]})}const ao=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`,ro=v.forwardRef(function(t,a){return n(Qe,{direction:"up",ref:a,...t})});function io(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Slide in alert dialog"}),d(L,{open:e,TransitionComponent:ro,keepMounted:!0,onClose:o,"aria-describedby":"alert-dialog-slide-description",children:[n(j,{children:"Use Google's location service?"}),n($,{children:n(ee,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),d(Y,{children:[n(b,{onClick:o,children:"Disagree"}),n(b,{onClick:o,children:"Agree"})]})]})]})}const lo=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;function so(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Open form dialog"}),d(L,{open:e,onClose:o,PaperProps:{component:"form",onSubmit:i=>{i.preventDefault();const s=new FormData(i.currentTarget),f=Object.fromEntries(s.entries()).email;console.log(f),o()}},children:[n(j,{children:"Subscribe"}),d($,{children:[n(ee,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),n(Rt,{autoFocus:!0,required:!0,margin:"dense",id:"name",name:"email",label:"Email Address",type:"email",fullWidth:!0,variant:"standard"})]}),d(Y,{children:[n(b,{onClick:o,children:"Cancel"}),n(b,{type:"submit",children:"Subscribe"})]})]})]})}const co=`import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`,uo=_t(L)(({theme:e})=>({"& .MuiDialogContent-root":{padding:e.spacing(2)},"& .MuiDialogActions-root":{padding:e.spacing(1)}}));function mo(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Open dialog"}),d(uo,{onClose:o,"aria-labelledby":"customized-dialog-title",open:e,children:[n(j,{sx:{m:0,p:2},id:"customized-dialog-title",children:"Modal title"}),n(Re,{"aria-label":"close",onClick:o,sx:{position:"absolute",right:8,top:8,color:i=>i.palette.grey[500]},children:n(ot,{})}),d($,{dividers:!0,children:[n(m,{gutterBottom:!0,children:"Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."}),n(m,{gutterBottom:!0,children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."}),n(m,{gutterBottom:!0,children:"Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})]}),n(Y,{children:n(b,{autoFocus:!0,onClick:o,children:"Save changes"})})]})]})}const po=`import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
`,fo=v.forwardRef(function(t,a){return n(Qe,{direction:"up",ref:a,...t})});function go(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Open full-screen dialog"}),d(L,{fullScreen:!0,open:e,onClose:o,TransitionComponent:fo,children:[n(Ke,{sx:{position:"relative"},children:d(Oe,{children:[n(Re,{edge:"start",color:"inherit",onClick:o,"aria-label":"close",children:n(ot,{})}),n(m,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Sound"}),n(b,{autoFocus:!0,color:"inherit",onClick:o,children:"save"})]})}),d(Be,{children:[n(J,{children:n(Z,{primary:"Phone ringtone",secondary:"Titania"})}),n(It,{}),n(J,{children:n(Z,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}const ho=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>
    </React.Fragment>
  );
}
`;function vo(){const[e,t]=v.useState(!1),[a,o]=v.useState(!0),[i,s]=v.useState("sm"),g=()=>{t(!0)},f=()=>{t(!1)},D=x=>{s(x.target.value)},C=x=>{o(x.target.checked)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:g,children:"Open max-width dialog"}),d(L,{fullWidth:a,maxWidth:i,open:e,onClose:f,children:[n(j,{children:"Optional sizes"}),d($,{children:[n(ee,{children:"You can set my maximum width and whether to adapt or not."}),d(_e,{noValidate:!0,component:"form",sx:{display:"flex",flexDirection:"column",m:"auto",width:"fit-content"},children:[d(Nt,{sx:{mt:2,minWidth:120},children:[n(At,{htmlFor:"max-width",children:"maxWidth"}),d(Mt,{autoFocus:!0,value:i,onChange:D,label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[n(ae,{value:!1,children:"false"}),n(ae,{value:"xs",children:"xs"}),n(ae,{value:"sm",children:"sm"}),n(ae,{value:"md",children:"md"}),n(ae,{value:"lg",children:"lg"}),n(ae,{value:"xl",children:"xl"})]})]}),n(Je,{sx:{mt:1},control:n(Ft,{checked:a,onChange:C}),label:"Full width"})]})]}),n(Y,{children:n(b,{onClick:f,children:"Close"})})]})]})}const yo=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState<DialogProps['maxWidth']>('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event: SelectChangeEvent<typeof maxWidth>) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: 'fit-content',
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 120 }}>
              <InputLabel htmlFor="max-width">maxWidth</InputLabel>
              <Select
                autoFocus
                value={maxWidth}
                onChange={handleMaxWidthChange}
                label="maxWidth"
                inputProps={{
                  name: 'max-width',
                  id: 'max-width',
                }}
              >
                <MenuItem value={false as any}>false</MenuItem>
                <MenuItem value="xs">xs</MenuItem>
                <MenuItem value="sm">sm</MenuItem>
                <MenuItem value="md">md</MenuItem>
                <MenuItem value="lg">lg</MenuItem>
                <MenuItem value="xl">xl</MenuItem>
              </Select>
            </FormControl>
            <FormControlLabel
              sx={{ mt: 1 }}
              control={
                <Switch checked={fullWidth} onChange={handleFullWidthChange} />
              }
              label="Full width"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;function bo(){const[e,t]=v.useState(!1),a=Lt(),o=Et(a.breakpoints.down("md")),i=()=>{t(!0)},s=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:i,children:"Open responsive dialog"}),d(L,{fullScreen:o,open:e,onClose:s,"aria-labelledby":"responsive-dialog-title",children:[n(j,{id:"responsive-dialog-title",children:"Use Google's location service?"}),n($,{children:n(ee,{children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),d(Y,{children:[n(b,{autoFocus:!0,onClick:s,children:"Disagree"}),n(b,{onClick:s,autoFocus:!0,children:"Agree"})]})]})]})}const Do=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`,Co=["None","Atria","Callisto","Dione","Ganymede","Hangouts Call","Luna","Oberon","Phobos","Pyxis","Sedna","Titania","Triton","Umbriel"];function xo(e){const{onClose:t,value:a,open:o,...i}=e,[s,g]=v.useState(a),f=v.useRef(null);v.useEffect(()=>{o||g(a)},[a,o]);const D=()=>{f.current!=null&&f.current.focus()},C=()=>{t()},x=()=>{t(s)};return d(L,{sx:{"& .MuiDialog-paper":{width:"80%",maxHeight:435}},maxWidth:"xs",TransitionProps:{onEntering:D},open:o,...i,children:[n(j,{children:"Phone Ringtone"}),n($,{dividers:!0,children:n(Wt,{ref:f,"aria-label":"ringtone",name:"ringtone",value:s,onChange:T=>{g(T.target.value)},children:Co.map(T=>n(Je,{value:T,control:n(jt,{}),label:T},T))})}),d(Y,{children:[n(b,{autoFocus:!0,onClick:C,children:"Cancel"}),n(b,{onClick:x,children:"Ok"})]})]})}function So(){const[e,t]=v.useState(!1),[a,o]=v.useState("Dione");return n(_e,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:d(Be,{component:"div",role:"group",children:[n(J,{divider:!0,disabled:!0,children:n(Z,{primary:"Interruptions"})}),n(J,{divider:!0,"aria-haspopup":"true","aria-controls":"ringtone-menu","aria-label":"phone ringtone",onClick:()=>{t(!0)},children:n(Z,{primary:"Phone ringtone",secondary:a})}),n(J,{divider:!0,disabled:!0,children:n(Z,{primary:"Default notification ringtone",secondary:"Tethys"})}),n(xo,{id:"ringtone-menu",keepMounted:!0,open:e,onClose:g=>{t(!1),g&&o(g)},value:a})]})})}const To=`import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

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

export interface ConfirmationDialogRawProps {
  id: string;
  keepMounted: boolean;
  value: string;
  open: boolean;
  onClose: (value?: string) => void;
}

function ConfirmationDialogRaw(props: ConfirmationDialogRawProps) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    onClose(value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <DialogTitle>Phone Ringtone</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {options.map((option) => (
            <FormControlLabel
              value={option}
              key={option}
              control={<Radio />}
              label={option}
            />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel}>
          Cancel
        </Button>
        <Button onClick={handleOk}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default function ConfirmationDialog() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('Dione');

  const handleClickListItem = () => {
    setOpen(true);
  };

  const handleClose = (newValue?: string) => {
    setOpen(false);

    if (newValue) {
      setValue(newValue);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="div" role="group">
        <ListItemButton divider disabled>
          <ListItemText primary="Interruptions" />
        </ListItemButton>
        <ListItemButton
          divider
          aria-haspopup="true"
          aria-controls="ringtone-menu"
          aria-label="phone ringtone"
          onClick={handleClickListItem}
        >
          <ListItemText primary="Phone ringtone" secondary={value} />
        </ListItemButton>
        <ListItemButton divider disabled>
          <ListItemText primary="Default notification ringtone" secondary="Tethys" />
        </ListItemButton>
        <ConfirmationDialogRaw
          id="ringtone-menu"
          keepMounted
          open={open}
          onClose={handleClose}
          value={value}
        />
      </List>
    </Box>
  );
}
`;function wo(){const[e,t]=v.useState(!0),a=()=>{t(!1)};return d(v.Fragment,{children:[n(Jt,{}),n(Ke,{position:"fixed",component:"nav",children:n(Oe,{children:n(Re,{size:"large",edge:"start",color:"inherit","aria-label":"menu",children:n(Kt,{})})})}),d(Zt,{component:"main",sx:{pt:3},children:[n(Oe,{}),n(m,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet."}),n(m,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet."})]}),n(qt,{open:!0,disableAutoFocus:!0,disableEnforceFocus:!0,children:n(Gt,{appear:!1,in:e,children:n(Ze,{role:"dialog","aria-modal":"false","aria-label":"Cookie banner",square:!0,variant:"outlined",tabIndex:-1,sx:{position:"fixed",bottom:0,left:0,right:0,m:0,p:2,borderWidth:0,borderTopWidth:1},children:d(Ve,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",gap:2,children:[d(_e,{sx:{flexShrink:1,alignSelf:{xs:"flex-start",sm:"center"}},children:[n(m,{fontWeight:"bold",children:"This website uses cookies"}),n(m,{variant:"body2",children:"example.com relies on cookies to improve your experience."})]}),d(Ve,{gap:2,direction:{xs:"row-reverse",sm:"row"},sx:{flexShrink:0,alignSelf:{xs:"flex-end",sm:"center"}},children:[n(b,{size:"small",onClick:a,variant:"contained",children:"Allow all"}),n(b,{size:"small",onClick:a,children:"Reject all"})]})]})})})})]})}const Oo=`import * as React from 'react';
import Stack from '@mui/material/Stack';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Paper from '@mui/material/Paper';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function CookiesBanner() {
  const [bannerOpen, setBannerOpen] = React.useState(true);

  const closeBanner = () => {
    setBannerOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" sx={{ pt: 3 }}>
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
      </Container>
      <TrapFocus open disableAutoFocus disableEnforceFocus>
        <Fade appear={false} in={bannerOpen}>
          <Paper
            role="dialog"
            aria-modal="false"
            aria-label="Cookie banner"
            square
            variant="outlined"
            tabIndex={-1}
            sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              m: 0,
              p: 2,
              borderWidth: 0,
              borderTopWidth: 1,
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              gap={2}
            >
              <Box
                sx={{
                  flexShrink: 1,
                  alignSelf: { xs: 'flex-start', sm: 'center' },
                }}
              >
                <Typography fontWeight="bold">This website uses cookies</Typography>
                <Typography variant="body2">
                  example.com relies on cookies to improve your experience.
                </Typography>
              </Box>
              <Stack
                gap={2}
                direction={{
                  xs: 'row-reverse',
                  sm: 'row',
                }}
                sx={{
                  flexShrink: 0,
                  alignSelf: { xs: 'flex-end', sm: 'center' },
                }}
              >
                <Button size="small" onClick={closeBanner} variant="contained">
                  Allow all
                </Button>
                <Button size="small" onClick={closeBanner}>
                  Reject all
                </Button>
              </Stack>
            </Stack>
          </Paper>
        </Fade>
      </TrapFocus>
    </React.Fragment>
  );
}
`;var he={exports:{}},at={};function rt(e){var t,a,o="";if(typeof e=="string"||typeof e=="number")o+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=rt(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function $e(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=rt(e))&&(o&&(o+=" "),o+=t);return o}const ko=Object.freeze(Object.defineProperty({__proto__:null,clsx:$e,default:$e},Symbol.toStringTag,{value:"Module"})),Po=Vt(ko);var w={},G={};Object.defineProperty(G,"__esModule",{value:!0});G.dontSetMe=No;G.findInArray=Bo;G.int=Io;G.isFunction=Ro;G.isNum=_o;function Bo(e,t){for(var a=0,o=e.length;a<o;a++)if(t.apply(t,[e[a],a,e]))return e[a]}function Ro(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function _o(e){return typeof e=="number"&&!isNaN(e)}function Io(e){return parseInt(e,10)}function No(e,t,a){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(a," - do not set this, set it on the child."))}var te={};Object.defineProperty(te,"__esModule",{value:!0});te.browserPrefixToKey=lt;te.browserPrefixToStyle=Ao;te.default=void 0;te.getPrefix=it;var Se=["Moz","Webkit","O","ms"];function it(){var e,t,a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";var o=(e=window.document)===null||e===void 0||(t=e.documentElement)===null||t===void 0?void 0:t.style;if(!o||a in o)return"";for(var i=0;i<Se.length;i++)if(lt(a,Se[i])in o)return Se[i];return""}function lt(e,t){return t?"".concat(t).concat(Mo(e)):e}function Ao(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Mo(e){for(var t="",a=!0,o=0;o<e.length;o++)a?(t+=e[o].toUpperCase(),a=!1):e[o]==="-"?a=!0:t+=e[o];return t}var Fo=it();te.default=Fo;function ke(e){"@babel/helpers - typeof";return ke=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke(e)}Object.defineProperty(w,"__esModule",{value:!0});w.addClassName=dt;w.addEvent=Wo;w.addUserSelectStyles=Qo;w.createCSSTransform=Yo;w.createSVGTransform=zo;w.getTouch=Ho;w.getTouchIdentifier=Xo;w.getTranslation=Ie;w.innerHeight=Vo;w.innerWidth=Uo;w.matchesSelector=mt;w.matchesSelectorAndParentsTo=Eo;w.offsetXYFromParent=$o;w.outerHeight=Go;w.outerWidth=qo;w.removeClassName=pt;w.removeEvent=jo;w.removeUserSelectStyles=Ko;var I=G,Ye=Lo(te);function st(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(st=function(i){return i?a:t})(e)}function Lo(e,t){if(e&&e.__esModule)return e;if(e===null||ke(e)!=="object"&&typeof e!="function")return{default:e};var a=st(t);if(a&&a.has(e))return a.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var g=i?Object.getOwnPropertyDescriptor(e,s):null;g&&(g.get||g.set)?Object.defineProperty(o,s,g):o[s]=e[s]}return o.default=e,a&&a.set(e,o),o}function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),a.push.apply(a,o)}return a}function ct(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ze(Object(a),!0).forEach(function(o){ut(e,o,a[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(Object(a)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))})}return e}function ut(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var pe="";function mt(e,t){return pe||(pe=(0,I.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(a){return(0,I.isFunction)(e[a])})),(0,I.isFunction)(e[pe])?e[pe](t):!1}function Eo(e,t,a){var o=e;do{if(mt(o,t))return!0;if(o===a)return!1;o=o.parentNode}while(o);return!1}function Wo(e,t,a,o){if(e){var i=ct({capture:!0},o);e.addEventListener?e.addEventListener(t,a,i):e.attachEvent?e.attachEvent("on"+t,a):e["on"+t]=a}}function jo(e,t,a,o){if(e){var i=ct({capture:!0},o);e.removeEventListener?e.removeEventListener(t,a,i):e.detachEvent?e.detachEvent("on"+t,a):e["on"+t]=null}}function Go(e){var t=e.clientHeight,a=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,I.int)(a.borderTopWidth),t+=(0,I.int)(a.borderBottomWidth),t}function qo(e){var t=e.clientWidth,a=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,I.int)(a.borderLeftWidth),t+=(0,I.int)(a.borderRightWidth),t}function Vo(e){var t=e.clientHeight,a=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,I.int)(a.paddingTop),t-=(0,I.int)(a.paddingBottom),t}function Uo(e){var t=e.clientWidth,a=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,I.int)(a.paddingLeft),t-=(0,I.int)(a.paddingRight),t}function $o(e,t,a){var o=t===t.ownerDocument.body,i=o?{left:0,top:0}:t.getBoundingClientRect(),s=(e.clientX+t.scrollLeft-i.left)/a,g=(e.clientY+t.scrollTop-i.top)/a;return{x:s,y:g}}function Yo(e,t){var a=Ie(e,t,"px");return ut({},(0,Ye.browserPrefixToKey)("transform",Ye.default),a)}function zo(e,t){var a=Ie(e,t,"");return a}function Ie(e,t,a){var o=e.x,i=e.y,s="translate(".concat(o).concat(a,",").concat(i).concat(a,")");if(t){var g="".concat(typeof t.x=="string"?t.x:t.x+a),f="".concat(typeof t.y=="string"?t.y:t.y+a);s="translate(".concat(g,", ").concat(f,")")+s}return s}function Ho(e,t){return e.targetTouches&&(0,I.findInArray)(e.targetTouches,function(a){return t===a.identifier})||e.changedTouches&&(0,I.findInArray)(e.changedTouches,function(a){return t===a.identifier})}function Xo(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function Qo(e){if(e){var t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&dt(e.body,"react-draggable-transparent-selection")}}function Ko(e){if(e)try{if(e.body&&pt(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{var t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function dt(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function pt(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var q={};Object.defineProperty(q,"__esModule",{value:!0});q.canDragX=en;q.canDragY=tn;q.createCoreData=nn;q.createDraggableData=an;q.getBoundPosition=Jo;q.getControlPosition=on;q.snapToGrid=Zo;var _=G,re=w;function Jo(e,t,a){if(!e.props.bounds)return[t,a];var o=e.props.bounds;o=typeof o=="string"?o:rn(o);var i=Ne(e);if(typeof o=="string"){var s=i.ownerDocument,g=s.defaultView,f;if(o==="parent"?f=i.parentNode:f=s.querySelector(o),!(f instanceof g.HTMLElement))throw new Error('Bounds selector "'+o+'" could not find an element.');var D=f,C=g.getComputedStyle(i),x=g.getComputedStyle(D);o={left:-i.offsetLeft+(0,_.int)(x.paddingLeft)+(0,_.int)(C.marginLeft),top:-i.offsetTop+(0,_.int)(x.paddingTop)+(0,_.int)(C.marginTop),right:(0,re.innerWidth)(D)-(0,re.outerWidth)(i)-i.offsetLeft+(0,_.int)(x.paddingRight)-(0,_.int)(C.marginRight),bottom:(0,re.innerHeight)(D)-(0,re.outerHeight)(i)-i.offsetTop+(0,_.int)(x.paddingBottom)-(0,_.int)(C.marginBottom)}}return(0,_.isNum)(o.right)&&(t=Math.min(t,o.right)),(0,_.isNum)(o.bottom)&&(a=Math.min(a,o.bottom)),(0,_.isNum)(o.left)&&(t=Math.max(t,o.left)),(0,_.isNum)(o.top)&&(a=Math.max(a,o.top)),[t,a]}function Zo(e,t,a){var o=Math.round(t/e[0])*e[0],i=Math.round(a/e[1])*e[1];return[o,i]}function en(e){return e.props.axis==="both"||e.props.axis==="x"}function tn(e){return e.props.axis==="both"||e.props.axis==="y"}function on(e,t,a){var o=typeof t=="number"?(0,re.getTouch)(e,t):null;if(typeof t=="number"&&!o)return null;var i=Ne(a),s=a.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,re.offsetXYFromParent)(o||e,s,a.props.scale)}function nn(e,t,a){var o=e.state,i=!(0,_.isNum)(o.lastX),s=Ne(e);return i?{node:s,deltaX:0,deltaY:0,lastX:t,lastY:a,x:t,y:a}:{node:s,deltaX:t-o.lastX,deltaY:a-o.lastY,lastX:o.lastX,lastY:o.lastY,x:t,y:a}}function an(e,t){var a=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/a,y:e.state.y+t.deltaY/a,deltaX:t.deltaX/a,deltaY:t.deltaY/a,lastX:e.state.x,lastY:e.state.y}}function rn(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function Ne(e){var t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ve={},ye={};Object.defineProperty(ye,"__esModule",{value:!0});ye.default=ln;function ln(){}function fe(e){"@babel/helpers - typeof";return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},fe(e)}Object.defineProperty(ve,"__esModule",{value:!0});ve.default=void 0;var Te=cn(v),R=Ae(et),sn=Ae(tt),k=w,X=q,we=G,se=Ae(ye);function Ae(e){return e&&e.__esModule?e:{default:e}}function ft(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(ft=function(i){return i?a:t})(e)}function cn(e,t){if(e&&e.__esModule)return e;if(e===null||fe(e)!=="object"&&typeof e!="function")return{default:e};var a=ft(t);if(a&&a.has(e))return a.get(e);var o={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var g=i?Object.getOwnPropertyDescriptor(e,s):null;g&&(g.get||g.set)?Object.defineProperty(o,s,g):o[s]=e[s]}return o.default=e,a&&a.set(e,o),o}function He(e,t){return pn(e)||dn(e,t)||mn(e,t)||un()}function un(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mn(e,t){if(e){if(typeof e=="string")return Xe(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);if(a==="Object"&&e.constructor&&(a=e.constructor.name),a==="Map"||a==="Set")return Array.from(e);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Xe(e,t)}}function Xe(e,t){(t==null||t>e.length)&&(t=e.length);for(var a=0,o=new Array(t);a<t;a++)o[a]=e[a];return o}function dn(e,t){var a=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(a!=null){var o=[],i=!0,s=!1,g,f;try{for(a=a.call(e);!(i=(g=a.next()).done)&&(o.push(g.value),!(t&&o.length===t));i=!0);}catch(D){s=!0,f=D}finally{try{!i&&a.return!=null&&a.return()}finally{if(s)throw f}}return o}}function pn(e){if(Array.isArray(e))return e}function fn(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function gn(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function hn(e,t,a){return t&&gn(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function vn(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Pe(e,t)}function Pe(e,t){return Pe=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},Pe(e,t)}function yn(e){var t=Dn();return function(){var o=ge(e),i;if(t){var s=ge(this).constructor;i=Reflect.construct(o,arguments,s)}else i=o.apply(this,arguments);return bn(this,i)}}function bn(e,t){if(t&&(fe(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}function P(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Dn(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ge(e){return ge=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},ge(e)}function A(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var F={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}},Q=F.mouse,be=function(e){vn(a,e);var t=yn(a);function a(){var o;fn(this,a);for(var i=arguments.length,s=new Array(i),g=0;g<i;g++)s[g]=arguments[g];return o=t.call.apply(t,[this].concat(s)),A(P(o),"state",{dragging:!1,lastX:NaN,lastY:NaN,touchIdentifier:null}),A(P(o),"mounted",!1),A(P(o),"handleDragStart",function(f){if(o.props.onMouseDown(f),!o.props.allowAnyClick&&typeof f.button=="number"&&f.button!==0)return!1;var D=o.findDOMNode();if(!D||!D.ownerDocument||!D.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");var C=D.ownerDocument;if(!(o.props.disabled||!(f.target instanceof C.defaultView.Node)||o.props.handle&&!(0,k.matchesSelectorAndParentsTo)(f.target,o.props.handle,D)||o.props.cancel&&(0,k.matchesSelectorAndParentsTo)(f.target,o.props.cancel,D))){f.type==="touchstart"&&f.preventDefault();var x=(0,k.getTouchIdentifier)(f);o.setState({touchIdentifier:x});var B=(0,X.getControlPosition)(f,x,P(o));if(B!=null){var T=B.x,V=B.y,E=(0,X.createCoreData)(P(o),T,V);(0,se.default)("DraggableCore: handleDragStart: %j",E),(0,se.default)("calling",o.props.onStart);var M=o.props.onStart(f,E);M===!1||o.mounted===!1||(o.props.enableUserSelectHack&&(0,k.addUserSelectStyles)(C),o.setState({dragging:!0,lastX:T,lastY:V}),(0,k.addEvent)(C,Q.move,o.handleDrag),(0,k.addEvent)(C,Q.stop,o.handleDragStop))}}}),A(P(o),"handleDrag",function(f){var D=(0,X.getControlPosition)(f,o.state.touchIdentifier,P(o));if(D!=null){var C=D.x,x=D.y;if(Array.isArray(o.props.grid)){var B=C-o.state.lastX,T=x-o.state.lastY,V=(0,X.snapToGrid)(o.props.grid,B,T),E=He(V,2);if(B=E[0],T=E[1],!B&&!T)return;C=o.state.lastX+B,x=o.state.lastY+T}var M=(0,X.createCoreData)(P(o),C,x);(0,se.default)("DraggableCore: handleDrag: %j",M);var ie=o.props.onDrag(f,M);if(ie===!1||o.mounted===!1){try{o.handleDragStop(new MouseEvent("mouseup"))}catch{var W=document.createEvent("MouseEvents");W.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.handleDragStop(W)}return}o.setState({lastX:C,lastY:x})}}),A(P(o),"handleDragStop",function(f){if(o.state.dragging){var D=(0,X.getControlPosition)(f,o.state.touchIdentifier,P(o));if(D!=null){var C=D.x,x=D.y;if(Array.isArray(o.props.grid)){var B=C-o.state.lastX||0,T=x-o.state.lastY||0,V=(0,X.snapToGrid)(o.props.grid,B,T),E=He(V,2);B=E[0],T=E[1],C=o.state.lastX+B,x=o.state.lastY+T}var M=(0,X.createCoreData)(P(o),C,x),ie=o.props.onStop(f,M);if(ie===!1||o.mounted===!1)return!1;var W=o.findDOMNode();W&&o.props.enableUserSelectHack&&(0,k.removeUserSelectStyles)(W.ownerDocument),(0,se.default)("DraggableCore: handleDragStop: %j",M),o.setState({dragging:!1,lastX:NaN,lastY:NaN}),W&&((0,se.default)("DraggableCore: Removing handlers"),(0,k.removeEvent)(W.ownerDocument,Q.move,o.handleDrag),(0,k.removeEvent)(W.ownerDocument,Q.stop,o.handleDragStop))}}}),A(P(o),"onMouseDown",function(f){return Q=F.mouse,o.handleDragStart(f)}),A(P(o),"onMouseUp",function(f){return Q=F.mouse,o.handleDragStop(f)}),A(P(o),"onTouchStart",function(f){return Q=F.touch,o.handleDragStart(f)}),A(P(o),"onTouchEnd",function(f){return Q=F.touch,o.handleDragStop(f)}),o}return hn(a,[{key:"componentDidMount",value:function(){this.mounted=!0;var i=this.findDOMNode();i&&(0,k.addEvent)(i,F.touch.start,this.onTouchStart,{passive:!1})}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var i=this.findDOMNode();if(i){var s=i.ownerDocument;(0,k.removeEvent)(s,F.mouse.move,this.handleDrag),(0,k.removeEvent)(s,F.touch.move,this.handleDrag),(0,k.removeEvent)(s,F.mouse.stop,this.handleDragStop),(0,k.removeEvent)(s,F.touch.stop,this.handleDragStop),(0,k.removeEvent)(i,F.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,k.removeUserSelectStyles)(s)}}},{key:"findDOMNode",value:function(){var i,s,g;return(i=this.props)!==null&&i!==void 0&&i.nodeRef?(s=this.props)===null||s===void 0||(g=s.nodeRef)===null||g===void 0?void 0:g.current:sn.default.findDOMNode(this)}},{key:"render",value:function(){return Te.cloneElement(Te.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}}]),a}(Te.Component);ve.default=be;A(be,"displayName","DraggableCore");A(be,"propTypes",{allowAnyClick:R.default.bool,disabled:R.default.bool,enableUserSelectHack:R.default.bool,offsetParent:function(t,a){if(t[a]&&t[a].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:R.default.arrayOf(R.default.number),handle:R.default.string,cancel:R.default.string,nodeRef:R.default.object,onStart:R.default.func,onDrag:R.default.func,onStop:R.default.func,onMouseDown:R.default.func,scale:R.default.number,className:we.dontSetMe,style:we.dontSetMe,transform:we.dontSetMe});A(be,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){function t(r){"@babel/helpers - typeof";return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},t(r)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return C.default}}),e.default=void 0;var a=E(v),o=T(et),i=T(tt),s=T(Po),g=w,f=q,D=G,C=T(ve),x=T(ye),B=["axis","bounds","children","defaultPosition","defaultClassName","defaultClassNameDragging","defaultClassNameDragged","position","positionOffset","scale"];function T(r){return r&&r.__esModule?r:{default:r}}function V(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,c=new WeakMap;return(V=function(p){return p?c:l})(r)}function E(r,l){if(r&&r.__esModule)return r;if(r===null||t(r)!=="object"&&typeof r!="function")return{default:r};var c=V(l);if(c&&c.has(r))return c.get(r);var u={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in r)if(h!=="default"&&Object.prototype.hasOwnProperty.call(r,h)){var y=p?Object.getOwnPropertyDescriptor(r,h):null;y&&(y.get||y.set)?Object.defineProperty(u,h,y):u[h]=r[h]}return u.default=r,c&&c.set(r,u),u}function M(){return M=Object.assign||function(r){for(var l=1;l<arguments.length;l++){var c=arguments[l];for(var u in c)Object.prototype.hasOwnProperty.call(c,u)&&(r[u]=c[u])}return r},M.apply(this,arguments)}function ie(r,l){if(r==null)return{};var c=W(r,l),u,p;if(Object.getOwnPropertySymbols){var h=Object.getOwnPropertySymbols(r);for(p=0;p<h.length;p++)u=h[p],!(l.indexOf(u)>=0)&&Object.prototype.propertyIsEnumerable.call(r,u)&&(c[u]=r[u])}return c}function W(r,l){if(r==null)return{};var c={},u=Object.keys(r),p,h;for(h=0;h<u.length;h++)p=u[h],!(l.indexOf(p)>=0)&&(c[p]=r[p]);return c}function De(r,l){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);l&&(u=u.filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable})),c.push.apply(c,u)}return c}function z(r){for(var l=1;l<arguments.length;l++){var c=arguments[l]!=null?arguments[l]:{};l%2?De(Object(c),!0).forEach(function(u){U(r,u,c[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):De(Object(c)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(c,u))})}return r}function vt(r,l){return Ct(r)||Dt(r,l)||bt(r,l)||yt()}function yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(r,l){if(r){if(typeof r=="string")return Me(r,l);var c=Object.prototype.toString.call(r).slice(8,-1);if(c==="Object"&&r.constructor&&(c=r.constructor.name),c==="Map"||c==="Set")return Array.from(r);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return Me(r,l)}}function Me(r,l){(l==null||l>r.length)&&(l=r.length);for(var c=0,u=new Array(l);c<l;c++)u[c]=r[c];return u}function Dt(r,l){var c=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(c!=null){var u=[],p=!0,h=!1,y,O;try{for(c=c.call(r);!(p=(y=c.next()).done)&&(u.push(y.value),!(l&&u.length===l));p=!0);}catch(S){h=!0,O=S}finally{try{!p&&c.return!=null&&c.return()}finally{if(h)throw O}}return u}}function Ct(r){if(Array.isArray(r))return r}function xt(r,l){if(!(r instanceof l))throw new TypeError("Cannot call a class as a function")}function Fe(r,l){for(var c=0;c<l.length;c++){var u=l[c];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,u.key,u)}}function St(r,l,c){return l&&Fe(r.prototype,l),c&&Fe(r,c),Object.defineProperty(r,"prototype",{writable:!1}),r}function Tt(r,l){if(typeof l!="function"&&l!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(l&&l.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),l&&Ce(r,l)}function Ce(r,l){return Ce=Object.setPrototypeOf||function(u,p){return u.__proto__=p,u},Ce(r,l)}function wt(r){var l=kt();return function(){var u=ce(r),p;if(l){var h=ce(this).constructor;p=Reflect.construct(u,arguments,h)}else p=u.apply(this,arguments);return Ot(this,p)}}function Ot(r,l){if(l&&(t(l)==="object"||typeof l=="function"))return l;if(l!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(r)}function H(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function kt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ce(r){return ce=Object.setPrototypeOf?Object.getPrototypeOf:function(c){return c.__proto__||Object.getPrototypeOf(c)},ce(r)}function U(r,l,c){return l in r?Object.defineProperty(r,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[l]=c,r}var ue=function(r){Tt(c,r);var l=wt(c);function c(u){var p;return xt(this,c),p=l.call(this,u),U(H(p),"onDragStart",function(h,y){(0,x.default)("Draggable: onDragStart: %j",y);var O=p.props.onStart(h,(0,f.createDraggableData)(H(p),y));if(O===!1)return!1;p.setState({dragging:!0,dragged:!0})}),U(H(p),"onDrag",function(h,y){if(!p.state.dragging)return!1;(0,x.default)("Draggable: onDrag: %j",y);var O=(0,f.createDraggableData)(H(p),y),S={x:O.x,y:O.y};if(p.props.bounds){var le=S.x,oe=S.y;S.x+=p.state.slackX,S.y+=p.state.slackY;var ne=(0,f.getBoundPosition)(H(p),S.x,S.y),K=vt(ne,2),xe=K[0],me=K[1];S.x=xe,S.y=me,S.slackX=p.state.slackX+(le-S.x),S.slackY=p.state.slackY+(oe-S.y),O.x=S.x,O.y=S.y,O.deltaX=S.x-p.state.x,O.deltaY=S.y-p.state.y}var de=p.props.onDrag(h,O);if(de===!1)return!1;p.setState(S)}),U(H(p),"onDragStop",function(h,y){if(!p.state.dragging)return!1;var O=p.props.onStop(h,(0,f.createDraggableData)(H(p),y));if(O===!1)return!1;(0,x.default)("Draggable: onDragStop: %j",y);var S={dragging:!1,slackX:0,slackY:0},le=!!p.props.position;if(le){var oe=p.props.position,ne=oe.x,K=oe.y;S.x=ne,S.y=K}p.setState(S)}),p.state={dragging:!1,dragged:!1,x:u.position?u.position.x:u.defaultPosition.x,y:u.position?u.position.y:u.defaultPosition.y,prevPropsPosition:z({},u.position),slackX:0,slackY:0,isElementSVG:!1},u.position&&!(u.onDrag||u.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."),p}return St(c,[{key:"componentDidMount",value:function(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}},{key:"componentWillUnmount",value:function(){this.setState({dragging:!1})}},{key:"findDOMNode",value:function(){var p,h,y;return(p=(h=this.props)===null||h===void 0||(y=h.nodeRef)===null||y===void 0?void 0:y.current)!==null&&p!==void 0?p:i.default.findDOMNode(this)}},{key:"render",value:function(){var p,h=this.props;h.axis,h.bounds;var y=h.children,O=h.defaultPosition,S=h.defaultClassName,le=h.defaultClassNameDragging,oe=h.defaultClassNameDragged,ne=h.position,K=h.positionOffset;h.scale;var xe=ie(h,B),me={},de=null,Pt=!!ne,Le=!Pt||this.state.dragging,Ee=ne||O,We={x:(0,f.canDragX)(this)&&Le?this.state.x:Ee.x,y:(0,f.canDragY)(this)&&Le?this.state.y:Ee.y};this.state.isElementSVG?de=(0,g.createSVGTransform)(We,K):me=(0,g.createCSSTransform)(We,K);var Bt=(0,s.default)(y.props.className||"",S,(p={},U(p,le,this.state.dragging),U(p,oe,this.state.dragged),p));return a.createElement(C.default,M({},xe,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),a.cloneElement(a.Children.only(y),{className:Bt,style:z(z({},y.props.style),me),transform:de}))}}],[{key:"getDerivedStateFromProps",value:function(p,h){var y=p.position,O=h.prevPropsPosition;return y&&(!O||y.x!==O.x||y.y!==O.y)?((0,x.default)("Draggable: getDerivedStateFromProps %j",{position:y,prevPropsPosition:O}),{x:y.x,y:y.y,prevPropsPosition:z({},y)}):null}}]),c}(a.Component);e.default=ue,U(ue,"displayName","Draggable"),U(ue,"propTypes",z(z({},C.default.propTypes),{},{axis:o.default.oneOf(["both","x","y","none"]),bounds:o.default.oneOfType([o.default.shape({left:o.default.number,right:o.default.number,top:o.default.number,bottom:o.default.number}),o.default.string,o.default.oneOf([!1])]),defaultClassName:o.default.string,defaultClassNameDragging:o.default.string,defaultClassNameDragged:o.default.string,defaultPosition:o.default.shape({x:o.default.number,y:o.default.number}),positionOffset:o.default.shape({x:o.default.oneOfType([o.default.number,o.default.string]),y:o.default.oneOfType([o.default.number,o.default.string])}),position:o.default.shape({x:o.default.number,y:o.default.number}),className:D.dontSetMe,style:D.dontSetMe,transform:D.dontSetMe})),U(ue,"defaultProps",z(z({},C.default.defaultProps),{},{axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1}))})(at);var gt=at,ht=gt.default,Cn=gt.DraggableCore;he.exports=ht;he.exports.default=ht;he.exports.DraggableCore=Cn;var xn=he.exports;const Sn=Ut(xn);function Tn(e){return n(Sn,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]',children:n(Ze,{...e})})}function wn(){const[e,t]=v.useState(!1),a=()=>{t(!0)},o=()=>{t(!1)};return d(v.Fragment,{children:[n(b,{variant:"outlined",onClick:a,children:"Open draggable dialog"}),d(L,{open:e,onClose:o,PaperComponent:Tn,"aria-labelledby":"draggable-dialog-title",children:[n(j,{style:{cursor:"move"},id:"draggable-dialog-title",children:"Subscribe"}),n($,{children:n(ee,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."})}),d(Y,{children:[n(b,{autoFocus:!0,onClick:o,children:"Cancel"}),n(b,{onClick:o,children:"Subscribe"})]})]})]})}const On=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function DraggableDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open draggable dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Subscribe
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;function kn(){const[e,t]=v.useState(!1),[a,o]=v.useState("paper"),i=f=>()=>{t(!0),o(f)},s=()=>{t(!1)},g=v.useRef(null);return v.useEffect(()=>{if(e){const{current:f}=g;f!==null&&f.focus()}},[e]),d(v.Fragment,{children:[n(b,{onClick:i("paper"),children:"scroll=paper"}),n(b,{onClick:i("body"),children:"scroll=body"}),d(L,{open:e,onClose:s,scroll:a,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[n(j,{id:"scroll-dialog-title",children:"Subscribe"}),n($,{dividers:a==="paper",children:n(ee,{id:"scroll-dialog-description",ref:g,tabIndex:-1,children:[...new Array(50)].map(()=>`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`).join(`
`)})}),d(Y,{children:[n(b,{onClick:s,children:"Cancel"}),n(b,{onClick:s,children:"Subscribe"})]})]})]})}const Pn=`import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <React.Fragment>
      <Button onClick={handleClickOpen('paper')}>scroll=paper</Button>
      <Button onClick={handleClickOpen('body')}>scroll=body</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(50)]
              .map(
                () => \`Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.\`,
              )
              .join('\\n')}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
`;function Un(e){return d(zt,{children:[d("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[n(Ht,{}),n(b,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/dialogs",target:"_blank",role:"button",size:"small",startIcon:n($t,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),n(m,{className:"text-32 my-16 font-700",component:"h1",children:"Dialog"}),n(m,{className:"description",children:"Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."}),d(m,{className:"text-14 mb-32",component:"div",children:["A Dialog is a type of ",n("a",{href:"/material-ui/react-modal/",children:"modal"})," window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken."]}),n(m,{className:"text-14 mb-32",component:"div",children:"Dialogs are purposefully interruptive, so they should be used sparingly."}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic dialog"}),n(m,{className:"text-14 mb-32",component:"div",children:"Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account)."}),n(m,{className:"text-14 mb-32",component:"div",children:"Touch mechanics:"}),d("ul",{className:"space-y-16",children:[n("li",{children:"Choosing an option immediately commits the option and closes the menu"}),n("li",{children:"Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog"})]}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"SimpleDialogDemo.js",className:"my-16",iframe:!1,component:to,raw:oo})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Alerts"}),n(m,{className:"text-14 mb-32",component:"div",children:"Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation."}),n(m,{className:"text-14 mb-32",component:"div",children:"Most alerts don't need titles. They summarize a decision in a sentence or two by either:"}),d("ul",{className:"space-y-16",children:[n("li",{children:'Asking a question (e.g. "Delete this conversation?")'}),n("li",{children:"Making a statement related to the action buttons"})]}),n(m,{className:"text-14 mb-32",component:"div",children:"Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone."}),n(m,{className:"text-14 mb-32",component:"div",children:"If a title is required:"}),d("ul",{className:"space-y-16",children:[n("li",{children:'Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".'}),n("li",{children:'Avoid apologies, ambiguity, or questions, such as "Warning!" or "Are you sure?"'})]}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"AlertDialog.js",className:"my-16",iframe:!1,component:no,raw:ao})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Transitions"}),d(m,{className:"text-14 mb-32",component:"div",children:["You can also swap out the transition, the next example uses ",n("code",{children:"Slide"}),"."]}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"AlertDialogSlide.js",className:"my-16",iframe:!1,component:io,raw:lo})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Form dialogs"}),n(m,{className:"text-14 mb-32",component:"div",children:"Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'."}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"FormDialog.js",className:"my-16",iframe:!1,component:so,raw:co})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),d(m,{className:"text-14 mb-32",component:"div",children:["Here is an example of customizing the component. You can learn more about this in the ",n("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),n(m,{className:"text-14 mb-32",component:"div",children:"The dialog has a close button added to aid usability."}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"CustomizedDialogs.js",className:"my-16",iframe:!1,component:mo,raw:po})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Full-screen dialogs"}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"FullScreenDialog.js",className:"my-16",iframe:!1,component:go,raw:ho})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Optional sizes"}),d(m,{className:"text-14 mb-32",component:"div",children:["You can set a dialog maximum width by using the ",n("code",{children:"maxWidth"})," enumerable in combination with the ",n("code",{children:"fullWidth"})," boolean. When the ",n("code",{children:"fullWidth"})," prop is true, the dialog will adapt based on the ",n("code",{children:"maxWidth"})," value."]}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"MaxWidthDialog.js",className:"my-16",iframe:!1,component:vo,raw:yo})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Responsive full-screen"}),d(m,{className:"text-14 mb-32",component:"div",children:["You may make a dialog responsively full screen using ",n("a",{href:"/material-ui/react-use-media-query/",children:n("code",{children:"useMediaQuery"})}),"."]}),n(Yt,{component:"pre",className:"language-jsx",children:` 
import useMediaQuery from '@mui/material/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return <Dialog fullScreen={fullScreen} />;
}
`}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"ResponsiveDialog.js",className:"my-16",iframe:!1,component:bo,raw:Do})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Confirmation dialogs"}),n(m,{className:"text-14 mb-32",component:"div",children:'Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching "OK".'}),n(m,{className:"text-14 mb-32",component:"div",children:'Touching "Cancel" in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.'}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"ConfirmationDialog.js",className:"my-16",iframe:!1,component:So,raw:To})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Non-modal dialog"}),d(m,{className:"text-14 mb-32",component:"div",children:["Dialogs can also be non-modal, meaning they don't interrupt user interaction behind it. Visit ",n("a",{href:"https://www.nngroup.com/articles/modal-nonmodal-dialog/",children:"the Nielsen Norman Group article"})," for more in-depth guidance about modal vs. non-modal dialog usage."]}),n(m,{className:"text-14 mb-32",component:"div",children:"The demo below shows a persistent cookie banner, a common non-modal dialog use case."}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"CookiesBanner.js",className:"my-16",iframe:!0,component:wo,raw:Oo})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Draggable dialog"}),d(m,{className:"text-14 mb-32",component:"div",children:["You can create a draggable dialog by using ",n("a",{href:"https://github.com/react-grid-layout/react-draggable",children:"react-draggable"}),". To do so, you can pass the imported ",n("code",{children:"Draggable"})," component as the ",n("code",{children:"PaperComponent"})," of the ",n("code",{children:"Dialog"})," component. This will make the entire dialog draggable."]}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"DraggableDialog.js",className:"my-16",iframe:!1,component:wn,raw:On})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Scrolling long content"}),n(m,{className:"text-14 mb-32",component:"div",children:"When dialogs become too long for the user's viewport or device, they scroll."}),d("ul",{className:"space-y-16",children:[d("li",{children:[n("code",{children:"scroll=paper"})," the content of the dialog scrolls within the paper element."]}),d("li",{children:[n("code",{children:"scroll=body"})," the content of the dialog scrolls within the body element."]})]}),n(m,{className:"text-14 mb-32",component:"div",children:"Try the demo below to see what we mean:"}),n(m,{className:"text-14 mb-32",component:"div",children:n(N,{name:"ScrollDialog.js",className:"my-16",iframe:!1,component:kn,raw:Pn})}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Performance"}),d(m,{className:"text-14 mb-32",component:"div",children:["Follow the ",n("a",{href:"/material-ui/react-modal/#performance",children:"Modal performance section"}),"."]}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Limitations"}),d(m,{className:"text-14 mb-32",component:"div",children:["Follow the ",n("a",{href:"/material-ui/react-modal/#limitations",children:"Modal limitations section"}),"."]}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Complementary projects"}),n(m,{className:"text-14 mb-32",component:"div",children:"For more advanced use cases you might be able to take advantage of:"}),n(m,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"material-ui-confirm"}),d(m,{className:"text-14 mb-32",component:"div",children:[n("img",{src:"https://img.shields.io/github/stars/jonatanklosko/material-ui-confirm?style=social&label=Star",alt:"stars"}),n("img",{src:"https://img.shields.io/npm/dm/material-ui-confirm.svg",alt:"npm downloads"})]}),d(m,{className:"text-14 mb-32",component:"div",children:["The package ",n("a",{href:"https://github.com/jonatanklosko/material-ui-confirm/",children:n("code",{children:"material-ui-confirm"})})," provides dialogs for confirming user actions without writing boilerplate code."]}),n(m,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),d(m,{className:"text-14 mb-32",component:"div",children:["Follow the ",n("a",{href:"/material-ui/react-modal/#accessibility",children:"Modal accessibility section"}),"."]})]})}export{Un as default};
