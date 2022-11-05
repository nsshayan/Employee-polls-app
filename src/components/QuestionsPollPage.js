import {connect} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import './QuestionContainer.css';
import {handleAddResponse} from "../actions/pollQueries";
import "./QuestionsPollPage.css";


const QuestionsPollPage = ({dispatch, authedUser ,question, author}) => {
    const navigate = useNavigate();
    const hasVotedForOptionOne = question.optionOne.votes.includes(authedUser.id);
    const hasVotedForOptionTwo = question.optionTwo.votes.includes(authedUser.id);
    const hasVoted = hasVotedForOptionOne || hasVotedForOptionTwo;

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddResponse(question.id, "optionOne"));
        navigate("/");
    }

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddResponse(question.id, "optionTwo"));
        navigate("/");
    }

    const Percentage = (option, question) => {
        const numberVotesTotal = question.optionOne.votes.length + question.optionTwo.votes.length;
        switch (option) {
            case "optionOne":
                return question.optionOne.votes.length / numberVotesTotal * 100 + " %";
            case "optionTwo":
                return question.optionTwo.votes.length / numberVotesTotal * 100 + " %";
            default:
                return "";
        }
    };


    return (
        <div className="grid grid-cols-2 gap-4 mt-4">
            <h1 className="text-3xl font-bold mt-9">{author.id} Poll</h1>
            <img src={author.avatarURL} alt="Profie-image" className="h-24 w-24"/>

            <h2 className="text-2xl font-bold mt-6">Which one would you Choose?</h2>

            <div className={hasVotedForOptionOne ? "choice" : ""}>
                <p>{question.optionOne.text}</p>
                <button onClick={handleOptionOne} disabled={hasVoted}>Click</button>
               {
                    hasVoted
                    ? <p>Votes: {question.optionOne.votes.length} ({Percentage("optionOne", question)})</p>
                    : null
                }

            </div>
            <div className={hasVotedForOptionTwo ? "choice" : ""}>
                <p>{question.optionTwo.text}</p>
                <button onClick={handleOptionTwo} disabled={hasVoted}>Click</button>
                {
                    hasVoted
                        ? <p>Votes: {question.optionTwo.votes.length} ({Percentage("optionTwo", question)})</p>
                        : null
                }
            </div>
        </div>
    );
}

/*const initialData = (users, questions, questionId) => {
    try {
        const question = Object.values(questions).find((question) => question.id === questionId);
        const author = question.author;
        const user = Object.values(users).find((user) => user.id === author);
        return {question, user};
    } catch (e) {
        throw new Error(`404. not found.\n ${e}`);
    }
};*/

const mapStateToProps = ({authedUser, users,questions}) => {
    try {
        const question = Object.values(questions).find((question) => question.id === useParams().id);
        const author = Object.values(users).find((user) => user.id === question.author);
        return {authedUser, question, author};
    } catch (e) {
        throw new Error(`404. not found.\n ${e}`);
    }
};

export default connect(mapStateToProps)(QuestionsPollPage);