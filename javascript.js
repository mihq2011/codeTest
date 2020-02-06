'use strict'

//Desktop and Tablet
var tabButtons = document.querySelectorAll('.tabContainer .buttonContainer button')
var tabPanels = document.querySelectorAll('.tabContainer .tabPanel')

function showPanel (pIndex) {

    tabPanels.forEach(function(node){
        node.style.display = 'none'
        tabPanels[pIndex].style.display = 'block'
        if(tabButtons[pIndex].classList.contains('active')) {
            
            tabButtons[pIndex].classList.remove('active')
        } else {
            tabButtons[pIndex].classList.add('active')
        }
        
        
    });

    
    };

    
showPanel(0)









//Mobile
var contentExpand = document.querySelectorAll('.accordion__button')
var i = 0;
while(i < contentExpand.length) {
    contentExpand[i].onclick = function() {
        const accordionContent = this.nextElementSibling
        console.log(accordionContent)
        this.classList.toggle('accordion__button--active')

        if(this.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'
        } else{
            accordionContent.style.maxHeight = 0
        }
    }
    i++
}
