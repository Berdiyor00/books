import React, { useState, useRef, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SearchBook from './SearchBook';
import { NavLink } from 'react-router-dom';
import { ImHome } from "react-icons/im";

const Profel = () => {
  let defaultvalues = JSON.parse(localStorage.getItem('values')) || [];
  let [val, setObj] = useState(defaultvalues);
  let bookName = useRef();
  let lastName = useRef();
  let tels = useRef();
  let emails = useRef();
  let Izoh = useRef();
  let [iurl, setIurl] = useState('');
  let [img, setImg] = useState([]);

  let submited = (event) => {
    event.preventDefault();

    if (
      bookName.current.value !== '' &&
      lastName.current.value !== '' &&
      tels.current.value !== ''
    ) {
      // Assuming tels.current.value is a string representing the telephone number
      // You can customize the country code as needed
      const formattedTel = `+${tels.current.value}`;
      
      setObj((prev) => {
        return [
          ...prev,
          {
            firstname: bookName.current.value,
            lastname: lastName.current.value,
            tel: formattedTel,
            email: emails.current.value,
            guruh: Izoh.current.value,
            id: uuidv4(),
            imgur: iurl,
            img2: '2',
          },
        ];
      });
    }

    localStorage.setItem('values', JSON.stringify(val));
  };

  let dalet = (id) => {
    const newContacts = val.filter((e) => e.id !== id);
    localStorage.setItem('values', JSON.stringify(newContacts));
    setObj(newContacts);
  };

  let editcon = (id) => {
    let x = document.getElementById('imgInp');
    let y = document.getElementById('#2');
    let a = document.getElementById('#3');
    let b = document.getElementById('#4');
    let c = document.getElementById('#5');
    let d = document.getElementById('#6');
    let fValue = val.filter((e) => e.id === id);

    let filterValue = val.filter((e) => e.id !== id);
    setObj(filterValue);
    localStorage.setItem('values', JSON.stringify(filterValue));
    x.value = fValue.map((e) => e.imgur);
    y.value = fValue.map((e) => e.firstname);
    a.value = fValue.map((e) => e.lastname);
    b.value = fValue.map((e) => e.tel);
    c.value = fValue.map((e) => e.email);
    d.value = fValue.map((e) => e.guruh);
  };

  const handleImageChange = (event) => {
    const imgInput = event.target;
    const [file] = imgInput.files;

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const imageElement = document.getElementById('Book');
      if (imageElement) {
        imageElement.src = imageUrl;
        setIurl(imageUrl);
      }
    }
  };

  let reducer = (state, action) => {
    if (action.type === 'ONE') {
      return setImg([{ imgurl: oneavat }]);
    }
    if (action.type === 'TWO') {
      return setImg([{ imgurl: twoavat }]);
    }
    if (action.type === 'TRE') {
      return setImg([{ imgurl: treavat }]);
    }
    if (action.type === 'FOUR') {
      return setImg([{ imgurl: fouravat }]);
    }
    if (action.type === 'FIVE') {
      return setImg([{ imgurl: fiveavat }]);
    }
  };

  let [state, dispatch] = useReducer(reducer, img);

  let f = (param) => {
    dispatch({ type: `${param}` });
  };

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };
  const [isValidEmail, setIsValidEmail] = useState(true);
  return (
    <div className=' bg-[#48a17cab]'>
      <div className="container  text-[#fff] ">
        <NavLink to='/shop'>
<button className=' absolute z-10 md:top-[70px] top-[5px] text-[28px]  left-[20px]  text-[#fff]' >
<ImHome/>
</button>
        </NavLink>
        <div className="flex  relative">
         
          <div>
            <div>
              {img.map((e, index) => (
                <img
                  key={index}
                  src={e.imgurl}
                  alt="img"
                  className="rounded-full w-[200px] h-[200px] mb-9"
                />
              ))}
              <div className="flex gap-5 pt-[20px] items-center">
                <button onClick={() => f('ONE')}>
             
                </button>
                <button onClick={() => f('TWO')}>
              
                </button>
                <button onClick={() => f('TRE')}>
                  
                </button>
                <button onClick={() => f('FOUR')}>
          
                </button>
                <button onClick={() => f('FIVE')}>
                 
                </button>
              </div>
            </div>
            <form
              id="forms"
              onSubmit={submited}
              className="flex flex-col w-[300px] md:w-[600px]  capitalize gap-[20px] pb-[20px] pt-[20px]"
            >
              <img
                className=" object-cover w-[200px] h-[300px] rounded border-dashed border-2 border-sky-500 bg-slate-500"
                id="Book"
                src="#"
                alt=""
              />
              <label htmlFor="imgInp">Kitob Rasmini joylang Yoki o'z rasmimgizni joylang</label>
              <input
                accept="image/*"
                type="file"
                id="imgInp"
                onChange={handleImageChange}
             className=' rounded mt-[-20px] text-[orange] inputs'   />
              <input
                id="#2"
                ref={bookName}
                className=" text-white pl-[20px] border-solid border-1  bg-slate-500 rounded-lg border-sky-500 h-12"
                type="text"
                placeholder="# Kitob Nomini Kiriting "
              />
              <input
                id="#3"
                ref={lastName}
                className=" pl-[20px] border-solid border-1  bg-slate-500 rounded-lg border-sky-500 h-12"
                type="text"
                placeholder="# Ismingizni kiriting "
              />
              <input
                id="#4"
                ref={tels}
                className=" pl-[20px] border-solid border-1  bg-slate-500 rounded-lg border-sky-500 h-12"
                type="number"
                placeholder="# Telifon raqamingizni kiriting"/>
<input
  id="#5"
  ref={emails}
  className={`pl-[20px] border-solid border-1 bg-slate-500 rounded-lg border-sky-500 h-12 ${
    !isValidEmail ? 'border-red-500' : ''
  }`}
  type="text"
  placeholder="# Emailingizni kiriting"
  onChange={(e) => validateEmail(e.target.value)}
/>
<input
             id="#6"
             ref={Izoh}
             className=" pl-[20px] border-solid border-1  bg-slate-500 rounded-lg border-sky-500 h-12"
             type=""
             placeholder="# Izoh kiriting "
           />
<button className="w-[130px] button">
<div className="svg-wrapper-1">
<div className="svg-wrapper">
<svg
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   width="24"
                   height="24"
                 >
<path fill="none" d="M0 0h24v24H0z"></path>
<path
                     fill="currentColor"
                     d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                   ></path>
</svg>
</div>
</div>
<span>ADD</span>
</button>
</form>
</div>
</div>
</div>
<SearchBook keys={val} dalet={dalet} editcon={editcon}/>
</div>
);
};

export default Profel;