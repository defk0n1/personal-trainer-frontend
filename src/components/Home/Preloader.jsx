import loadergif from '../../assets/loading-icon.gif'


const Preloader = () => {
  return (
    <div style={{height:"100vh" , width:"100vw"  , justifyContent:"center" , alignItems:"center" ,backgroundColor:"black"
    ,zIndex:"1999",display:"flex", position:"sticky",top:"0px"}}><img height="300" width="300" src={loadergif}/></div>
  )
}

export default Preloader
