
const mercury = document.querySelector('.mercury')
const mercuryContent = document.querySelector('.mercury-content')
let venus = document.querySelector('.venus')
let venusContent = document.querySelector('.venus-content')
let earth = document.querySelector('.earth')
let earthContent = document.querySelector('.earth-content')
let mars = document.querySelector('.mars')
let marsContent = document.querySelector('.mars-content')
let jupiter = document.querySelector('.jupiter')
let jupiterContent = document.querySelector('.jupiter-content')
let saturn = document.querySelector('.saturn')
let saturnContent = document.querySelector('.saturn-content')
let uranus = document.querySelector('.uranus')
let uranusContent = document.querySelector('.uranus-content')
let neptune = document.querySelector('.neptune')
let neptuneContent = document.querySelector('.neptune-content')
let bar = document.querySelector('.bar')

mercury.addEventListener('click', () =>
{

    if (mercuryContent.classList.contains('active') )
    {
        mercuryContent.classList.remove('active') 
        bar.classList.remove('active')  
    }

    else {
        bar.classList.add('active')  
        mercuryContent.classList.add('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        saturnContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

venus.addEventListener('click', () =>
{
    if (venusContent.classList.contains('active'))
    {
        venusContent.classList.remove('active')  
        bar.classList.remove('active')   
    }

    else {
        bar.classList.add('active')  
        venusContent.classList.add('active')
        mercuryContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        saturnContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

earth.addEventListener('click', () =>
{
    if (earthContent.classList.contains('active'))
    {
        earthContent.classList.remove('active') 
        bar.classList.remove('active')    
    }

    else {
        bar.classList.add('active')  
        earthContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        saturnContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

mars.addEventListener('click', () =>
{
    if (marsContent.classList.contains('active'))
    {
        marsContent.classList.remove('active') 
        bar.classList.remove('active')    
    }

    else {
        bar.classList.add('active')  
        marsContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        saturnContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

jupiter.addEventListener('click', () =>
{
    if (jupiterContent.classList.contains('active'))
    {
        jupiterContent.classList.remove('active')  
        bar.classList.remove('active')   
    }

    else {
        bar.classList.add('active')  
        jupiterContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        saturnContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

saturn.addEventListener('click', () =>
{
    if (saturnContent.classList.contains('active'))
    {
        saturnContent.classList.remove('active') 
        bar.classList.remove('active')    
    }

    else {
        bar.classList.add('active')  
        saturnContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        uranusContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

uranus.addEventListener('click', () =>
{
    if (uranusContent.classList.contains('active'))
    {
        uranusContent.classList.remove('active')
        bar.classList.remove('active')     
    }

    else {
        bar.classList.add('active')  
        uranusContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        saturnContent.classList.remove('active')
        neptuneContent.classList.remove('active')
    }
})

neptune.addEventListener('click', () =>
{
    if (neptuneContent.classList.contains('active'))
    {
        neptuneContent.classList.remove('active') 
        bar.classList.remove('active')    
    }

    else {
        bar.classList.add('active')  
        neptuneContent.classList.add('active')
        mercuryContent.classList.remove('active')
        venusContent.classList.remove('active')
        earthContent.classList.remove('active')
        marsContent.classList.remove('active')
        jupiterContent.classList.remove('active')
        uranusContent.classList.remove('active')
        saturnContent.classList.remove('active')
    }
})
