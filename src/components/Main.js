import Menu from './Menu';
import mainArt from '../css/mainArt.css'
import Search from './Search';

const Main = () => {
    return (
        <div>
            <Menu />
            <div className='mainBody'>
                <div className='mainTitle'>
                    Search your villain
                </div>
                <Search />
            </div>
        </div>
    )
}

export default Main;