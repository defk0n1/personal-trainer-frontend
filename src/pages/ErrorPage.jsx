import lockimage from '../assets/lockimage.png'



const ErrorPage = ({data}) => {
    console.log(data)
  return (
    <div style={{width:"100%", height:"100vh", display:"flex",justifyContent:"center" , alignItems:"center" , flexDirection:"column", backgroundColor:"red",textAlign:"center"}}>
        <div><img height="100px" width="100px" src={lockimage} alt="" /></div>
        <div className="features-title" style={{marginBottom:"0" , height:"unset"}}>
        <h1>ACCESS TO THIS PAGE IS RESTRICTED</h1></div>
        <h4>Contact admin if you think this is a mistake</h4>
    </div>
  )
}

export default ErrorPage