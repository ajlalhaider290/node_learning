import Todo from '../models/todos';
import Report from '../models/report';
import Email from '../models/emails';

// Send daily task summaries
export const sendDailyTaskSummary = async () => {
  console.log('Sending daily task summary...');

  // Fetch todos to include in the summary
  const todos = await Todo.find({});

  // Create a summary string
  const summary = todos.map(todo => `Title: ${todo.title}, Completed: ${todo.isCompleted}`).join('\n');

  // Create a new email entry
  const email = new Email({
    to: 'dummy@example.com',
    subject: 'Daily Task Summary',
    body: summary,
  });

  // Save the email entry to the DB
  await email.save();

  console.log('Daily summary email entry saved in DB');
};

// Delete expired or completed todos
export const deleteExpiredOrCompletedTodos = async () => {
  console.log('Deleting completed todos...');
  await Todo.deleteMany({ isCompleted: true });
  console.log('Completed todos deleted');
};
  
  // Generate reports or statistics about tasks
export const generateTaskReports = async () => {
    console.log('Generating task reports...');
    const totalTasks = await Todo.countDocuments({});
    const completedTasks = await Todo.countDocuments({ isCompleted: true });
    const pendingTasks = totalTasks - completedTasks;
    
    const report = new Report({
      totalTasks,
      completedTasks,
      pendingTasks
    });
    
    await report.save();
    console.log('Task report generated and saved in DB');
  };
  