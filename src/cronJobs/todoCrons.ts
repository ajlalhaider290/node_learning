// src/cron-jobs.ts
import cron from 'node-cron';
import { sendDailyTaskSummary, deleteExpiredOrCompletedTodos, generateTaskReports } from './cron-handlers';

// Schedule daily task summary at 8 AM every day
cron.schedule('0 8 * * *', sendDailyTaskSummary);

// Schedule deletion of expired or completed tasks every hour
cron.schedule('0 * * * *', deleteExpiredOrCompletedTodos);

// Schedule generation of task reports every day at midnight
cron.schedule('0 0 * * *', generateTaskReports);
