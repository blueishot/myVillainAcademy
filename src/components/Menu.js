import menuArt from '../css/menuArt.css'
import headerLogo from '../Img/header_logo.png'

const Menu = () => {
    return (
        <div>
            <div className='menuBody'>
                <div
                style={{
                    cursor:'pointer',
                }}
                >
                    <img src={headerLogo}/>
                </div>
                <div>
                    <div className='menuButtons'>
                        <div className='listButton'>
                            <span>
                                LOV
                            </span>
                        </div>
                        <div className='listButton'>
                            <span>
                                Meta
                            </span>
                        </div>
                        <div className='listButton'>
                            <span>
                                Paranormal
                            </span>
                        </div>
                        <div className='listButton'>
                            <span>
                                Yakuza
                            </span>
                        </div>
                        <div className='listButton'>
                            <span>
                                Independent
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;