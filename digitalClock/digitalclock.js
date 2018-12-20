function displayTime(){

   var currTime= new Date();
   var h = currTime.getHours();
   var m =currTime.getMinutes();
   var s= currTime.getSeconds();
   var clockDiv = document.getElementById('clock');
   var meridiem = "AM";
   if(h>11)
   	meridiem ="PM";

   if(h==0)
   	h=12;
   else if(h>12)
   	h=h-12;  
 
   h = check(h);
   m = check(m);
   s= check(s);

   function check(i){
   	if(i<10) 
   	{	i= "0"+ i;}
   	return i;
   }

    clockDiv.innerHTML= h + ":" + m + ":"+ s + " " + meridiem;
   setInterval(displayTime , 500);
}
