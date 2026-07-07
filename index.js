const price = document.getElementById("price");
const networth = document.getElementById("T");
const spend = document.getElementById("spend");
const img = document.getElementById("img");
const buy = document.getElementById("buy");
const sell = document.getElementById("sell");
const count = document.getElementById("count");
var total = 1000000000000; 
const objects = document.getElementById("objects");
const calculation = document.getElementById("calculation")
const purchases= document.getElementById("purchases")
const spentTotal = document.getElementById("spentTotal")



  const products = [
  { name: "Big Mac", price: 2,count:0, image: "https://neal.fun/spend/images/big-mac.jpg" },
  { name: "Flip Flops", price: 3, count:0, image: "https://neal.fun/spend/images/flip-flops.jpg" },
  { name: "Air Jordan", price: 125, count:0, image: "https://neal.fun/spend/images/air-jordans.jpg" },
  { name: "Gaming Console", price: 299, count:0, image: "https://neal.fun/spend/images/gaming-console.jpg" },
  { name: "Airpods", price: 199, count:0, image: "https://neal.fun/spend/images/airpods.jpg" },
  { name: "Drone", price: 350, count:0, image: "https://neal.fun/spend/images/drone.jpg" },
  { name: "Bike", price: 800, count:0, image: "https://neal.fun/spend/images/bike.jpg" },
  { name: "Puppy", price: 1500, count:0, image: "https://neal.fun/spend/images/puppy.jpg" },
  { name: "Horse", price: 2500, count:0, image: "https://neal.fun/spend/images/horse.jpg" },
  { name: "Acre of Farmland", price: 3000, count:0, image: "https://neal.fun/spend/images/acre-of-farmland.jpg" },
  { name: "Designer Handbag", price: 5500, count:0, image: "https://neal.fun/spend/images/designer-handbag.jpg" },
  { name: "Hot Tub", price: 6000, count:0, image: "https://neal.fun/spend/images/hot-tub.jpg" },
  { name: "Luxury Wine", price: 7000, count:0, image: "https://neal.fun/spend/images/luxury-wine.jpg" },
  {name:"Neet Exam Paper", price:8000,count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIthmyt0X03K8gR336RHuH81WX2dH2Ek-NafHE6ITK2w&s=10"},
  { name: "Diamond Ring", price: 10000, count:0, image: "https://neal.fun/spend/images/diamond-ring.jpg" },
  { name: "Jet Ski", price: 12000, count:0, image: "https://neal.fun/spend/images/jet-ski.jpg" },
  { name: "Rolex Watch", price: 15000, count:0, image: "https://neal.fun/spend/images/rolex.jpg" },
  { name: "Tesla", price: 100000, count:0, image: "https://neal.fun/spend/images/tesla.jpg" },
  { name: "Ferrari", price: 250000, count:0, image: "https://neal.fun/spend/images/ferrari.jpg" },
  { name: "Single Family Home", price: 300000, count:0, image: "https://neal.fun/spend/images/single-family-home.jpg" },
  
  { name: "Gold Bar", price: 700000, count:0, image: "https://neal.fun/spend/images/gold-bar.jpg" }, 
  { name: "Yacht", price: 7500000, count:0, image: "https://neal.fun/spend/images/yatch.jpg" },
  { name: "Formula 1 Car", price: 15000000, count:0, image: "https://neal.fun/spend/images/formula-1-car.jpg" },
  { name: "Apache Helicopter", price: 31000000, count:0, image: "https://neal.fun/spend/images/apache-helicopter.jpg" },
  { name: "Mansion", price: 45000000, count:0, image: "https://neal.fun/spend/images/mansion.jpg" },
  { name: "Make a Movie", price: 100000000, count:0, image: "https://neal.fun/spend/images/make-a-movie.jpg" },
  { name: "Boeing 747", price: 148000000, count:0, image: "https://neal.fun/spend/images/boeing-747.jpg" },
  { name: "Mona Lisa", price: 780000000, count:0, image: "https://neal.fun/spend/images/mona-lisa.jpg" },
 
  { name: "Cruise Ship", price: 930000000, count:0, image: "https://neal.fun/spend/images/cruise-ship.jpg" },
   { name: "Burj Khalifa", price: 1500000000, count:0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAt9nTl3SfPUXoBXHFGUWYw7h45hwdYMHtIDUTHHbFw&s=10" },
   {name: "RCB" , price:1700000000, count:0 , image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjhkuj4KRUefkrTwLdCSzjcBjnigzUUykcSeiaz9w_Q&s=10"},
  { name: "Antilia", price: 2000000000, count:0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQah-KDdrIiLMARG_xcPBmQ80vl9q36_OwZ2tgiGazf5A&s=10" },
  {name:"B2 Bomber", price: 2100000000, count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBz26jTn_8X-PCJk93eIIj4GozM00_8eexFzkdFSP6A&s=10"},

 {name:"British Crown", price: 57000000000, count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1k0pUxD1W0hDtjr-CvL5L4vVXE0XnZ6aNrEcRnuHcg&s=10"},
 {name:"Real Madrid", price: 95000000000,count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbKg88aFL8zeBcuATAUleGQ5HDw_Q12KJRvfnqD9MEYQ&s=10"},
 {name:"USS Gerald Carrier", price: 12200000000, count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2_6AGd2AIwBwQVYhqHdR4SAbw_L1a-zVyszRQ4t0uRg&s=10"},
 {name:"Twitter", price: 44000000000,count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OALhovv7Ovn6EhsHUdbSzqnbOnM0maXEZG2LXba1Yw&s=10"},
  { name: "Ambani", price: 132000000000, count:0, image: "https://imageio.forbes.com/specials-images/imageserve/5c7d7829a7ea434b351ba0b6/0x0.jpg?format=jpg&crop=1837,1839,x206,y250,safe&height=416&width=416&fit=bounds" },
 {name:"ISS", price: 150000000000, count:0, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA4GWSt935yRoiyXTg8Oe8oCtrvS-oXyyN7KEM_DIDEA&s=10"},
 { name: "Ronaldo Physique", price: 1000000000000, count:0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28o6em32UuvtnN_F3NB_3fzrYpG38b5YBlzPPi0-DWQ&s=10" }
 


]

for (let i = 0; i < products.length; i++) {
  const product = products[i];
 
 objects.innerHTML += `
            <div class="card">

                <img class="image" src="${product.image}">

                <h2 class="name">${product.name}</h2>

                <h3 class="price">$${product.price.toLocaleString()}</h3>

                <div class="buttons">

                    <button class="sell" onclick="sellItem(${i})">
                        Sell
                    </button>

                    <span class="count-"> <span class="countT"
                    id="count-${i}">${product.count} 
                    </span>
                    </span>

                    <button class="buy" onclick="buyItem(${i})">
                        Buy
                    </button>

                </div>

            </div>
`;
    }


function buyItem(i) {
  const product = products[i];
   if(product.name == "Ronaldo Physique"){
      alert("Everything can't be bought!, Work on yourself");
    }
    else{
    if (total >= product.price) {
        total -= product.price;
        product.count++;
         document.getElementById(`count-${i}`).textContent =
            product.count;
networth.innerHTML = `$${total.toLocaleString()}`;
updateSummary();
    }
}}

function sellItem(i) {
  const product = products[i];
    if (product.count > 0) {
        total += product.price;
        product.count--;
            document.getElementById(`count-${i}`).textContent = product.count;
        networth.innerHTML = `$${total.toLocaleString()}`;
    }
}



function updateSummary() {

    spentTotal.innerHTML = "";

    let totalSpent = 0;

    for (let i = 0; i < products.length; i++) {

        const product = products[i];

        if (product.count > 0) {

            const cost = product.count * product.price;

     totalSpent += cost;

           

           spentTotal.innerHTML += `
<div class="purchase-row">
    <span>${product.name}</span>
    <span>${product.count}</span>
    <span>$${cost.toLocaleString()}</span>
</div>
`;
        }
    }

    purchases.textContent =
        `Total Spent: $${totalSpent.toLocaleString()}`;
}