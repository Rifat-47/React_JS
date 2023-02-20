

function Item(props){
    return (
        <div style={{border:"3px solid green"}}>
            {props.name} : {props.age}
        </div>
    );
}

export default Item;