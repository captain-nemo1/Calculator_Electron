
var keys=document.querySelectorAll('.buttons button');
var k;
var result=false
for( var i=0;i<keys.length;i++)
{
    keys[i].onclick=function(){
    var lay=document.querySelector('.screen');
    value=this.innerHTML;
    screen=lay.innerHTML;
    console.log(value,screen)
    if(result==false){
        if(value=='C')
            {lay.innerHTML="";}
        else if(value=='='){
            var k= dev(screen);
            lay.innerHTML=k;
            result=true;
        }
        else
            {lay.innerHTML+=value;}
        }
        else
        {lay.innerHTML="";result=false}    
    }
}   

function dev(screen)
{
    var l=screen.length;var c=-1;
    for(var i=0;i<l;i++)
        if(screen[i]=='+' ||screen[i]=='-'||screen[i]=='/'||screen[i]=='*')
            {c=i;break;}
    var n1=Number(screen.substring(0,c));
    var n2=Number(screen.substring(c+1,l));
    console.log(n1,n2);
    if(screen[c]=='+')
        return n1+n2;
    if(screen[c]=='-')
        return  n1-n2;
    if(screen[c]=='*')
        return n1*n2;    
    if(screen[c]=='/')
        return n1/n2;
}