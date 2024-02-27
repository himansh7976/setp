function ClickEvent(){

    let data="himansu"
    function clicked(){
        data='ayush';
        alert(data)
    }
    return(
        <div>
        <h1> class 10 click event</h1>
        <h1>{data}</h1>
        <button onClick={clicked}>click me</button>

        </div>

    )
}
export default ClickEvent;