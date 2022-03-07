document.addEventListener("DOMContentLoaded",
    function (event) {
        document.querySelector("html").addEventListener("mousemove", 
        function (event) {
            document.getElementById('x').innerHTML = event.clientX;
            document.getElementById('y').innerHTML = event.clientY;
    });
});