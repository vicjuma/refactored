 $(document).ready(()=>{

        $(".card").css({
          'trasition' : '1s all ease'
        })
        $(".js-edit-proposal").on("click", ()=>{
          $(".proposal-div").css({
            'display' : 'block',
            'trasition' : '1s all ease'
          })
          $(".card").css({
            'trasition' : '1s all ease'
          })
        })
        $("#reportSpam").on("click", ()=>{
          $(".modal-outer").css({
            'display' : 'block'
          })
        })
        $("#proposalForm").on("submit", (e)=>{
            e.preventDefault()
        })

        $("#sendProposal").on("click", ()=>{

          $(".proposal-div").css({
            'display' : 'block',
            'trasition' : '1s all ease'
          })
          
        })
        $("#cancelButton").on("click", ()=>{
          $(".proposal-div").css({
            'trasition' : '1s all ease'
          })
        })

        $("#proposalFormbutton").on("click", (e)=>{
          var isValid = true;
          if($("#proposalPrice").val() < 1)
          {
            isValid = false
            console.log($("#proposalPrice").val())


            $(".proposalPricems").css({
              'color': '#fb2b2b'
            })
            $(".error-price").css({
              'color': '#fb2b2b', 
              'display' : 'block'
            })
            $(".proposalPriceb").css(
              {
              'border' : '1px solid #fb2b2b'
              })
          }
          else
          {
            $(".proposalPricems").css({
              'color': '#000'
            })
            $(".error-price").css({
              'color': '#fb2b2b', 
            })
            $(".proposalPriceb").css(
              {
              'border' : '1px solid #000'
              })
          }


          if($("#proposal_description").val() < 1)
          {
            isValid = false
            $("#proposal_description").css(
              {
              'border' : '1px solid #fb2b2b'
              })
              $(".desc-msg").css({
                'color': '#fb2b2b'
              })

              $(".error-desc").css({
                'color': '#fb2b2b', 
                'display' : 'block'
              })
          }
          else
          {
            $("#proposal_description").css(
              {
              'border' : '1px solid #000'
              })

              $(".desc-msg").css({
                'color': '#000'
              })

              $(".error-desc").css({
                'color': '#fb2b2b', 
              })
          }

          if(isValid)
          {
            $(".card").css({
              'display' : 'block',
              'trasition' : '1s all ease'
            })
            $(".proposal-div").css({
              'trasition' : '1s all ease'
            })
          }
        })


      })