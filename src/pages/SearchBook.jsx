
const SearchBook = (props) => {
    console.log(props)
  return (
    <div className='container text-[#3ef18f]'>
      <div className=' absolute md:top-[60px] md:right-[90px] md:border-dashed md:border-2 md:pt-[30px] md:pl-[20px] md:pr-[20px] md:pb-[100px] md:rounded-[10px]'>
        <form className='md:w-[500px] w-[300px]  flex justify-between'>
            <input className='pl-[20px]  border-solid border-1  bg-slate-200 rounded-lg border-sky-500 h-12 w-[300px]' type="search" placeholder='# SEARCH' />
            <select className='pl-[20px] pr-[20px] border-solid border-1 text-white bg-slate-500 rounded-lg border-sky-500 h-12' name="" id="">
            <option value=""># Sort</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
            </select>
        </form>
        <h2 className=' text-center pt-5 pb-3'>My Book</h2>
        <hr />
      {
        props.keys.map((e,index)=>(
          <div key={index} id={e.id} className='w-full flex flex-col gap-5 mt-5 border-dotted border-2 border-sky-500 p-[10px] rounded-2xl'>
            <img src={e.imgur} alt="alt"  className='w-[70px] h-[70px] object-cover rounded-full'/>
        
            <p><span className=' inline-block text-red-600'>Book Name</span> : {e.firstname}</p>
            <p><span className=' inline-block text-red-600'>You Name</span> : {e.lastname}</p>
            <p><span className=' inline-block text-red-600'>TEL NOMER</span> : {e.tel}</p>
            <p><span className=' inline-block text-red-600'>You EMAIL</span> : {e.email}</p>
            <p><span className=' inline-block text-red-600'>Comment TEAM</span> :{e.guruh}</p>
            <div className='flex w-full ml-[30px] gap-[30px]'>
              <button onClick={()=>props.editcon(e.id)} className="text-[#fff]  pt-[10px] pl-[40px] pr-[40px] rounded-[20px] pb-[10px] text-lg bg-amber-500  font-medium font-['Rubik'] capitalize">edit</button>
              <button onClick={()=>props.dalet(e.id)} className=" pt-[10px] pl-[40px] pr-[40px] rounded-[20px] pb-[10px] text-lg bg-amber-800   font-medium font-['Rubik'] capitalize">dalet</button>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default SearchBook