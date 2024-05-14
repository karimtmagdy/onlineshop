import cva from 'class-variance-authority'
import {clsx} from 'clsx'
import {twMarge} from 'tailwind-marge'

const styles=cva([],{
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
const Button =({className,,,,,,,...props})=>{
return (<>
<button  className={clsx(twMarge(styles({}),className))}>
{}{}{}
</button>
</>

)
}





