export declare const createTaskSchema: import("yup/lib/object").OptionalObjectSchema<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        completionTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
        notificationTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        completionTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
        notificationTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
    }>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        completionTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
        notificationTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        description: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        completionTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
        notificationTime: import("yup/lib/date").RequiredDateSchema<Date | undefined, Record<string, any>>;
    }>>;
}>>;
export declare const taskIdSchema: import("yup/lib/object").OptionalObjectSchema<{
    params: import("yup/lib/object").OptionalObjectSchema<{
        taskId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        taskId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    params: import("yup/lib/object").OptionalObjectSchema<{
        taskId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        taskId: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}>>;
