let nodes = document.querySelectorAll(".node");

let result = document.querySelector(".result");

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
   window.location.reload();
})


nodes.forEach(node => {

   node.addEventListener("click", (e) => {
      e.target.innerHTML = "X";
      e.target.classList.remove("not-checked");
      e.target.classList.add("checked", "disabled", "checkedX");
      let notChecked = document.querySelectorAll(".not-checked");
      // console.log(notChecked);
      let random = notChecked[Math.floor(Math.random() * notChecked.length)];
      if (notChecked.length) {
         random.innerHTML = "o";
         // console.log(random);
         random.classList.remove("not-checked");
         random.classList.add("checked", "disabled","checkedY");
      }
      
      check()
   })


})


function check() {

// 1 2 3
// 4 5 6
// 7 8 9



   const n1 = document.querySelector(".node1"),
      n2 = document.querySelector(".node2"),
      n3 = document.querySelector(".node3"),
      n4 = document.querySelector(".node4"),
      n5 = document.querySelector(".node5"),
      n6 = document.querySelector(".node6"),
      n7 = document.querySelector(".node7"),
      n8 = document.querySelector(".node8"),
      n9 = document.querySelector(".node9"),
      notChecked = document.querySelectorAll(".not-checked");


      

   if (n1.classList.contains("checkedX") && n2.classList.contains("checkedX") && n3.classList.contains("checkedX")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n4.classList.contains("checkedX") && n5.classList.contains("checkedX") && n6.classList.contains("checkedX")) {
      result.innerHTML += `${n4.innerHTML} won`
   }
   else if (n7.classList.contains("checkedX") && n8.classList.contains("checkedX") && n9.classList.contains("checkedX")) {
      result.innerHTML += `${n7.innerHTML} won`
   }
   else if (n1.classList.contains("checkedX") && n5.classList.contains("checkedX") && n9.classList.contains("checkedX")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n3.classList.contains("checkedX") && n5.classList.contains("checkedX") && n7.classList.contains("checkedX")) {
      result.innerHTML += `${n3.innerHTML} won`
   }
   else if (n1.classList.contains("checkedX") && n4.classList.contains("checkedX") && n7.classList.contains("checkedX")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n2.classList.contains("checkedX") && n5.classList.contains("checkedX") && n8.classList.contains("checkedX")) {
      result.innerHTML += `${n2.innerHTML} won`
   }
   else if (n3.classList.contains("checkedX") && n6.classList.contains("checkedX") && n9.classList.contains("checkedX")) {
      result.innerHTML += `${n3.innerHTML} won`
   }


   else if (n1.classList.contains("checkedY") && n2.classList.contains("checkedY") && n3.classList.contains("checkedY")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n4.classList.contains("checkedY") && n5.classList.contains("checkedY") && n6.classList.contains("checkedY")) {
      result.innerHTML += `${n4.innerHTML} won`
   }
   else if (n7.classList.contains("checkedY") && n8.classList.contains("checkedY") && n9.classList.contains("checkedY")) {
      result.innerHTML += `${n7.innerHTML} won`
   }
   else if (n1.classList.contains("checkedY") && n5.classList.contains("checkedY") && n9.classList.contains("checkedY")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n3.classList.contains("checkedY") && n5.classList.contains("checkedY") && n7.classList.contains("checkedY")) {
      result.innerHTML += `${n3.innerHTML} won`
   }
   else if (n1.classList.contains("checkedY") && n4.classList.contains("checkedY") && n7.classList.contains("checkedY")) {
      result.innerHTML += `${n1.innerHTML} won`
   }
   else if (n2.classList.contains("checkedY") && n5.classList.contains("checkedY") && n8.classList.contains("checkedY")) {
      result.innerHTML += `${n2.innerHTML} won`
   }
   else if (n3.classList.contains("checkedY") && n6.classList.contains("checkedY") && n9.classList.contains("checkedY")) {
      result.innerHTML += `${n3.innerHTML} won`
   }else{
      if(notChecked.length==0) {
         result.innerHTML += "no one won"
      }
   }
}