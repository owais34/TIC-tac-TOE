var btn=document.querySelector("#btn");
var cell1=document.querySelector("#cell1");
var cell2=document.querySelector("#cell2");
var cell3=document.querySelector("#cell3");
var cell4=document.querySelector("#cell4");
var cell5=document.querySelector("#cell5");
var cell6=document.querySelector("#cell6");
var cell7=document.querySelector("#cell7");
var cell8=document.querySelector("#cell8");
var cell9=document.querySelector("#cell9");
var chars=[" ","X","O"];
var state=[0,0,0,0,0,0,0,0,0];

btn.addEventListener("click",function(){
  for(var i=0;i<9;i++)
  state[i]=0;
  cell1.textContent=" ";cell2.textContent=" ";cell3.textContent=" ";
  cell4.textContent=" ";cell5.textContent=" ";cell6.textContent=" ";
  cell7.textContent=" ";cell8.textContent=" ";cell9.textContent=" ";
});

cell1.addEventListener("click",function () {
  state[0]=(state[0]+1)%3;
  cell1.textContent=chars[state[0]];
});
cell3.addEventListener("click",function () {
  state[2]=(state[2]+1)%3;
  cell3.textContent=chars[state[2]];
});
cell2.addEventListener("click",function () {
  state[1]=(state[1]+1)%3;
  cell2.textContent=chars[state[1]];
});
cell4.addEventListener("click",function () {
  state[3]=(state[3]+1)%3;
  cell4.textContent=chars[state[3]];
});
cell5.addEventListener("click",function () {
  state[4]=(state[4]+1)%3;
  cell5.textContent=chars[state[4]];
});
cell6.addEventListener("click",function () {
  state[5]=(state[5]+1)%3;
  cell6.textContent=chars[state[5]];
});
cell7.addEventListener("click",function () {
  state[6]=(state[6]+1)%3;
  cell7.textContent=chars[state[6]];
});
cell8.addEventListener("click",function () {
  state[7]=(state[7]+1)%3;
  cell8.textContent=chars[state[7]];
});
cell9.addEventListener("click",function () {
  state[8]=(state[8]+1)%3;
  cell9.textContent=chars[state[8]];
});
