

function hamburgerfunction()
{

    var x = document.querySelectorAll('.links');
    var y = document.querySelectorAll('.icons');
    var i=0;

    for(i=0;i<x.length;i++)
    {
    if (x[i].style.display === 'none' || x[i].style.display === '' ) {
        x[i].style.display = 'block';
    } 
    else {
        x[i].style.display = 'none';  
    }
    
    }

    for(i=0;i<y.length;i++)
    {
    if (y[i].style.display === 'none' || y[i].style.display === '' ) {
        y[i].style.display = 'block';
    } 
    else {
        y[i].style.display = 'none';  
    }
    
    }
}