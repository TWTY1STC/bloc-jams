var forEach = function(callback){
    var len = this.length;
    for (var i = 0; i < len; i++){
        callback[i].style.opacity = 1;
        callback[i].style.transform = "scaleX(1) translateY(0)";
        callback[i].style.msTransform = "scaleX(1) translateY(0)";
        callback[i].style.WebkitTransform = "scaleX(1) translateY(0)";    
        }
};

/*points.forEach(function(){}){
    var points = [], 
    counter, 
    element;
    
    for (counter = 0; counter < points.length; counter++){
        element = array[counter];
        points.push(element);
    }
    return points;
};

function revealPoints(item, index){
    item[index].style.opacity = 1;
    item[index].style.transform = "scaleX(1) translateY(0)";
    item[index].style.msTransform = "scaleX(1) translateY(0)";
    item[index].style.WebkitTransform = "scaleX(1) translateY(0)";
}
vars animatePoints = forEach(points){};

var animatePoints = function(points){
    var revealPoint = function(points){
        for (var point in points){
            points[point].style.opacity = 1;
            points[point].style.transform = "scaleX(1) translateY(0)";
            points[point].style.msTransform = "scaleX(1) translateY(0)";
            points[point].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
        
    };
    revealPoint(points);
    
Use a loop to go through all elements in the points array.
Execute a callback for each element.*/