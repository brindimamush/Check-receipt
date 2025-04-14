//abbysinia https://cs.bankofabyssinia.com/slip/?trx=
//CBE https://apps.cbe.com.et:100/?id=
//telebirr https://transactioninfo.ethiotelecom.et/receipt/
//dashen https://receipt.dashensuperapp.com/receipt/
const txid=document.getElementById("txid");
const btn=document.getElementById("show");
const banks=document.getElementById("banks");
const labelbank=document.getElementById("labelbank");
const digit=document.getElementById("digit");
const iframe=document.getElementById("iframe");

txid.addEventListener("input",function(){
    if(banks.value==="CBE" && txid.value.length===12){
       // console.log("hello");
        digit.style.display="inline";
    }
    else{
       // console.log("goodbye");
        digit.style.display="none";
    }
})
function chkreceipt(){
labelbank.innerHTML=banks.value;
if(banks.value===""){
txid.style.display="none";
digit.style.display="none";
}
else if(banks.value==="CBE" && txid.value.length===12){
digit.style.display="inline";
txid.style.display="inline";
}else{
    digit.style.display="none";
    txid.style.display="inline";
}
    //console.log(banks.value);
}

function checked(){
    switch(banks.value){
        case "CBE":
            iframe.src=`https://apps.cbe.com.et:100/?id=${txid.value.toUpperCase()}${digit.value}`
        break;
        case "Abyssinia":
            iframe.src=`https://cs.bankofabyssinia.com/slip/?trx=${txid.value.toUpperCase()}`
        break;
        case "Telebirr":
            iframe.src=`https://transactioninfo.ethiotelecom.et/receipt/${txid.value.toUpperCase()}`
        break;
        /*case "Dashen":
        iframe.src=`https://receipt.dashensuperapp.com/receipt/${txid.value.toUpperCase()}`
        */
        default:
            iframe.src="";
    }
    console.log("clicked");
}