function Prog3(props){
    let output = props.value
    let filteredValue = output.filter(function(ele,ind){
        return ele.name[0] == "J"
    })
        return(
            <div>
                <h1>Filter all data starting with the letter J</h1>
        {
            filteredValue.map(function(ele,ind){
                return(
                    <div key={ind} className="main">
                        <span>Id: {ele.id}</span>
                        <span>Name: {ele.name}</span>
                        <span>User Type: {ele.user_type}</span>
                        </div>
                    
                )
            })
        }    
    
            </div>
        )
    
        
    }
    export default Prog3;