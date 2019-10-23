console.log("==================== ข้อ1 ==========================")
// จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9}
var arr01=[0,1,2,3,4,5,6,7,8,9,10]

var result01 = arr01.filter(item => item % 2 > 0);
console.log('arr01', arr01)
console.log('result01=', result01)


console.log("==================== ข้อ2 ==========================")
//จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากน้อยไปมาก
var arr02=[0,9,1,8,2,7,3,6,4,5]
for ( var i = 0; i<arr02.length; i++ ) {
    var left = arr02[i]
    var right = arr02[i+1]
    if(left > right) {
        var temp = arr02[i]
        arr02[i] = arr02[i+1]
        arr02[i+1] = temp

        for (var j=i; j>=0; j--){
            var rightB = arr02[j]
            var leftB = arr02[j-1]

            if (rightB<leftB) {
                var tempB = arr02[j-1]
                arr02[j-1] = arr02[j]
                arr02[j]= tempB
            }
        }
    }
}
console.log(arr02)

console.log("==================== ข้อ3 ==========================")
//จงสร้าง array ให้ได้แบบนี้ {0,1,2,3,4,5,6,7,8,9,10}, แล้วก็เอาเลขคู่ออกทั้งหมดจนเป็นแบบนี้ {1,3,5,7,9} แต่รอบนี้ทำโดยการใช้ for loop หรือ while
var arr03=[0,1,2,3,4,5,6,7,8,9,10]
var arrOdd = []
console.log('arr=', arr03)

for ( var i = 0; i< arr03.length; i++ ) {
    if ( i % 2 > 0) {
        arrOdd.push(i)
    }
}
console.log(arrOdd)


console.log("==================== ข้อ4 ==========================")
//จงสร้าง map ที่เก็บชื่อคนเป็นkey และอายุเป็น value {{Adam:28},{Sophie:22},{Aorum,13}} แล้วลองเรียกkeyของแต่ละelement
var personMap = new Map ([["Adam",25], ["Sophie",22], ["Aorum",13]])
console.log("personMap=", personMap)
console.log (personMap.get("Adam"));
console.log (personMap.get("Sophie"));
console.log (personMap.get("Aorum"));


console.log("==================== ข้อ5 ==========================")
//จงสร้าง array {0,9,1,8,2,7,3,6,4,5} แล้ว sort จากน้อยไปมาก แต่ห้ามใช้ function sort()
var arr05=[0,9,1,8,2,7,3,6,4,5]
for ( var z = arr05.length-1; z>=0 ; z-- ) {
    var leftC = arr05[z-1]
    var rightC = arr05[z]
    if(leftC < rightC) {
        var tempC = arr05[z]
        arr05[z] = arr05[z-1]
        arr05[z-1] = tempC

        for (var x=z; x< arr05.length; x++){
            var rightD = arr05[x+1]
            var leftD = arr05[x]

            if (rightD>leftD) {
                var tempD = arr05[x+1]
                arr05[x+1] = arr05[x]
                arr05[x]= tempD
            }
        }
    }
}
console.log(arr05)
