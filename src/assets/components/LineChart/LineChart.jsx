import { LineChart as LChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const LineChart = () => {
    const subjectMarksData = [
  { id: 1, subject: "Math", marks: 88, studentId: "S101", cgpa: 3.8 },
  { id: 2, subject: "English", marks: 76, studentId: "S101", cgpa: 3.5 },
  { id: 3, subject: "Physics", marks: 92, studentId: "S101", cgpa: 4.0 },
  { id: 4, subject: "Chemistry", marks: 85, studentId: "S101", cgpa: 3.7 },
  { id: 5, subject: "Biology", marks: 78, studentId: "S101", cgpa: 3.4 },
  { id: 6, subject: "Computer", marks: 95, studentId: "S101", cgpa: 4.0 },
  { id: 7, subject: "History", marks: 67, studentId: "S101", cgpa: 3.0 }
];

    return (
        <div >
            <h2 className="text-2xl mb-6">Line Chart</h2>
            <div className="bg-white rounded-3xl px-10 py-16">
                <LChart width={500} height={300} data={subjectMarksData}>
                <Line type="monotone" dataKey="marks" stroke="purple"></Line>
                <XAxis dataKey="subject" stroke="purple" />
                <YAxis stroke="purple" />
                <Tooltip />
                <CartesianGrid strokeDasharray="3 3" />
            </LChart>
            </div>
        </div>
    );
};

export default LineChart;