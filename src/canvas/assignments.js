// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = (studentIdArrEx) => {
    casual.define('assignments', function(i, studentIdArrEx) {
        const assignmentIdArr = ["assignmt01", "assignmt02", "assignmt03", "assignmt04",  "assignmt05", "assignmt06", "assignmt07", "assignmt08", "assignmt09", "assignmt10"];
        //const studentIdArr = ["ingand-4", "tompet-8", "amwi-7"];
        const studentIdArr = studentIdArrEx;
        const gradeArr = [ "U", "G", "VG"];
        const moduleIdArr = ["module01", "module02", "module03", "module04",  "module05", "module06", "module07", "module08", "module09", "module10"];
        const teacherIdArr = ["teacherA", "teacherB", "teacherC"];

        const assignmentId = assignmentIdArr[i];
        const studentId = studentIdArr[Math.floor(Math.random() * studentIdArr.length)];
        const grade = gradeArr[Math.floor(Math.random() * gradeArr.length)];
        const moduleId = moduleIdArr[i];
        const teacherId = teacherIdArr[Math.floor(Math.random() * teacherIdArr.length)];

        return {
            assignment_id: assignmentId,
            student_id: studentId,
            grade: grade,
            module_id: moduleId,
            teacher_id: teacherId,
            created_at: casual.date(format = 'YYYY-MM-DD'),
        }
    })

    const data = {
        assignments: [],
    }

    // Create 10 results
    for (let i = 0; i < 10; i++) {
        data.assignments.push(casual.assignments(i, studentIdArrEx))
    }

    return data
}
