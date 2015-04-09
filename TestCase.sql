/* ToDoProjects*/
--INSERT INTO ToDoProjects (Name,Description,ProjectLeader)
--VALUES('EnglishLessons','English language course for one semester','alexey@test.com');
 
--INSERT INTO ToDoProjects (Name,Description,ProjectLeader)
--VALUES('YoToDo','distributed todo list','andrey@test.com');
 
--INSERT INTO ToDoProjects (Name,Description,ProjectLeader)
--VALUES('Dress','To seew a dress','alexey@test.com');
 
/*ToDoTasks*/
/*English*/
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(5, 'sergey@test.com', 'low', 'write a dictation', 'The student have to write a dictation', '04.05.15 12:00', '04.08.15 13:00', 'start');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(5, 'semyon@test.com', 'middle', 'Translation 15,000 words', 'The student have to translate a text into 15000 words', '04.05.2015  12:00:00', '04.13.2015  13:00:00', 'assigned');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(5, 'evgeny@test.com', 'middle', 'Translation 25,000 words', 'The student have to translate a text into 25000 words', '04.05.2015  12:00:00', '04.17.2015  13:00:00', 'assigned');
 
/*YouToDo*/
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(6, 'denis@test.com', 'middle', 'Documents', 'Write a weekly report', '04.05.2015  13:00:00', '04.06.2015  13:00:00', 'done');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(6, 'anastasia@test.com', 'high', 'WebClient', 'Prepare Web Client', '04.01.2015  12:00:00', '04.08.2015  12:00:00', 'start');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(6, 'alexandr@test.com', 'high', 'User Roles', 'Add User Roles', '04.01.2015  12:00:00', '04.02.2015  15:00:00', 'done');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(6, 'igor@test.com', 'high', 'Make Tests', 'Create Test Cases', '04.04.2015  16:00:00', '04.10.2015  16:00:00', 'start');
 
/*Dress*/
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(7, 'anna@test.com', 'high', 'sketch', 'Make a sketch of the dress', '03.23.2015  16:00:00', '04.04.2015  13:00:00', 'done');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(7, 'evgeny@test.com', 'middle', 'pattern', 'Pattern on the fabric on the sketch', '04.04.2015  16:00:00', '04.09.2015  13:00:00', 'start');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(7, 'elena@test.com', 'middle', 'sewing', 'Sewing all the details', '04.09.2015  16:00:00', '04.12.2015  13:00:00', 'assigned');
 
INSERT INTO ToDoTasks(Project, AssignedTo, TaskPriority, TaskText, TaskDescription, TaskDateStart, TaskDateDeadline, TaskStatus)
VALUES(7, 'igor@test.com', 'low', 'buttons', 'sew on buttons', '04.12.2015  16:00:00', '04.13.2015  13:00:00', 'decline');