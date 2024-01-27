import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../reducer/reducer";
import { useNavigate } from "react-router-dom";
import { Tilt } from "react-tilt";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const Books = ({
  title,
  className,
  className2,
  className3,
  limit,
  limitP,
  btn,
  star
}) => {
  const goPage = useNavigate();
  const dispatch = useDispatch();
  const deta = useSelector((state) => state.user?.users);
  const defaultOptions = {
    reverse: false,
    max: 75,
    perspective: 1000,
    scale: 1.1,
    speed: 2000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.05,.98,.52,.99)",
  };

  useEffect(() => {
    // dispatch(fetchData("design")());
  }, []);
  const [value, setValue] = useState(2);

  console.log(deta);

  return (
    
    <div className={className}>
        <Box
        sx={{ '& > legend': { mt: 2 } }}
      ></Box>

      <h2>{title}</h2>
      <ul>
        <div className={className2}>
          {deta?.slice(0, limit)?.map((books) => (
            <div
              className={className3}
              key={books?.id}
              onClick={() => {
                goPage(`/home/${books?.id}`);
              }}
            >
               <Tilt options={defaultOptions} style={{ height: 150, width: 300 }}>

              <img src={books?.volumeInfo.imageLinks?.thumbnail} alt="books" />
               </Tilt>
              <div className="books_main">
                <h3>
                  {books?.volumeInfo.title &&
                    books?.volumeInfo.title.slice(0, 40)}
                </h3>
                <p >by {books?.volumeInfo.authors}</p>
                {/* <p>Publisher: {books?.volumeInfo.publisher}</p> */}
                <div className="flex star">
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />              
                  <p> {books?.volumeInfo.publishedDate}</p>
                  
                </div>
                <p>
                  {" "}
                  {books?.volumeInfo.description &&
                    books?.volumeInfo.description.slice(0, limitP)}
                  ...
                </p>
                <button className={btn}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Books;
