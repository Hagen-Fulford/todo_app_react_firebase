import React from 'react';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`
}

function App() {
  return (
    <div className ={style.bg}>
      <div className={style.containter}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.form}><input classname={style.input} type="text" placeholder='Add Todo' /></form>
      <button className={style.button}></button>

      </div>
    </div>
  );
}

export default App;
