function getArea(side1,side2,side3) {
    var semiperimeter;
    var s = semiperimeter;
    s = 0.5 * (side1 + side2 + side3);
    var area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area;
   
};

getArea(1,2,2);
