import { cva, type VariantProps } from "class-variance-authority";
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'

const styles=cva([''],{
variants:{
shape:[
xs:{''},
sm:{''},
md:{''},
lg:{''},
],
outline:[''],
color:[''],
fit:[''],
size:[''],
loading:[
true:[''],
false:[''],
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





