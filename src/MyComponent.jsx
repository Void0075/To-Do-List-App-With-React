import React, {useState} from 'react';

const MyComponent = () => {
    
    const [userText, setUserText] = useState("");
    const [userList, setUserList] = useState([])

    const handleUserInput = (e) => {
        setUserText(e.target.value);
    }

    const handleAddItem = () => {
        let p = document.createElement("p");
        p = userText

        setUserList(prevList => {
            if(prevList.includes(p)){
                return prevList
            }
            else{
                return [...userList, p]
            }
        })
    }

    const handleDelete = (indexToRemove) => {
        setUserList(prevItems => prevItems.filter((_, index) => index !== indexToRemove))
    }

    const handleMark = (itemToMark) => {
        setUserList(prevItems => prevItems.map(item => (
            item === itemToMark ? <s>{item}</s> : item
        )))
    }


  return (
    <div className='flex justify-center items-center h-screen flex-col bg-black gap-16'>
        <h1 className='text-emerald-600 font-bold text-5xl shadow-2xl text-shadow-emerald-400'>My To-Do App </h1>
        <div>
            <input type='text' className='border-2 text-white border-white bg-gray-800 h-10 w-48 rounded-2xl p-3 hover:h-12 hover:w-52 transition-all duration-300 ease-in-out' onChange={handleUserInput} placeholder="Enter you're task..."/>
            <button className='rounded-2xl bg-green-500 mx-5 h-10 w-20 p-1.5 hover:h-11 hover:text-[20px] hover:w-24 hover:bg-green-600 transition-all ease-in-out duration-300 cursor-pointer' onClick={handleAddItem}>Add Item</button>
        </div>
        <div className='flex flex-col justify-start items-center overflow-auto h-105 w-125 bg-gray-600 rounded-4xl'>
            <h2 className='text-4xl my-5'>Tasks: </h2>
            {userList.map((item, index) => (
                <div key={index} className='flex gap-10 justify-center items-center'>
                    <div className="flex justify-center items-start text-white border-2 border-white bg-gray-800 rounded-2xl my-5 p-[18px] px-[30px] break-all whitespace-normal overflow-y-auto w-[200px] max-w-[200px] max-h-[100px]">
                        {item}
                    </div>
                    <button onClick={() => handleDelete(index)} className='border-2 w-18 h-13 rounded-[10px] text-white bg-red-500 cursor-pointer  hover:bg-red-600 hover:w-20 hover:h-14 hover:text-[18px] transition-all duration-300 ease-in-out'>Delete</button>
                    <button onClick={() => handleMark(item)} className='border-2 w-18 h-13 rounded-[10px]  text-white bg-cyan-500 cursor-pointer  hover:bg-cyan-600 hover:w-20 hover:h-14 hover:text-[18px] transition-all duration-300 ease-in-out'>Mark</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyComponent