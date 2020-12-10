// Use casual with locale set to Swedish
const casual = require('casual').sv_SE

module.exports = (studentIdArr, epokDataArr) => {
    casual.define('assignments', function(i, studentIdArr, epokDataArr) {
        const assignmentIdArr = ["assignmt01", "assignmt02", "assignmt03", "assignmt04",  "assignmt05", "assignmt06", "assignmt07", "assignmt08", "assignmt09", "assignmt10"];
        const gradeArr = [ "U", "G", "VG"];
        const teacherIdArr = ["teacherA", "teacherB", "teacherC"];

        const assignmentId = assignmentIdArr[i];
        const studentId = studentIdArr[Math.floor(Math.random() * studentIdArr.length)];
        const grade = gradeArr[Math.floor(Math.random() * gradeArr.length)];
        const epokData = epokDataArr[Math.floor(Math.random() * epokDataArr.length)];
        const teacherId = teacherIdArr[Math.floor(Math.random() * teacherIdArr.length)];

        return {
            assignment_id: assignmentId,
            student_id: studentId,
            grade: grade,
            module_code: epokData.mc,
            module_id: epokData.mc, // module_id is legacy, use module_code
            teacher_id: teacherId,
            created_at: casual.date(format = 'YYYY-MM-DD'),
        }
    })

    const data = {
        assignments: [],
    }

    // Create 12 results
    for (let i = 0; i < 12; i++) {
        const assignmentTmp = casual.assignments(i, studentIdArr, epokDataArr)
        data.assignments.push(assignmentTmp)
    }

    return data
}
