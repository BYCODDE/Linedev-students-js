// პირველი დავალება ალგორითმები:

// შექმენით ფუნქცია სადაც პარამეტრები გვექნება მასივი და სტინგი.
// მასივში უნდა იყოს სტუდენტების სახელები, და სტინგში მხოლოდ ერთი სტუდენტის. ფუნქციამ უნდა შეამოწმოს მასივში არის თუ არა ეს სტუდენტი და დააბრუნოს: სტუდენტი სწავლობს, თუ არ არის უნდა დააბრუნოს ასეთი სტუდენტი ვერ მოიძებნა

const myFunc = function (arr, student) {
  if (arr.includes(student)) {
    console.log(student + " არის სტუდენტი");
  } else {
    console.log(student + " არ არის სტუდენტი");
  }
};

myFunc(["Nika", "Luka", "Gio", "Lasha"], "Lasha");
