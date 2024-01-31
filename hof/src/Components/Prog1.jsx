function Prog1(props){
    let output = props.value;

    return <div>
        <h1>Display all items</h1>

        {
                output.map(function(ele,ind){
                    return(
                    <div key={ind} className="main">
                        <span>Id: {ele.id}</span>
                        <span>Name: {ele.name}</span>
                        <span>User Type: {ele.user_type}</span>
                        </div>)
                })
            }
    </div>
}

export default Prog1;