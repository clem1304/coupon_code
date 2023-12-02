const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('darkmode');
       
}

function onloadPage() {
    document.getElementById('coupon').style.visibility="visible";
}

function closeCoupon() {
    document.getElementById('coupon').style.visibility="hidden";
}
