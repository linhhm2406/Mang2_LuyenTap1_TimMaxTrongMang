let array = [];
let input_number = 0;
let i = 1;
array[0] = parseInt(prompt('Nhap vao so nguyen thu 1'));

while (i < 10) {
    input_number = parseInt(prompt('Nhap vao so nguyen ' + (i + 1)));
    if (array.indexOf(input_number) === -1) {
        array[i] = input_number;
        i++;
    } else {
        input_number = parseInt(prompt('So da co trong mang. Vui long nhap so khac voi ' + array));
    }
}

let max = array[0];
for (let j = 1; j < array.length; j++) {
    if(array[j]>max){
        max=array[j];
    }
}

document.write('Mang vua nhap la '+array +'. So lon nhat trong mang la '+max);