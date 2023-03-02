
$('#dataTable').hide()

async function fetch_data(){
    htm = ""
    var dataReceived = []
    var org = $('#org').val()
    loader = document.getElementById('loader')
    var n = parseInt($('#n').val())
    console.log(n)
    
    var numberOfPages = Math.floor(n/100)+1;
    console.log(numberOfPages)
    if (numberOfPages == 1){
        let req = await fetch(`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=${n}`)
        let j_ = await req.json()
        
        dataReceived = dataReceived.concat(j_['items'])
        
    }
    else if (numberOfPages>1){
        for (let i=1;i<=numberOfPages;i++){
            let req = await fetch(`https://api.github.com/search/repositories?q=user:${org}&sort=forks&order=desc&per_page=100&page=${i}`)
            let j_ = await req.json()
            
            // dataReceived.push(j_['items'])
            dataReceived = dataReceived.concat(j_['items'])
            
        }
    }
    dataReceived = dataReceived.slice(0,n++)
    
    for (let j=0;j<n-1;j++){
        
        // console.log(dataReceived[j]['id'])
        htm += `
        <tr>
        <td style="padding-left: 10px; padding-right: 10px;">${dataReceived[j]['id']}</td>
        <td style="padding-left: 10px; padding-right: 10px;"><p class="blue" data="${dataReceived[j]['forks_url']}" onclick="go(this)">${dataReceived[j]['name']}</p></td>
        <td style="padding-left: 10px; padding-right: 10px;">${dataReceived[j]['forks']}
        </tr>
        `
    }
    
    $('tbody').html(htm)

    console.log(dataReceived)
    loader.style.display = 'none' 
    // document.getElementById('dataTable').style.removeProperty('display')
    $('#dataTable').show()


}

function btn_click() {
    $('#dataTable').hide()
    loader = document.getElementById('loader')
    loader.style.display = 'block' //display loader before async/await.
    fetch_data()
}

async function getForks(link){
    let req = await fetch(`${link}?sort=oldest`)
    let j_ = await req.json()
    var modT = document.getElementById('inMod') 
    htm = "<h3>oldest contributers</h3>"
    var m = $('#m').val()
    for (let i=0;i<m;i++){
        htm+=`<li><a target="_blank" href="${j_[i]['owner']['html_url']}">${j_[i]['owner']['login']}</a></li>`
    }
    console.log(j_)
    modT.innerHTML = htm

}
document.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("sbm").click();
    }
  });

function go(elmnt){
    var modal = document.getElementById('myModal')
    var modT = document.getElementById('inMod')
    modal.style.display = 'block'
    var link = ($(elmnt).attr("data"))
    htm = ""
    htm += "<p>Please wait...</p>"
    modT.innerHTML = htm
    getForks(link)
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}