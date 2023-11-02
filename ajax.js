console.log("hey i am learning ajax");


let primary = document.getElementById('primary');

primary.addEventListener('click',buttonClickHandler)

function buttonClickHandler() {
    console.log("you have clicked in the primary button");
    //initiate an xhr object
    const xhr = new XMLHttpRequest();
    
    
    //open the object
    
    //get request
    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);
    
    //post request
    xhr.open('POST','https://dummy.restapiexample.com/api/v1/create',true)
    xhr.getResponseHeader('Content-type','application/json');
    
    
    //what to do on progress(optional)
    
    xhr.onprogress = function(){
        console.log('on progress');
    }
    
    // what to do when response is ready
    
    xhr.onload = function(){
        if(this.status===200){
            console.log(this.responseText);
        }
        else{
            console.log("some error occured");
        }
    }
    
    params = `{"name":"test123456","salary":"123","age":"23"}`;
    
    //send the request
    
    xhr.send(params);
}




// //initiate an xhr object
// const xhr1 = new XMLHttpRequest();

// //open the object
// xhr1.open('GET', 'shit.txt',true);

// //what to do on progress(optional)

// xhr1.onprogress = function(){
//     console.log('on progress');
// }

// // what to do when response is ready

// xhr1.onload = function(){
//     if(this.status===200){
//         console.log(this.responseText);
//     }
//     else{
//         console.log("some error occured");
//     }
// }

// //send the request
// xhr1.send();