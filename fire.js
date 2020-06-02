
const inputTask = document.querySelector('#taskInput');
const taskUl = document.querySelector('#taskContainer');

connectDB();
const database = firebase.database();
const taskRef = database.ref('task');
taskRef.on('value', paintTask);
deleteTask();
update();

function connectDB(){

  var firebaseConfig = {
    apiKey: "AIzaSyDI_E5H23Gz4T3YL2vQVc9Qjg7cbIIf-4E",
    authDomain: "todolist2-e8916.firebaseapp.com",
    databaseURL: "https://todolist2-e8916.firebaseio.com",
    projectId: "todolist2-e8916",
    storageBucket: "todolist2-e8916.appspot.com",
    messagingSenderId: "135950247653",
    appId: "1:135950247653:web:3ff34cc1e1af6f227ed60c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

function addTask(){
 const name = inputTask.value;
   taskRef.push({
      name: name,
      IsComplete: false
    })
inputTask.value = '';
}

function deleteTask(){
  const name = taskInput.value;
  
  taskRef.deleted({
    name: name,
    IsComplete: false
  })
  taskInput.value ='';
}

function update(){
  taskRef.update({
    "-M87TjRPo-2RLrmWb-ZL" : {
    name : "nuevo valor 797",
    isCopleted: false
    }
  }) 
}

function paintTask(data){
const result = data.val();
let taskli = ""
for(key in result){
   const task = result[key];
   taskli += `<li>${task.name}</li>`;
}
taskUl.innerHTML = taskli;
}