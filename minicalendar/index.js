const date=document.getElementById("date")
const day=document.getElementById("day")
const year=document.getElementById("year")
const mont=document.getElementById("month")
var a=new Date()
var l=["SUNDAY","MONDAY","TUESDAY","WENDSDAY","THURSDAY","FRIDAY","SATURDAY"]
var m=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
date.innerText=a.getDate();
day.innerHTML=l[a.getDay()];
year.innerHTML=a.getFullYear();
mont.innerHTML=m[a.getMonth()]