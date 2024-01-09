export default function (students, city) {
    if (students instanceof Array) {
        return students.filter((student)=> student.location === city);

    }
    return [];
}