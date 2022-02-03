let getCoins = async () => {
    return fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=USD")
        .then(response => response.json())
        .then(data => data)
}

let ShowCoins = async () => {
    getCoins().then(resp => {
        resp.coins.forEach(value => {
            document.getElementById("CoinList").innerHTML += `<tr>
            <th class= "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg flex flex-row items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-full justify-between">
              <div class="flex">
                <img width="30" src="${value.icon}">
                <p class="ml-7">${value.id}</p>
              </div>
              <div class="flex">
                <p class="ml-7 m-4">${value.price.toFixed(2)} USD</p>
              </div>
            </th>
          </tr>`
        })
    })
}

ShowCoins()
