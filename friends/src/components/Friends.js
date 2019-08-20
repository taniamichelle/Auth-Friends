import React from 'react';
// import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// class Friends extends React.Component {
//     state = {
//         friends: []
//     };

//     componentDidMount() {
//         this.getData();
//     };

//     getData = () => {
//         axiosWithAuth()
//             .get('http://localhost:5000/api/friends')
//             .then(res => console.log(res.data)

//             )
//     }
//      formatData = () => {
//          const formattedData = [];
//          console.log(this.state.friends)
//          this.state.friends.map()
// }

// export default Friends;

// create form
const FriendForm = ({ errors, touched, values }) => {
    return (
        <div className='friends-form'>
            <Form>
                <Field
                    className='friend-name'
                    type='text'
                    placeholder='name'
                    component={TextField}
                    margin='normal'
                    variant='outlined'
                />
                {touched.name && errors.name && <p className='name'>{errors.name}</p>}
                <Field
                    className='friend-age'
                    type='text'
                    placeholder='age'
                    component={TextField}
                    margin='normal'
                    variant='outlined'
                />
                {touched.age && errors.age && <p className='age'>{errors.age}</p>}
                <Field
                    className='friend-email'
                    type='email'
                    placeholder='email'
                    component={TextField}
                    margin='normal'
                    variant='outlined'
                />
                {touched.email && errors.email && <p className='email'>{errors.email}</p>}
                <button data-testid='submit' type='submit'>Submit</button>
                {/* <button className={s.button} type='button' disabled={!props.dirty} onClick={props.handleReset}>Reset</button> */}
            </Form>
        </div>
    );
}

// get status from props and add a useEffect
// const FormComponent = ({ status }) => {
//     const [friendState, setFriendState] = useState([]);
//     useEffect(() => {
//         // status sometimes comes through as undefined
//         console.log('prevents infinite loop?');
//         if (status) {
//             setFriendState(friendState => [...friendState, status])
//         }
//     }, [status]);
// }

// create Formik form
const CopyFriendForm = withFormik({
    mapPropsToValues({ name, age, email }) {
        // handle change
        return {
            name: name || '',
            age: age || '',
            email: email || ''
        };
    },

    // Yup validation
    validationSchema: Yup.object().shape({
        name: Yup.string().required('Please Enter a Name'),
        age: Yup.string().required('Please Enter an Age'),
        email: Yup.string().required('Email is Required').max(13, "Too long").min(8, "Too short")
    }),

    // handle submit
    handleSubmit(values, { setStatus }) {
        console.log('Form submitted', values);
        // Make post request
        axiosWithAuth
            .get('http://localhost:5000/api/friends')
            .then(res => console.log(res))
            .then(res => {
                setStatus(res.data)
            })
            .catch(err => console.log(err.response))
    }
})(FriendForm);

export default CopyFriendForm;
