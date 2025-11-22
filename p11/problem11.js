var maxArea = function (height) {
   let left = 0;
   let right = height.length - 1;

   let areaMax = 0;
  
      while (left < right) {
         let area = Math.min(height[left], height[right]) * Math.abs(right - left);
         areaMax = Math.max(area, areaMax);
         const areaObj = {
            areaMax: areaMax,
            leftHeight: height[left],
            rightHeight: height[right],
            r: right,
            l: left,
            area: area
         }
         console.log(areaObj);
          if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
      }



   return areaMax;
};
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
maxArea(height);