import cva from 'class-variance-authority'
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'

const styles=cva([''],{
variants:{
shape:{},
outline:{},
color:{},
fit:{},
size:{},
size:{},
px:{},
}
})
const Button =({className,,icon,value,arrow, disabled,onClick,...props})=>{
return (<>
<button disabled={} onClick={onClick} {...props} className={clsx(twMarge(styles({}),className))}>
{icon}{value}{arrow}
</button>
</>

)
}





