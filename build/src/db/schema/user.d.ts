export declare const createUserSchema: import("yup/lib/object").OptionalObjectSchema<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}>>;
export declare const loginUserSchema: import("yup/lib/object").OptionalObjectSchema<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}, Record<string, any>, import("yup/lib/object").TypeOfShape<{
    body: import("yup/lib/object").OptionalObjectSchema<{
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }, Record<string, any>, import("yup/lib/object").TypeOfShape<{
        password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
        email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    }>>;
}>>;
