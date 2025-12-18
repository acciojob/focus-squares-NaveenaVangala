//your JS code here. If required.
let x=document.querySelectorAll('.square');
        let a=document.querySelector('#square1');
        let b=document.querySelector('#square2');
        let c=document.querySelector('#square3');
        a.addEventListener('mouseover', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=a)
                x[i].style.backgroundColor= "#6F4E37";
            }
        });
        b.addEventListener('mouseover', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=b)
                x[i].style.backgroundColor= "#6F4E37";
            }
        });
        c.addEventListener('mouseover', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=c)
                x[i].style.backgroundColor= "#6F4E37";
            }
        });
        a.addEventListener('mouseout', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=a)
                x[i].style.backgroundColor= "#E6E6FA";
            }
        });
        b.addEventListener('mouseout', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=b)
                x[i].style.backgroundColor= "#E6E6FA";
            }
        });
        c.addEventListener('mouseout', ()=>{
            for(let i=0;i<x.length;i++){
                if(x[i]!=c)
                x[i].style.backgroundColor= "#E6E6FA";
            }
        });