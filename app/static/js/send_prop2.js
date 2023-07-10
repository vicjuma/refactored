
        function toogleSearch()
        {
            $( ".search" ).toggleClass( "searchtransition" )
            $( ".search-mobile" ).toggleClass( "searchtransition" )

            
        }

        window.onscroll = ()=>{

            
            if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40)
            {
                $("header").addClass("headerBg")
            }

            else
            {
                $("header").removeClass("headerBg")

            }
          }
          

          setInterval(()=>{
            if(screen.width > 888)
            {
                $(".mobile").addClass("hide-m")
            }
            else
            {
                $(".mobile").removeClass("hide-m")

            }
          }, 10)
        