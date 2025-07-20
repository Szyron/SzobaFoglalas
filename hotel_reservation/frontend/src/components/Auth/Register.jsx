import React from 'react'

function Register() {
    return (
        <div className="hero bg-blue-200 min-h-screen">
            <div className="hero flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Confirm Email</label>
                            <input type="email" className="input w-full" placeholder="Confirm Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input w-full" placeholder="Password" />
                            <label className="label">Confirm Password</label>
                            <input type="password" className="input w-full" placeholder="Confirm Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-ghost bg-blue-400 text-white w-full">Register</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register