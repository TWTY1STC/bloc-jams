var animatePoints = function(){
                
    var points = document.getElementsByClassName('point');
    var revealPoints = function(index){
        for (var index in points){
            points[index].style.opacity = 1;
            points[index].style.transform = "scaleX(1) translateY(0)";
            points[index].style.msTransform = "scaleX(1) translateY(0)";
            points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
    };
    revealPoints(points);
    
};



   /*var revealFirstPoint = function() {
        points[0].style.opacity = 1;
        points[0].style.transform = "scaleX(1) translateY(0)";
        points[0].style.msTransform = "scaleX(1) translateY(0)";
        points[0].style.WebkitTransform = "scaleX(1) translateY(0)";
        points[0].style.transition = 
    };
    
    var revealSecondPoint = function() {
        points[1].style.opacity = 1;
        points[1].style.transform = "scaleX(1) translateY(0)";
        points[1].style.msTransform = "scaleX(1) translateY(0)";
        points[1].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
    
    var revealThirdPoint = function() {
        points[2].style.opacity = 1;
        points[2].style.transform = "scaleX(1) translateY(0)";
        points[2].style.msTransform = "scaleX(1) translateY(0)";
        points[2].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
    
    revealFirstPoint(); 
    revealSecondPoint();
    revealThirdPoint();*/