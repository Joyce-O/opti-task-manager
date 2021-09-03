import {object, string, date} from 'yup';

export const createTaskSchema = object({
  body: object({
    title: string().required('Title is required'),
    description: string().required('Description is required'),
    completionTime: date().required('Completion time is missing'),
    notificationTime: date().required('Reminder notification time is missing'),
  }),
});

export const taskIdSchema = object({
  params: object({
    taskId: string().required('taskId is required'),
  }),
});
