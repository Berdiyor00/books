import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import heroImg from "../../assets/headerImg/hero.png";
import { Link, NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { useState, useEffect, useRef } from "react";
import { fetchData } from "../../reducer/reducer";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseSharp } from "react-icons/io5";

const Nav = ({ main_title, text, image }) => {
  const ref = useRef();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("Design");
  const [isopen, setIsOpen] = useState(false);
  const deta = useSelector((state) => state.user?.users);

  useEffect(() => {
    if (category) {
      dispatch(fetchData(category)());
      return;
    }
   //  dispatch(fetchData()());
  }, [category, dispatch]);
  console.log(category);
  const handle = (e) => setCategory(e);

  return (
    <header>
      <nav className="heroContainer flex justify-between mt-32">
        <div className="nav_left flex gap-5 ">
          <NavLink to='/Home'>

          <h3 className="text-3xl font-normal leading-9">
            MY<span className="font-semibold">BOOK</span>
          </h3>
          </NavLink>
          <FiShoppingCart className="w-6 text-xl" />
        </div>
        <div
          className={`nav_right flex gap-7 items-center  ${
            isopen ? "shows" : "hide"
          }`}
        >
          <ul className="flex gap-7">
            <div className="flex gap-">
              {" "}
              <Link to="/Home">
                <li className="text-lg leading-5 font-medium text-white white-color ">
                  Explorer
                </li>
              </Link>
              <IoCloseSharp
                className="close_btn text-white text-lg cursor-pointer"
                onClick={() => setIsOpen(!isopen)}
              />
            </div>
            <Link to="/shop">
              <li className="text-lg leading-5 font-medium text-white">Shop</li>
            </Link>
            <Link to="/blog">
              <li className="text-lg leading-5 font-medium text-white">Blog</li>
            </Link>
          </ul>
          <NavLink to='/login'>

          <button className="border-solid leading-5 text-2xl">Log in</button>
          </NavLink>
        </div>
        <CiMenuBurger
          onClick={() => setIsOpen(!isopen)}
          className="burgerBtn text-xl cursor-pointer"
        />
      </nav>
      <div className="hero">
        <div className="hero_main heroContainer flex  flex-col justify-center">
          <h1 className="text-7xl font-bold">{main_title}</h1>
          <p className="leading-7 text-xl font-normal">{text}</p>
          <div className="hero_input">
            <FaSearch />
            <input
              ref={ref}
              onChange={({ target }) => handle(target.value.toLowerCase())}
              type="text"
              placeholder="Search Book"
            />
          </div>
        </div>
        <div className="hero_img">
          <img className="img1" src={heroImg} alt="" />
          <img className="img2" src={image} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Nav;
