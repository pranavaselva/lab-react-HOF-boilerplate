function Prog5(props){
    let output = props.value
    let filteredValue = output.filter(function(ele,ind){
        return ele.user_type == "Designer"
    })

    let totalYears = filteredValue.reduce(function(acc,filterval){
        return acc + filterval.years
    },0)

        return(
            <div>
                <h1>Find the total years of the designers</h1>
        <p>{totalYears}</p>
            </div>
        )
    
        
    }

    export default Prog5;