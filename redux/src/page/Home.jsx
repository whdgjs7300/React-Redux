import { useState } from "react";

const Home = () => {
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // 서밋한 후 빈 값 만들기
        setText('');
    }

    return ( 
        <div>
            <h1>To Do</h1>
            <form action="" onSubmit={onSubmit}>
                <input type="text"  value={text} onChange={onChange}/>
                <button>ADD</button>
            </form>
            <ul>

            </ul>
        </div>
    );
}

export default Home;