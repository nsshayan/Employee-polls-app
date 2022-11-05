import {connect} from "react-redux";
import QuestionContainer from "./QuestionContainer";

const MainDashboard = ({authedUser, questions, users}) => {
    const unanswered = (question) => (!question.optionOne.votes.includes(authedUser.id)
        && !question.optionTwo.votes.includes(authedUser.id));

    const answered = (question) => (question.optionOne.votes.includes(authedUser.id)
        || question.optionTwo.votes.includes(authedUser.id));

    return (
        <div>
            <h1 className="text-3xl font-bold mt-9">Main Dashboard</h1>
            <h2 className="text-2xl font-bold mt-6">New Quetino</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">{questions
                    .filter(unanswered) // TODO
                    .map((question) => (
                    <li key={question.id}><QuestionContainer question={question} author={users[question.author]}/></li>
                ))}
            </ul>
            <h2 className="text-2xl font-bold mt-6">Ans Question</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">{questions
                    .filter(answered)// TODO
                    .map((question) => (
                    <li key={question.id}><QuestionContainer question={question} author={users[question.author]}/></li>
                ))}
            </ul>


        </div>
    );
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),users,
});

export default connect(mapStateToProps)(MainDashboard);
