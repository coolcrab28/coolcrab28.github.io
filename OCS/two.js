
$('#dataTable').hide()

async function fetch_data(){
    htm = ""
    var dataReceived = []
    var org = $('#org').val()
    loader = document.getElementById('loader')
    var n = parseInt($('#n').val())
    console.log(n)
    var m = $('#m').val()
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
        <td style="padding-left: 10px; padding-right: 10px;"><p class="blue" onclick="" data="hi">${dataReceived[j]['name']}</p></td>
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
    loader.style.display = 'block'
    fetch_data()
}