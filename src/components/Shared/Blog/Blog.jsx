/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-3/4 mx-auto'>
            <div className='bg-slate-100 py-6 px-6 my-5'>
                <h1 className='text-xl font-bold'>What is the Difference Between a Controlled and Uncontrolled Component in React?</h1>
                <p>Unlike the uncontrolled component, the input form element in the controlled component is handled by the component rather than the DOM.</p>
            </div>
            <div className='bg-slate-100 py-6 px-6 my-5'>
                <h1 className='text-xl font-bold'>How to validate React props using PropTypes?</h1>
                <p>Compare the prop to undefined. If the prop is equal to undefined, it was not passed to the component. Otherwise, it was passed.</p>
            </div>
            <div className='bg-slate-100 py-6 px-6 my-5'>
                <h1 className='text-xl font-bold'>Difference between Node js and express js?</h1>
                <p>Node.js is a run-time environment for building server-side event-driven i/o application using javascript.
                Express.js is a framework based on node.js for building web-application using principles and approaches of node.js</p>
            </div>
            <div className='bg-slate-100 py-6 px-6 my-5'>
                <h1 className='text-xl font-bold'>Why Custom Hook?</h1>
                <p>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.</p>
            </div>
        </div>
    );
};

export default Blog;