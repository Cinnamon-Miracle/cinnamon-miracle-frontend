import{r as y,d as a,j as e,T as t,x as r,bS as N,s as z,aC as c,F as O,B as M,aK as H}from"./index-CUb6G_Bt.js";import{F as o}from"./FuseExample-DEz02mvt.js";import{D as A}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{R as i}from"./Rating-CKZlO3CY.js";import{d as C}from"./Star-D-OFN8Uu.js";import{d as E}from"./Favorite-DrdI2XGU.js";import{d as P}from"./FavoriteBorder-MGjZ6O8P.js";import{i as m}from"./interopRequireDefault-BuJbqelY.js";import{r as d}from"./createSvgIcon-DVT4_uAo.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";function F(){const[n,l]=y.useState(2);return a(r,{sx:{"& > legend":{mt:2}},children:[e(t,{component:"legend",children:"Controlled"}),e(i,{name:"simple-controlled",value:n,onChange:(s,u)=>{l(u)}}),e(t,{component:"legend",children:"Read only"}),e(i,{name:"read-only",value:n,readOnly:!0}),e(t,{component:"legend",children:"Disabled"}),e(i,{name:"disabled",value:n,disabled:!0}),e(t,{component:"legend",children:"No rating given"}),e(i,{name:"no-value",value:null})]})}const G=`import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </Box>
  );
}
`;function L(){return a(N,{spacing:1,children:[e(i,{name:"half-rating",defaultValue:2.5,precision:.5}),e(i,{name:"half-rating-read",defaultValue:2.5,precision:.5,readOnly:!0})]})}const U=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    </Stack>
  );
}
`,T={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function q(n){return`${n} Star${n!==1?"s":""}, ${T[n]}`}function W(){const[n,l]=y.useState(2),[s,u]=y.useState(-1);return a(r,{sx:{width:200,display:"flex",alignItems:"center"},children:[e(i,{name:"hover-feedback",value:n,precision:.5,getLabelText:q,onChange:(D,p)=>{l(p)},onChangeActive:(D,p)=>{u(p)},emptyIcon:e(C,{style:{opacity:.55},fontSize:"inherit"})}),n!==null&&e(r,{sx:{ml:2},children:T[s!==-1?s:n]})]})}const Y=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value: number) {
  return \`\${value} Star\${value !== 1 ? 's' : ''}, \${labels[value]}\`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}
`;function K(){return a(N,{spacing:1,children:[e(i,{name:"size-small",defaultValue:2,size:"small"}),e(i,{name:"size-medium",defaultValue:2}),e(i,{name:"size-large",defaultValue:2,size:"large"})]})}const J=`import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function RatingSize() {
  return (
    <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
      <Rating name="size-medium" defaultValue={2} />
      <Rating name="size-large" defaultValue={2} size="large" />
    </Stack>
  );
}
`,Q=z(i)({"& .MuiRating-iconFilled":{color:"#ff6d75"},"& .MuiRating-iconHover":{color:"#ff3d47"}});function X(){return a(r,{sx:{"& > legend":{mt:2}},children:[e(t,{component:"legend",children:"Custom icon and color"}),e(Q,{name:"customized-color",defaultValue:2,getLabelText:n=>`${n} Heart${n!==1?"s":""}`,precision:.5,icon:e(E,{fontSize:"inherit"}),emptyIcon:e(P,{fontSize:"inherit"})}),e(t,{component:"legend",children:"10 stars"}),e(i,{name:"customized-10",defaultValue:2,max:10})]})}const Z=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value: number) => \`\${value} Heart\${value !== 1 ? 's' : ''}\`}
        precision={0.5}
        icon={<FavoriteIcon fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
      />
      <Typography component="legend">10 stars</Typography>
      <Rating name="customized-10" defaultValue={2} max={10} />
    </Box>
  );
}
`;var R={},ee=m;Object.defineProperty(R,"__esModule",{value:!0});var V=R.default=void 0,te=ee(d()),f=c;V=R.default=(0,te.default)([(0,f.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,f.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,f.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-6c-2.33 0-4.32 1.45-5.12 3.5h1.67c.69-1.19 1.97-2 3.45-2s2.75.81 3.45 2h1.67c-.8-2.05-2.79-3.5-5.12-3.5"},"2")],"SentimentVeryDissatisfied");var b={},ne=m;Object.defineProperty(b,"__esModule",{value:!0});var j=b.default=void 0,ae=ne(d()),h=c;j=b.default=(0,ae.default)([(0,h.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,h.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,h.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-3.5c.73 0 1.39.19 1.97.53.12-.14.86-.98 1.01-1.14-.85-.56-1.87-.89-2.98-.89-1.11 0-2.13.33-2.99.88.97 1.09.01.02 1.01 1.14.59-.33 1.25-.52 1.98-.52"},"2")],"SentimentDissatisfied");var S={},ie=m;Object.defineProperty(S,"__esModule",{value:!0});var B=S.default=void 0,oe=ie(d()),g=c;B=S.default=(0,oe.default)([(0,g.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,g.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,g.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-4c-.73 0-1.38-.18-1.96-.52-.12.14-.86.98-1.01 1.15.86.55 1.87.87 2.97.87 1.11 0 2.12-.33 2.98-.88-.97-1.09-.01-.02-1.01-1.15-.59.35-1.24.53-1.97.53"},"2")],"SentimentSatisfied");var I={},re=m;Object.defineProperty(I,"__esModule",{value:!0});var _=I.default=void 0,le=re(d()),v=c;_=I.default=(0,le.default)([(0,v.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,v.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,v.jsx)("path",{d:"M12 16c-1.48 0-2.75-.81-3.45-2H6.88c.8 2.05 2.79 3.5 5.12 3.5s4.32-1.45 5.12-3.5h-1.67c-.69 1.19-1.97 2-3.45 2m-.01-14C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8"},"2")],"SentimentSatisfiedAltOutlined");var w={},se=m;Object.defineProperty(w,"__esModule",{value:!0});var $=w.default=void 0,ce=se(d()),x=c;$=w.default=(0,ce.default)([(0,x.jsx)("circle",{cx:"15.5",cy:"9.5",r:"1.5"},"0"),(0,x.jsx)("circle",{cx:"8.5",cy:"9.5",r:"1.5"},"1"),(0,x.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4z"},"2")],"SentimentVerySatisfied");const me=z(i)(({theme:n})=>({"& .MuiRating-iconEmpty .MuiSvgIcon-root":{color:n.palette.action.disabled}})),k={1:{icon:e(V,{color:"error"}),label:"Very Dissatisfied"},2:{icon:e(j,{color:"error"}),label:"Dissatisfied"},3:{icon:e(B,{color:"warning"}),label:"Neutral"},4:{icon:e(_,{color:"success"}),label:"Satisfied"},5:{icon:e($,{color:"success"}),label:"Very Satisfied"}};function de(n){const{value:l,...s}=n;return e("span",{...s,children:k[l].icon})}function ue(){return e(me,{name:"highlight-selected-only",defaultValue:2,IconContainerComponent:de,getLabelText:n=>k[n].label,highlightSelectedOnly:!0})}const pe=`import * as React from 'react';
import { styled } from '@mui/material/styles';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon color="error" />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon color="error" />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon color="warning" />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon color="success" />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon color="success" />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

export default function RadioGroupRating() {
  return (
    <StyledRating
      name="highlight-selected-only"
      defaultValue={2}
      IconContainerComponent={IconContainer}
      getLabelText={(value: number) => customIcons[value].label}
      highlightSelectedOnly
    />
  );
}
`,fe={.5:"Useless",1:"Useless+",1.5:"Poor",2:"Poor+",2.5:"Ok",3:"Ok+",3.5:"Good",4:"Good+",4.5:"Excellent",5:"Excellent+"};function he(){return a(r,{sx:{width:200,display:"flex",alignItems:"center"},children:[e(i,{name:"text-feedback",value:3.5,readOnly:!0,precision:.5,emptyIcon:e(C,{style:{opacity:.55},fontSize:"inherit"})}),e(r,{sx:{ml:2},children:fe[3.5]})]})}const ge=`import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function TextRating() {
  const value = 3.5;

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
`;function Te(n){return a(H,{children:[a("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[e(A,{}),e(M,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/rating",target:"_blank",role:"button",size:"small",startIcon:e(O,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),e(t,{className:"text-32 my-16 font-700",component:"h1",children:"Rating"}),e(t,{className:"description",children:"Ratings provide insight regarding others' opinions and experiences, and can allow the user to submit a rating of their own."}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic rating"}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"BasicRating.js",className:"my-16",iframe:!1,component:F,raw:G})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Rating precision"}),a(t,{className:"text-14 mb-32",component:"div",children:["The rating can display any float number with the ",e("code",{children:"value"})," prop. Use the ",e("code",{children:"precision"})," prop to define the minimum increment value change allowed."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"HalfRating.js",className:"my-16",iframe:!1,component:L,raw:U})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Hover feedback"}),a(t,{className:"text-14 mb-32",component:"div",children:["You can display a label on hover to help the user pick the correct rating value. The demo uses the ",e("code",{children:"onChangeActive"})," prop."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"HoverRating.js",className:"my-16",iframe:!1,component:W,raw:Y})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Sizes"}),a(t,{className:"text-14 mb-32",component:"div",children:["For larger or smaller ratings use the ",e("code",{children:"size"})," prop."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"RatingSize.js",className:"my-16",iframe:!1,component:K,raw:J})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Customization"}),a(t,{className:"text-14 mb-32",component:"div",children:["Here are some examples of customizing the component. You can learn more about this in the ",e("a",{href:"/material-ui/customization/how-to-customize/",children:"overrides documentation page"}),"."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"CustomizedRating.js",className:"my-16",iframe:!1,component:X,raw:Z})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Radio group"}),a(t,{className:"text-14 mb-32",component:"div",children:["The rating is implemented with a radio group, set ",e("code",{children:"highlightSelectedOnly"})," to restore the natural behavior."]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"RadioGroupRating.js",className:"my-16",iframe:!1,component:ue,raw:pe})}),e(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),a(t,{className:"text-14 mb-32",component:"div",children:["(",e("a",{href:"https://www.w3.org/WAI/tutorials/forms/custom-controls/#a-star-rating",children:"WAI tutorial"}),")"]}),e(t,{className:"text-14 mb-32",component:"div",children:"The accessibility of this component relies on:"}),a("ul",{className:"space-y-16",children:[a("li",{children:["A radio group with its fields visually hidden. It contains six radio buttons, one for each star, and another for 0 stars that is checked by default. Be sure to provide a value for the ",e("code",{children:"name"})," prop that is unique to the parent form."]}),a("li",{children:['Labels for the radio buttons containing actual text ("1 Star", "2 Stars", …). Be sure to provide a suitable function to the ',e("code",{children:"getLabelText"})," prop when the page is in a language other than English. You can use the ",e("a",{href:"https://mui.com/material-ui/guides/localization/",children:"included locales"}),", or provide your own."]}),a("li",{children:["A visually distinct appearance for the rating icons. By default, the rating component uses both a difference of color and shape (filled and empty icons) to indicate the value. In the event that you are using color as the only means to indicate the value, the information should also be also displayed as text, as in this demo. This is important to match ",e("a",{href:"https://www.w3.org/TR/WCAG21/#use-of-color",children:"success Criterion 1.4.1"})," of WCAG2.1."]})]}),e(t,{className:"text-14 mb-32",component:"div",children:e(o,{name:"TextRating.js",className:"my-16",iframe:!1,component:he,raw:ge})}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(t,{className:"text-14 mb-32",component:"div",children:'The read only rating has a role of "img", and an aria-label that describes the displayed rating.'}),e(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),e(t,{className:"text-14 mb-32",component:"div",children:"Because the rating component uses radio buttons, keyboard interaction follows the native browser behavior. Tab will focus the current rating, and cursor keys control the selected rating."}),e(t,{className:"text-14 mb-32",component:"div",children:"The read only rating is not focusable."})]})}export{Te as default};
