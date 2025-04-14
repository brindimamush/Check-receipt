//abbysinia https://cs.bankofabyssinia.com/slip/?trx=FT250889JGGH07157
//CBE https://apps.cbe.com.et:100/?id=FT251042GH4117061146
//telebirr https://transactioninfo.ethiotelecom.et/receipt/CCP9E4VIT

const txid=document.getElementById("txid");
const btn=document.getElementById("show");
const banks=document.getElementById("banks");
const labelbank=document.getElementById("labelbank");
const digit=document.getElementById("digit");

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
    console.log("clicked");
}