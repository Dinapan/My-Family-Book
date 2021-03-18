function change(){
   var family = [Me.jpg,mommy.png,Daddy.jpg,Babybro.jpg];
   var name = ["Me","Mom","Dad","Little Brother"];
   for (i=0; i < 3; i++){
      document.getElementById("pie").innerHTMl=name(i);
      console.log("name change into"+i);
      document.getElementById("pp+").src=family(i);
      console.log("name change into"+i);
   };
};