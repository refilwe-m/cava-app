import { Field, Form, Formik, FormikProps } from "formik";
import { Status } from "../";

export const TextField = () => {
  return (
    <section>
      <Formik
        initialValues={{ tags: [], question: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="grid gap-2 w-full">
            <Field
              className="drop-shadow-lg rounded-2xl h-24 px-2"
              name="question"
              placeholder="Ask your question"
            />
            <div className="flex justify-between">
              <Status status="private" />
              <button
                className="rounded-xl bg-primary font-bold hover:bg-secondary text-white px-8 py-1 justify-self-end"
                type="submit"
              >
                Ask
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
