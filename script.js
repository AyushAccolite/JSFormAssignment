const submitButton = document.querySelector('#clicksubmit');
const getButton = document.querySelector('#clickget');
const contentElement = document.querySelector('#content');
const formElement = document.querySelector('#form');
const firstNameInputElement = document.querySelector('#fname');
const lastNameInputElement  = document.querySelector('#lname');
const ageInputElement = document.querySelector('#age');
const dobInputElement = document.querySelector('#dob');
const rollNumberInputElement = document.querySelector('#rollno');
const emailInputElement = document.querySelector('#email');
const hobbiesInputElement = document.querySelector('#hobbies'); 
const detailRollNoInputElement = document.querySelector('#studentdetailsRollNo');

firstNameInputElement.required = true;
lastNameInputElement.required = true;
ageInputElement.required = true;
dobInputElement.required = true;
rollNumberInputElement.required = true;
emailInputElement.required = true;
hobbiesInputElement.required = true;

//checking if input is getting entered
// firstNameInputElement.addEventListener('change', () => {
// 	console.log('Fname Entered');
// });

function getGenderValue(){
    var m = document.getElementById('male');
    var f = document.getElementById('female');
    if(m.checked){
        return m.value;
    }else if(f.checked){
        return f.value;
    }else{
        return "";
    }
}

function getDeviceValue(){
    var d = document.getElementById('mobile');
    var selectedDevice = d.options[d.selectedIndex];
    return selectedDevice.value;
}

function getStudentDetails(rollNo){
    console.log('get details function called');
    // const studentObj = students.filter(student => {
    //     if(student.rollno === rollNo){
    //         return student;
    //     }
    // })

    const studentObj = students.find(student => student.rollno === rollNo);
    if(studentObj === undefined) console.log('Student record not found');
    else console.log(studentObj);
}

function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
}


//to store entered student information
const students = [];

formElement.addEventListener('submit', function (e) {
    //to avoid page reload and thus save input information
	e.preventDefault();
    //to prevent empty spaces from getting stored
	const firstNameValue = firstNameInputElement.value.trim();
    const lastNameValue  = lastNameInputElement.value.trim();
    const ageValue = ageInputElement.value;
    const dobValue = dobInputElement.value;
    const rollNumberValue = rollNumberInputElement.value;
    const emailValue = validateEmail(emailInputElement) ? emailInputElement.value : '';
    const genderValue = getGenderValue()
    const deviceValue = getDeviceValue();
    //storing in comma separated array as requirec
    const hobbiesValueArray = hobbiesInputElement.value.split(",");

	const studentObject = {
        firstname: firstNameValue,
		lastname: lastNameValue,
        age: ageValue,
        dob: dobValue,
        rollno: rollNumberValue,
        email: emailValue,
		gender: genderValue,
		device: deviceValue,
		hobbies: hobbiesValueArray,
	};

    // console.log(studentObject.gender);
    // console.log(studentObject.device);
    // console.log(studentObject.hobbies);

    //restting the values for next input
	firstNameInputElement.value = '';
    lastNameInputElement.value = '';
    ageInputElement.value = '';
    dobInputElement.value = '';
    rollNumberInputElement.value = ''; 
    emailInputElement.value = '';
    // genderInputElement ='';
    // deviceInputElement ='';
    hobbiesInputElement.value ='';

    //logging to check proper working
	// console.log(studentObject);
    console.log('Student details entered successfully');

    students.push(studentObject);

	console.log(students);
});

getButton.addEventListener('click', function(e){
    e.preventDefault();
    // console.log('get button clicked');
    const rollNo = detailRollNoInputElement.value;
    getStudentDetails(rollNo);
});