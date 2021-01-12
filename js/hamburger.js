

function hamburgerfunction()
{

    var x = document.querySelectorAll('.links');
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
}