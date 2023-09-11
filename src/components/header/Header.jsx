import './header.scss';

const Header=()=>{
    return(
        <div className='header'>
            <div className="compass">
                <span>
                    Student
                </span>
                <div className='logo'>
                    
                </div>
                <span>
                    Compass
                </span>
            </div>
            <div className="searchBar">
                <div className='searchBox'>
                    <input type='text' className='search'/>
                    <div className='searchIcon'></div>
                </div>
                
            </div>

        </div>
    )

}

export default Header;