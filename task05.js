function getArea(side1,side2,side3) {
    var semiperimeter;
    var s = semiperimeter;
    s = 1/2 * (side1 + side2 + side3);
    var area = s * (s - side1) * (s - side2) * (s - side3);
    console.log(area / s);
};

getArea(3,4,5)

