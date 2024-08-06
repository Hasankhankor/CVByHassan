import { Link } from "components/documentation";

const QAS = [
  {
    question:
      "Q1. What is a resume builder? Why is a resume builder better than a resume template doc?",
    answer: (
      <>
        <p>
          There are two ways to create a resume today. One option is to use a
          resume template, such as an office/google doc, and customize it
          according to your needs. The other option is to use a resume builder,
          an online tool that allows you to input your information and
          automatically generates a resume for you.
        </p>
        <p>
          Using a resume template requires manual formatting work, like copying
          and pasting text sections and adjusting spacing, which can be
          time-consuming and error-prone. It is easy to run into formatting
          issues, such as using different bullet points or font styles after
          copying and pasting. On the other hand, a resume builder like
          CV by Hassan saves time and prevents formatting mistakes by
          automatically formatting the resume. It also offers the convenience of
          easily changing font types or sizes with a simple click. In summary, a
          resume builder is easier to use compared to a resume template.
        </p>
      </>
    ),
  },
  {
    question:
      "Q2. What uniquely sets CV by Hassan apart from other resume builders and templates?",
    answer: (
      <>
        <p>
          Other than CV by Hassan, there are some great free resume builders out
          there, e.g. <Link href="https://rxresu.me/">Reactive Resume</Link>,{" "}
          <Link href="https://flowcv.com/">FlowCV</Link>. However, CV by Hassan
          stands out with 2 distinctive features:
        </p>{" "}
        <p>
          <span className="font-semibold">
            1. CV by Hassan is designed specifically for the Pakistani job market and
            best practices.
          </span>
          <br />
          Unlike other resume builders that target a global audience and offer
          many customization options, CV by Hassan intentionally only offers
          options that are aligned with Pakistani best practices. For example, it
          excludes the option to add a profile picture to avoid bias and
          discrimination. It offers only the core sections, e.g. profile, work
          experience, education, and skills, while omitting unnecessary sections
          like references. Additionally, CV by Hassan only offers a top down
          single column resume design as opposed to two column design, because
          single column design works best for ATS. <br />{" "}
        </p>
        <p>
          <span className="font-semibold">
            2. CV by Hassan is super privacy focused.
          </span>{" "}
          <br />
          While other resume builders may require email sign up and store user
          data in their databases, CV by Hassan believes that resume data should
          remain private and accessible only on user’s local machine. Therefore,
          CV by Hassan doesn’t require sign up to use the app, and all inputted
          data is stored in user’s browser that only user has access to.
        </p>
      </>
    ),
  },
  {
    question: "Q3. Who created CV by Hassan and why?",
    answer: (
      <p>
        CV by Hassan was created by{" "}
        <Link href="https://github.com/Hasankhankor/CVByHassan">Hassan Tariq</Link>
        as a project to help users in Pakistan create professional resumes easily.
        As a software engineer, I noticed the challenges people face when creating
        resumes and wanted to build a tool that simplifies the process while
        adhering to local best practices. My goal is to help anyone in Pakistan
        create a modern professional resume that follows best practices and
        enables them to apply for jobs with confidence.
      </p>
    ),
  },
  {
    question: "Q4. How can I support CV by Hassan?",
    answer: (
      <>
        <p>
          The best way to support CV by Hassan is to share your thoughts and
          feedback with us to help further improve it. You can send us an email
          at{" "}
          <Link href="mailto:hello@cvbyhassan.com">hello@cvbyhassan.com</Link>{" "}
          or{" "}
          <Link href="https://github.com/Hasankhankor/CVByHassan/issues/new">
            open an issue
          </Link>{" "}
          at our Github repository. Whether you like it or not, we would love to
          hear from you.
        </p>
        <p>
          Another great way to support CV by Hassan is by spreading the word.
          Share it with your friends, on social media platforms, or with your
          school’s career center. Our goal is to reach more people who struggle
          with creating their resume, and your word-of-mouth support would be
          greatly appreciated. If you use Github, you can also show your support
          by{" "}
          <Link href="https://github.com/Hasankhankor/CVByHassan">
            giving the project a star
          </Link>{" "}
          to help increase its popularity and reach.
        </p>
      </>
    ),
  },
];

export const QuestionsAndAnswers = () => {
  return (
    <section className="mx-auto max-w-3xl divide-y divide-gray-300 lg:mt-4 lg:px-2">
      <h2 className="text-center text-3xl font-bold">Questions & Answers</h2>
      <div className="mt-6 divide-y divide-gray-300">
        {QAS.map(({ question, answer }) => (
          <div key={question} className="py-6">
            <h3 className="font-semibold leading-7">{question}</h3>
            <div className="mt-3 grid gap-2 leading-7 text-gray-600">
              {answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
