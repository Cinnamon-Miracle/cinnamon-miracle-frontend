import{aM as ge,aL as ve,s as O,T as ee,r as P,aP as oe,aQ as te,aC as b,aO as g,q as Te,aR as me,B as qe,v as yt,bg as Ut,bj as Wt,cn as Dt,aJ as Le,au as Ye,bb as wt,a_ as Pt,be as Ge,am as ot,aA as qt,d7 as Yt,bN as dt,b0 as o,z as Gt,a$ as st,D as mt,b1 as Kt,aj as he,ak as Jt,an as Qt,d as E,j as v,al as Re,aG as ze,cq as He,bT as Ze,c6 as Xt,cr as Ee,cs as Zt,ct as pt,aI as eo,k as to,F as St,_ as oo,aK as so}from"./index-CUb6G_Bt.js";import{F as ao}from"./FuseExample-DEz02mvt.js";import{A as no}from"./Autocomplete-CzJD5zAu.js";import{o as ro,p as Qe,v as io,u as De,a as Se,q as ye,g as Ve,S as lo,t as co,w as at,x as uo,c as Mt,y as nt,z as rt,A as it,B as lt,E as Ke,F as Nt,M as $e,s as mo,f as po,b as Ft,e as Je,h as fo,i as ho,G as Ae,r as ft,H as ht,I as Pe,J as We,K as bo,T as go,P as vo,d as To,L as Co,V as xo,j as _e,C as ko,k as Rt,l as yo,m as It,n as Do,D as wo}from"./useMobilePicker-mT-yu8Tn.js";import"./Close-D7hDEaMs.js";import"./ListSubheader-D7NFcaYb.js";function Po(e){return ve("MuiPickersToolbarText",e)}const bt=ge("MuiPickersToolbarText",["root","selected"]),So=["className","selected","value"],Mo=e=>{const{classes:t,selected:n}=e;return me({root:["root",n&&"selected"]},Po,t)},No=O(ee,{name:"MuiPickersToolbarText",slot:"Root",overridesResolver:(e,t)=>[t.root,{[`&.${bt.selected}`]:t.selected}]})(({theme:e})=>({transition:e.transitions.create("color"),color:(e.vars||e).palette.text.secondary,[`&.${bt.selected}`]:{color:(e.vars||e).palette.text.primary}})),Vt=P.forwardRef(function(t,n){const s=oe({props:t,name:"MuiPickersToolbarText"}),{className:a,value:r}=s,i=te(s,So),u=Mo(s);return b.jsx(No,g({ref:n,className:Te(a,u.root),component:"span"},i,{children:r}))}),Fo=["align","className","selected","typographyClassName","value","variant","width"],Ro=e=>{const{classes:t}=e;return me({root:["root"]},ro,t)},Io=O(qe,{name:"MuiPickersToolbarButton",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:0,minWidth:16,textTransform:"none"}),we=P.forwardRef(function(t,n){const s=oe({props:t,name:"MuiPickersToolbarButton"}),{align:a,className:r,selected:i,typographyClassName:u,value:l,variant:m,width:f}=s,d=te(s,Fo),c=Ro(s);return b.jsx(Io,g({variant:"text",ref:n,className:Te(r,c.root)},f?{sx:{width:f}}:{},d,{children:b.jsx(Vt,{align:a,className:u,variant:m,value:l,selected:i})}))}),Vo=({adapter:e,value:t,props:n})=>{if(t===null)return null;const{minTime:s,maxTime:a,minutesStep:r,shouldDisableClock:i,shouldDisableTime:u,disableIgnoringDatePartForTimeValidation:l=!1,disablePast:m,disableFuture:f,timezone:d}=n,c=e.utils.dateWithTimezone(void 0,d),h=Qe(l,e.utils);switch(!0){case!e.utils.isValid(t):return"invalidDate";case!!(s&&h(s,t)):return"minTime";case!!(a&&h(t,a)):return"maxTime";case!!(f&&e.utils.isAfter(t,c)):return"disableFuture";case!!(m&&e.utils.isBefore(t,c)):return"disablePast";case!!(u&&u(t,"hours")):return"shouldDisableTime-hours";case!!(u&&u(t,"minutes")):return"shouldDisableTime-minutes";case!!(u&&u(t,"seconds")):return"shouldDisableTime-seconds";case!!(i&&i(e.utils.getHours(t),"hours")):return"shouldDisableClock-hours";case!!(i&&i(e.utils.getMinutes(t),"minutes")):return"shouldDisableClock-minutes";case!!(i&&i(e.utils.getSeconds(t),"seconds")):return"shouldDisableClock-seconds";case!!(r&&e.utils.getMinutes(t)%r!==0):return"minutesStep";default:return null}},ct=({props:e,value:t,adapter:n})=>{const s=io({adapter:n,value:t,props:e});return s!==null?s:Vo({adapter:n,value:t,props:e})},jo=`import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import _ from '@lodash';
import clsx from 'clsx';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { DateTimePicker } from '@mui/x-date-pickers';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

let renderCount = 0;

const options = [
	{
		value: 'chocolate',
		label: 'Chocolate'
	},
	{
		value: 'strawberry',
		label: 'Strawberry'
	},
	{
		value: 'vanilla',
		label: 'Vanilla'
	}
];

const defaultValues = {
	Native: '',
	TextField: '',
	Select: '',
	Autocomplete: [],
	Checkbox: false,
	Switch: false,
	RadioGroup: '',
	DateTimePicker: ''
};

/**
 * Form Validation Schema
 */
const schema = z.object({
	TextField: z.string().nonempty('You must enter a value'),
	Native: z.string().nonempty('You must enter a value'),
	Select: z
		.string()
		.nonempty('You must select a value')
		.refine((val) => ['20', '30'].includes(val), 'Select 20 or 30.'),
	Checkbox: z.boolean().refine((val) => val === true, 'You must check.'),
	Switch: z.boolean().refine((val) => val === true, 'You must turn it on.'),
	RadioGroup: z.string().refine((val) => val === 'female', 'You must select female.'),
	Autocomplete: z.array(z.string()).min(2, 'Select at least two.'),
	DateTimePicker: z.string().refine((val) => val === null || val.trim().length > 0, 'You must select a date')
});

/**
 * Simple Form Example
 */
function SimpleFormExample() {
	const { handleSubmit, register, reset, control, watch, formState } = useForm({
		defaultValues,
		mode: 'all',
		resolver: zodResolver(schema)
	});

	const { isValid, dirtyFields, errors, touchedFields } = formState;

	renderCount += 1;

	const data = watch();

	return (
		<div className="flex w-full max-w-screen-md justify-start items-start">
			<form
				className="w-1/2"
				// eslint-disable-next-line no-console
				onSubmit={handleSubmit((_data) => console.info(_data))}
			>
				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">Native Input:</Typography>

					<input
						className={clsx('border-1 outline-none rounded-8 p-8', !!errors.Native && 'border-red')}
						{...register('Native')}
						required
					/>

					{!!errors.Native && (
						<Typography
							className="px-4 py-8 font-medium text-14"
							color="error"
						>
							{errors?.Native?.message}
						</Typography>
					)}
				</div>

				<div className="mt-48 mb-16">
					<Controller
						name="Checkbox"
						control={control}
						render={({ field: { onChange, value, onBlur, ref } }) => (
							<FormControl
								error={!!errors.Checkbox}
								required
							>
								<FormLabel
									className="font-medium text-14"
									component="legend"
								>
									MUI Checkbox
								</FormLabel>
								<FormControlLabel
									label="I agree"
									control={
										<Checkbox
											checked={value}
											onBlur={onBlur}
											onChange={(ev) => onChange(ev.target.checked)}
											inputRef={ref}
											required
										/>
									}
								/>
								<FormHelperText>{errors?.Checkbox?.message}</FormHelperText>
							</FormControl>
						)}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Controller
						render={({ field }) => (
							<FormControl
								error={!!errors.RadioGroup}
								required
							>
								<FormLabel
									className="font-medium text-14"
									component="legend"
								>
									Radio Group
								</FormLabel>
								<RadioGroup
									{...field}
									aria-label="gender"
									name="gender1"
								>
									<FormControlLabel
										value="female"
										control={<Radio />}
										label="Female"
									/>
									<FormControlLabel
										value="male"
										control={<Radio />}
										label="Male"
									/>
								</RadioGroup>
								<FormHelperText>{errors?.RadioGroup?.message}</FormHelperText>
							</FormControl>
						)}
						name="RadioGroup"
						control={control}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Controller
						render={({ field }) => (
							<TextField
								{...field}
								label="MUI TextField"
								variant="outlined"
								error={!!errors.TextField}
								helperText={errors?.TextField?.message}
								required
								fullWidth
							/>
						)}
						name="TextField"
						control={control}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Controller
						render={({ field }) => (
							<FormControl
								error={!!errors.Select}
								required
								fullWidth
							>
								<FormLabel
									className="font-medium text-14"
									component="legend"
								>
									MUI Select
								</FormLabel>
								<Select
									{...field}
									variant="outlined"
									fullWidth
								>
									<MenuItem value="10">Ten (10)</MenuItem>
									<MenuItem value="20">Twenty (20)</MenuItem>
									<MenuItem value="30">Thirty (30)</MenuItem>
								</Select>
								<FormHelperText>{errors?.Select?.message}</FormHelperText>
							</FormControl>
						)}
						name="Select"
						control={control}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Controller
						name="Switch"
						control={control}
						render={({ field: { onChange, value, ref, onBlur } }) => (
							<FormControl
								required
								error={!!errors.Switch}
							>
								<FormLabel
									className="font-medium text-14"
									component="legend"
								>
									MUI Switch
								</FormLabel>
								<Switch
									checked={value}
									onBlur={onBlur}
									onChange={(ev) => onChange(ev.target.checked)}
									inputRef={ref}
									required
								/>
								<FormHelperText>{errors?.Switch?.message}</FormHelperText>
							</FormControl>
						)}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">Autocomplete</Typography>
					<Controller
						name="Autocomplete"
						control={control}
						defaultValue={[]}
						render={({ field: { onChange, value, onBlur, ref } }) => (
							<Autocomplete
								className="mt-8 mb-16"
								multiple
								freeSolo
								options={options}
								value={value}
								onChange={(event, newValue) => {
									onChange(newValue);
								}}
								renderInput={(params) => (
									<TextField
										{...params}
										placeholder="Select multiple tags"
										label="Tags"
										variant="outlined"
										InputLabelProps={{
											shrink: true
										}}
										error={!!errors.Autocomplete}
										helperText={errors?.Autocomplete?.message}
										onBlur={onBlur}
										inputRef={ref}
									/>
								)}
							/>
						)}
					/>
				</div>

				<div className="mt-48 mb-16">
					<Typography className="mb-24 font-medium text-14">DateTimePicker</Typography>

					<Controller
						name="DateTimePicker"
						control={control}
						render={({ field: { onChange, value } }) => (
							<DateTimePicker
								value={new Date(value)}
								onChange={onChange}
								slotProps={{
									textField: {
										id: 'birthday',
										label: 'Birthday',
										InputLabelProps: {
											shrink: true
										},
										fullWidth: true,
										variant: 'outlined',
										error: !!errors.DateTimePicker,
										helperText: errors?.DateTimePicker?.message
									},
									inputAdornment: {
										position: 'start',
										children: <FuseSvgIcon size={20}>heroicons-solid:cake</FuseSvgIcon>
									}
								}}
							/>
						)}
					/>
				</div>

				<div className="flex my-48 items-center">
					<Button
						className="mx-8"
						variant="contained"
						color="secondary"
						type="submit"
						disabled={_.isEmpty(dirtyFields) || !isValid}
					>
						Submit
					</Button>

					<Button
						className="mx-8"
						type="button"
						onClick={() => {
							reset(defaultValues);
						}}
					>
						Reset Form
					</Button>
				</div>
			</form>

			<div className="w-1/2 my-48 p-24">
				<div className="mb-12">
					<Typography>Is Valid: {isValid ? 'true' : 'false'}</Typography>
				</div>

				<div className="mb-12">
					<Typography>Form data</Typography>
				</div>

				<div className="mb-12">
					<pre className="language-js p-24 w-400">{JSON.stringify(data, null, 2)}</pre>
				</div>

				<div className="mb-12">
					<Typography>Touched fields</Typography>

					<pre className="language-js p-24 w-400">{JSON.stringify(touchedFields, null, 2)}</pre>
				</div>

				<div className="mb-12">
					<Typography
						className="mt-16 font-medium text-12 italic"
						color="text.secondary"
					>
						Render Count: {renderCount}
					</Typography>
				</div>
			</div>
		</div>
	);
}

export default SimpleFormExample;
`;function _o(e){return ve("MuiTimeClock",e)}ge("MuiTimeClock",["root","arrowSwitcher"]);const Oe=220,be=36,Be={x:Oe/2,y:Oe/2},jt={x:Be.x,y:0},Oo=jt.x-Be.x,$o=jt.y-Be.y,Lo=e=>e*(180/Math.PI),_t=(e,t,n)=>{const s=t-Be.x,a=n-Be.y,r=Math.atan2(Oo,$o)-Math.atan2(s,a);let i=Lo(r);i=Math.round(i/e)*e,i%=360;const u=Math.floor(i/e)||0,l=s**2+a**2,m=Math.sqrt(l);return{value:u,distance:m}},Ao=(e,t,n=1)=>{const s=n*6;let{value:a}=_t(s,e,t);return a=a*n%60,a},Bo=(e,t,n)=>{const{value:s,distance:a}=_t(30,e,t);let r=s||12;return n?r%=12:a<Oe/2-be&&(r+=12,r%=24),r};function zo(e){return ve("MuiClockPointer",e)}ge("MuiClockPointer",["root","thumb"]);const Ho=["className","hasSelected","isInner","type","viewValue"],Eo=e=>{const{classes:t}=e;return me({root:["root"],thumb:["thumb"]},zo,t)},Uo=O("div",{name:"MuiClockPointer",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>g({width:2,backgroundColor:(e.vars||e).palette.primary.main,position:"absolute",left:"calc(50% - 1px)",bottom:"50%",transformOrigin:"center bottom 0px"},t.shouldAnimate&&{transition:e.transitions.create(["transform","height"])})),Wo=O("div",{name:"MuiClockPointer",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e,ownerState:t})=>g({width:4,height:4,backgroundColor:(e.vars||e).palette.primary.contrastText,borderRadius:"50%",position:"absolute",top:-21,left:`calc(50% - ${be/2}px)`,border:`${(be-4)/2}px solid ${(e.vars||e).palette.primary.main}`,boxSizing:"content-box"},t.hasSelected&&{backgroundColor:(e.vars||e).palette.primary.main}));function qo(e){const t=oe({props:e,name:"MuiClockPointer"}),{className:n,isInner:s,type:a,viewValue:r}=t,i=te(t,Ho),u=P.useRef(a);P.useEffect(()=>{u.current=a},[a]);const l=g({},t,{shouldAnimate:u.current!==a}),m=Eo(l),f=()=>{let c=360/(a==="hours"?12:60)*r;return a==="hours"&&r>12&&(c-=360),{height:Math.round((s?.26:.4)*Oe),transform:`rotateZ(${c}deg)`}};return b.jsx(Uo,g({style:f(),className:Te(n,m.root),ownerState:l},i,{children:b.jsx(Wo,{ownerState:l,className:m.thumb})}))}function Yo(e){return ve("MuiClock",e)}ge("MuiClock",["root","clock","wrapper","squareMask","pin","amButton","pmButton","meridiemText"]);const Go=e=>{const{classes:t}=e;return me({root:["root"],clock:["clock"],wrapper:["wrapper"],squareMask:["squareMask"],pin:["pin"],amButton:["amButton"],pmButton:["pmButton"],meridiemText:["meridiemText"]},Yo,t)},Ko=O("div",{name:"MuiClock",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"flex",justifyContent:"center",alignItems:"center",margin:e.spacing(2)})),Jo=O("div",{name:"MuiClock",slot:"Clock",overridesResolver:(e,t)=>t.clock})({backgroundColor:"rgba(0,0,0,.07)",borderRadius:"50%",height:220,width:220,flexShrink:0,position:"relative",pointerEvents:"none"}),Qo=O("div",{name:"MuiClock",slot:"Wrapper",overridesResolver:(e,t)=>t.wrapper})({"&:focus":{outline:"none"}}),Xo=O("div",{name:"MuiClock",slot:"SquareMask",overridesResolver:(e,t)=>t.squareMask})(({ownerState:e})=>g({width:"100%",height:"100%",position:"absolute",pointerEvents:"auto",outline:0,touchAction:"none",userSelect:"none"},e.disabled?{}:{"@media (pointer: fine)":{cursor:"pointer",borderRadius:"50%"},"&:active":{cursor:"move"}})),Zo=O("div",{name:"MuiClock",slot:"Pin",overridesResolver:(e,t)=>t.pin})(({theme:e})=>({width:6,height:6,borderRadius:"50%",backgroundColor:(e.vars||e).palette.primary.main,position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"})),es=O(yt,{name:"MuiClock",slot:"AmButton",overridesResolver:(e,t)=>t.amButton})(({theme:e,ownerState:t})=>g({zIndex:1,position:"absolute",bottom:8,left:8,paddingLeft:4,paddingRight:4,width:be},t.meridiemMode==="am"&&{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:hover":{backgroundColor:(e.vars||e).palette.primary.light}})),ts=O(yt,{name:"MuiClock",slot:"PmButton",overridesResolver:(e,t)=>t.pmButton})(({theme:e,ownerState:t})=>g({zIndex:1,position:"absolute",bottom:8,right:8,paddingLeft:4,paddingRight:4,width:be},t.meridiemMode==="pm"&&{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:hover":{backgroundColor:(e.vars||e).palette.primary.light}})),gt=O(ee,{name:"MuiClock",slot:"meridiemText",overridesResolver:(e,t)=>t.meridiemText})({overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"});function os(e){const t=oe({props:e,name:"MuiClock"}),{ampm:n,ampmInClock:s,autoFocus:a,children:r,value:i,handleMeridiemChange:u,isTimeDisabled:l,meridiemMode:m,minutesStep:f=1,onChange:d,selectedId:c,type:h,viewValue:y,disabled:p,readOnly:k,className:D}=t,N=t,S=De(),V=Se(),w=P.useRef(!1),T=Go(N),L=l(y,h),F=!n&&h==="hours"&&(y<1||y>12),I=(j,H)=>{p||k||l(j,h)||d(j,H)},A=(j,H)=>{let{offsetX:ae,offsetY:Q}=j;if(ae===void 0){const q=j.target.getBoundingClientRect();ae=j.changedTouches[0].clientX-q.left,Q=j.changedTouches[0].clientY-q.top}const Z=h==="seconds"||h==="minutes"?Ao(ae,Q,f):Bo(ae,Q,!!n);I(Z,H)},B=j=>{w.current=!0,A(j,"shallow")},U=j=>{w.current&&(A(j,"finish"),w.current=!1)},W=j=>{j.buttons>0&&A(j.nativeEvent,"shallow")},G=j=>{w.current&&(w.current=!1),A(j.nativeEvent,"finish")},K=P.useMemo(()=>h==="hours"?!0:y%5===0,[h,y]),J=h==="minutes"?f:1,se=P.useRef(null);Ut(()=>{a&&se.current.focus()},[a]);const Ce=j=>{if(!w.current)switch(j.key){case"Home":I(0,"partial"),j.preventDefault();break;case"End":I(h==="minutes"?59:23,"partial"),j.preventDefault();break;case"ArrowUp":I(y+J,"partial"),j.preventDefault();break;case"ArrowDown":I(y-J,"partial"),j.preventDefault();break}};return b.jsxs(Ko,{className:Te(D,T.root),children:[b.jsxs(Jo,{className:T.clock,children:[b.jsx(Xo,{onTouchMove:B,onTouchEnd:U,onMouseUp:G,onMouseMove:W,ownerState:{disabled:p},className:T.squareMask}),!L&&b.jsxs(P.Fragment,{children:[b.jsx(Zo,{className:T.pin}),i!=null&&b.jsx(qo,{type:h,viewValue:y,isInner:F,hasSelected:K})]}),b.jsx(Qo,{"aria-activedescendant":c,"aria-label":V.clockLabelText(h,i,S),ref:se,role:"listbox",onKeyDown:Ce,tabIndex:0,className:T.wrapper,children:r})]}),n&&s&&b.jsxs(P.Fragment,{children:[b.jsx(es,{onClick:k?void 0:()=>u("am"),disabled:p||m===null,ownerState:N,className:T.amButton,title:ye(S,"am"),children:b.jsx(gt,{variant:"caption",className:T.meridiemText,children:ye(S,"am")})}),b.jsx(ts,{disabled:p||m===null,onClick:k?void 0:()=>u("pm"),ownerState:N,className:T.pmButton,title:ye(S,"pm"),children:b.jsx(gt,{variant:"caption",className:T.meridiemText,children:ye(S,"pm")})})]})]})}function ss(e){return ve("MuiClockNumber",e)}const Ue=ge("MuiClockNumber",["root","selected","disabled"]),as=["className","disabled","index","inner","label","selected"],ns=e=>{const{classes:t,selected:n,disabled:s}=e;return me({root:["root",n&&"selected",s&&"disabled"]},ss,t)},rs=O("span",{name:"MuiClockNumber",slot:"Root",overridesResolver:(e,t)=>[t.root,{[`&.${Ue.disabled}`]:t.disabled},{[`&.${Ue.selected}`]:t.selected}]})(({theme:e,ownerState:t})=>g({height:be,width:be,position:"absolute",left:`calc((100% - ${be}px) / 2)`,display:"inline-flex",justifyContent:"center",alignItems:"center",borderRadius:"50%",color:(e.vars||e).palette.text.primary,fontFamily:e.typography.fontFamily,"&:focused":{backgroundColor:(e.vars||e).palette.background.paper},[`&.${Ue.selected}`]:{color:(e.vars||e).palette.primary.contrastText},[`&.${Ue.disabled}`]:{pointerEvents:"none",color:(e.vars||e).palette.text.disabled}},t.inner&&g({},e.typography.body2,{color:(e.vars||e).palette.text.secondary})));function Ot(e){const t=oe({props:e,name:"MuiClockNumber"}),{className:n,disabled:s,index:a,inner:r,label:i,selected:u}=t,l=te(t,as),m=t,f=ns(m),d=a%12/12*Math.PI*2-Math.PI/2,c=(Oe-be-2)/2*(r?.65:1),h=Math.round(Math.cos(d)*c),y=Math.round(Math.sin(d)*c);return b.jsx(rs,g({className:Te(n,f.root),"aria-disabled":s?!0:void 0,"aria-selected":u?!0:void 0,role:"option",style:{transform:`translate(${h}px, ${y+(Oe-be)/2}px`},ownerState:m},l,{children:i}))}const is=({ampm:e,value:t,getClockNumberText:n,isDisabled:s,selectedId:a,utils:r})=>{const i=t?r.getHours(t):null,u=[],l=e?1:0,m=e?12:23,f=d=>i===null?!1:e?d===12?i===12||i===0:i===d||i-12===d:i===d;for(let d=l;d<=m;d+=1){let c=d.toString();d===0&&(c="00");const h=!e&&(d===0||d>12);c=r.formatNumber(c);const y=f(d);u.push(b.jsx(Ot,{id:y?a:void 0,index:d,inner:h,selected:y,disabled:s(d),label:c,"aria-label":n(c)},d))}return u},vt=({utils:e,value:t,isDisabled:n,getClockNumberText:s,selectedId:a})=>{const r=e.formatNumber;return[[5,r("05")],[10,r("10")],[15,r("15")],[20,r("20")],[25,r("25")],[30,r("30")],[35,r("35")],[40,r("40")],[45,r("45")],[50,r("50")],[55,r("55")],[0,r("00")]].map(([i,u],l)=>{const m=i===t;return b.jsx(Ot,{label:u,id:m?a:void 0,index:l+1,inner:!1,disabled:n(i),selected:m,"aria-label":s(u)},i)})},ut=({value:e,referenceDate:t,utils:n,props:s,timezone:a})=>{const r=P.useMemo(()=>Ve.getInitialReferenceValue({value:e,utils:n,props:s,referenceDate:t,granularity:lo.day,timezone:a,getTodayDate:()=>co(n,a,"date")}),[]);return e??r},ls=["ampm","ampmInClock","autoFocus","components","componentsProps","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableClock","shouldDisableTime","showViewSwitcher","onChange","view","views","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","timezone"],cs=e=>{const{classes:t}=e;return me({root:["root"],arrowSwitcher:["arrowSwitcher"]},_o,t)},us=O(at,{name:"MuiTimeClock",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"flex",flexDirection:"column",position:"relative"}),ds=O(uo,{name:"MuiTimeClock",slot:"ArrowSwitcher",overridesResolver:(e,t)=>t.arrowSwitcher})({position:"absolute",right:12,top:15}),ms=["hours","minutes"],ps=P.forwardRef(function(t,n){const s=De(),a=oe({props:t,name:"MuiTimeClock"}),{ampm:r=s.is12HourCycleInCurrentLocale(),ampmInClock:i=!1,autoFocus:u,components:l,componentsProps:m,slots:f,slotProps:d,value:c,defaultValue:h,referenceDate:y,disableIgnoringDatePartForTimeValidation:p=!1,maxTime:k,minTime:D,disableFuture:N,disablePast:S,minutesStep:V=1,shouldDisableClock:w,shouldDisableTime:T,showViewSwitcher:L,onChange:F,view:I,views:A=ms,openTo:B,onViewChange:U,focusedView:W,onFocusedViewChange:G,className:K,disabled:J,readOnly:se,timezone:Ce}=a,j=te(a,ls),H=f??Mt(l),ae=d??m,{value:Q,handleValueChange:Z,timezone:q}=nt({name:"TimeClock",timezone:Ce,value:c,defaultValue:h,onChange:F,valueManager:Ve}),R=ut({value:Q,referenceDate:y,utils:s,props:a,timezone:q}),$=Se(),pe=rt(q),{view:ne,setView:ue,previousView:re,nextView:fe,setValueAndGoToNextView:le}=it({view:I,views:A,openTo:B,onViewChange:U,onChange:Z,focusedView:W,onFocusedViewChange:G}),{meridiemMode:X,handleMeridiemChange:xe}=lt(R,r,le),Y=P.useCallback((C,x)=>{const _=Qe(p,s),de=x==="hours"||x==="minutes"&&A.includes("seconds"),Ne=({start:M,end:z})=>!(D&&_(D,z)||k&&_(M,k)||N&&_(M,pe)||S&&_(pe,de?z:M)),Fe=(M,z=1)=>{if(M%z!==0||w!=null&&w(M,x))return!1;if(T)switch(x){case"hours":return!T(s.setHours(R,M),"hours");case"minutes":return!T(s.setMinutes(R,M),"minutes");case"seconds":return!T(s.setSeconds(R,M),"seconds");default:return!1}return!0};switch(x){case"hours":{const M=Ke(C,X,r),z=s.setHours(R,M),ke=s.setSeconds(s.setMinutes(z,0),0),Xe=s.setSeconds(s.setMinutes(z,59),59);return!Ne({start:ke,end:Xe})||!Fe(M)}case"minutes":{const M=s.setMinutes(R,C),z=s.setSeconds(M,0),ke=s.setSeconds(M,59);return!Ne({start:z,end:ke})||!Fe(C,V)}case"seconds":{const M=s.setSeconds(R,C);return!Ne({start:M,end:M})||!Fe(C)}default:throw new Error("not supported")}},[r,R,p,k,X,D,V,w,T,s,N,S,pe,A]),ie=Wt(),Me=P.useMemo(()=>{switch(ne){case"hours":{const C=(x,_)=>{const de=Ke(x,X,r);le(s.setHours(R,de),_)};return{onChange:C,viewValue:s.getHours(R),children:is({value:Q,utils:s,ampm:r,onChange:C,getClockNumberText:$.hoursClockNumberText,isDisabled:x=>J||Y(x,"hours"),selectedId:ie})}}case"minutes":{const C=s.getMinutes(R),x=(_,de)=>{le(s.setMinutes(R,_),de)};return{viewValue:C,onChange:x,children:vt({utils:s,value:C,onChange:x,getClockNumberText:$.minutesClockNumberText,isDisabled:_=>J||Y(_,"minutes"),selectedId:ie})}}case"seconds":{const C=s.getSeconds(R),x=(_,de)=>{le(s.setSeconds(R,_),de)};return{viewValue:C,onChange:x,children:vt({utils:s,value:C,onChange:x,getClockNumberText:$.secondsClockNumberText,isDisabled:_=>J||Y(_,"seconds"),selectedId:ie})}}default:throw new Error("You must provide the type for ClockView")}},[ne,s,Q,r,$.hoursClockNumberText,$.minutesClockNumberText,$.secondsClockNumberText,X,le,R,Y,ie,J]),ce=a,je=cs(ce);return b.jsxs(us,g({ref:n,className:Te(je.root,K),ownerState:ce},j,{children:[b.jsx(os,g({autoFocus:u??!!W,ampmInClock:i&&A.includes("hours"),value:Q,type:ne,ampm:r,minutesStep:V,isTimeDisabled:Y,meridiemMode:X,handleMeridiemChange:xe,selectedId:ie,disabled:J,readOnly:se},Me)),L&&b.jsx(ds,{className:je.arrowSwitcher,slots:H,slotProps:ae,onGoToPrevious:()=>ue(re),isPreviousDisabled:!re,previousLabel:$.openPreviousView,onGoToNext:()=>ue(fe),isNextDisabled:!fe,nextLabel:$.openNextView,ownerState:ce})]}))});function fs(e){return ve("MuiDigitalClock",e)}const hs=ge("MuiDigitalClock",["root","list","item"]),bs=["ampm","timeStep","autoFocus","components","componentsProps","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableClock","shouldDisableTime","onChange","view","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","views","skipDisabled","timezone"],gs=e=>{const{classes:t}=e;return me({root:["root"],list:["list"],item:["item"]},fs,t)},vs=O(at,{name:"MuiDigitalClock",slot:"Root",overridesResolver:(e,t)=>t.root})(({ownerState:e})=>({overflowY:"auto",width:"100%","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:e.alreadyRendered?"smooth":"auto"},maxHeight:Nt})),Ts=O(Dt,{name:"MuiDigitalClock",slot:"List",overridesResolver:(e,t)=>t.list})({padding:0}),Cs=O(Le,{name:"MuiDigitalClock",slot:"Item",overridesResolver:(e,t)=>t.item})(({theme:e})=>({padding:"8px 16px",margin:"2px 4px","&:first-of-type":{marginTop:4},"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ye(e.palette.primary.main,e.palette.action.hoverOpacity)},"&.Mui-selected":{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:focus-visible, &:hover":{backgroundColor:(e.vars||e).palette.primary.dark}},"&.Mui-focusVisible":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})`:Ye(e.palette.primary.main,e.palette.action.focusOpacity)}})),xs=P.forwardRef(function(t,n){var s,a,r;const i=De(),u=P.useRef(null),l=wt(n,u),m=oe({props:t,name:"MuiDigitalClock"}),{ampm:f=i.is12HourCycleInCurrentLocale(),timeStep:d=30,autoFocus:c,components:h,componentsProps:y,slots:p,slotProps:k,value:D,defaultValue:N,referenceDate:S,disableIgnoringDatePartForTimeValidation:V=!1,maxTime:w,minTime:T,disableFuture:L,disablePast:F,minutesStep:I=1,shouldDisableClock:A,shouldDisableTime:B,onChange:U,view:W,openTo:G,onViewChange:K,focusedView:J,onFocusedViewChange:se,className:Ce,disabled:j,readOnly:H,views:ae=["hours"],skipDisabled:Q=!1,timezone:Z}=m,q=te(m,bs),{value:R,handleValueChange:$,timezone:pe}=nt({name:"DigitalClock",timezone:Z,value:D,defaultValue:N,onChange:U,valueManager:Ve}),ne=Se(),ue=rt(pe),re=P.useMemo(()=>g({},m,{alreadyRendered:!!u.current}),[m]),fe=gs(re),le=(s=(a=p==null?void 0:p.digitalClockItem)!=null?a:h==null?void 0:h.DigitalClockItem)!=null?s:Cs,X=Pt({elementType:le,externalSlotProps:(r=k==null?void 0:k.digitalClockItem)!=null?r:y==null?void 0:y.digitalClockItem,ownerState:{},className:fe.item}),xe=ut({value:R,referenceDate:S,utils:i,props:m,timezone:pe}),Y=Ge(C=>$(C,"finish","hours")),{setValueAndGoToNextView:ie}=it({view:W,views:ae,openTo:G,onViewChange:K,onChange:Y,focusedView:J,onFocusedViewChange:se}),Me=Ge(C=>{ie(C,"finish")});P.useEffect(()=>{if(u.current===null)return;const C=u.current.querySelector('[role="listbox"] [role="option"][aria-selected="true"]');if(!C)return;const x=C.offsetTop;u.current.scrollTop=x-4});const ce=P.useCallback(C=>{const x=Qe(V,i),_=()=>!(T&&x(T,C)||w&&x(C,w)||L&&x(C,ue)||F&&x(ue,C)),de=()=>i.getMinutes(C)%I!==0||A!=null&&A(i.toJsDate(C).getTime(),"hours")?!1:B?!B(C,"hours"):!0;return!_()||!de()},[V,i,T,w,L,ue,F,I,A,B]),je=P.useMemo(()=>{const C=i.startOfDay(xe);return[C,...Array.from({length:Math.ceil(24*60/d)-1},(x,_)=>i.addMinutes(C,d*(_+1)))]},[xe,d,i]);return b.jsx(vs,g({ref:l,className:Te(fe.root,Ce),ownerState:re},q,{children:b.jsx(Ts,{autoFocusItem:c||!!J,role:"listbox","aria-label":ne.timePickerToolbarTitle,className:fe.list,children:je.map(C=>{if(Q&&ce(C))return null;const x=i.isEqual(C,R);return b.jsx(le,g({onClick:()=>!H&&Me(C),selected:x,disabled:j||ce(C),disableRipple:H,role:"option","aria-disabled":H,"aria-selected":x},X,{children:i.format(C,f?"fullTime12h":"fullTime24h")}),i.toISO(C))})})}))});function ks(e){return ve("MuiMultiSectionDigitalClock",e)}ge("MuiMultiSectionDigitalClock",["root"]);function ys(e){return ve("MuiMultiSectionDigitalClockSection",e)}const Ds=ge("MuiMultiSectionDigitalClockSection",["root","item"]),ws=["autoFocus","onChange","className","disabled","readOnly","items","active","slots","slotProps","skipDisabled"],Ps=e=>{const{classes:t}=e;return me({root:["root"],item:["item"]},ys,t)},Ss=O(Dt,{name:"MuiMultiSectionDigitalClockSection",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>({maxHeight:Nt,width:56,padding:0,overflow:"hidden","@media (prefers-reduced-motion: no-preference)":{scrollBehavior:t.alreadyRendered?"smooth":"auto"},"@media (pointer: fine)":{"&:hover":{overflowY:"auto"}},"@media (pointer: none), (pointer: coarse)":{overflowY:"auto"},"&:not(:first-of-type)":{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},"&:after":{display:"block",content:'""',height:"calc(100% - 40px - 6px)"}})),Ms=O(Le,{name:"MuiMultiSectionDigitalClockSection",slot:"Item",overridesResolver:(e,t)=>t.item})(({theme:e})=>({padding:8,margin:"2px 4px",width:$e,justifyContent:"center","&:first-of-type":{marginTop:4},"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Ye(e.palette.primary.main,e.palette.action.hoverOpacity)},"&.Mui-selected":{backgroundColor:(e.vars||e).palette.primary.main,color:(e.vars||e).palette.primary.contrastText,"&:focus-visible, &:hover":{backgroundColor:(e.vars||e).palette.primary.dark}},"&.Mui-focusVisible":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.focusOpacity})`:Ye(e.palette.primary.main,e.palette.action.focusOpacity)}})),Ns=P.forwardRef(function(t,n){var s;const a=P.useRef(null),r=wt(n,a),i=P.useRef(null),u=oe({props:t,name:"MuiMultiSectionDigitalClockSection"}),{autoFocus:l,onChange:m,className:f,disabled:d,readOnly:c,items:h,active:y,slots:p,slotProps:k,skipDisabled:D}=u,N=te(u,ws),S=P.useMemo(()=>g({},u,{alreadyRendered:!!a.current}),[u]),V=Ps(S),w=(s=p==null?void 0:p.digitalClockSectionItem)!=null?s:Ms;return P.useEffect(()=>{if(a.current===null)return;const T=a.current.querySelector('[role="option"][aria-selected="true"]');if(y&&l&&T&&T.focus(),!T||i.current===T)return;i.current=T;const L=T.offsetTop;a.current.scrollTop=L-4}),b.jsx(Ss,g({ref:r,className:Te(V.root,f),ownerState:S,autoFocusItem:l&&y,role:"listbox"},N,{children:h.map(T=>{var L,F;if(D&&(L=T.isDisabled)!=null&&L.call(T,T.value))return null;const I=T.isSelected(T.value);return b.jsx(w,g({onClick:()=>!c&&m(T.value),selected:I,disabled:d||((F=T.isDisabled)==null?void 0:F.call(T,T.value)),disableRipple:c,role:"option","aria-disabled":c,"aria-label":T.ariaLabel,"aria-selected":I,className:V.item},k==null?void 0:k.digitalClockSectionItem,{children:T.label}),T.label)})}))}),Fs=({now:e,value:t,utils:n,ampm:s,isDisabled:a,resolveAriaLabel:r,timeStep:i})=>{const u=t?n.getHours(t):null,l=[],m=d=>u===null?!1:s?d===12?u===12||u===0:u===d||u-12===d:u===d,f=s?11:23;for(let d=0;d<=f;d+=i){let c=n.format(n.setHours(e,d),s?"hours12h":"hours24h");const h=r(parseInt(c,10).toString());c=n.formatNumber(c),l.push({value:d,label:c,isSelected:m,isDisabled:a,ariaLabel:h})}return l},Tt=({value:e,utils:t,isDisabled:n,timeStep:s,resolveLabel:a,resolveAriaLabel:r,hasValue:i=!0})=>{const u=l=>e===null?!1:i&&e===l;return[...Array.from({length:Math.ceil(60/s)},(l,m)=>{const f=s*m;return{value:f,label:t.formatNumber(a(f)),isDisabled:n,isSelected:u,ariaLabel:r(f.toString())}})]},Rs=["ampm","timeSteps","autoFocus","components","componentsProps","slots","slotProps","value","defaultValue","referenceDate","disableIgnoringDatePartForTimeValidation","maxTime","minTime","disableFuture","disablePast","minutesStep","shouldDisableClock","shouldDisableTime","onChange","view","views","openTo","onViewChange","focusedView","onFocusedViewChange","className","disabled","readOnly","skipDisabled","timezone"],Is=e=>{const{classes:t}=e;return me({root:["root"]},ks,t)},Vs=O(at,{name:"MuiMultiSectionDigitalClock",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({display:"flex",flexDirection:"row",width:"100%",borderBottom:`1px solid ${(e.vars||e).palette.divider}`})),js=P.forwardRef(function(t,n){const s=De(),a=oe({props:t,name:"MuiMultiSectionDigitalClock"}),{ampm:r=s.is12HourCycleInCurrentLocale(),timeSteps:i,autoFocus:u,components:l,componentsProps:m,slots:f,slotProps:d,value:c,defaultValue:h,referenceDate:y,disableIgnoringDatePartForTimeValidation:p=!1,maxTime:k,minTime:D,disableFuture:N,disablePast:S,minutesStep:V=1,shouldDisableClock:w,shouldDisableTime:T,onChange:L,view:F,views:I=["hours","minutes"],openTo:A,onViewChange:B,focusedView:U,onFocusedViewChange:W,className:G,disabled:K,readOnly:J,skipDisabled:se=!1,timezone:Ce}=a,j=te(a,Rs),{value:H,handleValueChange:ae,timezone:Q}=nt({name:"MultiSectionDigitalClock",timezone:Ce,value:c,defaultValue:h,onChange:L,valueManager:Ve}),Z=Se(),q=rt(Q),R=P.useMemo(()=>g({hours:1,minutes:5,seconds:5},i),[i]),$=ut({value:H,referenceDate:y,utils:s,props:a,timezone:Q}),pe=Ge((C,x,_)=>ae(C,x,_)),ne=P.useMemo(()=>!r||!I.includes("hours")||I.includes("meridiem")?I:[...I,"meridiem"],[r,I]),{view:ue,setValueAndGoToNextView:re,focusedView:fe}=it({view:F,views:ne,openTo:A,onViewChange:B,onChange:pe,focusedView:U,onFocusedViewChange:W}),le=Ge(C=>{re(C,"finish","meridiem")}),{meridiemMode:X,handleMeridiemChange:xe}=lt($,r,le,"finish"),Y=P.useCallback((C,x)=>{const _=Qe(p,s),de=x==="hours"||x==="minutes"&&ne.includes("seconds"),Ne=({start:M,end:z})=>!(D&&_(D,z)||k&&_(M,k)||N&&_(M,q)||S&&_(q,de?z:M)),Fe=(M,z=1)=>{if(M%z!==0||w!=null&&w(M,x))return!1;if(T)switch(x){case"hours":return!T(s.setHours($,M),"hours");case"minutes":return!T(s.setMinutes($,M),"minutes");case"seconds":return!T(s.setSeconds($,M),"seconds");default:return!1}return!0};switch(x){case"hours":{const M=Ke(C,X,r),z=s.setHours($,M),ke=s.setSeconds(s.setMinutes(z,0),0),Xe=s.setSeconds(s.setMinutes(z,59),59);return!Ne({start:ke,end:Xe})||!Fe(M)}case"minutes":{const M=s.setMinutes($,C),z=s.setSeconds(M,0),ke=s.setSeconds(M,59);return!Ne({start:z,end:ke})||!Fe(C,V)}case"seconds":{const M=s.setSeconds($,C);return!Ne({start:M,end:M})||!Fe(C)}default:throw new Error("not supported")}},[r,$,p,k,X,D,V,w,T,s,N,S,q,ne]),ie=P.useCallback(C=>{switch(C){case"hours":return{onChange:x=>{const _=Ke(x,X,r);re(s.setHours($,_),"finish","hours")},items:Fs({now:q,value:H,ampm:r,utils:s,isDisabled:x=>K||Y(x,"hours"),timeStep:R.hours,resolveAriaLabel:Z.hoursClockNumberText})};case"minutes":return{onChange:x=>{re(s.setMinutes($,x),"finish","minutes")},items:Tt({value:s.getMinutes($),utils:s,isDisabled:x=>K||Y(x,"minutes"),resolveLabel:x=>s.format(s.setMinutes(q,x),"minutes"),timeStep:R.minutes,hasValue:!!H,resolveAriaLabel:Z.minutesClockNumberText})};case"seconds":return{onChange:x=>{re(s.setSeconds($,x),"finish","seconds")},items:Tt({value:s.getSeconds($),utils:s,isDisabled:x=>K||Y(x,"seconds"),resolveLabel:x=>s.format(s.setSeconds(q,x),"seconds"),timeStep:R.seconds,hasValue:!!H,resolveAriaLabel:Z.secondsClockNumberText})};case"meridiem":{const x=ye(s,"am"),_=ye(s,"pm");return{onChange:xe,items:[{value:"am",label:x,isSelected:()=>!!H&&X==="am",ariaLabel:x},{value:"pm",label:_,isSelected:()=>!!H&&X==="pm",ariaLabel:_}]}}default:throw new Error(`Unknown view: ${C} found.`)}},[q,H,r,s,R.hours,R.minutes,R.seconds,Z.hoursClockNumberText,Z.minutesClockNumberText,Z.secondsClockNumberText,X,re,$,K,Y,xe]),Me=P.useMemo(()=>ne.reduce((C,x)=>g({},C,{[x]:ie(x)}),{}),[ne,ie]),ce=a,je=Is(ce);return b.jsx(Vs,g({ref:n,className:Te(je.root,G),ownerState:ce,role:"group"},j,{children:Object.entries(Me).map(([C,x])=>b.jsx(Ns,{items:x.items,onChange:x.onChange,active:ue===C,autoFocus:u??fe===C,disabled:K,readOnly:J,slots:f??l,slotProps:d??m,skipDisabled:se,"aria-label":Z.selectViewText(C)},C))}))}),_s=e=>{var t,n,s,a,r,i,u,l;const m=De(),f=Ft(),c=((t=e.ampm)!=null?t:m.is12HourCycleInCurrentLocale())?m.formats.keyboardDateTime12h:m.formats.keyboardDateTime24h;return g({},e,{disablePast:(n=e.disablePast)!=null?n:!1,disableFuture:(s=e.disableFuture)!=null?s:!1,format:(a=e.format)!=null?a:c,disableIgnoringDatePartForTimeValidation:!!(e.minDateTime||e.maxDateTime),minDate:Je(m,(r=e.minDateTime)!=null?r:e.minDate,f.minDate),maxDate:Je(m,(i=e.maxDateTime)!=null?i:e.maxDate,f.maxDate),minTime:(u=e.minDateTime)!=null?u:e.minTime,maxTime:(l=e.maxDateTime)!=null?l:e.maxTime})},Os=({props:e,inputRef:t})=>{const n=_s(e),{forwardedProps:s,internalProps:a}=mo(n,"date-time");return po({inputRef:t,forwardedProps:s,internalProps:a,valueManager:Ve,fieldValueManager:fo,validator:ct,valueType:"date-time"})},$s=["components","componentsProps","slots","slotProps","InputProps","inputProps"],Ls=["inputRef"],As=["ref","onPaste","onKeyDown","inputMode","readOnly","clearable","onClear"],$t=P.forwardRef(function(t,n){var s,a,r;const i=oe({props:t,name:"MuiDateTimeField"}),{components:u,componentsProps:l,slots:m,slotProps:f,InputProps:d,inputProps:c}=i,h=te(i,$s),y=i,p=(s=(a=m==null?void 0:m.textField)!=null?a:u==null?void 0:u.TextField)!=null?s:ot,k=Pt({elementType:p,externalSlotProps:(r=f==null?void 0:f.textField)!=null?r:l==null?void 0:l.textField,externalForwardedProps:h,ownerState:y}),{inputRef:D}=k,N=te(k,Ls);N.inputProps=g({},c,N.inputProps),N.InputProps=g({},d,N.InputProps);const S=Os({props:N,inputRef:D}),{ref:V,onPaste:w,onKeyDown:T,inputMode:L,readOnly:F,clearable:I,onClear:A}=S,B=te(S,As),{InputProps:U,fieldProps:W}=ho({onClear:A,clearable:I,fieldProps:B,InputProps:B.InputProps,slots:m,slotProps:f,components:u,componentsProps:l});return b.jsx(p,g({ref:n},W,{InputProps:g({},U,{readOnly:F}),inputProps:g({},B.inputProps,{inputMode:L,onPaste:w,onKeyDown:T,ref:V})}))}),et=({view:e,onViewChange:t,focusedView:n,onFocusedViewChange:s,views:a,value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,ampmInClock:S,components:V,componentsProps:w,slots:T,slotProps:L,readOnly:F,disabled:I,sx:A,autoFocus:B,showViewSwitcher:U,disableIgnoringDatePartForTimeValidation:W,timezone:G})=>b.jsx(ps,{view:e,onViewChange:t,focusedView:n&&Ae(n)?n:null,onFocusedViewChange:s,views:a.filter(Ae),value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,ampmInClock:S,components:V,componentsProps:w,slots:T,slotProps:L,readOnly:F,disabled:I,sx:A,autoFocus:B,showViewSwitcher:U,disableIgnoringDatePartForTimeValidation:W,timezone:G}),Bs=({view:e,onViewChange:t,focusedView:n,onFocusedViewChange:s,views:a,value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,components:S,componentsProps:V,slots:w,slotProps:T,readOnly:L,disabled:F,sx:I,autoFocus:A,disableIgnoringDatePartForTimeValidation:B,timeSteps:U,skipDisabled:W,timezone:G})=>b.jsx(xs,{view:e,onViewChange:t,focusedView:n,onFocusedViewChange:s,views:a.filter(Ae),value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,components:S,componentsProps:V,slots:w,slotProps:T,readOnly:L,disabled:F,sx:I,autoFocus:A,disableIgnoringDatePartForTimeValidation:B,timeStep:U==null?void 0:U.minutes,skipDisabled:W,timezone:G}),zs=({view:e,onViewChange:t,focusedView:n,onFocusedViewChange:s,views:a,value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,components:S,componentsProps:V,slots:w,slotProps:T,readOnly:L,disabled:F,sx:I,autoFocus:A,disableIgnoringDatePartForTimeValidation:B,timeSteps:U,skipDisabled:W,timezone:G})=>b.jsx(js,{view:e,onViewChange:t,focusedView:n,onFocusedViewChange:s,views:a.filter(Ae),value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:h,maxTime:y,shouldDisableTime:p,shouldDisableClock:k,minutesStep:D,ampm:N,components:S,componentsProps:V,slots:w,slotProps:T,readOnly:L,disabled:F,sx:I,autoFocus:A,disableIgnoringDatePartForTimeValidation:B,timeSteps:U,skipDisabled:W,timezone:G}),Hs=["views","format"],Lt=(e,t)=>{let{views:n,format:s}=t,a=te(t,Hs);if(s)return s;const r=[],i=[];if(n.forEach(m=>{Ae(m)?i.push(m):r.push(m)}),i.length===0)return ft(e,g({views:r},a),!1);if(r.length===0)return ht(e,g({views:i},a));const u=ht(e,g({views:i},a));return`${ft(e,g({views:r},a),!1)} ${u}`},Es=(e,t,n)=>n?t.filter(s=>!Pe(s)||s==="hours"):e?[...t,"meridiem"]:t,Us=(e,t)=>{var n,s;return 24*60/(((n=e.hours)!=null?n:1)*((s=e.minutes)!=null?s:5))<=t};function Ws({thresholdToRenderTimeInASingleColumn:e,ampm:t,timeSteps:n,views:s}){const a=e??24,r=g({hours:1,minutes:5,seconds:5},n),i=Us(r,a);return{thresholdToRenderTimeInASingleColumn:a,timeSteps:r,shouldRenderTimeInASingleColumn:i,views:Es(t,s,i)}}function qs(e){return ve("MuiDateTimePickerTabs",e)}ge("MuiDateTimePickerTabs",["root"]);const Ys=e=>We(e)?"date":"time",Gs=e=>e==="date"?"day":"hours",Ks=e=>{const{classes:t}=e;return me({root:["root"]},qs,t)},Js=O(qt,{name:"MuiDateTimePickerTabs",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>({boxShadow:`0 -1px 0 0 inset ${(e.vars||e).palette.divider}`,"&:last-child":{boxShadow:`0 1px 0 0 inset ${(e.vars||e).palette.divider}`,[`& .${Yt.indicator}`]:{bottom:"auto",top:0}}})),Qs=function(t){const n=oe({props:t,name:"MuiDateTimePickerTabs"}),{dateIcon:s=b.jsx(bo,{}),onViewChange:a,timeIcon:r=b.jsx(go,{}),view:i,hidden:u=typeof window>"u"||window.innerHeight<667}=n,l=Se(),m=Ks(n),f=(d,c)=>{a(Gs(c))};return u?null:b.jsxs(Js,{ownerState:n,variant:"fullWidth",value:Ys(i),onChange:f,className:m.root,children:[b.jsx(dt,{value:"date","aria-label":l.dateTableLabel,icon:b.jsx(P.Fragment,{children:s})}),b.jsx(dt,{value:"time","aria-label":l.timeTableLabel,icon:b.jsx(P.Fragment,{children:r})})]})};function Xs(e){return ve("MuiDateTimePickerToolbar",e)}const tt=ge("MuiDateTimePickerToolbar",["root","dateContainer","timeContainer","timeDigitsContainer","separator","timeLabelReverse","ampmSelection","ampmLandscape","ampmLabel"]),Zs=["ampm","ampmInClock","value","onChange","view","isLandscape","onViewChange","toolbarFormat","toolbarPlaceholder","views","disabled","readOnly","toolbarVariant"],ea=e=>{const{classes:t,theme:n,isLandscape:s}=e,a={root:["root"],dateContainer:["dateContainer"],timeContainer:["timeContainer",n.direction==="rtl"&&"timeLabelReverse"],timeDigitsContainer:["timeDigitsContainer",n.direction==="rtl"&&"timeLabelReverse"],separator:["separator"],ampmSelection:["ampmSelection",s&&"ampmLandscape"],ampmLabel:["ampmLabel"]};return me(a,Xs,t)},At=O(vo,{name:"MuiDateTimePickerToolbar",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e,ownerState:t})=>({paddingLeft:t.toolbarVariant==="desktop"&&!t.isLandscape?24:16,paddingRight:t.toolbarVariant==="desktop"&&!t.isLandscape?0:16,borderBottom:t.toolbarVariant==="desktop"?`1px solid ${(e.vars||e).palette.divider}`:void 0,borderRight:t.toolbarVariant==="desktop"&&t.isLandscape?`1px solid ${(e.vars||e).palette.divider}`:void 0,justifyContent:"space-around",position:"relative"}));At.propTypes={as:o.elementType,classes:o.object,className:o.string,isLandscape:o.bool.isRequired,isMobileKeyboardViewOpen:o.bool,landscapeDirection:o.oneOf(["column","row"]),ownerState:o.object.isRequired,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object]),toggleMobileKeyboardView:o.func,toolbarTitle:o.node,viewType:o.oneOf(["date","time"])};const ta=O("div",{name:"MuiDateTimePickerToolbar",slot:"DateContainer",overridesResolver:(e,t)=>t.dateContainer})({display:"flex",flexDirection:"column",alignItems:"flex-start"}),Bt=O("div",{name:"MuiDateTimePickerToolbar",slot:"TimeContainer",overridesResolver:(e,t)=>t.timeContainer})(({theme:e,ownerState:t})=>{const n=t.isLandscape&&t.toolbarVariant!=="desktop"?"column":"row";return g({display:"flex",flexDirection:n},t.toolbarVariant==="desktop"&&g({},!t.isLandscape&&{gap:9,marginRight:4,alignSelf:"flex-end"}),e.direction==="rtl"&&{flexDirection:`${n}-reverse`})}),oa=O("div",{name:"MuiDateTimePickerToolbar",slot:"TimeDigitsContainer",overridesResolver:(e,t)=>t.timeDigitsContainer})(({theme:e,ownerState:t})=>g({display:"flex"},t.toolbarVariant==="desktop"&&{gap:1.5},e.direction==="rtl"&&{flexDirection:"row-reverse"}));Bt.propTypes={as:o.elementType,ownerState:o.object.isRequired,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object])};const Ct=O(Vt,{name:"MuiDateTimePickerToolbar",slot:"Separator",overridesResolver:(e,t)=>t.separator})(({ownerState:e})=>({margin:e.toolbarVariant==="desktop"?0:"0 4px 0 2px",cursor:"default"})),sa=O("div",{name:"MuiDateTimePickerToolbar",slot:"AmPmSelection",overridesResolver:(e,t)=>[{[`.${tt.ampmLabel}`]:t.ampmLabel},{[`&.${tt.ampmLandscape}`]:t.ampmLandscape},t.ampmSelection]})(({ownerState:e})=>g({display:"flex",flexDirection:"column",marginRight:"auto",marginLeft:12},e.isLandscape&&{margin:"4px 0 auto",flexDirection:"row",justifyContent:"space-around",width:"100%"},{[`& .${tt.ampmLabel}`]:{fontSize:17}}));function aa(e){const t=oe({props:e,name:"MuiDateTimePickerToolbar"}),{ampm:n,ampmInClock:s,value:a,onChange:r,view:i,isLandscape:u,onViewChange:l,toolbarFormat:m,toolbarPlaceholder:f="––",views:d,disabled:c,readOnly:h,toolbarVariant:y="mobile"}=t,p=te(t,Zs),k=t,D=De(),{meridiemMode:N,handleMeridiemChange:S}=lt(a,n,r),V=!!(n&&!s),w=y==="desktop",T=Se(),L=Gt(),F=ea(g({},k,{theme:L})),I=B=>n?D.format(B,"hours12h"):D.format(B,"hours24h"),A=P.useMemo(()=>a?m?D.formatByString(a,m):D.format(a,"shortDate"):f,[a,m,f,D]);return b.jsxs(At,g({toolbarTitle:T.dateTimePickerToolbarTitle,isLandscape:u,className:F.root},p,{ownerState:k,children:[b.jsxs(ta,{className:F.dateContainer,ownerState:k,children:[d.includes("year")&&b.jsx(we,{tabIndex:-1,variant:"subtitle1",onClick:()=>l("year"),selected:i==="year",value:a?D.format(a,"year"):"–"}),d.includes("day")&&b.jsx(we,{tabIndex:-1,variant:w?"h5":"h4",onClick:()=>l("day"),selected:i==="day",value:A})]}),b.jsxs(Bt,{className:F.timeContainer,ownerState:k,children:[b.jsxs(oa,{className:F.timeDigitsContainer,ownerState:k,children:[d.includes("hours")&&b.jsx(we,{variant:w?"h5":"h3",width:w&&!u?$e:void 0,onClick:()=>l("hours"),selected:i==="hours",value:a?I(a):"--"}),d.includes("minutes")&&b.jsxs(P.Fragment,{children:[b.jsx(Ct,{variant:w?"h5":"h3",value:":",className:F.separator,ownerState:k}),b.jsx(we,{variant:w?"h5":"h3",width:w&&!u?$e:void 0,onClick:()=>l("minutes"),selected:i==="minutes",value:a?D.format(a,"minutes"):"--"})]}),d.includes("seconds")&&b.jsxs(P.Fragment,{children:[b.jsx(Ct,{variant:w?"h5":"h3",value:":",className:F.separator,ownerState:k}),b.jsx(we,{variant:w?"h5":"h3",width:w&&!u?$e:void 0,onClick:()=>l("seconds"),selected:i==="seconds",value:a?D.format(a,"seconds"):"--"})]})]}),V&&!w&&b.jsxs(sa,{className:F.ampmSelection,ownerState:k,children:[b.jsx(we,{variant:"subtitle2",selected:N==="am",typographyClassName:F.ampmLabel,value:ye(D,"am"),onClick:h?void 0:()=>S("am"),disabled:c}),b.jsx(we,{variant:"subtitle2",selected:N==="pm",typographyClassName:F.ampmLabel,value:ye(D,"pm"),onClick:h?void 0:()=>S("pm"),disabled:c})]}),n&&w&&b.jsx(we,{variant:"h5",onClick:()=>l("meridiem"),selected:i==="meridiem",value:a&&N?ye(D,N):"--",width:$e})]})]}))}function zt(e,t){var n,s,a,r,i,u,l,m,f,d,c;const h=De(),y=Ft(),p=oe({props:e,name:t}),k=(n=p.ampm)!=null?n:h.is12HourCycleInCurrentLocale(),D=P.useMemo(()=>{var V;return((V=p.localeText)==null?void 0:V.toolbarTitle)==null?p.localeText:g({},p.localeText,{dateTimePickerToolbarTitle:p.localeText.toolbarTitle})},[p.localeText]),N=(s=p.slots)!=null?s:Mt(p.components),S=(a=p.slotProps)!=null?a:p.componentsProps;return g({},p,To({views:p.views,openTo:p.openTo,defaultViews:["year","day","hours","minutes"],defaultOpenTo:"day"}),{ampm:k,localeText:D,orientation:(r=p.orientation)!=null?r:"portrait",disableIgnoringDatePartForTimeValidation:(i=p.disableIgnoringDatePartForTimeValidation)!=null?i:!!(p.minDateTime||p.maxDateTime||p.disablePast||p.disableFuture),disableFuture:(u=p.disableFuture)!=null?u:!1,disablePast:(l=p.disablePast)!=null?l:!1,minDate:Je(h,(m=p.minDateTime)!=null?m:p.minDate,y.minDate),maxDate:Je(h,(f=p.maxDateTime)!=null?f:p.maxDate,y.maxDate),minTime:(d=p.minDateTime)!=null?d:p.minTime,maxTime:(c=p.maxDateTime)!=null?c:p.maxTime,slots:g({toolbar:aa,tabs:Qs},N),slotProps:g({},S,{toolbar:g({ampm:k},S==null?void 0:S.toolbar)})})}const na=O("div")({display:"flex",margin:"0 auto"}),Ie=({view:e,onViewChange:t,views:n,focusedView:s,onFocusedViewChange:a,value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minDate:h,minTime:y,maxDate:p,maxTime:k,shouldDisableDate:D,shouldDisableMonth:N,shouldDisableYear:S,shouldDisableTime:V,shouldDisableClock:w,reduceAnimations:T,minutesStep:L,ampm:F,onMonthChange:I,monthsPerRow:A,onYearChange:B,yearsPerRow:U,defaultCalendarMonth:W,components:G,componentsProps:K,slots:J,slotProps:se,loading:Ce,renderLoading:j,disableHighlightToday:H,readOnly:ae,disabled:Q,showDaysOutsideCurrentMonth:Z,dayOfWeekFormatter:q,sx:R,autoFocus:$,fixedWeekNumber:pe,displayWeekNumber:ne,timezone:ue,disableIgnoringDatePartForTimeValidation:re,timeSteps:fe,skipDisabled:le,timeViewsCount:X,shouldRenderTimeInASingleColumn:xe})=>{var Y,ie;const Me=!!((Y=st((ie=se==null?void 0:se.actionBar)!=null?ie:K==null?void 0:K.actionBar,{}))!=null&&(Y=Y.actions)!=null&&Y.length),ce={view:Pe(e)?e:"hours",onViewChange:t,focusedView:s&&Pe(s)?s:null,onFocusedViewChange:a,views:n.filter(Pe),value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minTime:y,maxTime:k,shouldDisableTime:V,shouldDisableClock:w,minutesStep:L,ampm:F,components:G,componentsProps:K,slots:J,slotProps:se,readOnly:ae,disabled:Q,autoFocus:$,disableIgnoringDatePartForTimeValidation:re,timeSteps:fe,skipDisabled:le,timezone:ue};return b.jsxs(P.Fragment,{children:[b.jsxs(na,{children:[b.jsx(Co,{view:We(e)?e:"day",onViewChange:t,views:n.filter(We),focusedView:s&&We(s)?s:null,onFocusedViewChange:a,value:r,defaultValue:i,referenceDate:u,onChange:l,className:m,classes:f,disableFuture:d,disablePast:c,minDate:h,maxDate:p,shouldDisableDate:D,shouldDisableMonth:N,shouldDisableYear:S,reduceAnimations:T,onMonthChange:I,monthsPerRow:A,onYearChange:B,yearsPerRow:U,defaultCalendarMonth:W,components:G,componentsProps:K,slots:J,slotProps:se,loading:Ce,renderLoading:j,disableHighlightToday:H,readOnly:ae,disabled:Q,showDaysOutsideCurrentMonth:Z,dayOfWeekFormatter:q,sx:R,autoFocus:$,fixedWeekNumber:pe,displayWeekNumber:ne,timezone:ue}),X>0&&b.jsxs(P.Fragment,{children:[b.jsx(mt,{orientation:"vertical"}),xe?Bs(g({},ce,{view:"hours",views:["hours"],focusedView:s&&Pe(s)?"hours":null,sx:g({width:"auto",[`&.${hs.root}`]:{maxHeight:xo}},Array.isArray(R)?R:[R])})):zs(g({},ce,{view:Pe(e)?e:"hours",views:n.filter(Pe),focusedView:s&&Pe(s)?s:null,sx:g({borderBottom:0,width:"auto",[`.${Ds.root}`]:{maxHeight:"100%"}},Array.isArray(R)?R:[R])}))]})]}),Me&&b.jsx(mt,{})]})},Ht=P.forwardRef(function(t,n){var s,a,r,i,u,l,m;const f=Se(),d=De(),c=zt(t,"MuiDesktopDateTimePicker"),{shouldRenderTimeInASingleColumn:h,thresholdToRenderTimeInASingleColumn:y,views:p,timeSteps:k}=Ws(c),D=!c.viewRenderers||Object.keys(c.viewRenderers).length===0,N=D?{day:Ie,month:Ie,year:Ie,hours:Ie,minutes:Ie,seconds:Ie,meridiem:Ie}:g({day:_e,month:_e,year:_e,hours:null,minutes:null,seconds:null,meridiem:null},c.viewRenderers),S=(s=c.ampmInClock)!=null?s:!0,V=D?["accept"]:[],w=g({},c,{viewRenderers:N,format:Lt(d,c),views:p,yearsPerRow:(a=c.yearsPerRow)!=null?a:4,ampmInClock:S,timeSteps:k,thresholdToRenderTimeInASingleColumn:y,shouldRenderTimeInASingleColumn:h,slots:g({field:$t,openPickerIcon:ko},c.slots),slotProps:g({},c.slotProps,{field:L=>{var F;return g({},st((F=c.slotProps)==null?void 0:F.field,L),Rt(c),{ref:n})},toolbar:g({hidden:!0,ampmInClock:S,toolbarVariant:D?"desktop":"mobile"},(r=c.slotProps)==null?void 0:r.toolbar),tabs:g({hidden:!0},(i=c.slotProps)==null?void 0:i.tabs),actionBar:g({actions:V},(u=c.slotProps)==null?void 0:u.actionBar)})}),{renderPicker:T}=yo({props:w,valueManager:Ve,valueType:"date-time",getOpenDialogAriaText:(l=(m=w.localeText)==null?void 0:m.openDatePickerDialogue)!=null?l:f.openDatePickerDialogue,validator:ct});return T()});Ht.propTypes={ampm:o.bool,ampmInClock:o.bool,autoFocus:o.bool,className:o.string,closeOnSelect:o.bool,components:o.object,componentsProps:o.object,dayOfWeekFormatter:o.func,defaultCalendarMonth:o.any,defaultValue:o.any,disabled:o.bool,disableFuture:o.bool,disableHighlightToday:o.bool,disableIgnoringDatePartForTimeValidation:o.bool,disableOpenPicker:o.bool,disablePast:o.bool,displayWeekNumber:o.bool,fixedWeekNumber:o.number,format:o.string,formatDensity:o.oneOf(["dense","spacious"]),inputRef:It,label:o.node,loading:o.bool,localeText:o.object,maxDate:o.any,maxDateTime:o.any,maxTime:o.any,minDate:o.any,minDateTime:o.any,minTime:o.any,minutesStep:o.number,monthsPerRow:o.oneOf([3,4]),name:o.string,onAccept:o.func,onChange:o.func,onClose:o.func,onError:o.func,onMonthChange:o.func,onOpen:o.func,onSelectedSectionsChange:o.func,onViewChange:o.func,onYearChange:o.func,open:o.bool,openTo:o.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),orientation:o.oneOf(["landscape","portrait"]),readOnly:o.bool,reduceAnimations:o.bool,referenceDate:o.any,renderLoading:o.func,selectedSections:o.oneOfType([o.oneOf(["all","day","hours","meridiem","minutes","month","seconds","weekDay","year"]),o.number,o.shape({endIndex:o.number.isRequired,startIndex:o.number.isRequired})]),shouldDisableClock:o.func,shouldDisableDate:o.func,shouldDisableMonth:o.func,shouldDisableTime:o.func,shouldDisableYear:o.func,showDaysOutsideCurrentMonth:o.bool,skipDisabled:o.bool,slotProps:o.object,slots:o.object,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object]),thresholdToRenderTimeInASingleColumn:o.number,timeSteps:o.shape({hours:o.number,minutes:o.number,seconds:o.number}),timezone:o.string,value:o.any,view:o.oneOf(["day","hours","meridiem","minutes","month","seconds","year"]),viewRenderers:o.shape({day:o.func,hours:o.func,meridiem:o.func,minutes:o.func,month:o.func,seconds:o.func,year:o.func}),views:o.arrayOf(o.oneOf(["day","hours","minutes","month","seconds","year"]).isRequired),yearsPerRow:o.oneOf([3,4])};const Et=P.forwardRef(function(t,n){var s,a,r,i,u;const l=Se(),m=De(),f=zt(t,"MuiMobileDateTimePicker"),d=g({day:_e,month:_e,year:_e,hours:et,minutes:et,seconds:et},f.viewRenderers),c=(s=f.ampmInClock)!=null?s:!1,h=g({},f,{viewRenderers:d,format:Lt(m,f),ampmInClock:c,slots:g({field:$t},f.slots),slotProps:g({},f.slotProps,{field:p=>{var k;return g({},st((k=f.slotProps)==null?void 0:k.field,p),Rt(f),{ref:n})},toolbar:g({hidden:!1,ampmInClock:c},(a=f.slotProps)==null?void 0:a.toolbar),tabs:g({hidden:!1},(r=f.slotProps)==null?void 0:r.tabs)})}),{renderPicker:y}=Do({props:h,valueManager:Ve,valueType:"date-time",getOpenDialogAriaText:(i=(u=h.localeText)==null?void 0:u.openDatePickerDialogue)!=null?i:l.openDatePickerDialogue,validator:ct});return y()});Et.propTypes={ampm:o.bool,ampmInClock:o.bool,autoFocus:o.bool,className:o.string,closeOnSelect:o.bool,components:o.object,componentsProps:o.object,dayOfWeekFormatter:o.func,defaultCalendarMonth:o.any,defaultValue:o.any,disabled:o.bool,disableFuture:o.bool,disableHighlightToday:o.bool,disableIgnoringDatePartForTimeValidation:o.bool,disableOpenPicker:o.bool,disablePast:o.bool,displayWeekNumber:o.bool,fixedWeekNumber:o.number,format:o.string,formatDensity:o.oneOf(["dense","spacious"]),inputRef:It,label:o.node,loading:o.bool,localeText:o.object,maxDate:o.any,maxDateTime:o.any,maxTime:o.any,minDate:o.any,minDateTime:o.any,minTime:o.any,minutesStep:o.number,monthsPerRow:o.oneOf([3,4]),name:o.string,onAccept:o.func,onChange:o.func,onClose:o.func,onError:o.func,onMonthChange:o.func,onOpen:o.func,onSelectedSectionsChange:o.func,onViewChange:o.func,onYearChange:o.func,open:o.bool,openTo:o.oneOf(["day","hours","minutes","month","seconds","year"]),orientation:o.oneOf(["landscape","portrait"]),readOnly:o.bool,reduceAnimations:o.bool,referenceDate:o.any,renderLoading:o.func,selectedSections:o.oneOfType([o.oneOf(["all","day","hours","meridiem","minutes","month","seconds","weekDay","year"]),o.number,o.shape({endIndex:o.number.isRequired,startIndex:o.number.isRequired})]),shouldDisableClock:o.func,shouldDisableDate:o.func,shouldDisableMonth:o.func,shouldDisableTime:o.func,shouldDisableYear:o.func,showDaysOutsideCurrentMonth:o.bool,slotProps:o.object,slots:o.object,sx:o.oneOfType([o.arrayOf(o.oneOfType([o.func,o.object,o.bool])),o.func,o.object]),timezone:o.string,value:o.any,view:o.oneOf(["day","hours","minutes","month","seconds","year"]),viewRenderers:o.shape({day:o.func,hours:o.func,minutes:o.func,month:o.func,seconds:o.func,year:o.func}),views:o.arrayOf(o.oneOf(["day","hours","minutes","month","seconds","year"]).isRequired),yearsPerRow:o.oneOf([3,4])};const ra=["desktopModeMediaQuery"],ia=P.forwardRef(function(t,n){const s=oe({props:t,name:"MuiDateTimePicker"}),{desktopModeMediaQuery:a=wo}=s,r=te(s,ra);return Kt(a,{defaultMatches:!0})?b.jsx(Ht,g({ref:n},r)):b.jsx(Et,g({ref:n},r))});let xt=0;const la=[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}],kt={Native:"",TextField:"",Select:"",Autocomplete:[],Checkbox:!1,Switch:!1,RadioGroup:"",DateTimePicker:""},ca=he.object({TextField:he.string().nonempty("You must enter a value"),Native:he.string().nonempty("You must enter a value"),Select:he.string().nonempty("You must select a value").refine(e=>["20","30"].includes(e),"Select 20 or 30."),Checkbox:he.boolean().refine(e=>e===!0,"You must check."),Switch:he.boolean().refine(e=>e===!0,"You must turn it on."),RadioGroup:he.string().refine(e=>e==="female","You must select female."),Autocomplete:he.array(he.string()).min(2,"Select at least two."),DateTimePicker:he.string().refine(e=>e===null||e.trim().length>0,"You must select a date")});function ua(){var d;const{handleSubmit:e,register:t,reset:n,control:s,watch:a,formState:r}=Jt({defaultValues:kt,mode:"all",resolver:Qt(ca)}),{isValid:i,dirtyFields:u,errors:l,touchedFields:m}=r;xt+=1;const f=a();return E("div",{className:"flex w-full max-w-screen-md justify-start items-start",children:[E("form",{className:"w-1/2",onSubmit:e(c=>console.info(c)),children:[E("div",{className:"mt-48 mb-16",children:[v(ee,{className:"mb-24 font-medium text-14",children:"Native Input:"}),v("input",{className:Te("border-1 outline-none rounded-8 p-8",!!l.Native&&"border-red"),...t("Native"),required:!0}),!!l.Native&&v(ee,{className:"px-4 py-8 font-medium text-14",color:"error",children:(d=l==null?void 0:l.Native)==null?void 0:d.message})]}),v("div",{className:"mt-48 mb-16",children:v(Re,{name:"Checkbox",control:s,render:({field:{onChange:c,value:h,onBlur:y,ref:p}})=>{var k;return E(ze,{error:!!l.Checkbox,required:!0,children:[v(He,{className:"font-medium text-14",component:"legend",children:"MUI Checkbox"}),v(Ze,{label:"I agree",control:v(Xt,{checked:h,onBlur:y,onChange:D=>c(D.target.checked),inputRef:p,required:!0})}),v(Ee,{children:(k=l==null?void 0:l.Checkbox)==null?void 0:k.message})]})}})}),v("div",{className:"mt-48 mb-16",children:v(Re,{render:({field:c})=>{var h;return E(ze,{error:!!l.RadioGroup,required:!0,children:[v(He,{className:"font-medium text-14",component:"legend",children:"Radio Group"}),E(Zt,{...c,"aria-label":"gender",name:"gender1",children:[v(Ze,{value:"female",control:v(pt,{}),label:"Female"}),v(Ze,{value:"male",control:v(pt,{}),label:"Male"})]}),v(Ee,{children:(h=l==null?void 0:l.RadioGroup)==null?void 0:h.message})]})},name:"RadioGroup",control:s})}),v("div",{className:"mt-48 mb-16",children:v(Re,{render:({field:c})=>{var h;return v(ot,{...c,label:"MUI TextField",variant:"outlined",error:!!l.TextField,helperText:(h=l==null?void 0:l.TextField)==null?void 0:h.message,required:!0,fullWidth:!0})},name:"TextField",control:s})}),v("div",{className:"mt-48 mb-16",children:v(Re,{render:({field:c})=>{var h;return E(ze,{error:!!l.Select,required:!0,fullWidth:!0,children:[v(He,{className:"font-medium text-14",component:"legend",children:"MUI Select"}),E(eo,{...c,variant:"outlined",fullWidth:!0,children:[v(Le,{value:"10",children:"Ten (10)"}),v(Le,{value:"20",children:"Twenty (20)"}),v(Le,{value:"30",children:"Thirty (30)"})]}),v(Ee,{children:(h=l==null?void 0:l.Select)==null?void 0:h.message})]})},name:"Select",control:s})}),v("div",{className:"mt-48 mb-16",children:v(Re,{name:"Switch",control:s,render:({field:{onChange:c,value:h,ref:y,onBlur:p}})=>{var k;return E(ze,{required:!0,error:!!l.Switch,children:[v(He,{className:"font-medium text-14",component:"legend",children:"MUI Switch"}),v(to,{checked:h,onBlur:p,onChange:D=>c(D.target.checked),inputRef:y,required:!0}),v(Ee,{children:(k=l==null?void 0:l.Switch)==null?void 0:k.message})]})}})}),E("div",{className:"mt-48 mb-16",children:[v(ee,{className:"mb-24 font-medium text-14",children:"Autocomplete"}),v(Re,{name:"Autocomplete",control:s,defaultValue:[],render:({field:{onChange:c,value:h,onBlur:y,ref:p}})=>v(no,{className:"mt-8 mb-16",multiple:!0,freeSolo:!0,options:la,value:h,onChange:(k,D)=>{c(D)},renderInput:k=>{var D;return v(ot,{...k,placeholder:"Select multiple tags",label:"Tags",variant:"outlined",InputLabelProps:{shrink:!0},error:!!l.Autocomplete,helperText:(D=l==null?void 0:l.Autocomplete)==null?void 0:D.message,onBlur:y,inputRef:p})}})})]}),E("div",{className:"mt-48 mb-16",children:[v(ee,{className:"mb-24 font-medium text-14",children:"DateTimePicker"}),v(Re,{name:"DateTimePicker",control:s,render:({field:{onChange:c,value:h}})=>{var y;return v(ia,{value:new Date(h),onChange:c,slotProps:{textField:{id:"birthday",label:"Birthday",InputLabelProps:{shrink:!0},fullWidth:!0,variant:"outlined",error:!!l.DateTimePicker,helperText:(y=l==null?void 0:l.DateTimePicker)==null?void 0:y.message},inputAdornment:{position:"start",children:v(St,{size:20,children:"heroicons-solid:cake"})}}})}})]}),E("div",{className:"flex my-48 items-center",children:[v(qe,{className:"mx-8",variant:"contained",color:"secondary",type:"submit",disabled:oo.isEmpty(u)||!i,children:"Submit"}),v(qe,{className:"mx-8",type:"button",onClick:()=>{n(kt)},children:"Reset Form"})]})]}),E("div",{className:"w-1/2 my-48 p-24",children:[v("div",{className:"mb-12",children:E(ee,{children:["Is Valid: ",i?"true":"false"]})}),v("div",{className:"mb-12",children:v(ee,{children:"Form data"})}),v("div",{className:"mb-12",children:v("pre",{className:"language-js p-24 w-400",children:JSON.stringify(f,null,2)})}),E("div",{className:"mb-12",children:[v(ee,{children:"Touched fields"}),v("pre",{className:"language-js p-24 w-400",children:JSON.stringify(m,null,2)})]}),v("div",{className:"mb-12",children:E(ee,{className:"mt-16 font-medium text-12 italic",color:"text.secondary",children:["Render Count: ",xt]})})]})]})}function ga(){return E(so,{children:[E("div",{className:"flex w-full items-center justify-between mb-24",children:[v(ee,{variant:"h4",children:"React Hook Form"}),v(qe,{variant:"contained",color:"secondary",component:"a",href:"http://react-hook-form.com",target:"_blank",role:"button",startIcon:v(St,{children:"heroicons-outline:external-link"}),children:"Reference"})]}),v(ee,{className:"mb-16",component:"p",children:"Performant, flexible and extensible forms with easy to use validation."}),v("hr",{}),v(ee,{className:"text-16 mt-32 mb-16",component:"h4",children:"Example usage with Material-UI elements and form validation"}),v(ao,{className:"mb-64",component:ua,raw:jo}),v(ee,{className:"text-32 mt-32 mb-8",component:"h2",children:"Examples"}),E("ul",{children:[v("li",{className:"mb-8",children:"src/app/main/sign-in/SignInPage.tsx"}),v("li",{className:"mb-8",children:"src/app/main/sign-up/SignUpPage.tsx"}),v("li",{className:"mb-8",children:"."}),v("li",{className:"mb-8",children:"."}),v("li",{className:"mb-8",children:"."})]})]})}export{ga as default};
