// 

// I found a better way to implement the data fetching technique, so not using this file.

// 











// https://api.github.com/search/repositories?q=user:google&sort=forks&order=desc

document.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("sbm").click();
    }
  });

// get_values = () => {
//     const kn = () =>{
//         var req = new XMLHttpRequest()
//         req.open('GET',`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=${n}&page=2`,true)
//         req.onload = function() {
//             var data = JSON.parse(this.response);
//             console.log(data)
//             $.each(data.items, function(i, status){
//             htm += '<tr>'
//             htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.id+ '</td>'
//             htm += '<td style="padding-left: 10px; padding-right: 10px;"><p>'+status.name+ '</p></td>'
//             htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.forks+ '</td>'
    
    
//             htm += '</tr>'
    
//         });
//         $('tbody').html(htm);
//         req.send();
//     }
//     }
//     var request = new XMLHttpRequest()
//     var org = $('#org').val()
//     var n = $('#n').val()
//     // var m = $('#m').val()

//     request.open('GET',`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=${n}`,true)
    
//     request.onload = function() {
//         var data = JSON.parse(this.response);
//         console.log(data)
//         var htm = '';
//         $.each(data.items, function(i, status){
//         htm += '<tr>'
//         htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.id+ '</td>'
//         htm += '<td style="padding-left: 10px; padding-right: 10px;"><p>'+status.name+ '</p></td>'
//         htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.forks+ '</td>'


//         htm += '</tr>'

//     });
    
//     $('tbody').html(htm);
//     }
    
//     request.send()
//     request = null;
//     if (n>100){
//         kn();
//     //     var req = new XMLHttpRequest()
//     //     req.open('GET',`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=${n}&page=2`,true)
//     //     req.onload = function() {
//     //         var data = JSON.parse(this.response);
//     //         console.log(data)
//     //         $.each(data.items, function(i, status){
//     //         htm += '<tr>'
//     //         htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.id+ '</td>'
//     //         htm += '<td style="padding-left: 10px; padding-right: 10px;"><p>'+status.name+ '</p></td>'
//     //         htm += '<td style="padding-left: 10px; padding-right: 10px;">'+status.forks+ '</td>'
    
    
//     //         htm += '</tr>'
    
//     //     });
//     //     $('tbody').html(htm);
        
//     // }
//     }

    
// }
var dataReceived = []

function get_data() {
    var org = $('#org').val()
    var n = parseInt($('#n').val())
    console.log(n)
    var m = $('#m').val()
    var numberOfPages = Math.floor(n/100)+1;
    console.log(numberOfPages)
    // , 
    if (numberOfPages <= 1){
        alert('hi')
        fetch(`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=${n}`)
		.then(response => response.json())
		.then( data => dataReceived.push(data['items']))
		.catch( error => console.error(error));
        console.log(dataReceived)

    }

    else if (numberOfPages>1){
        for (let i=1;i<=numberOfPages;i++){
        fetch(`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=100&page=${i}`)
		.then(response => response.json())
		.then( data => dataReceived.push(data['items'][0]))
		.catch( error => console.error(error));
        }
        console.log(dataReceived)
    }
    console.log("data")
    console.log(dataReceived)



}

// fetch('https://api.github.com/search/repositories?q=user:google&sort=forks&order=desc&per_page=n&page=1')
// 		.then(response => response.json())
// 		.then( data => console.log(data))
// 		.catch( error => console.error(error));



btn_click = () => get_data()

open_modal = (name) =>{
    var request = new XMLHttpRequest()
    var org = $('#org').val()
    // var n = $('#n').val()
    var m = $('#m').val()
    var name = name;
    console.log(name);
}