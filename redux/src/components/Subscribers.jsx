
const subscribers = (props) => {
    
    return ( 
        <div className="items">
            <p>구독자 수 : {props.count}</p>
            <button>구독하기</button>
        </div>
    );
}

export default subscribers;