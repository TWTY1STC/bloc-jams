var animatePoints = function(){
                
    var points = document.getElementsByClassName('point');
    var revealPoints = function(points){
        for (var point in points){
            console.log(point);
            console.log(points[point]);
            points[point].style.opacity = 1;
            points[point].style.transform = "scaleX(1) translateY(0)";
            points[point].style.msTransform = "scaleX(1) translateY(0)";
            points[point].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
        
    };
    revealPoints(points);
    
};
