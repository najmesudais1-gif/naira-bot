let bal = parseInt(localStorage.getItem('naira_bal')||'0');
document.getElementById('balance').innerText='₦'+bal;

let AdController;
try{AdController=window.Adsgram.init({blockId:"int-48566"})}catch(e){}

function watchAd(){
if(!AdController){alert('Ad loading, wait 2 sec');return;}
AdController.show().then(r=>{if(r.done){bal+=10;save()}}).catch(()=>alert('No ad now, try later'));
}
function spin(){if(bal<5){alert('Need ₦5 to spin');return;}bal+=50;save();}
function openChest(){bal+=20;save();}
function save(){localStorage.setItem('naira_bal',bal);document.getElementById('balance').innerText='₦'+bal;alert('New Balance: ₦'+bal);}

// Handle reward URL?userid=[userId]
const p=new URLSearchParams(location.search);
if(p.get('userid')){console.log('Reward user:',p.get('userid'))}