{/* <script>  */}
    $(document).ready(function () {
        console.log("we are using jquery");
        $('#first').click(function () {
            console.log("you clicked on first para");
        })
        // $('p').hide()
        $('#second').click(function () {
            console.log("you clicked on this second para.");
        })
        $('.third').click(function () {
            console.log("you clicked on this third para.");
        })
        $('#ek').dblclick(function () {
            console.log("you double clicked here");
        })
        $('#do').mouseenter(function () {
            console.log("you entered in para 2");
        })
        $('#teen').hover(function () {
            console.log("you hovered on para 3");
        })
        // $('#char').hide(1500,function () {
        //     console.log("hidden");
        // })
        // $('#char').show(1500,function () {
        //     console.log("show");
        // })
        $('button').click(function () {
            $('#panch').hide(1000);
            $('#panch').show(1500);
            
        })
        // $('button').click(function () {
            
        // })
        // $('#che').animate({
        //     opacity: 0.3,
        //     height: '150px',
        //     width: '350px'
        // },2000);
        $('#saat').text("hey i changed it");

    })
{/* </script> */}