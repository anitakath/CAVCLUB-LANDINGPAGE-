
const signUpBtn = document.getElementById('signUpBtn')


const mobileNav = document.getElementById('mobileNav')



/*------------------------------------------ SECTION: MOBILE NAVIGATION ------------------------------------------ */

mobileNav.addEventListener('click', ()=>{
    const mobileNavigationContainer = document.querySelector('.mobileNavigationContainer')
    const mobileTest = document.getElementById('mobileTest')

    if(mobileNavigationContainer.style.transform === 'translateX(-2000px)'){

        if ($(window).width() < 960) {
            mobileNavigationContainer.style.height = '12vh'
            mobileNavigationContainer.style.top = '100px'
            //alert(' less than 960')
        } else{
            //alert('More than 960')
            mobileNavigationContainer.style.height = '10vh'
            mobileNavigationContainer.style.top = '80px'
        }

        mobileTest.style.height = '200px'
        mobileTest.style.transition = '2s ease'
        



        
        mobileNavigationContainer.style.transform = 'translateX(0px)'
        mobileNavigationContainer.style.transition = '2s ease'
    } else{
        mobileNavigationContainer.style.height = '0vh'
        mobileNavigationContainer.style.transform = 'translateX(-2000px)'
        mobileNavigationContainer.style.transition = '3s ease'

    }
    
})





 






















/* ---------------------------- SECTION: ABOUT CAVLIER  - WEB - INFORMATIONAL TEXT ------------------------------------------ */

const cardItem = document.querySelectorAll('.cardItem')
const cardItemTitle = document.querySelectorAll('.cardItemTitle')




console.log(cardItem)
console.log(cardItemTitle)



cardItem.forEach((x) =>{

    const imageAboutCavalier = document.querySelector('.imageAboutCavalier')
    x.addEventListener('click', ()=>{
        imageAboutCavalier.style.transition = '1.5s ease'
        imageAboutCavalier.style.opacity = '0.6'

      
        //alert('moincito')
        if(x.style.height === '550px'){
            x.style.height = '100px'
            x.style.transition = '1.5s ease'
          
            
        } else{
            x.style.height = '550px'
            x.style.transition = '1.5s ease'
        }

       
    })
})




/* ---------------------------- SECTION: ABOUT US - INCREMENTER ------------------------------------------ */

const mouseOverForIncrement= document.getElementById("mouseOverForIncrement")

console.log(mouseOverForIncrement)
let executed = false;


mouseOverForIncrement.addEventListener('mouseover', someFunction= ()=>{

        const counter = document.querySelectorAll('.counter')

       
        //console.log(executed) -> false

        if(executed){
            return;
        } else if(!executed){
            console.log('not executed')
            executed = true;
            console.log(executed)
            



            counter.forEach(counter =>{
                counter.innerText = '0'
        
                const updateCounter = () =>{
                const target = +counter.getAttribute('data-target')
                const x = +counter.innerText
                const increment = target / 400
    
                    if( x <= target){
                        counter.innerText = `${Math.ceil(x + increment)}`
                        setTimeout(updateCounter, 1)
                    
                    }
                }
                    
                updateCounter();
      
            })
    
        }

})








