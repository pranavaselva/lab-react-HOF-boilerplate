function Prog2(props){
    let output = props.value
    let filteredValue = output.filter(function(ele,ind){
        return ele.user_type == "Designer"
    })
        return(
            <div>
                <h1>Display based on user type</h1>
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
    export default Prog2;