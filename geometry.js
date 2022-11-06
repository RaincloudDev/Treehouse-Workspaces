// 1. Attach this file geometry.js to the index.html file

// 2. Create a function that calculates the area of a rectangle.
//    The function should accept the width and height as arguments
//    and return the area of that rectangle.
//    The area of a rectangle is the width * height

function getAreaRect(width, height){
  const rectangleArea = (width * height);
  return rectangleArea;
}

// 3. Create a function that calculates the volume of a rectangular prism.
//    The function should accept the width, height and length as arguments
//    and return the volume of that rectangular prism.
//    The volume of a rectangular prism is the width * height * length

 function getVolumeRectPrism(width, height, length){
  const rectPrismVolume = (width * height * length);
   return rectPrismVolume;
 }


// 4. Create a function that calculates the area of a circle.
//    The function should accept the radius of the circle as an argument
//    and return the area of that circle.
//    The area of a circle is the value of π * radius^2

  function getAreaCircle(radius){
    const areaOfCircle = ( 3.141519 * (radius * radius));
    return areaOfCircle;
  }

// 5. Create a function that calculates the volume of a sphere.
//    The function should accept the radius of the sphere as an argument
//    and return the volume.
//    The volume of a circle is: 4/3 *  π * radius^3

  function getVolumeSphere(radius){    
    const sphereVolume = ((4/3) * 3.141519 * (radius * radius * radius));
    return sphereVolume;
  }


// 6. Use console.log to test each function and output to the JavaScript console
//    Here are the values to test and the expected results
//    -- Area of rectangle that is 5 wide and 22 tall: 110
//    -- Volume of a rectangular prism that is 4.5 x 12.5 x 17.4: 978.7499999999999
//    -- Area of a circle that with a radius of 7.2: 162.8601631620949
//    -- Volume of a spehere with a radius of 7.2: 1563.4575663561109


console.log(getAreaRect(5,22));
console.log(getVolumeRectPrism(4.5, 12.5, 17.4));
console.log(getAreaCircle(7.2));
console.log(getVolumeSphere(7.2));

