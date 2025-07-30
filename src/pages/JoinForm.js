import React from 'react';
import { FormConfiguration } from '../components/Form';
import Form from '../components/Form';


const JoinForm = () => {

    const joinForm = new FormConfiguration();

    joinForm.title = "Join LESA";
    joinForm.emoji = "🤝";
    joinForm.destination = "https://api.lesauoft.com/submit/join";
    joinForm.questions = [{
        title: "What is your given name?",
        databaseKey: "given_name",
        type: "text",
        placeholder: "Enter your name",
        required: true
    }, {
        title: "What is your surname?",
        databaseKey: "surname_name",
        type: "text",
        placeholder: "Enter your surname",
        required: true
    }, {
        title: "Do you have a preferred name?",
        databaseKey: "preferred_name",
        type: "text",
        placeholder: "Enter your preferred name",
        required: false
    }, {
        title: "What is your UofT Email?",
        databaseKey: "uoft_email",
        type: "text",
        placeholder: "Enter your UofT Email",
        required: true
    }, {
        title: "What is your student number?",
        databaseKey: "student_number",
        type: "text",
        placeholder: "Enter your student number",
        required: true
    }, {
        title: "What is your status?",
        databaseKey: "student_status",
        type: "dropdown",
        placeholder: "Select your status",
        options: ["Full-Time Undergraduate", "Part-Time Undergraduate", "Graduate", "Alumni", "Faculty/Staff",  "Other"],
        required: true
    }, {
        title: "What is your faculty?",
        databaseKey: "faculty",
        type: "dropdown",
        placeholder: "Select your faculty",
        options: ["Applied Science & Engineering", "Architecture Landscape & Design", "Arts & Science", "Continuing Studies", "Dentistry", "Education", "Information", "Kinesiology", "Law", "Management", "Medicine", "Music", "Nursing", "Pharmacy", "Public Health", "Social Work", "Scarborough", "Mississauga", "Other"],
        required: true
    }, {
        title: "What is your College/Campus? (St. George for Engineering Students)",
        databaseKey: "college",
        type: "dropdown",
        placeholder: "Select your college/campus",
        options: ["Innis", "New College", "St. Michael's College", "Trinity College", "University College", "Victoria College", "Woodsworth College", "Scarborough Campus", "Mississauga Campus", "St. George", "N/A"],
        required: true
    }, {
        title: "What is your program?",
        databaseKey: "program",
        type: "text",
        placeholder: "Enter your program",
        required: true
    }, {
        title: "What is your year of study?",
        databaseKey: "year_of_study",
        type: "dropdown",
        placeholder: "Select your year of study",
        options: ["First", "Second", "Third", "PEY", "Fourth", "Graduate", "Alumni", "N/A"],
        required: true
    }, {
        title: "What is your nationality? (Canada & LATAM Countries listed first)",
        databaseKey: "country",
        type: "dropdown",
        placeholder: "Select your nationality",
        options: ["Canada", "United States", "Mexico", "Brazil", "Argentina", "Colombia", "Chile", "Peru", "Other"],
        required: true
    }];

    return (
        <div>
            <Form formConfiguration={joinForm} infoState={false} infoError={null} defaultReturn="/join"/>
        </div>
    );
};

export default JoinForm;