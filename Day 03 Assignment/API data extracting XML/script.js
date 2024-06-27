//Create XML - HTTP request
var request =new XMLHttpRequest();

// to get the request 

request.open("GET","https://restcountries.com/v3.1/all")

//to kick start process(client initiate process with server )

request.send();

//data available on server ,now server send response to client

request.onload = function(){
    var result = JSON.parse(request.response)
    console.log(result);

   //printing country name,region,sub-region,population
    for(var i=0;i<result.length;i++){

        console.log(result[i].region,result[i].subregion,result[i].capital,result[i].population);
        }

    //display all country flags
    for(var i=0; i<result.length;i++)
        {
            console.log(result[i].flags);
        }
}

