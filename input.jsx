import { cva, type VariantProps } from "class-variance-authority";
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'
import {zinc,hot,green, sunshine, primary} from '@constants'
// make variable dark with if statement es6 switch on to classes dark and make default class justify-center but button hqve class toggle-menu replace it to justify-between

const Input =({className, variant,shape,outline,gradient,fit,size, loading,px,icon,value,arrow, classSpan disabled,onClick,...props})=>{

const styles=cva([`flex items-center`],{
variants:{
color:[
'zinc','hot','green','sunshine','primary'],
mode:[
menu:{'toggle-menu'},
switch:{'toggle-switch'},
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
xs:{'w-5 h-5'},
sm:{'w-6 h-6'},
md:{'w-7 h-7'},
lg:{'w-8 h-8'},
],
size:[
xs:{'text-xs'},
sm:{'text-sm'},
md:{'text-md'},
lg:{'text-lg'},
xl:{'text-xl'},
],
loading:[
true:{''},
false:{''},
],
px:[
1:'px-1',
2:'px-2',
3:'px-3',
4:'px-4',
],
},
compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
defaultVariants: {
    loading: "false",
  },
})

return (<>
<filedset disabled={disabled} onClick={onClick} {...props} className={clsx(twMarge(styles({ className,color,mode, variant,shape,outline,fit, gradient,size, loading,px,icon,value,arrow, classSpan 

}),className))}>

<input   className={className}{...props}

placeholder={placeholder}

  />

{icon}{value}
<span className={classSpan}>{arrow}</span>
</filedset>
</>)}

// active: dark: disabled: hover:



 