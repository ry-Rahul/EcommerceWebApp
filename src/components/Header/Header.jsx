import "./Header.scss";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import { useEffect ,useState} from "react";
const Header = () => {

    const[scrolled,setScrolled]=useState(false);

    const handleScroll=()=>{
        let offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }

    }
    useEffect(()=>{

        window.addEventListener("scroll",handleScroll);
    },[])
    return <div className={`main-header ${scrolled? 'sticky-header':''}`}>
            <div className="header-content">
                <ul className="left">
                    <li>Home</li>
                    <li>About</li>
                    <li>Categories</li>
                </ul>
                <div className="center">HeadSet</div>
                <div className="right">
                <TbSearch />
                <AiOutlineHeart />
                <span className="cart-icon">
                    <CgShoppingCart />
                    <span className="cart-count">0</span>
                </span>
                </div>
            </div>
    </div>;
};

export default Header;
