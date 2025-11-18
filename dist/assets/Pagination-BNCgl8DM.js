import{d as e,j as n,bS as r,aC as f,r as d,T as t,s as y,F as R,B as S,aF as N,aK as k}from"./index-CUb6G_Bt.js";import{F as o}from"./FuseExample-DEz02mvt.js";import{D as C}from"./DocumentationPageBreadcrumb-DXZI5dQy.js";import{P as a,a as T,u as B}from"./Pagination-CGdLgvAn.js";import{i as P}from"./interopRequireDefault-BuJbqelY.js";import{r as b}from"./createSvgIcon-DVT4_uAo.js";import{T as I}from"./TablePagination-CnXUJFwe.js";import"./DocumentationNavigation-DaXeTciv.js";import"./ChangelogDoc-Bx1Deje3.js";import"./LastPage-rJVPLUVh.js";import"./TableCell-DwGWS27E.js";function j(){return e(r,{spacing:2,children:[n(a,{count:10}),n(a,{count:10,color:"primary"}),n(a,{count:10,color:"secondary"}),n(a,{count:10,disabled:!0})]})}const z=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}
`;function F(){return e(r,{spacing:2,children:[n(a,{count:10,variant:"outlined"}),n(a,{count:10,variant:"outlined",color:"primary"}),n(a,{count:10,variant:"outlined",color:"secondary"}),n(a,{count:10,variant:"outlined",disabled:!0})]})}const A=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationOutlined() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Stack>
  );
}
`;function L(){return e(r,{spacing:2,children:[n(a,{count:10,shape:"rounded"}),n(a,{count:10,variant:"outlined",shape:"rounded"})]})}const _=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRounded() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Stack>
  );
}
`;function D(){return e(r,{spacing:2,children:[n(a,{count:10,size:"small"}),n(a,{count:10}),n(a,{count:10,size:"large"})]})}const E=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationSize() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} size="small" />
      <Pagination count={10} />
      <Pagination count={10} size="large" />
    </Stack>
  );
}
`;function O(){return e(r,{spacing:2,children:[n(a,{count:10,showFirstButton:!0,showLastButton:!0}),n(a,{count:10,hidePrevButton:!0,hideNextButton:!0})]})}const H=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationButtons() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} showFirstButton showLastButton />
      <Pagination count={10} hidePrevButton hideNextButton />
    </Stack>
  );
}
`;var g={},M=P;Object.defineProperty(g,"__esModule",{value:!0});var v=g.default=void 0,q=M(b()),U=f;v=g.default=(0,q.default)((0,U.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack");var p={},Y=P;Object.defineProperty(p,"__esModule",{value:!0});var x=p.default=void 0,$=Y(b()),J=f;x=p.default=(0,$.default)((0,J.jsx)("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"}),"ArrowForward");function K(){return n(r,{spacing:2,children:n(a,{count:10,renderItem:i=>n(T,{slots:{previous:v,next:x},...i})})})}const W=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function CustomIcons() {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}
`;function X(){return e(r,{spacing:2,children:[n(a,{count:11,defaultPage:6,siblingCount:0}),n(a,{count:11,defaultPage:6})," ",n(a,{count:11,defaultPage:6,siblingCount:0,boundaryCount:2}),n(a,{count:11,defaultPage:6,boundaryCount:2})]})}const G=`import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationRanges() {
  return (
    <Stack spacing={2}>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Pagination count={11} defaultPage={6} /> {/* Default ranges */}
      <Pagination count={11} defaultPage={6} siblingCount={0} boundaryCount={2} />
      <Pagination count={11} defaultPage={6} boundaryCount={2} />
    </Stack>
  );
}
`;function Q(){const[i,m]=d.useState(1);return e(r,{spacing:2,children:[e(t,{children:["Page: ",i]}),n(a,{count:10,page:i,onChange:(u,l)=>{m(l)}})]})}const V=`import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}
`,Z=y("ul")({listStyle:"none",padding:0,margin:0,display:"flex"});function nn(){const{items:i}=B({count:10});return n("nav",{children:n(Z,{children:i.map(({page:m,type:s,selected:u,...l},h)=>{let c=null;return s==="start-ellipsis"||s==="end-ellipsis"?c="…":s==="page"?c=n("button",{type:"button",style:{fontWeight:u?"bold":void 0},...l,children:m}):c=n("button",{type:"button",...l,children:s}),n("li",{children:c},h)})})})}const tn=`import * as React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
});

export default function UsePagination() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? 'bold' : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}
`;function an(){const[i,m]=d.useState(2),[s,u]=d.useState(10);return n(I,{component:"div",count:100,page:i,onPageChange:(c,w)=>{m(w)},rowsPerPage:s,onRowsPerPageChange:c=>{u(parseInt(c.target.value,10)),m(0)}})}const en=`import * as React from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo() {
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={100}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
`;function fn(i){return e(k,{children:[e("div",{className:"flex flex-1 sm:flex-row flex-col items-start justify-center grow-0 md:items-center md:justify-end md:space-between",children:[n(C,{}),n(S,{className:"normal-case",variant:"contained",color:"secondary",component:"a",href:"https://mui.com/components/pagination",target:"_blank",role:"button",size:"small",startIcon:n(R,{size:20,children:"heroicons-outline:external-link"}),children:"Reference"})]}),n(t,{className:"text-32 my-16 font-700",component:"h1",children:"Pagination"}),n(t,{className:"description",children:"The Pagination component enables the user to select a specific page from a range of pages."}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Basic pagination"}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"BasicPagination.js",className:"my-16",iframe:!1,component:j,raw:z})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Outlined pagination"}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationOutlined.js",className:"my-16",iframe:!1,component:F,raw:A})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Rounded pagination"}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationRounded.js",className:"my-16",iframe:!1,component:L,raw:_})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Pagination size"}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationSize.js",className:"my-16",iframe:!1,component:D,raw:E})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Buttons"}),n(t,{className:"text-14 mb-32",component:"div",children:"You can optionally enable first-page and last-page buttons, or disable the previous-page and next-page buttons."}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationButtons.js",className:"my-16",iframe:!1,component:O,raw:H})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Custom icons"}),n(t,{className:"text-14 mb-32",component:"div",children:"It's possible to customize the control icons."}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"CustomIcons.js",className:"my-16",iframe:!1,component:K,raw:W})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Pagination ranges"}),e(t,{className:"text-14 mb-32",component:"div",children:["You can specify how many digits to display either side of current page with the ",n("code",{children:"siblingCount"})," prop, and adjacent to the start and end page number with the ",n("code",{children:"boundaryCount"})," prop."]}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationRanges.js",className:"my-16",iframe:!1,component:X,raw:G})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Controlled pagination"}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"PaginationControlled.js",className:"my-16",iframe:!1,component:Q,raw:V})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:n("code",{children:"usePagination"})}),e(t,{className:"text-14 mb-32",component:"div",children:["For advanced customization use cases, a headless ",n("code",{children:"usePagination()"})," hook is exposed. It accepts almost the same options as the Pagination component minus all the props related to the rendering of JSX. The Pagination component is built on this hook."]}),n(N,{component:"pre",className:"language-jsx",children:` 
import usePagination from '@mui/material/usePagination';
`}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"UsePagination.js",className:"my-16",iframe:!1,component:nn,raw:tn})}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Table pagination"}),e(t,{className:"text-14 mb-32",component:"div",children:["The ",n("code",{children:"Pagination"})," component was designed to paginate a list of arbitrary items when infinite loading isn't used. It's preferred in contexts where SEO is important, for instance, a blog."]}),e(t,{className:"text-14 mb-32",component:"div",children:["For the pagination of a large set of tabular data, you should use the ",n("code",{children:"TablePagination"})," component."]}),n(t,{className:"text-14 mb-32",component:"div",children:n(o,{name:"TablePaginationDemo.js",className:"my-16",iframe:!1,component:an,raw:en})}),e(t,{className:"text-14 mb-32",component:"div",children:[":::warning Note that the ",n("code",{children:"Pagination"})," page prop starts at 1 to match the requirement of including the value in the URL, while the ",n("code",{children:"TablePagination"})," page prop starts at 0 to match the requirement of zero-based JavaScript arrays that comes with rendering a lot of tabular data. :::"]}),e(t,{className:"text-14 mb-32",component:"div",children:["You can learn more about this use case in the ",n("a",{href:"/material-ui/react-table/#custom-pagination-options",children:"table section"})," of the documentation."]}),n(t,{className:"text-24 mt-24 mb-10 font-700",component:"h2",children:"Accessibility"}),n(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"ARIA"}),e(t,{className:"text-14 mb-32",component:"div",children:['The root node has a role of "navigation" and aria-label "pagination navigation" by default. The page items have an aria-label that identifies the purpose of the item ("go to first page", "go to previous page", "go to page 1" etc.). You can override these using the ',n("code",{children:"getItemAriaLabel"})," prop."]}),n(t,{className:"text-16 mt-20 mb-10 font-700",component:"h3",children:"Keyboard"}),n(t,{className:"text-14 mb-32",component:"div",children:'The pagination items are in tab order, with a tabindex of "0".'})]})}export{fn as default};
