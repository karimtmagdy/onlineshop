import { cva, type VariantProps } from "class-variance-authority";
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'

const styles=cva([''],{
variants:{
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
xs:{''},
sm:{''},
md:{''},
lg:{''},
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
color:[
'zinc','hot','green','sunshine','primary'],
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
px:[''],
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



