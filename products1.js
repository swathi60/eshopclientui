let products=[];

async function bodyload(){
    var selectElement= document.getElementById("categories");
    selectElement.selectedIndex=0;
    try {
        const response= await fetch( 'https://fair-pants-tuna.cyclic.app/all');
        if(!response.ok){
            throw new Error(`HTTP ERROR! status : ${response.status}`);
        }
         products = await response.json();
        loadproducts(products);
        console.log(products);
    } catch (error) {
        console.error("Error:",error);        
    }
}

function categorychange(){
    var categoryname= document.getElementById("categories").value;
    console.log("selected category:" ,categoryname);
    if(categoryname==="all"){
        loadproducts(products);
    }else{
        var filterproducts=products.filter(product=>product.category===categoryname)
        console.log(filterproducts);
        loadproducts(filterproducts);
    }
}

function loadproducts( products1 ){
    document.getElementById("items").innerHTML="";
        for(var result of products1){
        var div=document.createElement("div");
        div.className="card p-2 m-2";
        div.style.width="280px";
        div.innerHTML=`
        <div class="card-header text-center"> <h4>${result.category.toUpperCase()}</h4> </div>
        
        <div class="card-body">
        <img src="${result.image}" alt="productimage" width="70%" aspect-ratio: 'auto'  class="card-img" style="box-shadow:0px 0px 10px 0.65px black; display:flex; justify-content: center; align-items:center;"/>
        </div>
        
        <div class="card-footer">
        <p>id:${result.id}</p>
        <p>name:${result.name}</p>
        <p>price:${result.price}</p>
        </div>`;
        document.getElementById("items").appendChild(div);
        }
    }

