function Prog4(props){
    let output = props.value
    let filteredValue = output.filter(function(ele,ind){
        let age = ele.age
        return age>28 && age<=50
    })
        return(
            <div>
                <h1>Filter all data based on age greater than 28 and age less than or equal to 50</h1>
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
    
    export default Prog4;