$(document).ready(()=> {
    $(document).scroll(() =>{
        $('.navbar-store').toggleClass('scrolled', $(this).scrollTop() > $('.navbar-store').height())
    })
})