import logo from '../Images/newLogo.png'

export default function Header(){
    return(
        <div className='nav'>
            <img src={logo} className='navimg'></img>
        </div>
    )
}