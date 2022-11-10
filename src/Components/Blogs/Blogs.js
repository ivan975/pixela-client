import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100 h-screen">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">Difference between SQL and NoSQL.</h3>
                        <p className="mt-1 dark:text-gray-400">Provide High-Performance Capabilities
                            SQL is a powerful tool as it is highly compatible with all types of RDBMS like MySQL, SQL Server, Oracle Database, MS Access, etc.
                            Data Consistency: SQL adheres to ACID properties with a strict schema that ensures better data consistency. NoSQL has higher scalability than other database management systems
                            Schema Free: You do not need to define the schema of the database before storing the data onto the system.
                            NoSQL allows the distribution of data on more than just one device.
                            With NoSQL Database, you do not require specialized or complex hardware or storage solutions.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is JWT, and how does it work?</h3>
                        <p className="mt-1 dark:text-gray-400">JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is the difference between javascript and NodeJS?</h3>
                        <p className="mt-1 dark:text-gray-400">JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">How does NodeJS handle multiple requests at the same time?</h3>
                        <p className="mt-1 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;