
const visibilite = document.querySelector('body visible')
const togglee = document.getElementById('toggle')
const fermer =document.getElementById('close')



  togglee.addEventListener('click',tog) ;

  function tog() {

    const navi = document.querySelector('body')
    navi.classList.toggle('visible')
  }


  //-----------modal---------------------
  const signupp = document.getElementById('signup');
 

  signupp.addEventListener('click',modal);

  function modal () {
      const swipup = document.querySelector('.modal-container')
      swipup.classList.add('visiblee')
  }


  fermer.addEventListener('click',closee);

  function closee () {
    const swipup = document.querySelector('.modal-container')
    swipup.classList.remove('visiblee')
    
  }


    window.addEventListener('click',function (event){

       const swipup = document.querySelector('.modal-container')
      
       if (event.target=== swipup) {
       swipup.classList.remove('visiblee')
      }

    });
