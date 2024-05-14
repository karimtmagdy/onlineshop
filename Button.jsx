import { cva, type VariantProps } from "class-variance-authority";
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'

const styles=cva([''],{
variants:{
color:[
'zinc','hot','green','sunshine','primary'],
mode:[
menu:{''},
switch:{''},
],
variant:[
base:{},
danger:{},
success:{},
warning:{},
primary:{},
],
shape:[
rounded:'rounded',
circle:'rounded-md',
square:'rounded-xl',
],
outline:[
base:{},
danger:{},
success:{},
warning:{},
primary:{},
],
gradient:[
base:{},
danger:{},
success:{},
warning:{},
primary:{},
],
fit:[
xs:{'w- h-'},
sm:{'w- h-'},
md:{'w- h-'},
lg:{'w- h-'},
],
size:[
xs:{''},
sm:{''},
md:{''},
lg:{''},
],
loading:[
true:{''},
false:{''},
],
px:[
1:'',
2:'',
3:'',
4:'',
],
},
compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
defaultVariants: {
    loading: "false",
  },
})
const Button =({className,,,,,,,,icon,value,arrow, disabled,onClick,...props})=>{
return (<>
<button disabled={disabled} onClick={onClick} {...props} className={clsx(twMarge(styles({

}),className))}>
{icon}{value}{arrow}
</button>
</>)}

// active: dark: disabled: hover:



