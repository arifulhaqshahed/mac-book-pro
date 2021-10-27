// Memory card extra cost handle
function memoryCost(extraMemory){
    const extraMemoryCost = document.getElementById('memory-cost');
    extraMemoryCost.innerText =  extraMemory;
    addTotal();
}


// Storage extra cost handle
function storageCost(extraStorage){
    const extraStorageCost = document.getElementById('storage-cost');
    extraStorageCost.innerText =  extraStorage;
    addTotal();
}


// delivery charge handle
function deliveryCharge(deleiveycharge){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = deleiveycharge;
    addTotal();
}


// sum of total cost
function addTotal(){
    const bestPrice = document.getElementById('best-price');
    const mainBestPrice = parseFloat(bestPrice.innerText);

    const extraMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const extraStorageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);
    const totalPriceText = document.getElementById('total-price');
    const totalPrice = mainBestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    totalPriceText.innerText = totalPrice;

    // grand total
    const grandTotal = document.getElementById('grand-total');
    grandTotal.innerText = totalPrice;
}


// promo code section
function applyPromoCode(){
    const promoCodeText = document.getElementById('promo-code');
    const promoCode = promoCodeText.value;
    if(promoCode == 'stevekaku'){
        const grandTotal = parseFloat(document.getElementById('grand-total').innerText);
        const discount = grandTotal * (20/100);
        const finalTotal = grandTotal - discount;
        document.getElementById('grand-total').innerText = finalTotal;
        promoCodeText.value = '';   
    }
}
