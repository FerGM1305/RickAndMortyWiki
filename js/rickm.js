const search_location=async()=>{
    let locId = document.getElementById('searchbar').value;
    changeBackgroundColor(locId)
    if(locId>0 && locId<=126){
        let url= "https://rickandmortyapi.com/api/location/"+locId;
        const api = await fetch(url);
        const locationData = await api.json();
        residents = locationData.residents;
        selectedResidents = verifyResidents(residents);
        divRes = document.querySelector("#result")
        divRes.innerHTML=""
        for (let i = 0; i < selectedResidents.length; i++) {
            const resident = selectedResidents[i];
            let urlR = resident;
            const apiResident = await fetch(urlR);
            const residentData = await apiResident.json();
            console.log(residentData)
            const episodes = verifyEpisodes(residentData.episode).filter(Boolean);
            divItem = document.createElement('div')
            divItem.innerHTML=`
            <div  class="card" style="width: 18rem;">
                <img id="img5" src="${residentData.image}" class="card-img-top">
                <h5 class="card-title">${residentData.name}</h5>
                <div style="text-align: justify;">
                    <p class="card-text"><b>Status: </b>${residentData.status}</p>
                    <p class="card-text"><b>Species: </b>${residentData.species}</p>
                    <p class="card-text"><b>Origin Name: </b>${residentData.origin.name}</p>
                    <b>Episodes: </b>
                    <p class="card-text">${episodes.join("\n")}</p>
                </div>
            </div>
            `
            divRes.appendChild(divItem);
        }
        
    }
}


function changeBackgroundColor(locId){
    if(locId<=50){
        document.body.style.backgroundColor = "#5BFF33";
    }else if(locId>50&&locId<=80){
        document.body.style.backgroundColor = "#33AFFF";
    }else{
        document.body.style.backgroundColor = "#FF0000"
    }
}

function verifyResidents(residents){
    selectedResidents = ["","","","",""];
    if(residents.length >= 5){
        for (let i = 0; i < 5; i++) {
            selectedResidents[i]=residents[i];
        }
    }else{
        selectedResidents=residents
    }
    return selectedResidents
} 


function verifyEpisodes(episodes){
    selectedEpisodes = ["","",""];
    episodes.sort();
    if(residents.length >= 3){
        for (let i = 0; i < 3; i++) {
            selectedEpisodes[i]=episodes[i];
        }
        return selectedEpisodes;
    }else{
        selectedEpisodes=episodes;
        return selectedEpisodes;
    }
    
}