import { Field, Form, Formik, FormikProps } from "formik";
import { Status } from "../";
import Hashtags from "../hashtags/hashtags";

export const TextField = () => {
  return (
    <section className="w-full">
      <Formik
        initialValues={{ tags: [], question: "", by: "" }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props: FormikProps<any>) => (
          <Form className="flex flex-col gap-2 w-full">
            <Field
              className="drop-shadow-lg border rounded-2xl grow w-full h-24 px-2"
              name="question"
              placeholder="Ask your question"
            />
            <Hashtags />
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
