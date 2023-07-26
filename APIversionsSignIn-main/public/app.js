import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore,collection,addDoc,getDocs} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";



const firebaseConfig = {
  apiKey: "AIzaSyBMkYxAURfkPV-lNUxa93G7xDKC7BGI-Ek",
  authDomain: "chattingapp-ed719.firebaseapp.com",
  projectId: "chattingapp-ed719",
  storageBucket: "chattingapp-ed719.appspot.com",
  messagingSenderId: "38797589895",
  appId: "1:38797589895:web:6b49f706cdeca53cbce722"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


let msgInp = document.querySelector('.inp')
let msgSend = document.querySelector('.msgSend')
msgSend.addEventListener('click', async()=>{
  
  
  try{
  
  const docRef = await addDoc(collection(db, "messages"), {
    Usermsg: msgInp.value,
  });
  console.log("Document written with ID: ", docRef.id);
  console.log(msgInp)
}  
  catch(e){
       console.log('error is located',e)
  }

})

document.addEventListener('readystatechange',async ()=>{
  console.log('document is ready')
  try{
    
    let main_div = document.querySelector('.show-msg')
   const querySnapshot = await getDocs(collection(db, "messages"));
  querySnapshot.forEach((doc) => {


    let msg_div = document.createElement('div')
    msg_div.classList.add('recive')
    let msg_div_para = document.createElement('p')
    let para_node = document.createTextNode(doc.data().Usermsg)
    // msg_div_para.appendChild(para_node)
    msg_div.appendChild(para_node)
    main_div.appendChild(msg_div)    
    console.log(para_node)



   console.log(doc.id, " => ", doc.data());




  });


 } 
catch(e){
  console.log(e)
}



})
