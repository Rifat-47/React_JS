import Item from "./Item";

function List(props){
    return (
        <div style={{border:"3px solid green", height:"10rem", width:"10rem"}}>
        {props.items.map(
            (item, i) => {
                return <Item name={item['name']} age={item['age']} key={i} />
            })}
            
        </div>
    );
}

export default List;