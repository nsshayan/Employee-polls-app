import {connect} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {handleAddPoll} from "../actions/pollQueries";


const CreateNewPoll = ({dispatch}) => {
    const navigate = useNavigate();
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");

    const handleOption1Change = (e) => {
        const value = e.target.value;
        setOption1(value);
    };

    const handleOption2Change = (e) => {
        const value = e.target.value;
        setOption2(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: dispatch adding a poll;
        dispatch(handleAddPoll(option1, option2));

        navigate("/");
    };

    return (

        <div className="mt-3">
            <h1 className="text-3xl font-bold mt-9">Create a new Poll</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="option1" className="block text-sm font-medium text-slate-700">Option 1</label>
                <input value={option1} onChange={handleOption1Change} type="text" id="option1"
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                />
                <br/>
                <label htmlFor="option2">Option 2</label>
                <input value={option2} onChange={handleOption2Change} type="text" id="option2"
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"
                />
                <br/>
                <button type="submit"
                className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">Submit</button>

            </form>
        </div>
    );
}


export default connect()(CreateNewPoll);