function solve(s){
    //..
  let newstring = s.split('');
  let cntL =0; let cntU =0; let c;
 
  for(let i=0;i<newstring.length;i++) 
    {
      c = newstring[i];
      if (c == c.toUpperCase() ){
        cntU++ ;
    }else{  cntL++ ;}
 }
  if (cntU > cntL) {
     s= s.toLowerCase();
    }else{
      s =s.toUpperCase();
    }
  return s;
}

console.log(solve("CODe"));
console.log(solve("COde"));