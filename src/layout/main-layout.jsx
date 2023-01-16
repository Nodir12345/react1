import { Header } from "../components/header/header";
import { Block } from "../components/block/block";
import { Footer } from "../components/footer/footer";
export const  MainLayout = ({children})=>{

return <>
<Header/>
<Block/>
<main>{children}</main>
<Footer/>
</>

}