const database = {
    student: {0:{ name: "milad", nationalId: 1616 }},
    add: function (data, type, num) {
        database[type] = num[data]
        localStorage.setItem(type, num)
    },
    remove: function (id, num, type) {
            localStorage.removeItem(num)
    },
    info: function (id, type, num) {
        if (type[num].nationalId === id)
        localStorage.getItem(num)
    },
}
// user.add({ name: "milad", nationalId: 123 }, "manager", '0')
// user.add({ name: "zand", nationalId: 321 }, "manager", '1')
// user.add({ name: "zandkkk", nationalId: 21 }, "manager", '2')
// user.add({ name: "kkk", nationalId: 16 }, "manager", '3')
// user.info(123, 'manager', '0')
// console.log(user);

const student = {
    set studentSet(value) {
        let input = value.split(',')
        this.fullName = input[0]
        this.birthday = input[1]
        this.age = input[2]
        this.address = input[3]
        this.nationalId = input[4]
        this.gender = input[5]
        this.phoneNumber = input[6]
        this.grade = input[7]
        this.studyYear = input[7]
    },
    __proto__: database

}

student.studentSet = "milad zk,1375,25,irarn tehran,1234,male,0912,12,6"

const teacher = {
    set teacherSet(value) {
        let input = value.split(',')
        this.fullName = input[0]
        this.birthday = input[1]
        this.age = input[2]
        this.address = input[3]
        this.nationalId = input[4]
        this.gender = input[5]
        this.phoneNumber = input[6]
        this.grade = input[7]
        this.studyYear = input[7]
    },
    __proto__: database

}
teacher.teacherSet = "parsa ahmadi,1376,25,irarn tehran,1234,male,0912,12,6"

const manager = {
    set managerSet(value) {
        let input = value.split(',')
        this.fullName = input[0]
        this.birthday = input[1]
        this.age = input[2]
        this.address = input[3]
        this.nationalId = input[4]
        this.gender = input[5]
        this.phoneNumber = input[6]
        this.grade = input[7]
        this.studyYear = input[7]
    },
    __proto__: database

}
manager.managerSet = "parsa ahmadi,1360,41,irarn tehran,1234,male,0912,12,20"




console.log(student);
console.log(database);